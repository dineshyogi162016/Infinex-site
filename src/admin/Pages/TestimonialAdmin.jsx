import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import './AdminJanvi.css';

const TestimonialAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 1, review: '', image: '', status: true });
  const [editIndex, setEditIndex] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [reviewModal, setReviewModal] = useState({ isOpen: false, content: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Load from localStorage or use sample reviews
  useEffect(() => {
    const stored = localStorage.getItem('reviews');
    if (!stored || JSON.parse(stored).length === 0) {
      resetToSampleReviews();
    } else {
      setReviews(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const resetToSampleReviews = () => {
    const sampleReviews = [
      {
        name: 'Alice Johnson',
        rating: 5,
        review: 'Infinex team delivered outstanding results! Very professional and timely.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        status: true,
      },
      {
        name: 'Rahul Mehra',
        rating: 4,
        review: 'Great service and support. Highly recommended!',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        status: true,
      }
    ];
    localStorage.setItem('reviews', JSON.stringify(sampleReviews));
    setReviews(sampleReviews);
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRatingChange = (value) => {
    setForm({ ...form, rating: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const removeSelectedImage = () => {
    setForm({ ...form, image: '' });
  };

  const validateForm = () => {
    return form.name.trim() !== '' && form.review.trim() !== '';
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert('Please fill in the name and review fields.');
      return;
    }

    const newReview = { ...form };

    if (editIndex !== null) {
      const updated = [...reviews];
      const globalIndex = reviews.findIndex(
        (r) =>
          r.name === filteredReviews[editIndex].name &&
          r.review === filteredReviews[editIndex].review
      );
      if (globalIndex !== -1) updated[globalIndex] = newReview;
      setReviews(updated);
    } else {
      setReviews([...reviews, newReview]);
    }

    setForm({ name: '', rating: 1, review: '', image: '', status: true });
    setShowFormModal(false);
    setEditIndex(null);
    setCurrentPage(1);
  };

  const handleEdit = (index) => {
    setForm(filteredReviews[index]);
    setEditIndex(index);
    setShowFormModal(true);
  };

  const handleDelete = (index) => {
    const globalIndex = reviews.findIndex(
      (r) =>
        r.name === filteredReviews[index].name &&
        r.review === filteredReviews[index].review
    );
    if (window.confirm('Delete this review?')) {
      const updated = reviews.filter((_, i) => i !== globalIndex);
      setReviews(updated);
    }
  };

  const toggleStatus = (index) => {
    const globalIndex = reviews.findIndex(
      (r) =>
        r.name === filteredReviews[index].name &&
        r.review === filteredReviews[index].review
    );
    if (globalIndex !== -1) {
      const updated = [...reviews];
      updated[globalIndex].status = !updated[globalIndex].status;
      setReviews(updated);
    }
  };

  const openReviewModal = (review) => setReviewModal({ isOpen: true, content: review });
  const closeReviewModal = () => setReviewModal({ isOpen: false, content: '' });

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  const renderStarInput = () => (
    <div className="review-star-input">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={`review-star-click ${form.rating >= num ? 'filled' : ''}`}
          onClick={() => handleRatingChange(num)}
        >
          ★
        </span>
      ))}
    </div>
  );

  const filteredReviews = reviews.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.review.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const paginatedReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage);



const truncateText = (text, wordLimit = 4) => {
  const words = text.trim().split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};


  return (
    <>
      <div className="admin-content-bg-area">
        <div className="blog-admin-header">
          <h2>Client Reviews</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="admin-about-add-btn" onClick={() => setShowFormModal(true)}>
              Add Client Review <span className="about-admin-icon">+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="admin-content-bg-area">
        <input
          type="text"
          placeholder="Search by name or review..."
          className="review-search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="relative overflow-x-auto">
          <table className="centent-align-center table table-hover text-sm text-gray-500">
            <thead>
              <tr className="text-sm">
                <th scope="col" className="p-3 font-semibold"><h4>Client</h4></th>
                <th scope="col" className="p-3 font-semibold"><h4>Rating</h4></th>
                <th scope="col" className="p-3 font-semibold"><h4>Review</h4></th>
                <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
              </tr>
            </thead>
            <tbody>
              {paginatedReviews.length === 0 ? (
                <tr><td colSpan="5">No reviews found.</td></tr>
              ) : (
                paginatedReviews.map((r, i) => (
                  <tr key={i}>
                    <td className="about-title-font">
                      <div className="review-client-info">
                        {r.image && <img src={r.image} alt="Client" className="review-client-image" />}
                        <span>{r.name}</span>
                      </div>
                    </td>
                    <td className="about-title-font">{renderStars(r.rating)}</td>
                    <td className="about-title-font">{truncateText(r.review)}</td>
                    <td>
                      <label className="toggle-switch">
                        <input type="checkbox" checked={r.status} onChange={() => toggleStatus(i)} />
                        <span className="admin-about-slider"></span>
                      </label>
                    </td>
                    <td className="actions">
                      <button className="admin-about-icon-btn black" onClick={() => openReviewModal(r.review)}><MdIcons.MdRemoveRedEye /></button>
                      <button className="admin-about-icon-btn red" onClick={() => handleDelete(i)}><MdIcons.MdOutlineDeleteForever /></button>
                      <button className="admin-about-icon-btn blue" onClick={() => handleEdit(i)}><FaIcons.FaEdit /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="review-pagination">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>◀ Prev</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
          ))}
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next ▶</button>
        </div>
      )}

      {showFormModal && (
        <div className="review-modal-overlay show" onClick={() => setShowFormModal(false)}>
          <div className="review-modal-content review-modal-animate" onClick={(e) => e.stopPropagation()}>
            <h3>{editIndex !== null ? 'Edit Review' : 'Add Client Review'}</h3>
            <div className="review-form">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Client Name" />
              {renderStarInput()}
              <textarea name="review" value={form.review} onChange={handleChange} placeholder="Review Content" rows={3} />
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {form.image && (
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={form.image} alt="Preview" style={{ width: '100px', height: '100px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #ccc' }} />
                  <br />
                  <button onClick={removeSelectedImage} style={{ marginTop: '5px', fontSize: '12px' }}>Remove Image</button>
                </div>
              )}
              <div style={{ margin: '10px 0' }}>
                <label style={{ marginRight: '10px' }}>Status</label>
                <label className="toggle-switch">
                  <input type="checkbox" checked={form.status} onChange={() => setForm({ ...form, status: !form.status })} />
                  <span className="admin-about-slider"></span>
                </label>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => setShowFormModal(false)} style={{ backgroundColor: '#0073b9' ,padding:'8px', borderRadius:'8px'}}>Cancel</button>
                <button onClick={handleSubmit}>{editIndex !== null ? 'Update Review' : 'Add Review'}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {reviewModal.isOpen && (
        <div className="review-modal-overlay show" onClick={closeReviewModal}>
          <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Review</h3>
            <p>{reviewModal.content}</p>
            <button onClick={closeReviewModal} className="review-close-modal">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialAdmin;
