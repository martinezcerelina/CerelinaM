import { useState } from 'react';
import TargetDateField from './TargetDateField';
import useScrapbookReveal from './useScrapbookReveal.js';


function Contact() {
    const sectionRef = useScrapbookReveal();

    const [view, setView] = useState('weekly');

    const toggleCalPopover = (e) => {
        console.log("Toggle calendar popover executed", e);
    };

    const switchView = (selectedView) => {
        setView(selectedView);
        console.log(`Switched calendar view to: ${selectedView}`);
    };

    const navMonth = (direction) => {
        console.log(`Navigating month by direction steps: ${direction}`);
    };

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (formattedDate) => {
        setSelectedDate(formattedDate);
        console.log("Selected Date in Form:", formattedDate);
    };

    return (
        <section id="contact-section" ref={sectionRef}>
            <div className="left-contact">
                <div className="title pop-item" style={{ '--pop-delay': '0s', '--pop-rot': '-6deg' }}>
                    <h1>Contact Me</h1>    
                </div>
                <h4 className="pop-item" style={{ '--pop-delay': '0.1s', '--pop-rot': '4deg' }}>
                    Let's build something great together.
                </h4>
                <p className="pop-item" style={{ '--pop-delay': '0.2s', '--pop-rot': '-3deg' }}>
                    Looking for collaboration or a creative partner? My inbox is always open for project discussions or tech-focused conversations. Feel free to reach out.
                </p>
                <div className="socials-vertical">
                    <div className="social pop-item" style={{ '--pop-delay': '0.3s', '--pop-rot': '-7deg' }}>
                        <img src="./src/assets/svg/gmail.svg" className="gmail" alt="Gmail"/>
                        <p>cerelinamartinez3@gmail.com</p>
                    </div>
                    <div className="social pop-item" style={{ '--pop-delay': '0.38s', '--pop-rot': '6deg' }}>
                        <img src="./src/assets/svg/fb.svg" className="fb" alt="Facebook" />
                        <p>Cerelina Martinez</p>
                    </div>
                    <div className="social pop-item" style={{ '--pop-delay': '0.46s', '--pop-rot': '-5deg' }}>
                        <img src="./src/assets/svg/tg.svg" className="tg" alt="Telegram" />
                        <p>0991-133-5074 | Cerelina Martinez</p>
                    </div>
                    <div className="social pop-item" style={{ '--pop-delay': '0.54s', '--pop-rot': '8deg' }}>
                        <img src="./src/assets/svg/linkedin.svg" className="linkedin" alt="LinkedIn" />
                        <p>Cerelina Martinez</p>
                    </div>
                </div>
            </div>

            <div className="right-contact pop-item" style={{ '--pop-delay': '0.5s', '--pop-rot': '5deg' }}>
                 <span className="deco-moon form-moon"><img src="./src/assets/svg/moon.svg" alt="moon" /></span>
                <span className="deco-star deco-star--yellow form-star-1"><img src="./src/assets/svg/star-yellow.svg" alt="star" /></span>
                <span className="deco-star deco-star--pink form-star-2"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                <span className="deco-star deco-star--yellow form-star-3"><img src="./src/assets/svg/star-yellow.svg" alt="star" /></span>

                <form onSubmit={(e) => e.preventDefault()}>
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
                    
                    <div className="form-send-wrap">
                        <a href="#" className="btn-wrapper">
                            <span className="btn-star btn-star--1"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
                            <span className="btn-star btn-star--2"><img src="./src/assets/svg/star.svg" alt="" /></span>
                            <span className="btn-star btn-star--3"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
                            <span className="btn-star btn-star--4"><img src="./src/assets/svg/star.svg" alt="" /></span>
                            <button type="submit" className="btn-main">Send Message</button>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;