import { AnimateSharedLayout, motion } from 'framer-motion';
import style from './styles/Tab.module.scss';

const Tab = (props) => {
    return (
        <button 
            className={style.tab}
            onClick={()=>props.setSel(props.text)}
        >
            {`Button ${props.text}`}
            {
                props.isSelected && 
                <motion.div 
                    layoutId="underline" 
                    className={style.selected} 
                    initial={false}
                    animate={{}}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                />
            }
        </button>
    );
}

export default Tab;