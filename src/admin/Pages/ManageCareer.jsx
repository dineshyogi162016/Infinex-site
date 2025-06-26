import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import {CareerDetails} from '../../LocalAssets/SampleData'

const ManageCareer = () => {

    const [Career, setCareer] = useState ({
        name : "",
        jobType : "",
        experience : "",
        location : "",
        postedDate : "",
        applyEndDate : "",
        description : "",
        responsibilities : "",
        requirements : "",
        benefits : "",
        show : false
    })

    const [AllCareerData, setAllCareerData] = useState([])
    const [buttonType, setbuttonType] = useState("ADD+")
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    

    const handleChange = (e)=>{
        setCareer({...Career, [e.target.name] : e.target.value})
    }
    const handleCheckBox = (e) => {
        setCareer({...Career, [e.target.name]: !(Career.show)})
    }


    const handleShowData = (i) => {
        const updateTableData = [...AllCareerData]

        updateTableData[i].show = !updateTableData[i].show;
        setAllCareerData(updateTableData)
    }
    

    const handleAddCareer = (e) => {
        e.preventDefault();
        if(buttonType === "UPDATE"){
            // AllCareerData[] = Career ;

            setbuttonType("ADD+")
        }else{
            const preNav = [...AllCareerData, Career]
    
            setAllCareerData(preNav)
        }

        setCareer({
            name : "",
            jobType : "",
            experience : "",
            location : "",
            postedDate : "",
            applyEndDate : "",
            description : "",
            responsibilities : "",
            requirements : "",
            benefits : "",
            show : false
        })

        closeModal()
    }

    const handleDeleteCareer = (i) => {
        const newList = [...AllCareerData];
        newList.splice(i,1)
        setAllCareerData(newList)
    }
    const handleEditCareer = (e, i) => {
        setCareer(e)
        openModal()
        setbuttonType("UPDATE")
    }

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

    useEffect(()=>{
        setAllCareerData(CareerDetails)
    }, [])
  return (
    <>
        <div className="content-bg-area admin-content-heading">
            <h2>Manage Career </h2>

            <button className="admin-main-btn" onClick={openModal} >Add+ </button>
        </div>

        <div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>JobType</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Experience</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Location</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>PostDate</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>ApplyEndDate</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Description</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Responsibilities</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>requirements</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Benefits</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {AllCareerData&&
                            AllCareerData.map((e, i)=>{
                                return(
                                    <tr key={i+1}>
                                        <td className="p-3 text-sm">
                                            <h4 className=" font-bold">{i+1}</h4>
                                        </td>
                                        <td className="p-3">
                                            <h5 className="font-medium">{e.name}</h5>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.jobType}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.experience}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.location}</p>
                                        </td>
                                        <td className="p-3">
                                            <div className="checkbox-wrapper-6">
                                                <label className="" htmlFor="autoSizingSelect"></label>
                                                <input onChange={()=> handleShowData(i)} className="tgl tgl-light" id={'cb1-'+(i+1)} type="checkbox" checked={e.show} />
                                                <label className="tgl-btn" htmlFor={'cb1-'+(i+1)}> </label>
                                            </div>   
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.postedDate}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.applyEndDate}</p>
                                        </td>
                                        <td className="p-3"> 
                                            <p className="font-medium text-teal-500">{e.description.slice(0,30)}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.responsibilities.slice(0,30)}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.requirements.slice(0,30)}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.benefits.slice(0,30)}</p>
                                        </td>
                                        <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                        <a target='_blank' rel="noreferrer" href={e.videoLink}><p className="font-medium text-teal-500">{e.videoLink}</p></a>
                                            <h4 onClick={()=> setCareer(e)} data-bs-toggle="offcanvas" data-bs-target="#viewCareerDetail" aria-controls="offcanvasRight" className='text-dark' style={{cursor: "pointer ", marginRight: "15px"}}  ><FaIcons.FaRegEye /></h4>
                                            <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>handleDeleteCareer(i)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                            <h3 className='text-primary' style={{cursor: "pointer"}} onClick={()=>handleEditCareer(e, i)} ><FaIcons.FaEdit /></h3>
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
                        <h3>Add/Update Career</h3>
                    </div>
                    <form onSubmit={handleAddCareer}>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-100">
                                <label className="" htmlFor="">Job Name</label>
                                <input required onChange={handleChange} value={Career.name} name='name' type="text" className="form-control" id="" placeholder="Name" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Job Type</label>
                                <select required onChange={handleChange} value={Career.jobType} name='jobType' className="form-select" placeholder="JobType">
                                    <option disabled>...JobType...</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Experience</label>
                                <input required onChange={handleChange} value={Career.experience} name='experience' type="text" className="form-control" id="" placeholder="Experience" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Location</label>
                                <input required onChange={handleChange} value={Career.location} name='location' type="text" className="form-control" id="" placeholder="Location" />
                            </div>

                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Posted Date</label>
                                <input required onChange={handleChange} value={Career.postedDate} name='postedDate' type="date" className="form-control" id="" placeholder="postedDate" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Apply End Date</label>
                                <input required onChange={handleChange} value={Career.applyEndDate} name='applyEndDate' type="date" className="form-control" id="" placeholder="Apply End Date" />
                            </div>

                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Description</label>
                                {/* <input required onChange={handleChange} value={Career.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" /> */}
                                <textarea name="description" value={Career.description} onChange={handleChange} rows={3} required />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Responsibilities</label>
                                {/* <input required onChange={handleChange} value={Career.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" /> */}
                                <textarea name="responsibilities" value={Career.responsibilities} onChange={handleChange} rows={3} required />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Requirements</label>
                                {/* <input required onChange={handleChange} value={Career.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" /> */}
                                <textarea name="requirements" value={Career.requirements} onChange={handleChange} rows={3} required />
                            </div>
                            
                            
                            <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                                <label className="" htmlFor="">Show Status</label>   
                                <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                                    <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                                    <input onChange={handleCheckBox} checked={Career.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
                                    <label className="tgl-btn" htmlFor="cb1-6"> </label>
                                </div>
                            </div>
                            
                            <div className="col-100 mt-3 text-center">
                                <button type='submit' className="btn admin-main-btn px-5">{buttonType}</button>
                            </div>
                        </div>
                    </form>
            </div>
            </div>
        )}

        {/* Sidebar  */}
        <div class="offcanvas offcanvas-end" tabindex="-1" id="viewCareerDetail" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
              <h4 style={{fontWeight: "bold" }} class="offcanvas-title" id="offcanvasRightLabel">{Career.name} Details</h4>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="row gy-2 gx-3 align-items-center">
                <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Show Status</label>   
                    <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                        <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                        <input onChange={handleCheckBox} checked={Career.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
                        <label className="tgl-btn" htmlFor="cb1-6"> </label>
                    </div>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Job Type</label>
                    <p className='m-0' >{Career.jobType} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Experience</label>
                    <p className='m-0' >{Career.experience} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Location</label>
                    <p className='m-0' >{Career.location} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Posted Date</label>
                    <p className='m-0' >{Career.postedDate} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Apply End Date</label>
                    <p className='m-0' >{Career.applyEndDate} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Description</label>
                    <p className='m-0' >{Career.description} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">responsibilities</label>
                    <p className='m-0' >{Career.responsibilities} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">requirements</label>
                    <p className='m-0' >{Career.requirements} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">benefits</label>
                    <p className='m-0' >{Career.benefits} </p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ManageCareer
