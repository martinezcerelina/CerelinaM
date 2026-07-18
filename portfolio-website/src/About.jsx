function About() {
    return (
        <section id="aboutme-section">
            <div className="left">
                <div className="aboutme pop-item" style={{ '--pop-delay': '0.1s', '--pop-rot': '-4deg' }}>
                    <span className="deco-star deco-star--pink about-star-1"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                    <span className="deco-star deco-star--pink about-star-2"><img src="./src/assets/svg/star-yellow.svg" alt="star" /></span>
                    <span className="deco-star deco-star--yellow about-star-3"><img src="./src/assets/svg/star-yellow.svg" alt="star" /></span>

                    <h1>About Me</h1>
                    <p>
                        My name is <strong>Cerelina Martinez.</strong> I am an Information Technology student based in Valenzuela City, currently studying at Pamantasan ng Lungsod ng Valenzuela (PLV) with experience through academic projects and university subjects. 
                        <br />
                        <br />
                        As an IT student and aspiring web developer, I build <strong>full-stack websites</strong> that are easy and enjoyable to use. I focus on making sure every design looks great while ensuring the site <strong>runs smoothly</strong> for everyone.
                    </p>
                </div>

                <div className="education pop-item" style={{ '--pop-delay': '0.25s', '--pop-rot': '3deg' }}>
                    <h4 className="labels">Education</h4>
                    <ul>
                        <li>Pamantasan Ng Lungsod Ng Valenzuela</li>
                        <p>Bachelor of Science in Information Technology | 2024 - Present</p>
                        <br />
                        <li>Sitero Francisco Memorial National High School</li>
                        <p>Information and Communication Technology | 2018 - 2024</p>
                    </ul>
                </div>

                <div className="CFO pop-item" style={{ '--pop-delay': '0.4s', '--pop-rot': '-2deg' }}>
                    <h4 className="labels">Currently Focused On</h4> 
                    <ul>
                        <li>Develop engaging multimedia content through 2D animation and digital drawing.</li>
                        <li>Create structured and efficient web systems.</li>
                    </ul>
                </div>
            </div>

            <div className="right">
                <div className="skills-container pop-item" style={{ '--pop-delay': '0.3s', '--pop-rot': '5deg' }}> 
                    <div className="board-wrapper"> 
                        <span className="deco-star deco-star--pink board-star"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                        <span className="deco-moon board-moon"><img src="./src/assets/svg/moon-yellow.svg" alt="moon" /></span>

                        <img src="./src/assets/board.jpg" className="corkboard-bg" alt="Skills Board"/> 

                        <div className="icons-overlay">
                            <img src="./src/assets/svg/msword.svg" className="skill-icon icon-word" alt="Word"/> 
                            <img src="./src/assets/svg/msppt.svg" className="skill-icon icon-ppt" alt="PowerPoint"/> 
                            <img src="./src/assets/svg/msexcel.svg" className="skill-icon icon-excel" alt="Excel"/> 
                            <img src="./src/assets/svg/mysql.svg" className="skill-icon icon-mysql" alt="MySQL"/> 
                            <img src="./src/assets/svg/mongodb.svg" className="skill-icon icon-mongodb" alt="MongoDB"/> 
                            <img src="./src/assets/svg/capcut.svg" className="skill-icon icon-capcut" alt="CapCut"/> 
                            <img src="./src/assets/svg/figma.svg" className="skill-icon icon-figma" alt="Figma"/> 
                            <img src="./src/assets/svg/blender.svg" className="skill-icon icon-blender" alt="Blender"/> 
                            <img src="./src/assets/svg/ps.svg" className="skill-icon icon-ps" alt="Photoshop"/> 
                            <img src="./src/assets/svg/js2.svg" className="skill-icon icon-js" alt="JavaScript"/> 
                            <img src="./src/assets/svg/html5.svg" className="skill-icon icon-html" alt="HTML5"/> 
                            <img src="./src/assets/svg/css3.svg" className="skill-icon icon-css" alt="CSS3"/> 
                            <img src="./src/assets/svg/csharp.svg" className="skill-icon icon-csharp" alt="C#"/> 
                            <img src="./src/assets/svg/python.svg" className="skill-icon icon-python" alt="Python"/> 
                        </div>
                    </div>
                </div>

                <div className="BTC pop-item" style={{ '--pop-delay': '0.5s', '--pop-rot': '-3deg' }}> 
                    <h4 className="labels">Beyond the Code</h4>
                    <ul>
                        <li>Crochet & Crafting</li>
                        <li>Badminton</li>
                        <li>Digital Art & Video Editing</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;