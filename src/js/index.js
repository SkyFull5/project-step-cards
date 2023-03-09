import { Header, Main } from './components/index.js';
const root = document.querySelector('#root');
export const test = () => {
    root.innerHTML = Header();
    root.innerHTML += Main();
};
