import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.wrapper2}`}>
            <span className="something">CSS Module</span> Test!
        </div>
    )
}
export default CSSModule;