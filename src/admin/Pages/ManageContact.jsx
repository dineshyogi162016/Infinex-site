import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

import {ContactUs} from '../../LocalAssets/SampleData'
import { Link } from 'react-router-dom';
import { FaSquareGithub, FaSquareInstagram, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { IoMailOpen } from 'react-icons/io5';

const ManageContact = () => {


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
    const [ShowMessage, setShowMessage] = useState({})
    const [buttonType, setbuttonType] = useState("ADD+")

    // For madal 
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [ReadMessage, setReadMessage] = useState(false)
    const [isReadMessageClosing, setisReadMessageClosing] = useState(false)
    

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

    const handleDeleteContact = (i) => {
        const newList = [...ContactUsAllData];
        newList.splice(i,1)
        setContactUsAllData(newList)
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

    const openReadMessageModal = (e) => {
        setReadMessage(true);
        setisReadMessageClosing(false);


        setShowMessage(e)
    };

    const closeReadMessageModal = () => {
        setisReadMessageClosing(true);
        setTimeout(() => {
            setReadMessage(false);
        }, 300);
    };

    console.log("ContactsData : ", ContactsData )
    useEffect(()=>{
        setContactUsAllData(ContactUs.ContactUsData)

        setContactsData(ContactUs.ContactDetails)
    }, [])
  return (
    <>
        <div className="content-bg-area">
            <div className="admin-content-heading">
                <h2> Manage Contacts </h2>

                <button className="admin-main-btn" onClick={openModal} >Add/Edit Contacts</button>
            </div>
            {ContactsData && <div>
                {ContactsData.SocialMedia && <div className="social-media row row-cols-1 row-cols-md-3 g-4 mt-3">
                    <div class="col admin-social-card">
                        <div class="admin-box-hover card h-100" >
                            <div class="card-body">
                                <h1 class="card-title" style={{color: "#3b5998"}}><IoIcons.IoLogoFacebook /> </h1>
                                <h5 class="card-subtitle mb-2 text-body-secondary">Facebook</h5>
                                <Link target='_blank' to={ContactsData.SocialMedia.Facebook} class="card-text">{ContactsData.SocialMedia.Facebook.slice(0,24)}</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col admin-social-card">
                        <div class="admin-box-hover card h-100" >
                            <div class="card-body">
                                <h1 class="card-title" style={{color: "#ff0276"}}><FaSquareInstagram /> </h1>
                                <h5 class="card-subtitle mb-2 text-body-secondary">Instagram</h5>
                                {ContactsData.SocialMedia && <Link target='_blank' to={ContactsData.SocialMedia.Instagram} class="card-text">{ContactsData.SocialMedia.Instagram.slice(0,25)}</Link>}
                            </div>
                        </div>
                    </div>
                    <div class="col admin-social-card">
                        <div class="admin-box-hover card h-100" >
                            <div class="card-body">
                                <h1 class="card-title" style={{color: "#0a66c2"}}><FaLinkedin /> </h1>
                                <h5 class="card-subtitle mb-2 text-body-secondary">Linkedin</h5>
                                {ContactsData.SocialMedia && <Link target='_blank' to={ContactsData.SocialMedia.Linkedin} class="card-text">{ContactsData.SocialMedia.Linkedin.slice(0,24)}</Link>}
                            </div>
                        </div>
                    </div>
                    <div class="col admin-social-card">
                        <div class="admin-box-hover card h-100" >
                            <div class="card-body">
                                <h1 class="card-title" style={{color: "#000"}} ><FaSquareGithub /> </h1>
                                <h5 class="card-subtitle mb-2 text-body-secondary">GitHub</h5>
                                {ContactsData.SocialMedia && <Link target='_blank' to={ContactsData.SocialMedia.GitHub} class="card-text">{ContactsData.SocialMedia.GitHub.slice(0,30)}</Link>}
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="admin-contact-show">
                    <div className="admin-box-hover col-100 mt-3">
                        <h1 class="card-title" style={{color: "#3b5998"}}><MdIcons.MdMarkEmailUnread /> </h1>
                        <label className="" htmlFor="">Email : </label>
                        <a href={"mailto:"+ContactsData.email} ><span style={{fontWeight: "400"}} >{ContactsData.email}</span></a>
                    </div>
                    <div className="admin-box-hover col-100 mt-3">
                        <h1 class="card-title" style={{color: "#3b5998"}}><MdIcons.MdAddIcCall /> </h1>
                        <label className="" htmlFor="">Call Us : </label>
                        <a href={"tel:"+ContactsData.email} ><span style={{fontWeight: "400"}} >{ContactsData.contact}</span></a>
                    </div>
                    <div className="admin-box-hover col-100 mt-3">
                        <h1 class="card-title" style={{color: "#3b5998"}}><FaIcons.FaAddressBook /> </h1>
                        <label className="" htmlFor="">Address : </label>
                        <span style={{fontWeight: "400"}} > {ContactsData.address}</span>
                    </div>
                    <div className="admin-box-hover col-100 mt-3">
                        <h1 class="card-title" style={{color: "#3b5998"}}><MdIcons.MdTimer /> </h1>
                        <label className="" htmlFor="">Open Hour : </label>
                        <span style={{fontWeight: "400"}} > {ContactsData.OpenHour}</span>
                    </div>
                    <div className="admin-box-hover col-100 mt-3 h-100">
                        <h1 class="card-title" style={{color: "#3b5998"}}><FaLocationDot /> </h1>
                        <label className="" htmlFor="">LocationMap: </label>
                        
                        <iframe title='CompanyLocation' style={{marginLeft: "20px", borderRadius: "0 20px 20px 0"}} src={ContactsData.LocationMap} width="100%" height="150" loading="lazy"></iframe>
                    </div>
                </div>
            </div>}
        </div>

        <div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                <h1 className='text-center' style={{fontWeight:"bold"}} >Get In Touch</h1><hr />
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                             <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Email</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Contact</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Address</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {ContactUsAllData && ContactUsAllData.map((e, i)=>{
                            return(
                                <tr key={i+1} style={{fontWeight: e.read === 1 ? "bold" : "400" }}>
                                    <td className="p-3 text-sm">
                                        <h4 className="" style={{fontWeight: e.read === 1 ? "bold" : "400" }}>{i+1}</h4>
                                    </td>
                                    <td className="p-3">
                                        <h5 className="" style={{fontWeight: e.read === 1 ? "bold" : "400" }}>{e.name}</h5>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.email}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.subject}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.address}</p>
                                    </td>
                                    <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                        {/* <span className="inline-flex items-center rounded-3xl font-semibold bg-teal-400 text-teal-500"><MdIcons.MdOutlineDeleteForever /></span> */}
                                        <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>handleDeleteContact(i)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                        <h3 className='' style={{cursor: "pointer"}} onClick={()=>openReadMessageModal(e, i)} >{e.read === 1 ? <IoIcons.IoMdMailUnread />: <IoMailOpen />}</h3>
                                    </td>
                                    
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
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


        {/* Read Message Modal Box  */}
        {ReadMessage && (
            <div className={`Admin-form-modal modal-overlay ${isReadMessageClosing ? 'fade-out' : ''}`}>
            <div className={`modal-content admin-radius ${isReadMessageClosing ? 'slide-up' : ''}`}>
                    <div className="modal-heading">
                        <button className="close-btn" onClick={closeReadMessageModal}>×</button>
                        <h4 style={{fontWeight: "bold"}}>Message From : {ShowMessage.name}</h4>
                    </div>
                    <div className="row gy-2 px-4 py-4 gx-3 align-items-center">
                        <div className="col-100">
                            <label className="" htmlFor="">E-Mail : </label>
                            <span style={{fontWeight: "400"}}>{ShowMessage.email}</span>
                        </div>
                        <div className="col-100 mt-3">
                            <label className="" htmlFor="">Subject</label>
                            <span style={{fontWeight: "400"}} >{ShowMessage.subject}</span>
                        </div>
                        <div className="col-100 mt-3">
                            <label className="" htmlFor="">Address</label>
                            <span style={{fontWeight: "400"}} >{ShowMessage.address}</span>
                        </div>
                        <div className="col-100 mt-3">
                            <label className="" htmlFor="">Message</label>
                            <span style={{fontWeight: "400"}} >{ShowMessage.message}</span>
                        </div>
                    </div>        
            </div>
            </div>
        )}
    </>
  )
}

export default ManageContact
