import { AnimatePresence, motion } from "framer-motion";
import style from './styles/Page.module.scss';

const pageVariant = {
    hiddenLeft: { x: "-50vw", opacity: 0, transition: { duration: 2 } },
    hiddenRight: { x: "50vw", opacity: 0, transition: { duration: 2 } },
    visible: { x: 0, transition: { duration: 2 }, opacity: 1 },
}

const Page = ({ activePage, setActivePage }) => {

    return (
        <motion.div 
            className={style.page} 
            onClick={()=>setActivePage(activePage === "A" ? "B" : "A")}
            variants={pageVariant}
            initial={activePage === "A" ? "hiddenLeft" : "hiddenRight"}
            animate="visible"
            exit={activePage === "A" ? "hiddenLeft" : "hiddenRight"}
        >
            <div className={style.content}>
                {`This is Page ${activePage}`}
            </div>
        </motion.div>
    );
}

export default Page;