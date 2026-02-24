'use client';
import { useRef } from 'react';
import Link from 'next/link';
import BookingForm from './components/BookingForm';
import FeatureCard from './components/FeatureCard';
import FAQAccordion from './components/FAQAccordion';
import StatsCounter from './components/StatsCounter';
import ScrollReveal from './components/ScrollReveal';
import styles from './page.module.css';

/* ── Bento Grid Vehicle Data (no Corporate Fleet) ── */
const bentoVehicles = [
    {
        title: 'Hatchback Driver',
        desc: 'Daily commute, school pickups, errands around Bangalore.',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
        price: 'From ₹149/hr',
        size: 'large',
    },
    {
        title: 'Sedan Driver',
        desc: 'Airport pickups, client meetings, long-distance drives.',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
        price: 'From ₹149/hr',
        size: 'small',
    },
    {
        title: 'SUV Driver',
        desc: 'Family trips, weekend getaways, outstation highways.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
        price: 'From ₹199/hr',
        size: 'small',
    },
    {
        title: 'Luxury Chauffeur',
        desc: 'BMW, Mercedes, Audi — handled with premium care.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        price: 'From ₹299/hr',
        size: 'small',
    },
    {
        title: 'Outstation Trips',
        desc: 'Coorg, Ooty, Goa — safe, smooth long-distance drives.',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
        price: 'From ₹1,499/day',
        size: 'large',
    },
];

/* ── Services Data — with IMAGES ── */
const services = [
    {
        title: 'Hatchback Driver',
        desc: 'Daily commute, school pickups, errands around Bangalore.',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
        price: 'From ₹149/hr',
    },
    {
        title: 'Sedan Driver',
        desc: 'Airport pickups, client meetings, long-distance drives.',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80',
        price: 'From ₹149/hr',
    },
    {
        title: 'SUV Driver',
        desc: 'Family trips, weekend getaways, outstation highways.',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
        price: 'From ₹199/hr',
    },
    {
        title: 'Luxury Car Chauffeur',
        desc: 'BMW, Mercedes, Audi — handled with premium care.',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80',
        price: 'From ₹299/hr',
    },
    {
        title: 'Corporate Fleet',
        desc: 'Dedicated drivers for 5, 10, or 50+ company vehicles.',
        image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7460f?w=600&q=80',
        price: 'Custom Plans',
    },
    {
        title: 'Outstation Trips',
        desc: 'Coorg, Ooty, Goa — safe, smooth long-distance drives.',
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
        price: 'From ₹1,499/day',
    },
];

const features = [
    { number: '01', title: 'Government Licensed', description: 'Every driver carries a valid commercial license. Fully compliant, zero risk.' },
    { number: '02', title: 'Background Verified', description: 'Police-verified identity, address, and criminal record check. Your safety is non-negotiable.' },
    { number: '03', title: 'No Hidden Fees', description: 'The price you see is the price you pay. No surge, no extras, no surprises.' },
    { number: '04', title: 'Available 24/7', description: 'Need a driver at 5 AM or midnight? We\'re always ready when you are.' },
];

