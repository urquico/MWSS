import {
  RadioProps as MantineRadioProps,
  RadioCardProps,
  RadioGroupProps,
  RadioIndicatorProps,
} from '@mantine/core';

export interface RadioProps extends MantineRadioProps {
  label?: string;
  id: string;
}

export interface RadioComponentProps extends React.FC<RadioProps> {
  Group: React.FC<RadioGroupProps>;
  Card: React.FC<RadioCardProps>;
  Indicator: React.FC<RadioIndicatorProps>;
}
