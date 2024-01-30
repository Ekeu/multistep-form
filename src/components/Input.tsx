import { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';

import defaultTheme from '../theme/default';
import classNames from 'classnames';

interface IInputPattern {
  pattern: {
    value: RegExp;
    message: string;
  };
}

export interface IInputProps
  extends Omit<
    ComponentProps<'input'>,
    'color' | 'pattern' | 'required' | 'name'
  > {
  name: string;
  pattern?: IInputPattern;
  required?: boolean | string | { value: boolean; message: string };
  color?: 'grey' | 'failure';
}

const Input: FC<IInputProps> = ({
  name,
  pattern,
  color = 'grey',
  required = false,
  ...props
}) => {
  const { register } = useFormContext();

  const theme = defaultTheme.configs.input;

  const { ref, ...rest } = register(name, {
    required,
    ...(pattern && { ...pattern }),
  });

  return (
    <input
      className={classNames(theme.base, theme.colors[color])}
      {...props}
      {...rest}
      ref={ref}
    />
  );
};

export default Input;
