import styles from './button.module.scss';
import Link from 'next/link';

const Button = ({ label, path }) => {
    return (
        <Link href={path}>
            <a className={styles.Button}>{label}</a>
        </Link>
    );
};

export default Button;
