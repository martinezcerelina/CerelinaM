import { useState, useEffect } from 'react';

import ps1 from '../public/Photoshop1.jpg';
import ps2 from '../public/Photoshop2.jpg';
import ps3 from '../public/Photoshop3.jpg';
import ps4 from '../public/Photoshop4.jpg';
import ps5 from '../public/Photoshop5.jpg';

const carouselImages = [ps1, ps2, ps3, ps4, ps5];

// Add modal details for each project card
const webProjects = [
    {
        id: 1,
        title: "DREAMY CRAFTS",
        image: "#",
        category: "web",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations. This project focuses on seamless user transitions and responsive layouts optimized for high-performance rendering.",
        tags: ["HTML/CSS", "React", "2D Animation", "GSAP"],
        websiteUrl: "https://example.com",
    },
    {
        id: 2,
        title: "ALLOWANCE WISE",
        image: "#",
        category: "web",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations. This project focuses on seamless user transitions and responsive layouts optimized for high-performance rendering.",
        tags: ["HTML/CSS", "React", "2D Animation", "GSAP"],
        websiteUrl: "https://example.com",
    },
    {
        id: 3,
        title: "shcoks",
        image: "#",
        category: "web",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations. This project focuses on seamless user transitions and responsive layouts optimized for high-performance rendering.",
        tags: ["HTML/CSS", "React", "2D Animation", "GSAP"],
        websiteUrl: "https://example.com",
    },
];

const animProjects = [
    {
        id: 4,
        title: "ALLOWANCE WISE",
        image: "#",
        category: "anim",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations.",
        tags: ["2D Animation", "After Effects"],
        animationUrl: "https://example.com/animation",
    },
    {
        id: 5,
        title: "ALLOWANCE WISE",
        image: "#",
        category: "anim",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations.",
        tags: ["2D Animation", "After Effects"],
        animationUrl: "https://example.com/animation",
    },
    {
        id: 6,
        title: "ALLOWANCE WISE",
        image: "#",
        category: "anim",
        description: "A high-fidelity interactive experience combining modern web technologies with fluid 2D animations.",
        tags: ["2D Animation", "After Effects"],
        animationUrl: "https://example.com/animation",
    },
];

