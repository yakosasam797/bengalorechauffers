'use client';
import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({ compact = false }) {
    const [formData, setFormData] = useState({
        vehicleType: '',
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMsg = `Hi, I want to hire a driver.\n\nVehicle: ${formData.vehicleType}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}${formData.message ? `\nMessage: ${formData.message}` : ''}`;
        window.open(`https://wa.me/919164544555?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    };

    return (
        <form className={`${styles.form} ${compact ? styles.compact : ''}`} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Hire a Driver Now</h3>
                <p className={styles.formSubtitle}>Fill in your details and we'll connect you instantly</p>
            </div>

            <div className={styles.formBody}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Select Vehicle Type</label>
                    <select
                        name="vehicleType"
                        className={styles.select}
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose your vehicle</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury Car">Luxury Car</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        className={styles.input}
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {!compact && (
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Message (Optional)</label>
                        <textarea
                            name="message"
                            className={styles.textarea}
                            placeholder="Tell us about your travel needs..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>
                )}

                <button type="submit" className={`btn btn-accent ${styles.submitBtn}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book via WhatsApp
                </button>
            </div>
        </form>
    );
}
