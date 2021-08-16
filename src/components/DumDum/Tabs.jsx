import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import style from './styles/Tabs.module.scss';
import Tab from './Tab';

const Tabs = ({ activePage, setActivePage }) => {

    return (
        <div className={style.tabList}>
            <AnimateSharedLayout>
                <Tab text="A" isSelected={activePage==="A"} setSel={setActivePage} />
                <Tab text="B" isSelected={activePage==="B"} setSel={setActivePage} />
            </AnimateSharedLayout>
        </div>
    )
}

export default Tabs;
