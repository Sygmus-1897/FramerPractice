import { motion } from 'framer-motion';
import style from './styles/Card.module.scss';

const OpenedCardVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const Card = ({title, subtitle, setSelected, index}) => {

    return (
        <motion.div layoutId={`l-${index+1}`} layout className={style.card} onClick={()=>setSelected(index)} >
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
        </motion.div>
    );
}

const OpenedCard = ({ item, setSelected, index}) => {

    return <motion.div  className={style.backdrop} variants={OpenedCardVariant} initial="hidden" animate="visible" exit="hidden">
        <motion.div layoutId={`l-${index+1}`} className={style.open_card}>
            <h4>{item.title}</h4>
            <h6>{item.subtitle}</h6>
            <button onClick={()=>setSelected(null)}>Close</button>
        </motion.div>
    </motion.div>
}

export { OpenedCard };
export default Card;