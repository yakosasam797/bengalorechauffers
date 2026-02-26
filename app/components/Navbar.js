'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const serviceLinks = [
    { href: '/services', label: 'Hatchback Driver' },
    { href: '/services', label: 'Sedan Driver' },
    { href: '/services', label: 'SUV Driver' },
    { href: '/services', label: 'Luxury Car Driver' },
    { href: '/services', label: 'Corporate Driver' },
    { href: '/services', label: 'Commercial Driver' },
];

const businessLinks = [
    { href: '/services', label: 'Corporate Fleet' },
    { href: '/services', label: 'Monthly Packages' },
    { href: '/contact', label: 'Get a Quote' },
];

const languages = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ', flag: 'KN' },
    { code: 'hi', label: 'हिन्दी', flag: 'HI' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState('en');
    const [langOpen, setLangOpen] = useState(false);
    const pathname = usePathname();
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const currentLang = languages.find(l => l.code === lang);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                    <img src="/logo.png" alt="Bengaluru Chauffeurs Logo" className={styles.logoImg} />
                    <div className={styles.logoTextWrap}>
                        <span className={styles.logoName}>Bengaluru</span>
                        <span className={styles.logoSub}>Chauffeurs</span>
                    </div>
                </Link>

                {/* Center Nav Links */}
                <div className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
                    <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Home</Link>

                    <div className={styles.dropdown}>
                        <Link href="/services" className={`${styles.link} ${pathname === '/services' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>
                            Our Services <span className={styles.chevron}>▾</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            {serviceLinks.map((item, i) => (
                                <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.dropdown}>
                        <span className={styles.link}>
                            For Business <span className={styles.chevron}>▾</span>
                        </span>
                        <div className={styles.dropdownMenu}>
                            {businessLinks.map((item, i) => (
                                <Link key={i} href={item.href} className={styles.dropdownItem} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>About</Link>
                    <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} onClick={() => setMobileOpen(false)}>Contact</Link>

                    {/* Mobile-only language + CTA */}
                    <div className={styles.mobileLang}>
                        {languages.map(l => (
                            <button key={l.code} className={`${styles.langBtn} ${lang === l.code ? styles.langActive : ''}`} onClick={() => setLang(l.code)}>{l.label}</button>
                        ))}
                    </div>
                    <Link href="/contact" className={`${styles.mobileCta}`} onClick={() => setMobileOpen(false)}>
                        Hire a Driver
                    </Link>
                </div>

                {/* Right side: Language (outline) + CTA (gold) — same size */}
                <div className={styles.rightActions}>
                    <div className={styles.langWrap} ref={langRef}>
                        <button className={`${styles.langToggle} ${scrolled ? styles.langToggleScrolled : ''}`} onClick={() => setLangOpen(!langOpen)}>
                            {currentLang.label} <span className={styles.chevron}>▾</span>
                        </button>
                        {langOpen && (
                            <div className={styles.langDropdown}>
                                {languages.map(l => (
                                    <button key={l.code} className={`${styles.langOption} ${lang === l.code ? styles.langOptionActive : ''}`} onClick={() => { setLang(l.code); setLangOpen(false); }}>
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className={`${styles.navCta} ${scrolled ? styles.navCtaScrolled : ''}`}>
                        Hire a Driver
                    </Link>
                </div>

                {/* Hamburger */}
                <button className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
}
