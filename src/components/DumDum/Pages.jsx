import { AnimatePresence } from "framer-motion";
import Page from "./Page";
import style from './styles/Pages.module.scss';

const Pages = (props) => {
    return (
        <div className={style.page_container}>
            <AnimatePresence>
                { 
                    props.activePage === 'A'
                        ? <Page {...props} key={props.activePage} />
                        : <Page {...props} key={`${props.activePage}-1`} />
                }
            </AnimatePresence>
        </div>
    );
}

export default Pages;