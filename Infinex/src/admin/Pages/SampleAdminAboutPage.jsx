import React, { useState } from 'react';

const SampleAdminAboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [aboutData, setAboutData] = useState({
    storyMission: 'Our mission is to create impactful software solutions.',
    techStack: 'React, Node.js, MongoDB, Express.js',
    techStackImage: '',
    valuesVision: 'Innovation, Integrity, and Customer Success.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAboutData(prev => ({
        ...prev,
        techStackImage: reader.result
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const openModal = () => {
    setShowModal(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  return (
    <>
        <div className="content-bg-area admin-heading">
            <h2>Admin Panel - About Section</h2>

            <button className="admin-main-btn" onClick={openModal}>
                Edit About Section
            </button>
        </div>

        <div className="content-bg-area">
            <h3>About Content:</h3>
            <p><strong>Company Story and Mission:</strong><br />{aboutData.storyMission}</p>
            <p><strong>Tech Stack:</strong><br />{aboutData.techStack}</p>
            {aboutData.techStackImage && (
            <img
                src={aboutData.techStackImage}
                alt="Tech Stack"
                style={{ maxWidth: '200px', marginTop: '10px' }}
            />
            )}
            <p><strong>Company Values and Vision:</strong><br />{aboutData.valuesVision}</p>
        </div>

        {showModal && (
            <div className={`Admin-form-modal modal-overlay ${isClosing ? 'fade-out' : ''}`}>
            <div className={`modal-content admin-radius ${isClosing ? 'slide-up' : ''}`}>
                    <button className="close-btn" onClick={closeModal}>×</button>
                    <h3>Edit About Section</h3>
                    <form>
                    <label>Company Story and Mission:</label>
                    <textarea
                        name="storyMission"
                        value={aboutData.storyMission}
                        onChange={handleChange}
                        rows={3}
                        required
                    />

                    <label>Tech Stack:</label>
                    <input
                        type="text"
                        name="techStack"
                        value={aboutData.techStack}
                        onChange={handleChange}
                        required
                    />

                    <label>Upload Tech Stack Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />

                    <label>Company Values and Vision:</label>
                    <textarea
                        name="valuesVision"
                        value={aboutData.valuesVision}
                        onChange={handleChange}
                        rows={3}
                        required
                    />

                    <div className="text-center mt-3">
                        <button className='admin-main-btn' type="button" onClick={closeModal}>Save and Close</button>
                    </div>
                    </form>
            </div>
            </div>
        )}
    </>
  );
};

export default SampleAdminAboutPage;