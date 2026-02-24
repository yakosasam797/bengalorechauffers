import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
    title: 'Our Services | Bengaluru Chauffeurs — Drivers for Every Car',
    description: 'Hire a professional driver in Bangalore for hatchbacks, sedans, SUVs, luxury cars, corporate fleets, and commercial vehicles. Starting at ₹149/hr.',
};

const services = [
    { title: 'Hatchback Driver', description: 'Daily office runs, school pickups, errands around the city. Our drivers know Bangalore inside out.', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80' },
    { title: 'SUV Driver', description: 'Family road trips, weekend getaways, outstation drives. Highway-trained drivers who keep your family safe.', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80' },
    { title: 'Sedan Driver', description: 'Airport pickups, client meetings, daily commutes. Professional and punctual — always.', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80' },
    { title: 'Luxury Car Driver', description: 'Your BMW, Mercedes, or Audi deserves a trained chauffeur. White-glove service for premium vehicles.', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80' },
    { title: 'Corporate Fleet Driver', description: 'Dedicated, uniformed drivers for your company cars. We manage 5 to 50+ vehicles.', image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80' },
    { title: 'Commercial Vehicle', description: 'Trained operators for Innovas, Tempo Travellers, trucks, and cargo vehicles.', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80' },
];

const highlights = [
    'Police-verified, background-checked drivers',
    '24/7 availability — book anytime',
    'Hourly, daily & monthly plans',
    'No hidden charges, ever',
];

export default function ServicesPage() {
    return (
        <>
            <section className="page-hero">
                <h1>Drivers for Every Car. Every Need.</h1>
                <p>Hatchback to luxury, city to highway — we've got the right driver.</p>
            </section>

            {/* Why Us */}
            <section className="section">
                <div className="container">
                    <div className={styles.rentGrid}>
                        <div>
                            <span className="section-label">Why Hire From Us</span>
                            <h2 className="section-title">You Own the Car. We Bring the Driver.</h2>
                            <p className={styles.para}>Why deal with unreliable part-time drivers when you can get a trained professional in minutes? Our drivers are background-checked, courteous, and know Bangalore roads like the back of their hand.</p>
                            <p className={styles.para}>Book for an hour, a full day, or get a dedicated monthly driver. Flexible plans that fit your life — not the other way around.</p>
                            <div className={styles.highlights}>
                                {highlights.map((h, i) => (
                                    <span key={i} className={styles.highlightItem}>✓ {h}</span>
                                ))}
                            </div>
                            <Link href="/contact" className="btn btn-brand" style={{ marginTop: 'var(--space-lg)' }}>Book a Driver Now</Link>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80" alt="Professional chauffeur" className={styles.rentImg} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="section-alt" id="fleet">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                        <span className="section-label">Vehicle Categories</span>
                        <h2 className="section-title">Pick Your Vehicle Type</h2>
                        <p className="section-subtitle">Every driver is trained specifically for your vehicle type. No generic assignments.</p>
                    </div>
                    <div className="grid-3">
                        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <h2 className={styles.ctaTitle}>Need a Driver Right Now?</h2>
                        <p className={styles.ctaDesc}>Call us or WhatsApp — we'll assign a driver within minutes. No app needed.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-brand">Book Online</Link>
                            <a href="https://wa.me/919164544555" target="_blank" rel="noopener noreferrer" className="btn btn-white">WhatsApp Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
