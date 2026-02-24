import BookingForm from '../components/BookingForm';
import styles from './contact.module.css';

export const metadata = {
    title: 'Contact Us | Bengaluru Chauffeurs — Book a Driver Now',
    description: 'Book a professional driver in Bangalore. Call +91 9164544555, WhatsApp us, or fill out our quick form.',
};

const contactInfo = [
    { label: 'Call Us', value: '+91 9164544555', href: 'tel:+919164544555' },
    { label: 'Email', value: 'book@bangalorechauffeur.com', href: 'mailto:book@bangalorechauffeur.com' },
    { label: 'WhatsApp', value: 'Chat on WhatsApp — fastest response', href: 'https://wa.me/919164544555' },
    { label: 'Office', value: 'Bangalore — 560068, Karnataka, India' },
];

export default function ContactPage() {
    return (
        <>
            <section className="page-hero">
                <h1>Book a Driver in 30 Seconds</h1>
                <p>Fill the form, call us, or WhatsApp — we'll assign a driver immediately.</p>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div>
                            <span className="section-label">Get In Touch</span>
                            <h2 className="section-title">Talk to Us Directly</h2>
                            <p className={styles.desc}>Need a driver in an hour? Tomorrow morning? Or on a monthly plan? Just tell us — we'll sort it out fast.</p>

                            <div className={styles.info}>
                                {contactInfo.map((item, i) => (
                                    <div key={i} className={styles.infoRow}>
                                        <span className={styles.infoLabel}>{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined} className={styles.infoValue}>{item.value}</a>
                                        ) : (
                                            <span className={styles.infoValue}>{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.formWrap}>
                            <BookingForm light />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-alt">
                <div className="container">
                    <div className={styles.seo}>
                        <span className="section-label">Driver Near You</span>
                        <h2 className="section-title">Looking for an Acting Driver Near You?</h2>
                        <p>Stop searching. Bengaluru Chauffeurs has 500+ verified drivers across all major areas — Whitefield, Electronic City, Koramangala, HSR Layout, Indiranagar, and beyond.</p>
                        <p>Whether you need someone for a quick errand, a full-day drive, or a permanent monthly driver — we've got you. Call, WhatsApp, or book online. We respond within minutes.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
