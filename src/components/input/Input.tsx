import { ChangeEventHandler } from 'react';

const Input = ({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input type='text' value={value} onChange={onChange} placeholder='Name' />
  );
};
export default Input;
