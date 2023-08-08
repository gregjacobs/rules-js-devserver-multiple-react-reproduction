import { FC, useState } from 'react';
import { Button } from 'button';  // 1st-party package

/**
 * Simple component which displays a message and a button
 */
export const ButtonWithDescription: FC<ButtonWithDescriptionProps> = props => {
    // trigger multiple copies of react issue
    useState(2);

    return (
        <div>
            {props.description}: <Button>My Button</Button>
        </div>
    );
};

interface ButtonWithDescriptionProps {
    description: string;
}