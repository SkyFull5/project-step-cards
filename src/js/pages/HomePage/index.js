import { Header, Main } from '../../components/index.js';

const root = document.querySelector('#root');
export const HomePage = async () => {
    root.innerHTML = Header();
    root.append(Main());
};
