
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './index.scss';

const container:HTMLElement | null = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)