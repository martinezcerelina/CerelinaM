
function Home() {
    return (
        <section id="home-container">
                    <span className="card-star card-star--lg"><img src="./src/assets/svg/star.svg" alt="star" /></span> 
                    <span className="card-star card-star--md"><img src="./src/assets/svg/star.svg" alt="star" /></span> 
                    <span className="card-star card-star--sm"><img src="./src/assets/svg/star.svg" alt="star" /></span>

            <div className="home-container">
                <div className="CerelinaPicture">
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
                        <a href="#">
                            <button className="btn">Work With Me</button>
                        </a>
                        <a href="#">
                            <button>View Projects</button>
                        </a>
                    </div>

                    <div className="socials">
                        <a href="#"><img src="./src/assets/svg/ig.svg" alt="Instagram" className="ig" /></a>
                        <a href="#"><img src="./src/assets/svg/fb.svg" alt="Facebook" className="fb" /></a>
                        <a href="#"><img src="./src/assets/svg/tg.svg" alt="Telegram" className="tg" /></a>
                        <a href="#"><img src="./src/assets/svg/tiktok.svg" alt="TikTok" className="tiktok" /></a>
                        <a href="#"><img src="./src/assets/svg/linkedin.svg" alt="LinkedIn" className="linkedin" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;