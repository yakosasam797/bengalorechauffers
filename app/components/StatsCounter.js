'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './StatsCounter.module.css';

const stats = [
    {
        value: 500, suffix: '+', label: 'Professional Drivers',
        desc: 'Background-verified, trained chauffeurs ready across Bangalore and beyond.',
    },
    {
        value: 50, suffix: 'K+', label: 'Trips Completed',
        desc: 'Daily commutes, outstation drives, corporate pickups — done right, every time.',
    },
    {
        value: 15, suffix: '+', label: 'Cities Covered',
        desc: 'Bangalore, Mysore, Coorg, Ooty, Goa, and everywhere in between.',
    },
    {
        value: 4.8, suffix: '/5', label: 'Customer Rating',
        desc: 'Real reviews from real customers. Safety, punctuality, professionalism.',
    },
];

function AnimatedNumber({ value, suffix, inView }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [value, inView]);

    const display = value >= 1000 ? `${Math.floor(count / 1000)}` : value < 10 ? count.toFixed(1) : count;

    return (
        <span className={styles.number}>{display}{suffix}</span>
    );
}

export default function StatsCounter() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.wrapper} ref={ref}>
            <div className={styles.header}>
                <h2 className={styles.title}>Our numbers speak<br />for themselves.</h2>
                <p className={styles.subtitle}>Bangalore's most trusted chauffeur service,<br />serving thousands every month.</p>
                <Link href="/about" className={styles.cta}>
                    Learn More →
                </Link>
            </div>
            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.stat}>
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                        <span className={styles.label}>{stat.label}</span>
                        <p className={styles.desc}>{stat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
