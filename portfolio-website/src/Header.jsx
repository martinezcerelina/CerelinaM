import { useEffect } from 'react';

function Header() {

  useEffect(() => {
    const links = {
      'home-container':   document.querySelector('a[href="#home-container"]'),
      'aboutme-section':  document.querySelector('a[href="#aboutme-section"]'),
      'projects-section': document.querySelector('a[href="#projects-section"]'),
      'contact-section':  document.querySelector('a[href="#contact-section"]'),
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Object.values(links).forEach(l => l?.classList.remove('active'));
          links[entry.target.id]?.classList.add('active');
        }
      });
    }, { threshold: 0.4 });

    Object.keys(links).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        <a href="/files/CerelinaMartinez_CV.pdf" download="CerelinaMartinez_CV.pdf" className="btn-wrapper">
          <span className="btn-star btn-star--1"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
          <span className="btn-star btn-star--2"><img src="./src/assets/svg/star.svg" alt="" /></span>
          <span className="btn-star btn-star--3"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
          <span className="btn-star btn-star--4"><img src="./src/assets/svg/star.svg" alt="" /></span>
          <button className="btn-main">Download CV</button>
        </a>
      </div>
    </header>
  );
}

export default Header;