const steps = [
    {
        num: '1',
        title: 'Tell Us What You Need',
        desc: 'Pick your vehicle type, date, and time. Takes 30 seconds.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    },
    {
        num: '2',
        title: 'Get a Matched Driver',
        desc: 'We assign the right driver for your vehicle — within minutes.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>,
    },
    {
        num: '3',
        title: 'Sit Back, We Drive',
        desc: 'Your driver arrives on time. You relax, we handle the road.',
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></svg>,
    },
];

const testimonials = [
    {
        name: 'Priya S.',
        role: 'Whitefield, Bangalore',
        text: 'I book a driver for my daily commute. Always on time, always polite. Haven\'t driven myself in 6 months!',
        rating: 5,
    },
    {
        name: 'Rajesh K.',
        role: 'IT Company, Manyata Park',
        text: 'We use them for our company fleet — 8 cars. Drivers are well-trained, uniformed, and professional. Excellent service.',
        rating: 5,
    },
    {
        name: 'Anitha R.',
        role: 'HSR Layout, Bangalore',
        text: 'Hired a driver for our Mysore trip. He drove carefully, knew the route, and made the journey so comfortable for our family.',
        rating: 5,
    },
];

const pricing = [
    { plan: 'Hourly', price: '₹149', unit: '/hr', desc: 'Short trips and errands within the city.', features: ['Up to 4 hours', 'City limits', 'Any car type'], cta: 'Book Hourly' },
    { plan: 'Full Day', price: '₹1,499', unit: '/day', desc: '12 hours of driving. Best for day-long needs.', features: ['Up to 12 hours', 'City + outskirts', 'All car types', 'Outstation ready'], popular: true, cta: 'Book Full Day' },
    { plan: 'Monthly', price: '₹18,999', unit: '/mo', desc: 'Your own dedicated driver. Best value.', features: ['26 working days', 'Dedicated driver', 'All car types', 'Priority support', 'Corporate billing'], cta: 'Get Monthly Plan' },
];

function StarRating({ rating }) {
    return (
        <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? 'var(--brand)' : 'var(--gray-200)'} stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

export default function Home() {
    const vehicleScroll = useRef(null);
    const scrollVehicles = (dir) => {
        if (vehicleScroll.current) vehicleScroll.current.scrollBy({ left: dir * 330, behavior: 'smooth' });
    };
    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className={styles.heroBg} style={{ backgroundImage: `url('/hero-bg.jpg')` }}></div>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroInner}`}>
                    <div className={styles.heroText}>
                        <div className={styles.heroBadge}>
                            <span className={styles.dot}></span>
                            50,000+ Happy Customers
                        </div>
                        <h1 className={styles.heroTitle}>
                            Need a Driver?<br />
                            <span className={styles.gold}>We'll Send One in Minutes.</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Professional, background-verified drivers for your car —
                            daily commute, road trips, or corporate fleets. Bangalore's #1 chauffeur service.
                        </p>
                        <a href="https://wa.me/919164544555" target="_blank" rel="noopener noreferrer" className={styles.heroWhatsapp}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            WhatsApp Us
                        </a>
                        <div className={styles.heroTrust}>
                            <div className={styles.trustItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                Licensed
                            </div>
                            <div className={styles.trustItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                Verified
                            </div>
                            <div className={styles.trustItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                24/7
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroForm}>
                        <BookingForm compact />
                    </div>
                </div>
            </section>

            {/* ═══ SERVICE CATEGORIES — Two Cards ═══ */}
            <section className={styles.serviceCatSection}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.serviceCatHeader}>
                            <span className="section-label">Our Services</span>
                            <h2 className={styles.serviceCatHeading}>Two Ways to<br />Ride with Us</h2>
                            <p className={styles.serviceCatSubtitle}>Whether you need a chauffeur for your personal car or a dedicated fleet for your business — we have you covered, end to end.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <div className={styles.serviceCatGrid}>
                            {/* Card 1 — Personal Driver */}
                            <Link href="/contact" className={styles.serviceCatCard}>
                                <div className={styles.serviceCatBg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550355291-bbee04a92027?w=900&q=80')` }}></div>
                                <div className={styles.serviceCatOverlay}></div>
                                <div className={styles.serviceCatContent}>
                                    <span className={styles.serviceCatLabel}>For Individuals</span>
                                    <h2 className={styles.serviceCatTitle}>Need a Driver?</h2>
                                    <p className={styles.serviceCatDesc}>
                                        Book a professional, background-verified chauffeur for your personal car — hourly, full day, or monthly.
                                    </p>
                                    <span className={styles.serviceCatCta}>
                                        Book a Driver
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>

                            {/* Card 2 — Corporate Fleet */}
                            <Link href="/contact" className={`${styles.serviceCatCard} ${styles.serviceCatCardDark}`}>
                                <div className={styles.serviceCatBg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80')` }}></div>
                                <div className={styles.serviceCatOverlay}></div>
                                <div className={styles.serviceCatContent}>
                                    <span className={styles.serviceCatLabel}>For Corporates</span>
                                    <h2 className={styles.serviceCatTitle}>Corporate Fleet?</h2>
                                    <p className={styles.serviceCatDesc}>
                                        Dedicated drivers for your entire fleet — 5, 10, or 50+ vehicles. Managed, uniformed, and reliable.
                                    </p>
                                    <span className={styles.serviceCatCta}>
                                        Get Fleet Plan
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ VEHICLE SELECTION — Horizontal Scroll (Image 1 style) ═══ */}
            <section className={styles.vehicleSection}>
                <div className="container">
                    <div className={styles.vehicleHeader}>
                        <div className={styles.vehicleHeaderLeft}>
                            <span className="section-label">Pick Your Vehicle</span>
                            <h2 className={styles.vehicleTitle}>A Driver for Every Car</h2>
                            <p className={styles.vehicleSubtitle}>Tell us what you drive — we'll match you with a trained chauffeur for your exact vehicle type.</p>
                        </div>
                        <div className={styles.vehicleNav}>
                            <button className={styles.vehicleNavBtn} onClick={() => scrollVehicles(-1)} aria-label="Previous">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                            </button>
                            <button className={`${styles.vehicleNavBtn} ${styles.vehicleNavBtnActive}`} onClick={() => scrollVehicles(1)} aria-label="Next">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.vehicleTrackWrap}>
                        <div className={styles.vehicleTrack} ref={vehicleScroll}>
                            {bentoVehicles.map((v, i) => (
                                <Link href="/contact" key={i} className={styles.vehicleCard}>
                                    <div className={styles.vehicleCardTop}>
                                        <h3 className={styles.vehicleCardTitle}>{v.title}</h3>
                                        <span className={styles.vehicleCardArrow}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                        </span>
                                    </div>
                                    <div className={styles.vehicleCardImageWrap}>
                                        <img src={v.image} alt={v.title} className={styles.vehicleCardImage} loading="lazy" />
                                    </div>
                                    <div className={styles.vehicleCardBottom}>
                                        <p className={styles.vehicleCardDesc}>{v.desc}</p>
                                        <span className={styles.vehicleCardPrice}>{v.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ STATS — right after vehicle section ═══ */}
            <section className={styles.statsSection}>
                <div className={styles.statsPattern}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <StatsCounter />
                </div>
            </section>

            {/* ═══ CTA BANNER — Contained Rounded Card ═══ */}
            <section className={styles.ctaBannerSection}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.ctaBannerCard}>
                            <div className={styles.ctaBannerGlow}></div>
                            <div className={styles.ctaBannerInner}>
                                <div className={styles.ctaBannerText}>
                                    <span className={styles.ctaBannerLabel}>Get Started Today</span>
                                    <h2 className={styles.ctaBannerTitle}>Your Driver,<br />Ready in Minutes.</h2>
                                    <p className={styles.ctaBannerDesc}>No app download. No registration. Just call or WhatsApp — we'll handle the rest.</p>
                                </div>
                                <div className={styles.ctaBannerActions}>
                                    <Link href="/contact" className="btn btn-brand">Book a Driver</Link>
                                    <a href="https://wa.me/919164544555" target="_blank" rel="noopener noreferrer" className="btn btn-white">WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ HOW IT WORKS — Two Column (Image 2 layout) ═══ */}
            <section className={styles.howSection}>
                <div className="container">
                    <div className={styles.howLayout}>
                        <ScrollReveal>
                            <div className={styles.howLeft}>
                                <span className="section-label">How It Works</span>
                                <h2 className={styles.howTitle}>3 Steps.<br />That's It.</h2>
                                <p className={styles.howDesc}>No app download, no registration needed. Just tell us your requirement and we'll assign a verified driver to your doorstep.</p>
                            </div>
                        </ScrollReveal>
                        <div className={styles.howRight}>
                            {steps.map((step, i) => (
                                <ScrollReveal key={i} delay={i * 100}>
                                    <div className={styles.howStep}>
                                        <div className={styles.howStepIcon}>{step.icon}</div>
                                        <div className={styles.howStepText}>
                                            <h3 className={styles.howStepTitle}>{step.title}</h3>
                                            <p className={styles.howStepDesc}>{step.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ WHY US ═══ */}
            <section className={styles.whyUsSection}>
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
                            <span className="section-label">Why Us</span>
                            <h2 className="section-title">We Don't Cut Corners<br />on Safety</h2>
                            <p className="section-subtitle" style={{ maxWidth: '520px', margin: '0 auto' }}>Every driver goes through a 4-step verification before they ever sit in your car.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <div className="grid-4">
                            {features.map((f, i) => <FeatureCard key={i} {...f} />)}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ PRICING ═══ */}
            <section className="section-alt" id="pricing">
                <div className="container">
                    <ScrollReveal>
                        <div style={{ marginBottom: 'var(--space-2xl)' }}>
                            <span className="section-label">Pricing</span>
                            <h2 className="section-title">Honest Pricing.<br />No Surprises.</h2>
                            <p className="section-subtitle">What you see is what you pay. Pick a plan that works for you.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <div className={styles.pricingGrid}>
                            {pricing.map((p, i) => (
                                <div key={i} className={`${styles.pricingCard} ${p.popular ? styles.popular : ''}`}>
                                    {p.popular && <span className={styles.badge}>Most Popular</span>}
                                    <h3 className={styles.planName}>{p.plan}</h3>
                                    <div className={styles.planPrice}>
                                        <span className={styles.amount}>{p.price}</span>
                                        <span className={styles.unit}>{p.unit}</span>
                                    </div>
                                    <p className={styles.planDesc}>{p.desc}</p>
                                    <ul className={styles.planFeatures}>
                                        {p.features.map((f, fi) => (
                                            <li key={fi}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className={`btn ${p.popular ? 'btn-brand' : 'btn-outline'}`} style={{ width: '100%' }}>
                                        {p.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ TESTIMONIALS ═══ */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div style={{ marginBottom: 'var(--space-2xl)' }}>
                            <span className="section-label">Real Reviews</span>
                            <h2 className="section-title">Hear It From<br />Our Customers</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <div className={styles.reviewGrid}>
                            {testimonials.map((t, i) => (
                                <div key={i} className={styles.reviewCard}>
                                    <StarRating rating={t.rating} />
                                    <p className={styles.reviewText}>"{t.text}"</p>
                                    <div className={styles.reviewAuthor}>
                                        <div className={styles.avatar}>{t.name[0]}</div>
                                        <div>
                                            <strong className={styles.authorName}>{t.name}</strong>
                                            <span className={styles.authorLoc}>{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="section-alt" id="faq">
                <div className="container">
                    <ScrollReveal>
                        <div style={{ marginBottom: 'var(--space-2xl)' }}>
                            <span className="section-label">FAQ</span>
                            <h2 className="section-title">Got Questions?<br />We've Got Answers.</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                        <FAQAccordion />
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className={styles.cta}>
                <div className={`container ${styles.ctaInner}`}>
                    <h2 className={styles.ctaTitle}>Ready? Book Your Driver Now.</h2>
                    <p className={styles.ctaDesc}>Takes 30 seconds. No app needed. Just tell us and go.</p>
                    <div className={styles.ctaBtns}>
                        <Link href="/contact" className="btn btn-brand">Book Online</Link>
                        <a href="https://wa.me/919164544555" target="_blank" rel="noopener noreferrer" className="btn btn-white">WhatsApp Us</a>
                    </div>
                </div>
            </section>
        </>
    );
}
