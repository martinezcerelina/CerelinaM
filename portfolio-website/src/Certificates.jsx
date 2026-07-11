import { useState } from 'react';

const certificatesData = [
    {
        id: 1,
        title: "NATIONAL CERTIFICATE II IN COMPUTER SYSTEM SERVICING",
        image: "./src/assets/NC2.png",
        description: "Issued by the Technical Education and Skills Development Authority (TESDA) on October 15, 2023. This certification validates proficiency in installing and configuring computer systems, setting up computer networks and servers, and maintaining and repairing computer systems and networks.",
        tags: ["Hardware Repair", "Network Config", "OS Installation", "Server Setup"],
        fileUrl: "./src/assets/certificates/NC2-full.pdf",
    },
    // {
    //     id: 2,
    //     title: "NATIONAL CERTIFICATE II IN COMPUTER SYSTEM SERVICING",
    //     image: "./src/assets/NC2.png",
    //     description: "Issued by the Technical Education and Skills Development Authority (TESDA) on October 15, 2023. This certification validates proficiency in installing and configuring computer systems, setting up computer networks and servers, and maintaining and repairing computer systems and networks.",
    //     tags: ["Hardware Repair", "Network Config", "OS Installation", "Server Setup"],
    //     fileUrl: "./src/assets/certificates/NC2-full.pdf",
    // },
    // {
    //     id: 3,
    //     title: "NATIONAL CERTIFICATE II IN COMPUTER SYSTEM SERVICING",
    //     image: "./src/assets/NC2.png",
    //     description: "Issued by the Technical Education and Skills Development Authority (TESDA) on October 15, 2023. This certification validates proficiency in installing and configuring computer systems, setting up computer networks and servers, and maintaining and repairing computer systems and networks.",
    //     tags: ["Hardware Repair", "Network Config", "OS Installation", "Server Setup"],
    //     fileUrl: "./src/assets/certificates/NC2-full.pdf",
    // },
];

function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    const openModal = (cert) => setSelectedCert(cert);
    const closeModal = () => setSelectedCert(null);

    const handleVerifyCertificate = () => {
        window.open(selectedCert.fileUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="certificates-section">
            <div className="cert-title">
                <h1>Certificates</h1>    
            </div>

            <div className="cert-grid">
                {certificatesData.map((cert) => (
                    <div className="card reveal" style={{ transitionDelay: '.05s' }} key={cert.id}>
                        <span className="card-star card-star--lg"><img src="./src/assets/svg/star.svg" alt="star" /></span> 
                        <span className="card-star card-star--md"><img src="./src/assets/svg/star.svg" alt="star" /></span> 
                        <span className="card-star card-star--sm"><img src="./src/assets/svg/star.svg" alt="star" /></span>

                        <div className="card-inner">
                            <div className="card-image">
                                <img src="./src/assets/svg/moon-yellow.svg" className="cert-moon-icon" alt="moon icon" /> 
                                <img src={cert.image} className="cert-image" alt={cert.title} /> 
                            </div>
                            <div className="card-body">
                                <p className="card-title">{cert.title}</p>
                                <button className="card-btn" onClick={() => openModal(cert)}>View Certificate</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-image-side">
                            <img src={selectedCert.image} alt={selectedCert.title} />
                        </div>

                        <div className="modal-info-side">
                            <button className="modal-close" onClick={closeModal}>&times;</button>

                            <h3 className="modal-title">{selectedCert.title}</h3>
                            <div className="modal-title-underline"></div>

                            <p className="modal-description">{selectedCert.description}</p>

                            <div className="modal-tags">
                                {selectedCert.tags.map((tag, index) => (
                                    <span className="modal-tag" key={index}>{tag}</span>
                                ))}
                            </div>

                            <div className="modal-actions">
                                <button className="button-2"  onClick={handleVerifyCertificate}>
                                    <img src="./src/assets/svg/verify.svg" className="svg"/>
                                    <p>Verify Certificate</p>
                                </button>
                                <button className="modal-close-btn" onClick={closeModal}>
                                    <img src="./src/assets/svg/close2.svg" className="svg"/>
                                    <p>Close</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;