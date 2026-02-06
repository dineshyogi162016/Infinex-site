import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL


const CareerDetails = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    resume: '',
    coverLetter: ''
  });

  console.log("formData : ", formData)  

  const location = useLocation();
  const career = location.state?.CareerData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.contact || !formData.coverLetter) {
      // alert('Please fill in all required fields');
      return;
    }else{

      try {

          const formDataToSend = new FormData()
          formDataToSend.append("name", formData.name);
          formDataToSend.append("email", formData.email);
          formDataToSend.append("contact", formData.contact);
          formDataToSend.append("coverLetter", formData.coverLetter);
          formDataToSend.append("resume", formData.resume);

          const APIContactData = await axios.post(`${REACT_APP_API_URL}/admin/managecareer/applyjob`, formDataToSend,
            {
              headers: {
                "Content-Type" : "multipart/form-data",
              },
            }
          )
  
          if(APIContactData.data.success){
              alert(APIContactData.data.message)
          }
          // else{
          //     console.log("Add Member Response : ", APIContactData.data)
          // }
  
      } catch (error) {
          console.log("Error in Adding Member API")
      }

    }

    setShowApplicationForm(false);
    setFormData({
      name: '',
      email: '',
      contact: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="job-opening-container">
      {/* Job Title Section */}
      <div className="job-opening-title-section">
        <div className="job-opening-company-info">
          INFINEX TECHNOLOGY | Full time
        </div>
        <h1 className="job-opening-job-title">{career.name}</h1>
        <div className="job-opening-location-date">
          {career.location} | Posted on {career.postedDate}
        </div>

        <div className="job-opening-action-buttons">
          <button 
            className="job-opening-interested-btn"
            onClick={() => setShowApplicationForm(true)}
          >
            I'm interested
          </button>
          <button className="job-opening-share-btn">
            Share job via email
          </button>
        </div>

        <div className="job-opening-social-share">
          <p>Share this job with your network</p>
          <div className="job-opening-social-icons">
            <div className="job-opening-social-icon">f</div>
            <div className="job-opening-social-icon">X</div>
            <div className="job-opening-social-icon">in</div>
            <div className="job-opening-social-icon">W</div>
            <div className="job-opening-social-icon">T</div>
            <div className="job-opening-social-icon">🔗</div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="job-opening-modal-overlay">
          <div className="job-opening-modal">
            <div className="job-opening-modal-header">
              <h2>Apply for Senior Software Engineer Position</h2>
              <button 
                className="job-opening-close-btn"
                onClick={() => setShowApplicationForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="job-opening-form">
              <div className="job-opening-form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="resume">Resume *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept="image/*"
                  // accept=".pdf,.doc,.docx,.png,.img"
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>
              <div className="job-opening-form-actions">
                <button 
                  type="button" 
                  className="job-opening-cancel-btn"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </button>

                <button 
                  type="submit" 
                  className="job-opening-submit-btn"
                  onClick={handleSubmit}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="job-opening-main-content">
        <div className="job-opening-left-section">
          {/* Job Description */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Job Description</h2>
            <div className="job-opening-description">
              <p>
                {career.description}
              </p>
              
            </div>
          </section>

          {/* Responsibilities */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Responsibilities</h2>
            <ul className="job-opening-list">
              {career.responsibilities
                ?.split('.')
                .filter(item => item.trim() !== '')
                .map((point, index) => (
                  <li key={index}>{point.trim()}.</li>
                ))}
            </ul>
          </section>

          {/* Requirements */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Requirements</h2>
            <ul className="job-opening-list">
              {career.requirements
                ?.split('.')
                .filter(item => item.trim() !== '') // empty strings hata do
                .map((point, index) => (
                  <li key={index}>{point.trim()}.</li>
                ))}
            </ul>
          </section>

          {/* Benefits */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Benefits</h2>
            <ul className="job-opening-list">
              {career.benefits
                ?.split('.')
                .filter(item => item.trim() !== '') // empty strings hata do
                .map((point, index) => (
                  <li key={index}>{point.trim()}.</li>
                ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="job-opening-right-section">
          <div className="job-opening-sidebar">
            <h3 className="job-opening-sidebar-title">Job Information</h3>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Number of Positions</span>
              <span className="job-opening-info-value">{career.openings}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Date Opened</span>
              <span className="job-opening-info-value">{career.applyEndDate}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Job Type</span>
              <span className="job-opening-info-value">{career.jobType}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Location</span>
              <span className="job-opening-info-value">{career.location}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Experience Required</span>
              <span className="job-opening-info-value">{career.experience}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Posted</span>
              <span className="job-opening-info-value">{career.postedDate}</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Apply By</span>
              <span className="job-opening-info-value">{career.applyEndDate}</span>
            </div>

            <button 
              className="job-opening-apply-now-btn"
              onClick={() => setShowApplicationForm(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