function Project() {
    const [currentActive, setCurrentActive] = useState(2);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const [activeCategory, setActiveCategory] = useState('graphic');
    
    // Modal state
    const [selectedProject, setSelectedProject] = useState(null);

    const totalCards = carouselImages.length;

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let spacing = 190; 
    if (screenWidth <= 768) spacing = 120; 
    if (screenWidth <= 485) spacing = 90;  

    const getCardStyle = (index) => {
        let offset = index - currentActive;
        if (offset > Math.floor(totalCards / 2)) offset -= totalCards;
        if (offset < -Math.floor(totalCards / 2)) offset += totalCards;

        const absOffset = Math.abs(offset);
        const x = offset * spacing;
        const scale = 1 - (absOffset * 0.15);
        const zIndex = 10 - absOffset;
        const opacity = absOffset > 2 ? 0 : 1;

        return {
            transform: `translateX(${x}px) scale(${scale})`,
            zIndex: zIndex,
            opacity: opacity,
            transition: 'transform 0.4s ease, opacity 0.4s ease, z-index 0.4s ease',
            position: 'absolute'
        };
    };

    const handleFilterCat = (category) => {
        setActiveCategory(category);
    };

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const handleViewWebsite = () => {
        window.open(selectedProject.websiteUrl, '_blank', 'noopener,noreferrer');
    };

    const handleViewAnimation = () => {
        window.open(selectedProject.animationUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projects-section">
            <div className="proj-title">
                <h2 className="projects-title">
                    Pro
                    <span className="letter-wrap">
                        <img src="./src/assets/svg/star-yellow.svg" alt="star" className="heading-star" />
                        1
                    </span>
                    e
                    <img src="./src/assets/svg/moon-yellow.svg" alt="moon" className="moon-letter" />
                    ts
                </h2>
            </div>

            <div className="cat-tabs reveal" style={{ transitionDelay: '.1s' }}>
                <button 
                    className={`cat-tab ${activeCategory === 'graphic' ? 'active' : ''}`} 
                    onClick={() => handleFilterCat('graphic')}
                >
                    GRAPHIC DESIGN
                </button>
                <button 
                    className={`cat-tab ${activeCategory === 'web' ? 'active' : ''}`} 
                    onClick={() => handleFilterCat('web')}
                >
                    WEB DEV
                </button>
                <button 
                    className={`cat-tab ${activeCategory === 'anim' ? 'active' : ''}`} 
                    onClick={() => handleFilterCat('anim')}
                >
                    2D ANIMATIONS
                </button>
            </div>

            {activeCategory === 'graphic' && (
                <div className="reel-wrapper">
                    <button 
                        className="reel-arrow reel-arrow--left" 
                        onClick={() => setCurrentActive((prev) => (prev - 1 + totalCards) % totalCards)}
                        aria-label="Previous project"
                    >
                        <img src="./src/assets/svg/arrow.svg" alt="previous" />
                    </button>

                    <div 
                        className="reel-stage" 
                        id="reel-stage"
                        onWheel={(e) => { if (e.cancelable) e.preventDefault(); }}
                    >
                        {carouselImages.map((imgSrc, i) => {
                            const isCenter = i === currentActive;
                            return (
                                <article 
                                    key={i}
                                    className={`reel-card ${isCenter ? 'is-center' : ''}`} 
                                    style={getCardStyle(i)}
                                    onClick={() => {
                                        if (currentActive !== i) setCurrentActive(i);
                                    }}
                                >
                                    <div className="card-number">
                                        <img src={imgSrc} alt={`Photoshop project ${i + 1}`} />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <button 
                        className="reel-arrow reel-arrow--right" 
                        onClick={() => setCurrentActive((prev) => (prev + 1) % totalCards)}
                        aria-label="Next project"
                    >
                        <img src="./src/assets/svg/arrow.svg" alt="next" />
                    </button>
                </div>
            )}

            {activeCategory === 'web' && (
                <div className="proj-grid">
                    {webProjects.map((project) => (
                        <div className="card reveal" style={{ transitionDelay: '.05s' }} key={project.id}>
                            <span className="card-star card-star--lg"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                            <span className="card-star card-star--md"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                            <span className="card-star card-star--sm"><img src="./src/assets/svg/star.svg" alt="star" /></span>

                            <div className="card-inner">
                                <div className="card-image">
                                    <img src="./src/assets/svg/moon-yellow.svg" className="cert-moon-icon" alt="moon design" />
                                    <img src={project.image} className="cert-image" alt={project.title} />
                                </div>
                                <div className="card-body">
                                    <p className="card-title">{project.title}</p>
                                    <p className="card-description">{project.description}</p>
                                    
                                    <button className="card-btn" onClick={() => openModal(project)}>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeCategory === 'anim' && (
                <div className="proj-grid">
                    {animProjects.map((project) => (
                        <div className="card reveal" style={{ transitionDelay: '.05s' }} key={project.id}>
                            <span className="card-star card-star--lg"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                            <span className="card-star card-star--md"><img src="./src/assets/svg/star.svg" alt="star" /></span>
                            <span className="card-star card-star--sm"><img src="./src/assets/svg/star.svg" alt="star" /></span>

                            <div className="card-inner">
                                <div className="card-image">
                                    <img src="./src/assets/svg/moon-yellow.svg" className="cert-moon-icon" alt="moon design" />
                                    <img src={project.image} className="cert-image" alt={project.title} />
                                </div>
                                <div className="card-body">
                                    <p className="card-title">{project.title}</p>
                                    <button className="card-btn" onClick={() => openModal(project)}>View</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}

            <div className="view-all-wrapper btn-wrapper">
                    <span className="btn-star btn-star--1"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
                    <span className="btn-star btn-star--2"><img src="./src/assets/svg/star.svg" alt="" /></span>
                    <span className="btn-star btn-star--3"><img src="./src/assets/svg/star-yellow.svg" alt="" /></span>
                    <span className="btn-star btn-star--4"><img src="./src/assets/svg/star.svg" alt="" /></span>
                <a href="#"><button className="button-3">View All Projects</button></a>
            </div>

            {/* Project Viewer Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-image-side">
                            <div className="monitor-mockup">
                                <div className="monitor-screen">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                </div>
                                <div className="monitor-stand"></div>
                                <div className="monitor-base"></div>
                            </div>
                        </div>

                        <div className="modal-info-side">
                            <button className="modal-close" onClick={closeModal}>&times;</button>

                            <h3 className="modal-title">{selectedProject.title}</h3>
                            <div className="modal-title-underline"></div>

                            <p className="modal-description">{selectedProject.description}</p>

                            <div className="modal-tags">
                                {selectedProject.tags.map((tag, index) => (
                                    <span className="modal-tag" key={index}>{tag}</span>
                                ))}
                            </div>

                            <div className="modal-actions">
                                {selectedProject.category === 'web' && (
                                    <>
                                        <button className="button-2 btn-main" onClick={handleViewWebsite}>
                                            <img src='./src/assets/svg/arrow (2).svg' className="svg"/>
                                            <p>View Website</p>
                                        </button>
                                        <button className="modal-close-btn" onClick={closeModal}>
                                            <img src="./src/assets/svg/close2.svg" className="svg"/>
                                            <p>Close</p>
                                        </button>
                                    </>
                                )}

                                {selectedProject.category === 'anim' && (
                                    <>
                                        <button className="btn-main" onClick={handleViewAnimation}>
                                            ▶ View Animation
                                        </button>
                                        <button className="modal-close-btn" onClick={closeModal}>
                                            <img src="./src/assets/svg/close2.svg" className="svg"/>
                                            <p>Close</p>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Project;