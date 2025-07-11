import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './assets/fonts/fonts.css';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
