import styles from './style.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Employee List</h1>
            </div>
        </header>
    )
}