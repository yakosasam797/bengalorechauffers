import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
    title: 'About Us | Bangalore Chauffeur',
    description: 'Learn about Bangalore Chauffeur — your trusted partner for professional, background-verified driver on hire services in Bangalore.',
};

const services = [
    { title: 'Hatchback', description: 'City commutes & daily errands.', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80' },
    { title: 'SUV', description: 'Family & outstation drives.', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80' },
    { title: 'Sedan', description: 'Business & leisure rides.', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80' },
    { title: 'Luxury Cars', description: 'VIP chauffeur service.', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80' },
    { title: 'Corporate', description: 'Dedicated corporate fleet.', image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80' },
    { title: 'Commercial', description: 'Commercial vehicle drivers.', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80' },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <h1>About Bangalore Chauffeur</h1>
                <p>Your trusted partner for professional driver on hire services since day one.</p>
            </section>

            {/* Company Intro */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introText}>
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">Professional Drivers for Safe & Reliable Travel</h2>
                            <p className={styles.introPara}>
                                Bangalore Chauffeur specializes in providing professional, background-verified drivers for personal and commercial vehicles, ensuring safe, reliable, and hassle-free travel across the city and outstation.
                            </p>
                            <p className={styles.introPara}>
                                We specialize in providing skilled and background-verified drivers for individuals and businesses in Bangalore, ensuring safe, comfortable, and hassle-free travel at competitive prices.
                            </p>
                            <p className={styles.introPara}>
                                With a seamless booking process and dedicated customer support, we make it easy to hire professional drivers for daily commutes, special occasions, outstation trips, and corporate needs.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>
                                Book a Driver
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                        <div className={styles.introImage}>
                            <div className={styles.imageCard}>
                                <img
                                    src="https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80"
                                    alt="Professional chauffeur team"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                                />
                            </div>
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeNumber}>10+</span>
                                <span className={styles.badgeText}>Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Our Purpose</span>
                        <h2 className="section-title">Vision & Mission</h2>
                    </div>
                    <div className={styles.vmGrid}>
                        <div className={styles.vmCard}>
                            <div className={styles.vmIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <h3 className={styles.vmTitle}>Our Vision</h3>
                            <ul className={styles.vmList}>
                                <li>Redefine driver hiring services in Bangalore with a seamless, safe, and reliable experience for individuals and businesses.</li>
                                <li>Envision a future where finding a skilled and background-verified driver is effortless, giving customers peace of mind and the freedom to travel without stress.</li>
                            </ul>
                        </div>
                        <div className={styles.vmCard}>
                            <div className={styles.vmIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                            <h3 className={styles.vmTitle}>Our Mission</h3>
                            <ul className={styles.vmList}>
                                <li>Offer highly skilled, background-verified drivers for personal and commercial vehicles.</li>
                                <li>Ensure a seamless and hassle-free booking experience with exceptional customer service.</li>
                                <li>Be the most trusted chauffeur service, known for professionalism, integrity, and excellence.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Our Promise</span>
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="section-subtitle">We aim to be the most trusted chauffeur service, known for professionalism, integrity, and excellence.</p>
                    </div>
                    <div className="grid-4">
                        <FeatureCard
                            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>}
                            title="Safety First"
                            description="Safety is our top priority with verified and trained drivers."
                        />
                        <FeatureCard
                            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" /></svg>}
                            title="City & Highway"
                            description="Well-trained in both city navigation and highway driving."
                        />
                        <FeatureCard
                            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>}
                            title="Transparent Pricing"
                            description="No hidden charges — clear, upfront pricing always."
                        />
                        <FeatureCard
                            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
                            title="Emergency Ready"
                            description="Emergency driver services available round-the-clock."
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Our Fleet</span>
                        <h2 className="section-title">Our Services</h2>
                    </div>
                    <div className="grid-3">
                        {services.map((service, i) => (
                            <ServiceCard key={i} {...service} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
