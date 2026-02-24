import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, image, icon }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrap}>
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
                    <div className={styles.overlay}>
                        <div className={styles.iconBadge}>
                            {icon}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.desc}>{description}</p>}
                <Link href="/contact" className={styles.cta}>
                    Hire Driver
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
