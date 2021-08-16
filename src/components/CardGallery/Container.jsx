import { useState } from 'react';
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import Card, { OpenedCard }  from './Card';
import { cardItems } from "./Data";
import style from './styles/Container.module.scss';

const Container = () => {

    const [selected, setSelected] = useState(null);

    return (
        <>
            <AnimateSharedLayout type="crossfade">
                <div className={style.container} layout>
                    {
                        cardItems.map((item, index) => (
                            <Card {...item} index={index} setSelected={setSelected} />
                        ))
                    }
                </div>

            <AnimatePresence>
                {
                    selected!==null && <OpenedCard item={cardItems[selected]} index={selected} setSelected={setSelected} />
                }
            </AnimatePresence>
            
            </AnimateSharedLayout>
        </>
    );
}

export default Container;