import { useState, FC, PropsWithChildren } from 'react';

/**
 * Very complex button component
 */
export const Button: FC<ButtonProps> = props => {
    // trigger multiple copies of react issue
    useState(1);

    return <button>{props.children}</button>;
};

export type ButtonProps = PropsWithChildren<{}>;