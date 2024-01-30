import { FieldError } from 'react-hook-form';
import Input, { IInputProps } from '../Input';
import { FC } from 'react';

interface IInputSectionProps extends IInputProps {
  error?: FieldError;
}

const InputSection: FC<IInputSectionProps> = ({
  name,
  type,
  error,
  pattern,
  children,
  required = true,
  placeholder,
}) => {
  return (
    <div className='flex flex-col'>
      {children}
      <Input
        name={name}
        type={type}
        pattern={pattern}
        required={required}
        placeholder={error?.message || placeholder}
        color={error ? 'failure' : 'grey'}
      />
    </div>
  );
};

export default InputSection;
