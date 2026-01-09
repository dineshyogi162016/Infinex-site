import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

import './AdminJanvi.css';

const defaultData = [
  { id: 'story', title: 'Story', content: 'Our story began...', status: true, images: [] },
  { id: 'mission', title: 'Mission', content: 'To provide innovative solutions...', status: true, images: [] },
  { id: 'vision', title: 'Vision', content: 'To be a global leader...', status: true, images: [] },
  { id: 'values', title: 'Values', content: 'Integrity, Excellence, Teamwork...', status: true, images: [] },
];

const AboutAdmin = () => {
  const [entries, setEntries] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', images: [] });
  const [editingId, setEditingId] = useState(null);

  // Load or initialize data
  useEffect(() => {
    const stored = localStorage.getItem('aboutData');
    if (stored) {
      let parsed = JSON.parse(stored);
      const existingIds = parsed.map(entry => entry.id);
      defaultData.forEach(item => {
        if (!existingIds.includes(item.id)) parsed.push(item);
      });
      setEntries(parsed);
      localStorage.setItem('aboutData', JSON.stringify(parsed));
    } else {
      setEntries(defaultData);
      localStorage.setItem('aboutData', JSON.stringify(defaultData));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('aboutData', JSON.stringify(entries));
  }, [entries]);

  // Add or edit entry
  const handleAddOrEdit = () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Please fill out all fields');
      return;
    }

    if (editingId) {
      const updated = entries.map(entry =>
        entry.id === editingId ? { ...entry, ...form } : entry
      );
      setEntries(updated);
    } else {
      const newEntry = {
        id: Date.now().toString(),
        ...form,
        status: true,
      };
      setEntries([...entries, newEntry]);
    }

    setForm({ title: '', content: '', images: [] });
    setEditingId(null);
    setFormModalOpen(false);
  };

  const handleDelete = id => {
    if (["story", "mission", "vision", "values"].includes(id)) {
      alert("Cannot delete default entries.");
      return;
    }
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleEdit = (entry) => {
    setForm({
      title: entry.title,
      content: entry.content,
      images: entry.images || []
    });
    setEditingId(entry.id);
    setFormModalOpen(true);
  };

  const toggleStatus = id => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, status: !entry.status } : entry
    ));
  };

  return (
	<>
    <div className="admin-content-bg-area">
      <div className="blog-admin-header">
        <h2>About</h2>
        <button
          className="admin-about-add-btn"
          onClick={() => {
            setForm({ title: '', content: '', images: [] });
            setEditingId(null);
            setFormModalOpen(true);
          }}
        >
          Add  <span className="about-admin-icon">+</span>
        </button>
		</div>
      </div>


        <div className="admin-content-bg-area ">
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        {/*<th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>*/}
                            <th scope="col" className="p-3 font-semibold"><h4>Title</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4> </th>
                        </tr>
                    </thead>
                   <tbody>
            {entries.map(entry => (
              <tr key={entry.id}>
                {/*<td>{entry.title}</td>*/}
				<td className="about-title-font">{entry.title}</td>

                <td>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={entry.status}
                      onChange={() => toggleStatus(entry.id)}
                    />
                    <span className="admin-about-slider" />
                  </label>
                </td>
             <td>
 <button className="admin-about-icon-btn black" onClick={() => setModalData(entry)}>
    <MdIcons.MdRemoveRedEye />
  </button>
  <button className="admin-about-icon-btn red" onClick={() => handleDelete(entry.id)}>
    <MdIcons.MdOutlineDeleteForever />
  </button>
  <button className="admin-about-icon-btn blue" onClick={() => handleEdit(entry)}>
   <FaIcons.FaEdit />
  </button>
</td>

              </tr>
            ))}
          </tbody>
                </table>
            </div>									
        </div>


      {/* Info Modal */}
      {modalData && (
        <div className="admin-about-modal-overlay" onClick={() => setModalData(null)}>
          <div className="admin-about-modal" onClick={(e) => e.stopPropagation()}>
            <button className="admin-about-close" onClick={() => setModalData(null)}>×</button>
            <h3>{modalData.title}</h3>
            <p>{modalData.content}</p>
            {modalData.images?.length > 0 && (
              <div className="admin-about-modal-images">
                {modalData.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`preview-${idx}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Add/Edit Form Modal */}
      {formModalOpen && (
        <div className="admin-about-modal-overlay" onClick={() => setFormModalOpen(false)}>
          <div className="admin-about-modal" onClick={(e) => e.stopPropagation()}>
            <button className="admin-about-close" onClick={() => setFormModalOpen(false)}>×</button>
            <h3>{editingId ? 'Edit Entry' : 'Add New Entry'}</h3>

            <div className="admin-about-floating-label">
              <input
                type="text"
                required
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder=" "
              />
              <label>Title</label>
            </div>

            <div className="admin-about-floating-label">
              <textarea
                required
                value={form.content}
                onChange={e => setForm({ ...form, content: e.target.value })}
                placeholder=" "
                rows={7}
              />
              <label>Content</label>
            </div>

            {/* Image Upload and Preview */}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                files.forEach(file => {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setForm(prev => ({
                      ...prev,
                      images: [...(prev.images || []), reader.result]
                    }));
                  };
                  reader.readAsDataURL(file);
                });
              }}
            />

            <div className="admin-about-image-grid">
              {(form.images || []).map((img, idx) => (
                <div
                  key={idx}
                  className="admin-about-image-item"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', idx)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const draggedIdx = parseInt(e.dataTransfer.getData('text/plain'));
                    if (draggedIdx !== idx) {
                      const updated = [...form.images];
                      const [moved] = updated.splice(draggedIdx, 1);
                      updated.splice(idx, 0, moved);
                      setForm({ ...form, images: updated });
                    }
                  }}
                >
                  <img src={img} alt={`img-${idx}`} />
                  <button onClick={() => {
                    const updated = form.images.filter((_, i) => i !== idx);
                    setForm({ ...form, images: updated });
                  }}>✖</button>
                </div>
              ))}
            </div>

            <button onClick={handleAddOrEdit} style={{ marginTop: '15px' }}>
              {editingId ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      )}
</>  
);
};

export default AboutAdmin;
