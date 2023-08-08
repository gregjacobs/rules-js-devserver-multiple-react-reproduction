import { createRoot } from 'react-dom/client';
import { Button } from '@my-org/button'; // 1st party package

const App: React.FC = () => {
    return <Button>If you see me, you have fixed the issue!</Button>;
}

// -----------------

const reactRootEl = document.createElement('div');
document.body.appendChild(reactRootEl);

const root = createRoot(reactRootEl);
root.render(<App />);