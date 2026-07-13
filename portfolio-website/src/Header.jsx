function Header() {
    return (
        <header>
            <div id="logo-container">
                <a href="#home-container" id="logo">
                    <img 
                        src="./src/assets/logo.png" 
                        alt="CM Logo"
                        style={{ width: '52px', height: '48px' }} 
                    /> 
                </a>
                <h3>Cerelina M.</h3>
            </div>

            <nav>
                <a href="#home-container">HOME</a>
                <a href="#aboutme-section">ABOUT</a>
                <a href="#projects-section">PROJECTS</a>
                <a href="#contact-section">CONTACTS</a>
            </nav>

            <div id="CV">
                <a href="/files/CerelinaMartinez_CV.pdf" download="CerelinaMartinez_CV.pdf">
                    <button>Download CV</button>
                </a>
            </div>
        </header>
    );
}

export default Header;