'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './StatsCounter.module.css';

const stats = [
    { value: 500, suffix: '+', label: 'Professional Drivers', icon: '👨‍✈️' },
    { value: 50000, suffix: '+', label: 'Trips Completed', icon: '🚗' },
    { value: 15, suffix: '+', label: 'Cities Covered', icon: '🏙️' },
    { value: 4.8, suffix: '★', label: 'Customer Rating', icon: '⭐' },
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
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [value, inView]);

    const display = value >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 0)}K` :
        value < 10 ? count.toFixed(1) : count;

    return (
        <span className={styles.number}>
            {value >= 1000 ? `${Math.floor(count / 1000)}K` : value < 10 ? count.toFixed(1) : count}{suffix}
        </span>
    );
}

export default function StatsCounter() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.stats} ref={ref}>
            {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                    <div className={styles.statIcon}>{stat.icon}</div>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                    <span className={styles.label}>{stat.label}</span>
                </div>
            ))}
        </div>
    );
}
