import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
    title: 'Our Services | Bangalore Chauffeur',
    description: 'Rent a professional driver in Bangalore for hatchbacks, sedans, SUVs, luxury cars, corporate fleets, and commercial vehicles.',
};

const services = [
    {
        title: 'Hatchback Driver',
        description: 'Perfect for daily city commutes, school drop-offs, and running errands. Our trained drivers handle compact vehicles with ease, navigating Bangalore\'s busy streets efficiently.',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
    },
    {
        title: 'SUV Driver',
        description: 'Ideal for family trips, weekend getaways, and outstation drives. Experienced drivers who handle larger vehicles confidently on highways and rough terrain.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    },
    {
        title: 'Sedan Driver',
        description: 'Comfortable and professional rides for business meetings, airport transfers, and leisure travel. Smooth, reliable service for your sedan.',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80',
    },
    {
        title: 'Luxury Car Driver',
        description: 'Premium chauffeur experience for VIP travel, weddings, and special occasions. Drivers trained in etiquette and luxury vehicle handling.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
    },
    {
        title: 'Corporate Driver',
        description: 'Dedicated drivers for your corporate fleet. Regular schedules, professional conduct, and reliable service for business transportation needs.',
        image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80',
    },
    {
        title: 'Commercial Vehicle Driver',
        description: 'Skilled drivers for commercial transport vehicles including Innovas, Tempo Travellers, and more. Licensed for commercial driving.',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <h1>Our Services</h1>
                <p>Professional driver services for every type of vehicle and occasion.</p>
            </section>

            {/* Rent A Driver Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.rentSection}>
                        <div className={styles.rentText}>
                            <span className="section-label">Professional Service</span>
                            <h2 className="section-title">Rent A Driver in Bangalore</h2>
                            <p className={styles.rentPara}>
                                Looking for a reliable and affordable way to rent a driver in Bangalore? We specialize in providing professional, background-verified drivers for individuals, families, and corporate clients who prefer to travel in the comfort of their own vehicle.
                            </p>
                            <p className={styles.rentPara}>
                                Whether you need a driver for a few hours, a full day, or on a monthly basis, our flexible hiring options are designed to suit your schedule and budget. From daily office commutes and school drop-offs to airport transfers and long-distance outstation trips.
                            </p>
                            <p className={styles.rentPara}>
                                Our drivers are trained in defensive driving, customer service, and route optimization. They handle all types of vehicles — hatchbacks, sedans, SUVs, and luxury cars — with confidence and care.
                            </p>
                            <div className={styles.rentFeatures}>
                                <div className={styles.rentFeature}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <span>Background-verified drivers</span>
                                </div>
                                <div className={styles.rentFeature}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <span>24/7 customer support</span>
                                </div>
                                <div className={styles.rentFeature}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <span>Hourly, daily & monthly plans</span>
                                </div>
                                <div className={styles.rentFeature}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <span>Transparent, no hidden charges</span>
                                </div>
                            </div>
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
                                Book a Driver Now
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                        <div className={styles.rentImage}>
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80"
                                alt="Professional chauffeur service"
                                className={styles.rentImg}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Categories */}
            <section className="section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                        <span className="section-label">Fleet Categories</span>
                        <h2 className="section-title">Find a Driver for Your Vehicle</h2>
                        <p className="section-subtitle">
                            Select your vehicle type below to hire an experienced, professional driver today.
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

            {/* Booking CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Need a Driver Right Away?</h2>
                        <p className={styles.ctaDesc}>Contact us now and we'll assign a professional driver to you within minutes.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-accent">Book Online</Link>
                            <a href="tel:+919164544555" className="btn btn-white">Call +91 9164544555</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
