import './assets/Reset.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/highlight.js/styles/vs2015.css';
import 'react-toastify/dist/ReactToastify.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);