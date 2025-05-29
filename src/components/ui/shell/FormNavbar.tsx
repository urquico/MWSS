import { Anchor, Breadcrumbs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface Items {
  title: string;
  href: string | number;
  disabled?: boolean;
}

interface FormNavbarProps {
  items: Items[];
}

function FormNavbar({ items }: FormNavbarProps) {
  const navigate = useNavigate();
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <Anchor
          key={index}
          className={`font-inter ${item.disabled ? 'pointer-events-none text-[#25578f]' : 'text-black hover:text-[#25578f]'}`}
          onClick={() =>
            typeof item.href === 'string'
              ? navigate(item.href)
              : navigate(item.href as number)
          }
        >
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}

export default FormNavbar;
