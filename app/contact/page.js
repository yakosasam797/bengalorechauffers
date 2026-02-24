import BookingForm from '../components/BookingForm';
import styles from './contact.module.css';

export const metadata = {
    title: 'Contact Us | Bangalore Chauffeur',
    description: 'Contact Bangalore Chauffeur for professional driver on hire services. Call +91 9164544555 or email book@bangalorechauffeur.com.',
};

export default function ContactPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <h1>Contact Us</h1>
                <p>Get in touch with us for professional driver services in Bangalore.</p>
            </section>

            {/* Contact Info + Form */}
            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Left: Info */}
                        <div className={styles.contactInfo}>
                            <span className="section-label">Get In Touch</span>
                            <h2 className="section-title">Ready to Hire a Driver?</h2>
                            <p className={styles.contactDesc}>
                                Whether you need an acting driver near you for a few hours or a dedicated chauffeur on a monthly basis, we're here to help. Reach out through any of the channels below.
                            </p>

                            <div className={styles.infoCards}>
                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.infoLabel}>Phone</h4>
                                        <a href="tel:+919164544555" className={styles.infoValue}>+91 9164544555</a>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.infoLabel}>Email</h4>
                                        <a href="mailto:book@bangalorechauffeur.com" className={styles.infoValue}>book@bangalorechauffeur.com</a>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.infoLabel}>Address</h4>
                                        <span className={styles.infoValue}>Bangalore - 560068, Karnataka, India</span>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <div className={styles.infoIcon} style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.infoLabel}>WhatsApp</h4>
                                        <a href="https://wa.me/919164544555" target="_blank" rel="noopener noreferrer" className={styles.infoValue}>Chat with us</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className={styles.formWrap}>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content */}
            <section className="section-alt">
                <div className="container">
                    <div className={styles.seoContent}>
                        <span className="section-label">Acting Driver Near Me</span>
                        <h2 className="section-title">Need an Acting Driver Near You?</h2>
                        <p>
                            Looking for a trustworthy and professional acting driver near you? At Bangalore Chauffeur, we offer reliable driver-on-demand services tailored to fit your needs — whether it's for a few hours, a full day, or on a long-term basis. Our dedicated team is available 24/7 to ensure that you always have access to safe and convenient travel.
                        </p>
                        <p>
                            We've built a strong network of experienced, background-verified drivers who are well-trained in local routes, road safety, and customer service. Whether you're traveling within the city or planning an outstation trip, our drivers are committed to making your journey smooth, stress-free, and on time.
                        </p>
                        <p>
                            Booking is easy — you can call, email, or book online through our seamless reservation system. We're available around the clock, ready to dispatch a skilled driver to your location whenever you need one. No more worrying about traffic, parking, or vehicle handling — we'll take care of it all.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
