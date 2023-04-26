import { ChangeEventHandler } from 'react';

const Input = ({
    value,
    onChange,
    'data-test': dataTest = 'input',
}: {
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    'data-test'?: string;
}) => {
    return (
        <input
            data-testid={dataTest}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Name"
        />
    );
};
export default Input;
