import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
    title: 'About Us | Bengaluru Chauffeurs — Bangalore\'s #1 Driver Service',
    description: 'Learn about Bengaluru Chauffeurs — 500+ verified drivers, 50,000+ completed trips, serving Bangalore since day one.',
};

const services = [
    { title: 'Hatchback', description: 'City commutes & daily errands.', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80' },
    { title: 'SUV', description: 'Family trips & outstation drives.', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80' },
    { title: 'Sedan', description: 'Business rides & airport pickups.', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80' },
    { title: 'Luxury Cars', description: 'VIP chauffeur service.', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80' },
    { title: 'Corporate', description: 'Dedicated fleet drivers.', image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80' },
    { title: 'Commercial', description: 'Trucks, tempos & more.', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80' },
];

export default function AboutPage() {
    return (
        <>
            <section className="page-hero">
                <h1>We're Bengaluru Chauffeurs</h1>
                <p>Bangalore's most trusted service for hiring professional drivers.</p>
            </section>

            {/* Intro */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <div>
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">500+ Drivers. 50,000+ Trips. Zero Compromises.</h2>
                            <p className={styles.para}>We started with one goal — make it dead simple to find a trained, reliable driver for your car in Bangalore. No middlemen. No shady operators. Just skilled, background-verified professionals who show up on time.</p>
                            <p className={styles.para}>Whether you need someone for your daily office commute, a weekend family trip, or to manage your entire corporate fleet, we've got the right driver for you. Every single time.</p>
                            <Link href="/contact" className="btn btn-brand" style={{ marginTop: 'var(--space-md)' }}>Book a Driver</Link>
                        </div>
                        <div className={styles.introImage}>
                            <img src="https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80" alt="Professional chauffeur" className={styles.img} />
                            <div className={styles.badge}>
                                <span className={styles.badgeNum}>10+</span>
                                <span className={styles.badgeText}>Years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label">Why We Exist</span>
                        <h2 className="section-title">Our Promise to You</h2>
                    </div>
                    <div className={styles.vmGrid}>
                        <div className={styles.vmCard}>
                            <h3 className={styles.vmTitle}>Our Vision</h3>
                            <ul className={styles.vmList}>
                                <li>Make hiring a professional driver as easy as ordering food — fast, reliable, and hassle-free.</li>
                                <li>Build Bangalore's largest network of verified, trained chauffeurs that anyone can trust.</li>
                            </ul>
                        </div>
                        <div className={styles.vmCard}>
                            <h3 className={styles.vmTitle}>Our Mission</h3>
                            <ul className={styles.vmList}>
                                <li>Every driver goes through police verification, driving tests, and customer service training.</li>
                                <li>Transparent pricing, instant booking, and a support team that actually picks up the phone.</li>
                                <li>Become the name people think of first when they need a driver in Bangalore.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label">Our Promise</span>
                        <h2 className="section-title">Why 50,000+ Customers Trust Us</h2>
                    </div>
                    <div className="grid-4">
                        <FeatureCard number="01" title="Safety First" description="Every driver is police-verified and trained. No exceptions." />
                        <FeatureCard number="02" title="City & Highway" description="Expert in Bangalore roads AND long-distance highway driving." />
                        <FeatureCard number="03" title="No Hidden Fees" description="What we quote is what you pay. Zero surprises on the bill." />
                        <FeatureCard number="04" title="Always Available" description="5 AM airport run or midnight pickup — we're here 24/7." />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label">Our Fleet</span>
                        <h2 className="section-title">Drivers for Every Vehicle Type</h2>
                    </div>
                    <div className="grid-3">
                        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
                    </div>
                </div>
            </section>
        </>
    );
}
