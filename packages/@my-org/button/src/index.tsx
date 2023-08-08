import { useState, FC, PropsWithChildren } from 'react';

/**
 * Clearly a very complex button component.
 */
export const Button: FC<ButtonProps> = props => {
    // Use a hook to trigger the "multiple copies of react" issue
    useState(42);

    return <button>{props.children}</button>;
};

export type ButtonProps = PropsWithChildren<{}>;