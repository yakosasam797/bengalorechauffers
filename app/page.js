import Link from 'next/link';
import BookingForm from './components/BookingForm';
import ServiceCard from './components/ServiceCard';
import FeatureCard from './components/FeatureCard';
import FAQAccordion from './components/FAQAccordion';
import StatsCounter from './components/StatsCounter';
import styles from './page.module.css';

const services = [
    {
        title: 'Hatchback',
        description: 'Ideal for city commutes and daily errands.',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
    },
    {
        title: 'SUV',
        description: 'Perfect for family trips and outstation drives.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    },
    {
        title: 'Sedan',
        description: 'Comfortable rides for business and leisure.',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80',
    },
    {
        title: 'Luxury Cars',
        description: 'Premium chauffeur experience for VIP travel.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    },
    {
        title: 'Corporate',
        description: 'Dedicated drivers for your corporate fleet.',
        image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80',
    },
    {
        title: 'Commercial',
        description: 'Reliable drivers for commercial vehicles.',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    },
];

const features = [
    {
        title: 'Officially Licensed',
        description: 'All our drivers hold valid commercial driving licenses and certifications.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Safe & Verified',
        description: 'Thorough background checks and identity verification for every driver.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
    {
        title: 'Transparent Pricing',
        description: 'No hidden charges. Clear, upfront pricing for all services.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
    },
    {
        title: '24/7 Available',
        description: 'Round-the-clock service. Book a driver anytime, day or night.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

export default function Home() {
    return (
        <>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.heroText}>
                        <span className={styles.heroBadge}>Trusted by 50,000+ customers</span>
                        <h1 className={styles.heroTitle}>
                            Your Trusted Partner for <span className={styles.highlight}>Driver on Hire</span> Services in Bangalore
                        </h1>
                        <p className={styles.heroDesc}>
                            Professional, background-verified drivers for personal and commercial vehicles.
                            Safe, reliable, and hassle-free travel — anytime, anywhere.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link href="/contact" className="btn btn-accent">
                                Book a Driver Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="tel:+919164544555" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                    <div className={styles.heroForm}>
                        <BookingForm compact />
                    </div>
                </div>
            </section>

            {/* ── TRUST BADGES ── */}
            <section className={styles.trustBar}>
                <div className="container">
                    <div className={styles.trustGrid}>
                        {[
                            { icon: '🏛️', text: 'Officially Licensed' },
                            { icon: '👔', text: 'Friendly & Professional' },
                            { icon: '✅', text: 'Safe & Verified' },
                            { icon: '💰', text: 'Affordable Pricing' },
                            { icon: '📅', text: 'Flexible Hiring' },
                        ].map((badge, i) => (
                            <div key={i} className={styles.trustItem}>
                                <span className={styles.trustIcon}>{badge.icon}</span>
                                <span className={styles.trustText}>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">Your Trusted Driver Partner in Bangalore</h2>
                        <p className="section-subtitle">
                            We provide experienced, background-verified drivers for daily commutes, outstation trips, corporate needs, and special occasions.
                        </p>
                    </div>
                    <div className="grid-4">
                        {features.map((feature, i) => (
                            <FeatureCard key={i} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR SERVICES ── */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Our Fleet</span>
                        <h2 className="section-title">Professional Drivers for Every Vehicle</h2>
                        <p className="section-subtitle">
                            Whether it's a compact hatchback or a luxury sedan, our trained chauffeurs handle every vehicle with expertise and care.
                        </p>
                    </div>
                    <div className="grid-3">
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                {...service}
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 5v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                                    </svg>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="section-dark">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label">Our Impact</span>
                        <h2 className="section-title" style={{ color: '#fff' }}>Numbers That Speak Trust</h2>
                    </div>
                    <StatsCounter />
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Find answers to common questions about our driver hiring services.
                        </p>
                    </div>
                    <FAQAccordion />
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Experience Hassle-Free Travel?</h2>
                        <p className={styles.ctaDesc}>
                            Book a professional, background-verified driver in just a few clicks.
                            Available 24/7 across Bangalore.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-accent">
                                Book a Driver
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="tel:+919164544555" className="btn btn-white">
                                Call +91 9164544555
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
