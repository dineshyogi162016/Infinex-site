import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

import {ContactUs} from '../../LocalAssets/SampleData'
import { Link } from 'react-router-dom';
import { RiMenuAddFill, RiTeamFill } from 'react-icons/ri';

const Dashboard = () => {


    const [ContactsData, setContactsData] = useState({
        email : "",
        contact : "",
        address : "",
        OpenHour : "",
        LocationMap :"",
        SocialMedia : {
            Facebook : "",
            Instagram : "",
            Linkedin : "",
            GitHub : ""
        }
    })
    
    const [ContactUsAllData, setContactUsAllData] = useState([])
    const [buttonType, setbuttonType] = useState("ADD+")

    // For madal 
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
   

    const handleChange = (e)=>{
        // setContactsData({...ContactsData, [e.target.name] : e.target.value, SocialMedia: {[e.target.name] : e.target.value}})

        setContactsData(prev =>["Facebook", "Instagram", "Linkedin", "GitHub"].includes(e.target.name)?
            { ...prev, SocialMedia : {...prev.SocialMedia,  [e.target.name] : e.target.value }} :
            {...prev, [e.target.name] : e.target.value }
        )
    }

    const handleAddEditContact = (e) => {
        e.preventDefault();
        if(buttonType === "UPDATE"){
            // ContactUsAllData[] = Team ;

            setbuttonType("ADD+")
        }else{
            const preNav = [...setContactsData, ContactsData]
    
            setContactsData(preNav)
        }

        

        closeModal()
    }

    const openModal = () => {
        setShowModal(true);
        setIsClosing(false);

        if(ContactsData.email || ContactsData.contact || ContactsData.SocialMedia.Facebook ){
            setbuttonType("UPDATE")
        }
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowModal(false);
        }, 300);
    };


    useEffect(()=>{
        setContactUsAllData(ContactUs.ContactUsData)

        setContactsData(ContactUs.ContactDetails)
    }, [])
  return (
    <>
        <div className="content-bg-area">
            <div className="admin-content-heading">
                <h2> Manage Dashboard </h2>

                <button className="admin-main-btn" onClick={openModal} >+New Invoice</button>
            </div>
            <div>
                <div className="social-media row row-cols-1 row-cols-md-3 g-4 mt-3">
                    <div className="col admin-social-card">
                        <div className="admin-box-hover card h-100" >
                            <div className="card-body d-flex">
                                <h1 className="card-title " style={{color: "#3b5998"}}><RiTeamFill /> </h1>
                                <div className="ml-2" style={{marginLeft: "20px"}}>
                                  <h6 className="card-subtitle mb-2 text-body-secondary">Total Team</h6>
                                  <p className="m-0">4 members</p>
                                  <Link to={"/manageteam"}>View all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col admin-social-card">
                        <div className="admin-box-hover card h-100" >
                            <div className="card-body d-flex">
                                <h1 className="card-title " style={{color: "#3b5998"}}><RiMenuAddFill /> </h1>
                                <div className="ml-2" style={{marginLeft: "20px"}}>
                                  <h6 className="card-subtitle mb-2 text-body-secondary">Navigation Item</h6>
                                  <p className="m-0">7 Items</p>
                                  <Link to={"/managenavigation"}>View all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col admin-social-card">
                        <div className="admin-box-hover card h-100" >
                            <div className="card-body d-flex">
                                <h1 className="card-title " style={{color: "#3b5998"}}><MdIcons.MdPermContactCalendar /> </h1>
                                <div className="ml-2" style={{marginLeft: "20px"}}>
                                  <h6 className="card-subtitle mb-2 text-body-secondary">Total contact us</h6>
                                  <p className="m-0">40 People</p>
                                  <Link to={"/managecontact"}>View all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col admin-social-card">
                        <div className="admin-box-hover card h-100" >
                            <div className="card-body d-flex">
                                <h1 className="card-title " style={{color: "#3b5998"}}><FaIcons.FaFileAlt /> </h1>
                                <div className="ml-2" style={{marginLeft: "20px"}}>
                                  <h6 className="card-subtitle mb-2 text-body-secondary">Total Jobs</h6>
                                  <p className="m-0">6 jobs</p>
                                  <Link to={"/managecareer"}>View all</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        <div className="content-bg-area">
          <div className="admin-content-heading">
            <h2> Recent Activity </h2>

            <Link>View All</Link>
            {/* <button className="admin-main-btn" onClick={openModal} >+New Invoice</button> */}
          </div>

          <div className="admin-contact-show">        
              <div className="admin-box-hover col-100 mt-3">
                  <h1 className="card-title" style={{color: "#3b5998"}}><RiTeamFill /> </h1>
                  <div className="" style={{marginLeft: "20px"}}>
                    <label className="m-0" htmlFor="">New team member added</label>
                    <p className='m-0' style={{fontWeight: "300"}} > 2 hour ago</p>
                  </div>
              </div>
              <div className="admin-box-hover col-100 mt-3">
                  <h1 className="card-title" style={{color: "#3b5998"}}><MdIcons.MdPermContactCalendar /> </h1>
                  <div className="" style={{marginLeft: "20px"}}>
                    <label className="m-0" htmlFor="">New person get in touch</label>
                    <p className='m-0' style={{fontWeight: "300"}} > 3 hour ago</p>
                  </div>
              </div>
          </div>

        </div>
        
        {/* Modal Box  */}
        {showModal && (
            <div className={`Admin-form-modal modal-overlay ${isClosing ? 'fade-out' : ''}`}>
            <div className={`modal-content admin-radius ${isClosing ? 'slide-up' : ''}`}>
                    <div className="modal-heading">
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <h3>Update Contacts</h3>
                    </div>
                    <form onSubmit={handleAddEditContact}>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Email</label>
                                <input required onChange={handleChange} value={ContactsData.email}  name='email' type="text" className="form-control" id="" placeholder="Email" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Contact</label>
                                <input required onChange={handleChange} value={ContactsData.contact} name='contact' type="text" className="form-control" id="" placeholder="Contact No." />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Address</label>
                                <input required onChange={handleChange} value={ContactsData.address} name='address' type="text" className="form-control" id="" placeholder="Address" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Open Hour</label>
                                <input required onChange={handleChange} value={ContactsData.OpenHour} name='OpenHour' type="text" className="form-control" id="" placeholder="Open Hours" />
                            </div>
                            <div className="col-100 mt-3 mb-3">
                                <label className="" htmlFor="">Location Map</label>
                                <input required onChange={handleChange} value={ContactsData.LocationMap} name='LocationMap' type="text" className="form-control" id="" placeholder="Location Map Link" />
                            </div>
                            <hr />
                            <h4 className='text-center' style={{fontWeight: "bold"}}>Social Media</h4>
                            <hr />
                            <div className="col-100 mt-0">
                                <label className="" htmlFor="">Facebook</label>
                                <input required onChange={handleChange} value={ContactsData.SocialMedia.Facebook} name='Facebook' type="text" className="form-control" id="" placeholder="Facebook" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Instagram</label>
                                <input required onChange={handleChange} value={ContactsData.SocialMedia.Instagram} name='Instagram' type="text" className="form-control" id="" placeholder="Instagram" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Linkedin</label>
                                <input required onChange={handleChange} value={ContactsData.SocialMedia.Linkedin} name='Linkedin' type="text" className="form-control" id="" placeholder="Linkedin" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">GitHub</label>
                                <input required onChange={handleChange} value={ContactsData.SocialMedia.GitHub} name='GitHub' type="text" className="form-control" id="" placeholder="GitHub" />
                            </div>
                            <div className="col-100 mt-3 text-center">
                                <button type='submit' className="btn admin-main-btn px-5">{buttonType}</button>
                            </div>
                        </div>
                    </form>
            </div>
            </div>
        )}

    </>
  )
}

export default Dashboard
