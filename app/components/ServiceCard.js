import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, image }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrap}>
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.desc}>{description}</p>}
                <Link href="/contact" className={styles.cta}>
                    Hire Driver →
                </Link>
            </div>
        </div>
    );
}
