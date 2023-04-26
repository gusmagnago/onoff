import { ReactNode } from 'react';
import './ShoppingCartHeader.scss';

const ShoppingCartHeader = ({
    title,
    children,
    'data-test': dataTest = 'cart-header',
}: {
    title: string;
    children: ReactNode;
    'data-test'?: string;
}) => {
    return (
        <div className="wrapper" data-testid={dataTest}>
            <h1>{title}</h1>
            <div className="child-wrapper">{children}</div>
        </div>
    );
};

export default ShoppingCartHeader;
