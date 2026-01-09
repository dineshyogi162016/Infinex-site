import React, { useEffect, useState } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import './AdminJanvi.css';

const defaultBlogs = [
  {
    title: 'Mastering React',
    author: 'John Doe',
    titleImage: '',
    content: 'Learn React from basics to hooks...',
    images: [],
    status: true,
  },
  {
    title: 'AI in 2025',
    author: 'Jane Smith',
    titleImage: '',
    content: 'AI will transform how we work and live...',
    images: [],
    status: true,
  }
];

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [viewBlog, setViewBlog] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    titleImage: '',
    content: '',
    images: [],
    status: true,
  });

useEffect(() => {
  const stored = localStorage.getItem('blogs');
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed) && parsed.length > 0) {
      setBlogs(parsed);
    } else {
      setBlogs(defaultBlogs);
      localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
    }
  } catch {
    setBlogs(defaultBlogs);
    localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
  }
}, []);


  const saveBlogs = (updated) => {
    setBlogs(updated);
    localStorage.setItem('blogs', JSON.stringify(updated));
  };

  const handleSubmit = () => {
    const updated = [...blogs];
    if (editingIndex !== null) {
      updated[editingIndex] = blogData;
    } else {
      updated.push(blogData);
    }
    saveBlogs(updated);
    closeForm();
  };

  const openForm = (index = null) => {
    if (index !== null) {
      setEditingIndex(index);
      setBlogData(blogs[index]);
    } else {
      setEditingIndex(null);
      setBlogData({
        title: '',
        author: '',
        titleImage: '',
        content: '',
        images: [],
        status: true,
      });
    }
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingIndex(null);
  };

  const deleteBlog = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;
    const updated = blogs.filter((_, i) => i !== index);
    saveBlogs(updated);
  };

  const toggleStatus = (index) => {
    const updated = [...blogs];
    updated[index].status = !updated[index].status;
    saveBlogs(updated);
  };

  const reorderImages = (start, end) => {
    const reordered = Array.from(blogData.images);
    const [moved] = reordered.splice(start, 1);
    reordered.splice(end, 0, moved);
    setBlogData({ ...blogData, images: reordered });
  };

  const handleDrag = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDrop = (e, index) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("imageIndex"), 10);
    reorderImages(draggedIndex, index);
  };

  return (
    <>
      <div className="admin-content-bg-area">
        <div className="blog-admin-header">
          <h2>Blogs</h2>
          <button className="admin-about-add-btn" onClick={() => openForm()}>
            Add Blog <span className="about-admin-icon">+</span>
          </button>
        </div>
      </div>

      <div className="admin-content-bg-area">
        <div className="relative overflow-x-auto">
          <table className="centent-align-center table table-hover text-sm text-gray-500">
            <thead>
              <tr className="text-sm">
                <th className="p-3 font-semibold"><h4>Title</h4></th>
                <th className="p-3 font-semibold"><h4>Status</h4></th>
                <th className="p-3 font-semibold"><h4>Author</h4></th>
                <th className="p-3 font-semibold"><h4>Action</h4></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td className="about-title-font">
                    <div className="title-cell">
                      {blog.titleImage ? (
                        <img src={blog.titleImage} alt="img" className="circle-img" />
                      ) : <div className="circle-img empty" />}
                      <span>{blog.title}</span>
                    </div>
                  </td>
                  <td>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={blog.status} onChange={() => toggleStatus(index)} />
                      <span className="admin-about-slider"></span>
                    </label>
                  </td>
                  <td className="about-title-font">{blog.author}</td>
                  <td className="actions">
                    <button className="admin-about-icon-btn black" onClick={() => setViewBlog(blog)}>
                      <MdIcons.MdRemoveRedEye />
                    </button>
                    <button className="admin-about-icon-btn red" onClick={() => deleteBlog(index)}>
                      <MdIcons.MdOutlineDeleteForever />
                    </button>
                    <button className="admin-about-icon-btn blue" onClick={() => openForm(index)}>
                      <FaIcons.FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="blog-form-modal">
          <div className="blog-form-box">
            <button className="close-btn" onClick={closeForm}>×</button>
            <h3>{editingIndex !== null ? 'Edit Blog' : 'Add Blog'}</h3>

            <label>Title</label>
            <input value={blogData.title} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} />

            <label>Author</label>
            <input value={blogData.author} onChange={(e) => setBlogData({ ...blogData, author: e.target.value })} />

            <label>Title Image</label>
            <input type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setBlogData({ ...blogData, titleImage: url });
              }
            }} />

            <label>Content</label>
            <textarea
              className="long-textarea"
              value={blogData.content}
              onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
            />

            <label>Upload Blog Images (drag to reorder)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
                setBlogData({ ...blogData, images: [...blogData.images, ...files] });
              }}
            />

            <div className="image-preview-grid">
              {blogData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  draggable
                  onDragStart={(e) => handleDrag(e, idx)}
                  onDrop={(e) => handleDrop(e, idx)}
                  onDragOver={(e) => e.preventDefault()}
                  className="draggable-preview"
                  alt={`preview-${idx}`}
                />
              ))}
            </div>

            <div className="btn-group">
              <button onClick={handleSubmit}>Save</button>
              <button onClick={closeForm}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {viewBlog && (
        <div className="blog-view-modal">
          <div className="blog-view-box">
            <button className="close-btn" onClick={() => setViewBlog(null)}>×</button>
            {viewBlog.titleImage && (
              <img
                src={viewBlog.titleImage}
                className="title-preview-img"
                alt="Title"
                style={{ maxWidth: '200px', borderRadius: '8px', marginBottom: '10px' }}
              />
            )}
            <h2>{viewBlog.title}</h2>
            <p><strong>Author:</strong> {viewBlog.author}</p>
            <p className="blog-content">{viewBlog.content}</p>
            <div className="blog-images">
              {viewBlog.images.map((img, idx) => (
                <img key={idx} src={img} alt={`blog-${idx}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogAdmin;
