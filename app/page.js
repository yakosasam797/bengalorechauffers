'use client';
import { useRef, useState, useEffect } from 'react';
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
    const [activeTab, setActiveTab] = useState(0);
    const autoTimer = useRef(null);
    const scrollVehicles = (dir) => {
        if (vehicleScroll.current) vehicleScroll.current.scrollBy({ left: dir * 330, behavior: 'smooth' });
    };

    const heroSlides = [
        {
            tab: 'Hire a Driver',
            title: <>Need a <span className={styles.gold}>Driver</span> for<br />Your Car in Bangalore?</>,
            desc: 'Save time with background-verified drivers for your car. Choose your vehicle type, and enjoy safe, hassle-free rides. Trusted chauffeur service in Bangalore.',
            cta: 'Hire a Driver →',
        },
        {
            tab: 'Corporate',
            title: <>Dedicated <span className={styles.gold}>Drivers</span> for<br />Your Business Fleet</>,
            desc: 'Managed, uniformed, and reliable drivers for 5, 10, or 50+ company vehicles. Custom plans with priority support and corporate billing.',
            cta: 'Get Fleet Plan →',
        },
        {
            tab: 'Outstation',
            title: <>Safe <span className={styles.gold}>Outstation</span><br />Drives from Bangalore</>,
            desc: 'Coorg, Ooty, Mysore, Goa — experienced drivers for long-distance highway trips. Relax while we handle the road.',
            cta: 'Book Outstation →',
        },
    ];

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        autoTimer.current = setInterval(() => {
            setActiveTab(prev => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(autoTimer.current);
    }, [heroSlides.length]);

    // Manual tab switch — resets the auto timer
    const switchTab = (i) => {
        setActiveTab(i);
        clearInterval(autoTimer.current);
        autoTimer.current = setInterval(() => {
            setActiveTab(prev => (prev + 1) % heroSlides.length);
        }, 5000);
    };
    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className={styles.heroBg} style={{ backgroundImage: `url('/hero -bg 02.jpg')` }}></div>
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroInner}>
                    {/* Left — Text (slides with tabs) */}
                    <div className={styles.heroText}>
                        <div className={styles.heroSlideWrap}>
                            {heroSlides.map((slide, i) => (
                                <div key={i} className={`${styles.heroSlide} ${i === activeTab ? styles.heroSlideActive : ''}`}>
                                    <h1 className={styles.heroTitle}>
                                        {slide.title}
                                    </h1>
                                    <p className={styles.heroDesc}>
                                        {slide.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <a href="tel:+919164544555" className={styles.heroPhone}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            +91 91645 44555
                        </a>
                        <div className={styles.heroDots}>
                            {heroSlides.map((_, i) => (
                                <span key={i} className={`${styles.heroDot} ${i === activeTab ? styles.heroDotActive : ''}`} onClick={() => switchTab(i)} />
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className={styles.heroFormCol}>
                        <div className={styles.heroTabs}>
                            {heroSlides.map((slide, i) => (
                                <span key={i} className={`${styles.heroTab} ${i === activeTab ? styles.heroTabActive : ''}`} onClick={() => switchTab(i)}>
                                    {slide.tab}
                                </span>
                            ))}
                        </div>
                        <div className={styles.heroFormCard}>
                            <div className={styles.socialProof}>
                                <div className={styles.avatarStack}>
                                    <span className={styles.miniAvatar} style={{ background: '#F7C948' }}>P</span>
                                    <span className={styles.miniAvatar} style={{ background: '#4A90D9' }}>R</span>
                                    <span className={styles.miniAvatar} style={{ background: '#E5654F' }}>A</span>
                                </div>
                                <span className={styles.socialProofText}>50,000+ customers already trust us</span>
                            </div>
                            <form className={styles.heroForm} onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/919164544555?text=' + encodeURIComponent('Hi, I need a driver.'), '_blank'); }}>
                                <div className={styles.heroFormRow}>
                                    <input type="text" placeholder="Name" className={styles.heroInput} required />
                                    <input type="tel" placeholder="Mobile Number" className={styles.heroInput} required />
                                </div>
                                <select className={styles.heroInput} required defaultValue="">
                                    <option value="" disabled>Select Service</option>
                                    <option value="Hatchback">Hatchback Driver</option>
                                    <option value="Sedan">Sedan Driver</option>
                                    <option value="SUV">SUV Driver</option>
                                    <option value="Luxury">Luxury Car</option>
                                    <option value="Outstation">Outstation Trip</option>
                                </select>
                                <button type="submit" className={styles.heroSubmit}>
                                    {heroSlides[activeTab].cta}
                                </button>
                            </form>
                        </div>
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
                            <Link href="/contact" className={styles.serviceCatCard}>
                                <div className={styles.serviceCatBg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550355291-bbee04a92027?w=900&q=80')` }}></div>
                                <div className={styles.serviceCatOverlay}></div>
                                <div className={styles.serviceCatContent}>
                                    <span className={styles.serviceCatLabel}>For Individuals</span>
                                    <h2 className={styles.serviceCatTitle}>Need a Driver?</h2>
                                    <p className={styles.serviceCatDesc}>Book a professional, background-verified chauffeur for your personal car — hourly, full day, or monthly.</p>
                                    <span className={styles.serviceCatCta}>
                                        Book a Driver
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>
                            <Link href="/contact" className={`${styles.serviceCatCard} ${styles.serviceCatCardDark}`}>
                                <div className={styles.serviceCatBg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80')` }}></div>
                                <div className={styles.serviceCatOverlay}></div>
                                <div className={styles.serviceCatContent}>
                                    <span className={styles.serviceCatLabel}>For Corporates</span>
                                    <h2 className={styles.serviceCatTitle}>Corporate Fleet?</h2>
                                    <p className={styles.serviceCatDesc}>Dedicated drivers for your entire fleet — 5, 10, or 50+ vehicles. Managed, uniformed, and reliable.</p>
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

            {/* ═══ VEHICLE SELECTION — Horizontal Scroll ═══ */}
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
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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

            {/* ═══ STATS ═══ */}
            <section className={styles.statsSection}>
                <div className={styles.statsPattern}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <StatsCounter />
                </div>
            </section>

            {/* ═══ CTA BANNER ═══ */}
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

            {/* ═══ HOW IT WORKS ═══ */}
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
                            <h2 className="section-title" style={{ color: '#fff' }}>We Don't Cut Corners<br />on Safety</h2>
                            <p className="section-subtitle" style={{ maxWidth: '520px', margin: '0 auto', color: 'rgba(255,255,255,0.45)' }}>Every driver goes through a 4-step verification before they ever sit in your car.</p>
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
            <section className="section-alt">
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
                <div className={styles.ctaPattern}></div>
                <div className={`container ${styles.ctaInner}`} style={{ position: 'relative', zIndex: 1 }}>
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
