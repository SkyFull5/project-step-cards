import { Header, Main } from '../../components/index.js';

const root = document.querySelector('#root');
export const HomePage = () => {
    root.innerHTML = Header();
    root.innerHTML += Main();
};
