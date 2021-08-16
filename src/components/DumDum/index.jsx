import { useState } from 'react';
import Tabs from './Tabs';
import Pages from './Pages';
import style from './styles/DumDum.module.scss';

const DumDum = () => {

    return <Content />
}

const Content = () => {
    const [activePage, setActivePage] = useState('A')

    return (
        <div className={style.dumdum_container}>
            <Tabs activePage={activePage} setActivePage={setActivePage} />
            <Pages activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
}

export default DumDum;