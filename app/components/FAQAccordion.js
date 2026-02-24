'use client';
import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const faqData = [
    { question: 'How can I hire a driver from Bangalore Chauffeur?', answer: 'You can hire a driver by visiting our website, selecting your service type, and booking a professional driver in just a few clicks. Alternatively, call us at +91 9164544555 or reach us on WhatsApp.' },
    { question: 'Are your drivers background-verified?', answer: 'Yes, all our drivers undergo thorough background verification including identity checks, driving license validation, and criminal record screening to ensure your complete safety.' },
    { question: 'What types of vehicles do your drivers handle?', answer: 'Our drivers are trained to handle all types of vehicles — Hatchbacks, Sedans, SUVs, Luxury cars, and Commercial vehicles. You can select your vehicle type during booking.' },
    { question: 'Can I hire a driver on a monthly basis?', answer: 'Absolutely! We offer flexible hiring options including hourly, daily, weekly, and monthly plans. Our monthly packages are perfect for regular commuters and families.' },
    { question: 'Do you provide outstation driver services?', answer: 'Yes, our experienced drivers are well-versed in both city and highway driving. We provide outstation driver services for trips across Karnataka and neighboring states.' },
    { question: 'What are your working hours?', answer: 'We operate 24/7, including weekends and holidays. Whether you need an early morning airport pick-up or a late-night ride home, we\'re always available.' },
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className={styles.accordion}>
            {faqData.map((item, index) => (
                <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
                    <button
                        className={styles.question}
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className={styles.questionText}>{item.question}</span>
                        <span className={styles.toggle}>{openIndex === index ? '−' : '+'}</span>
                    </button>
                    <div className={styles.answerWrap}>
                        <div className={styles.answer}><p>{item.answer}</p></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
