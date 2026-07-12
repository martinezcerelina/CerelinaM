import { useState } from 'react';
import TargetDateField from './TargetDateField';

function Contact() {
    const [view, setView] = useState('weekly');
    const [selectedDate, setSelectedDate] = useState('');
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error' | null

    const handleDateChange = (formattedDate) => {
        setSelectedDate(formattedDate);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const payload = {
            fullName: form['full-name'].value,
            email: form['email'].value,
            subject: form['subject'].value,
            projType: form['proj-type'].value,
            budget: form['budget-range'].value,
            targetDate: selectedDate,
            message: form['message'].value,
        };

        try {
            const response = await fetch('/api/send-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                form.reset();
                setSelectedDate('');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact-section">
            <div className="left-contact">
                <div className="title">
                    <h1>Contact Me</h1>    
                </div>
                <h4>Let's build something great together.</h4>
                <p>Looking for collaboration or a creative partner? My inbox is always open for project discussions or tech-focused conversations. Feel free to reach out.</p>
                <div className="socials-vertical">
                    <div className="social">
                        <img src="./src/assets/svg/gmail.svg" className="gmail" alt="Gmail"/>
                        <p>cerelinamartinez3@gmail.com</p>
                    </div>
                    <div className="social">
                        <img src="./src/assets/svg/fb.svg" className="fb" alt="Facebook" />
                        <p>Cerelina Martinez</p>
                    </div>
                    <div className="social">
                        <img src="./src/assets/svg/tg.svg" className="tg" alt="Telegram" />
                        <p>0991-133-5074 | Cerelina Martinez</p>
                    </div>
                    <div className="social">
                        <img src="./src/assets/svg/linkedin.svg" className="linkedin" alt="LinkedIn" />
                        <p>Cerelina Martinez</p>
                    </div>
                </div>
            </div>

            <div className="right-contact">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="full-name">Full Name:</label>
                        <input className="form-input" type="text" placeholder="e.g. Juan Dela Cruz" id="full-name" name="full-name" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input className="form-input" type="email" placeholder="e.g. juandelacrus@gmail.com" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="subject">Subject:</label>
                        <input className="form-input" type="text" placeholder="Value" id="subject" name="subject" required />
                    </div>
                    
                    <div className="form-row-3">
                        <div className="form-group">
                            <label className="form-label" htmlFor="proj-type">Project Type:</label>
                            <select className="form-select" id="proj-type" name="proj-type" defaultValue="" required>
                                <option value="" disabled>Select Type</option>
                                <option>Web Design</option>
                                <option>Graphic Design</option>
                                <option>2D Animation</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="budget-range">Budget Range:</label>
                            <select className="form-select" id="budget-range" name="budget-range" defaultValue="" required>
                                <option value="" disabled>Select Range</option>
                                <option>Under ₱5,000</option>
                                <option>₱5,000–₱15,000</option>
                                <option>₱15,000+</option>
                            </select>
                        </div>
                        
                        <TargetDateField 
                            label="Target Date:" 
                            name="target-date" 
                            onChange={handleDateChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea className="form-textarea" placeholder="Value" id="message" name="message" required></textarea>
                    </div>

                    {status === 'success' && <p className="form-status success">Message sent! I'll get back to you soon.</p>}
                    {status === 'error' && <p className="form-status error">Something went wrong. Please try again or email me directly.</p>}

                    <div className="form-send-wrap">
                        <button type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;