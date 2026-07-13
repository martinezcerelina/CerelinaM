
function Home() {
    return (
        <section id="home-container">
            <div className="home-container">
                <div className="CerelinaPicture">

                    <span className="deco-star deco-star--yellow"><img src="./src/assets/svg/star-yellow.svg" alt="star" /></span> 
                    <span className="deco-star deco-star--pink"><img src="./src/assets/svg/star.svg" alt="star" /></span> 
                    <span className="deco-moon"><img src="./src/assets/svg/moon-yellow.svg" alt="moon" /></span>

                    <img 
                        src="./src/assets/picture.png" 
                        alt="Cerelina Picture" 
                        style={{ width: '450px', height: '539px' }} 
                    />
                </div>

                <div className="infos">
                    <div className="name">
                        <h2>Hello! I am</h2>
                        <h1>Cerelina Martinez</h1>
                    </div>
                    <h3 className="h3">ASPIRING WEB DEVELOPER</h3>
                    <p>
                        IT student and aspiring web developer dedicated to building high-performance web 
                        systems. From interface design to structured backend logic, I bring your
                        digital projects to life with precision and modern functionality.
                    </p>

                    <div className="buttons">
                        <a href="#contact-section">
                            <button className="btn">Work With Me</button>
                        </a>
                        <a href="#projects-section">
                            <button className="btn-main">View Projects</button>
                        </a> 
                    </div>

                    <div className="socials">
                        <a href="https://www.instagram.com/cerielleee?igsh=amxlbDV0ejR5dDVp" target="_blank"><img src="./src/assets/svg/ig.svg" alt="Instagram" className="ig" /></a>
                        <a href="https://www.facebook.com/share/19KgTiDhRS/" target="_blank"><img src="./src/assets/svg/fb.svg" alt="Facebook" className="fb" /></a>
                        <a href="https://t.me/luvyowwwww" target="_blank"><img src="./src/assets/svg/tg.svg" alt="Telegram" className="tg" /></a>
                        <a href="https://www.tiktok.com/@luv.yoww?_r=1&_t=ZS-97x8cTTh9ZI" target="_blank"><img src="./src/assets/svg/tiktok.svg" alt="TikTok" className="tiktok" /></a>
                        <a href="https://www.linkedin.com/in/cerelina-m-435938290?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"><img src="./src/assets/svg/linkedin.svg" alt="LinkedIn" className="linkedin" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;