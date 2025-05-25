// import { PasswordInput as MantinePasswordInput } from '@mantine/core';
// import React from 'react';

// interface PasswordInputProps extends React.ComponentPropsWithoutRef<typeof MantinePasswordInput> {
//   withStrength?: boolean;
// }

// /**
//  * PasswordInput Component
//  * A customizable password input field with strength meter built on Mantine's PasswordInput.
//  * Includes support for error states, custom styling, and password strength indicators.
//  *
//  * @component
//  * @param {PasswordInputProps} props - Props to customize the password input field
//  * @returns {JSX.Element} A styled password input component with optional strength meter
//  */
// const PasswordInputLogin = React.forwardRef<HTMLInputElement, PasswordInputProps>(
//   ({ withStrength = false, value, onChange, ...props }, ref) => {
//     return (
//       <MantinePasswordInput
//         ref={ref}
//         value={value}
//         onChange={onChange}
//         size='lg'
//         {...(withStrength ? { 
//           withStrength: true,
//           strengthMeterLabel: "Password strength:",
//           strengthLabels: [
//             'Too weak',
//             'Weak',
//             'Good',
//             'Strong',
//             'Very strong',
//           ],
//           getStrength: (password: string) => {
//             // Custom strength calculation that matches Zod rules
//             let strength = 0;
//             if (password.length > 0) strength += 1;
//             if (password.length >= 8) strength += 1;
//             if (/[A-Z]/.test(password)) strength += 1;
//             if (/[0-9]/.test(password)) strength += 1;
//             if (/[\W_]/.test(password)) strength += 1;
//             return Math.min(strength, 4); // Cap at 4 (Very strong)
//           }
//         } : {})}
//         classNames={{
//           root: 'font-open-sans',
//           input: 'bg-white rounded-md border',
//           label: 'font-open-sans font-normal pb-1 text-gray-900',
//         }}
//         className='w-full transition duration-200'
//         {...props}
//       />
//     );
//   }
// );

// PasswordInputLogin.displayName = 'PasswordInputLogin';
// export default PasswordInputLogin;

import { PasswordInput as MantinePasswordInput, Progress, Text, Popover, Box } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

interface PasswordInputProps extends React.ComponentPropsWithoutRef<typeof MantinePasswordInput> {
  withStrength?: boolean;
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[\W_]/, label: 'Includes special character' },
  { re: /.{8,}/, label: 'Minimum 8 characters' },
];

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

function getStrength(password: string) {
  let multiplier = password.length > 7 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

/**
 * Enhanced PasswordInput Component with visual strength meter
 */
const PasswordInputLogin = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ withStrength = false, value, onChange, ...props }, ref) => {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [currentValue, setCurrentValue] = useState(typeof value === 'string' ? value : '');

    // Sync with external value changes
    useEffect(() => {
      setCurrentValue(typeof value === 'string' ? value : '');
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const checks = requirements.map((requirement, index) => (
      <PasswordRequirement 
        key={index} 
        label={requirement.label} 
        meets={requirement.re.test(currentValue)} 
      />
    ));

    const strength = getStrength(currentValue);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    return (
      <Popover 
        opened={popoverOpened && withStrength} 
        position="bottom" 
        width="target" 
        transitionProps={{ transition: 'pop' }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <MantinePasswordInput
              ref={ref}
              value={value}
              onChange={handleChange}
              size='lg'
              classNames={{
                root: 'font-open-sans',
                input: 'bg-white rounded-md border',
                label: 'font-open-sans font-normal pb-1 text-gray-900',
              }}
              className='w-full transition duration-200'
              {...props}
            />
          </div>
        </Popover.Target>
        {withStrength && (
          <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb="xs" />
            <PasswordRequirement label="Minimum 8 characters" meets={currentValue.length > 7} />
            {checks}
          </Popover.Dropdown>
        )}
      </Popover>
    );
  }
);

PasswordInputLogin.displayName = 'PasswordInputLogin';
export default PasswordInputLogin;