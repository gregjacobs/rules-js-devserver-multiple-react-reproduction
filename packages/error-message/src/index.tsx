import { FC, useState } from 'react';
import { ButtonWithDescription } from 'button-with-description';  // 1st-party package

/**
 * Simple component which displays a message and a button
 */
export const ErrorMessage: FC<ErrorMessageProps> = props => {
    // trigger multiple copies of react issue
    useState(2);

    return (
        <div style={{color: 'red'}}>
            <ButtonWithDescription description={props.message} />
        </div>
    );
};

interface ErrorMessageProps {
    message: string;
}