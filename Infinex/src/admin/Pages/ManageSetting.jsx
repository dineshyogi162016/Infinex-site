import React, { useState } from 'react'

const ManageSetting = () => {
    const [profile, setProfile] = useState({})

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    const handleSave = () => {

    }

  return (
    <main className="page-container ">
      <div className="page-header admin-content-heading">
        <h1>Settings</h1>
      </div>
      {/* <div className="content-bg-area admin-content-heading">
        <h2>Manage Career </h2>
      </div> */}

      <div className="settings-grid">
        <div className="settings-section mx-2 my-2">
          <div className="settings-header">
            {/* <FiUser /> */}
            <h2>Profile Settings</h2>
          </div><hr />
          <form onSubmit={handleSave}>
            <div className="form-group mt-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input form-control" name="name" value={profile.name || ''} onChange={handleChange} placeholder="Enter your name" />
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input form-control" name="email" value={profile.email || ''} disabled />
            </div>
            <div className="form-group mt-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input form-control" name="phone" value={profile.phone || ''} onChange={handleChange} placeholder="Enter your phone number" />
            </div>
            {/* <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>
            {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>} */}
          </form>
        </div>

        <div className="settings-section mx-2 my-2">
          <div className="settings-header">
            {/* <FiBriefcase /> */}
            <h2>Business Information</h2>
          </div><hr />
          <button className="btn btn-primary" >
            Edit Business Info
          </button>
          {/* <Modal show={showBizModal} onClose={() => setShowBizModal(false)} title="Edit Business Info" footer={
            <button className="btn btn-secondary" onClick={() => setShowBizModal(false)}>Cancel</button>
          }>
            <form onSubmit={handleBizSave}>
              <div className="form-group">
                <label className="form-label">Business Name</label>
                <input type="text" className="form-input" name="name" value={businessInfo.name} onChange={handleBizChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Business Address</label>
                <textarea className="form-input" name="address" rows="3" value={businessInfo.address} onChange={handleBizChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Tax ID / VAT Number</label>
                <input type="text" className="form-input" name="taxId" value={businessInfo.taxId} onChange={handleBizChange} />
              </div>
              <div className="form-group">
                <label className="form-label">GSTIN</label>
                <input type="text" className="form-input" name="gstin" value={businessInfo.gstin} onChange={handleBizChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" name="email" value={businessInfo.email} onChange={handleBizChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile</label>
                <input type="tel" className="form-input" name="mobile" value={businessInfo.mobile} onChange={handleBizChange} />
              </div>
              <button className="btn btn-primary" type="submit" disabled={bizSaving}>{bizSaving ? 'Saving...' : 'Save'}</button>
              {bizSuccess && <div style={{ color: 'green', marginTop: 8 }}>{bizSuccess}</div>}
              {bizError && <div style={{ color: 'red', marginTop: 8 }}>{bizError}</div>}
            </form>
          </Modal> */}
        </div>

        <div className="settings-section mx-2 my-2">
          <div className="settings-header">
            {/* <FiBell /> */}
            <h2>Notification Settings</h2>
          </div><hr />
          <div className="form-group">
            <h6 className="form-label">Email Notifications</h6>
            <div className="checkbox-group">
              <label className="checkbox-label mt-3">
                <input
                  type="checkbox"
                  name="newInvoiceNotification"
                //   checked={notifications.newInvoiceNotification}
                //   onChange={handleNotificationChange}
                />
                WhatsApp contact
              </label><br />
              <label className="checkbox-label mt-3">
                <input
                  type="checkbox"
                  name="paymentReceivedNotification"
                //   checked={notifications.paymentReceivedNotification}
                //   onChange={handleNotificationChange}
                />
                Get in touch
              </label><br />
              <label className="checkbox-label mt-3">
                <input
                  type="checkbox"
                  name="paymentOverdueNotification"
                //   checked={notifications.paymentOverdueNotification}
                //   onChange={handleNotificationChange}
                />
                Apply in job
              </label><br />
            </div>
          </div>
        </div>

        <div className="settings-section mx-2 my-2">
          <div className="settings-header">
            {/* <FiLock /> */}
            <h2>Security Settings</h2>
          </div><hr />
          <div className="form-group mt-3">
            <label className="form-label">Current Password</label>
            <input type="password" className="form-input form-control" />
          </div>
          <div className="form-group mt-3">
            <label className="form-label">New Password</label>
            <input type="password" className="form-input form-control" />
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Confirm New Password</label>
            <input type="password" className="form-input form-control" />
          </div>
          <button className="btn btn-primary mt-3">Update Password</button>
        </div>
      </div>
    </main>
  )
}

export default ManageSetting
