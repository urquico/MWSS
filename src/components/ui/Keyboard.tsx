import IconChevronDown from '@/components/icons/IconChevronDown';
import { ActionIcon } from '@mantine/core';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

interface KeyboardComponentProps {
  onChange: (input: string) => void;
  onClick: () => void;
  onBackspace?: () => void; // Add onBackspace prop
}

function KeyboardComponent({
  onChange,
  onClick,
  onBackspace,
}: KeyboardComponentProps) {
  const handleKeyPress = (button: string) => {
    if (button === '{bksp}') {
      onBackspace?.(); // Call onBackspace when backspace key is pressed
    }
  };

  return (
    <main className='absolute bottom-0 w-full bg-white'>
      <Keyboard
        onChange={onChange}
        onKeyPress={handleKeyPress} // Add onKeyPress handler
        layoutName='default'
        layoutCandidatesPageSize={100}
        physicalKeyboardHighlightPreventDefault={false}
      />
      <section className='flex justify-start p-4'>
        <ActionIcon
          variant='transparent'
          color='black'
          size='xl'
          onClick={onClick}
        >
          <IconChevronDown height={24} width={24} />
        </ActionIcon>
      </section>
    </main>
  );
}

export default KeyboardComponent;
