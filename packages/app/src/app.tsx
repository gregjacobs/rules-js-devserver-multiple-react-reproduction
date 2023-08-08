import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorMessage } from '@my-org/error-message'; // 1st party package

const App: React.FC = () => {
    // trigger multiple copies of react issue
    useState(3);

    return <>
        <div><ErrorMessage message="Something went wrong!" /></div>
    </>;
}

// -----------------

const reactRootEl = document.createElement('div');
document.body.appendChild(reactRootEl);

const root = createRoot(reactRootEl);
root.render(<App />);