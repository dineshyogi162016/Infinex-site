import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import {CareerDetails} from '../../LocalAssets/SampleData'
import axios from 'axios';
import { IoMailOpen } from 'react-icons/io5';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const ManageCareer = () => {

    const [Career, setCareer] = useState ({
        name : "",
        department : "",
        jobType : "",
        jobLevel : "",
        openings : "",
        experience : "",
        location : "",
        // postedDate : "",
        applyEndDate : "",
        description : "",
        responsibilities : "",
        requirements : "",
        benefits : "",
        link : "",
        show : false
    })

    


    const [AllCareerData, setAllCareerData] = useState([])
    const [jobApplications , setjobApplications] = useState([])
    const [buttonType, setbuttonType] = useState("ADD+")
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // For message model 
    const [ReadMessage, setReadMessage] = useState(false)
    const [isReadMessageClosing, setisReadMessageClosing] = useState(false)
    const [ShowMessage, setShowMessage] = useState({})

    // Pagination Assets 
    const [currentPage, setcurrentPage] = useState(1)
    const recordPerPage = 5;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = jobApplications.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(jobApplications.length / recordPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)


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
    

    const handleAddCareer = async(e) => {
        e.preventDefault();
        if(buttonType === "UPDATE"){
            try {
                const APITeamData = await axios.put(`${REACT_APP_API_URL}/admin/managecareer/updatejob/${Career._id}`, Career)

                // console.log("APITeamData",  APITeamData)

                if(APITeamData.data.success){
                    alert(APITeamData.data.message)

                    GetJobs()
                }else{
                    console.log("Update Member Response : ", APITeamData.data)
                }

            } catch (error) {
                console.log("Error in Update Member API")
            }

            setbuttonType("ADD+")
        }else{
             try {
                const APITeamData = await axios.post(`${REACT_APP_API_URL}/admin/managecareer/addjob/`, Career)

                if(APITeamData.data.success){
                    alert(APITeamData.data.message)

                    GetJobs()
                }else{
                    console.log("Add Member Response : ", APITeamData.data)
                }

            } catch (error) {
                console.log("Error in Adding Member API")
            }
        }

        setCareer({
            name : "",
            department : "",
            jobType : "",
            jobLevel : "",
            openings : "",
            experience : "",
            location : "",
            postedDate : "",
            applyEndDate : "",
            description : "",
            responsibilities : "",
            requirements : "",
            benefits : "",
            link : "",
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

    // For model 
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

    // For message MOdel
    const closeReadMessageModal = () => {
        setisReadMessageClosing(true);
        setTimeout(() => {
            setReadMessage(false);
        }, 300);
    };

     const openReadMessageModal = (e) => {
        setReadMessage(true);
        setisReadMessageClosing(false);


        setShowMessage(e)
        if(!e.read){
            ReadJobApplication(e)
        }
    };


    // For Api CAll
    const GetJobs = async () => {
        try {

            const APITeamData = await axios.get(`${REACT_APP_API_URL}/admin/managecareer/getjobs`)    
            setAllCareerData(APITeamData.data.response)

        } catch (error) {
            console.log("Error in Get Member's API")
        }
    }

     const DeleteJob = async (e) => {
        try {
            const APITeamData = await axios.delete(`${REACT_APP_API_URL}/admin/managecareer/DeleteJob/${e._id}`)

            // console.log("APITeamData",  APITeamData)

            if(APITeamData){
                alert("Delete Job successfully")

                GetJobs()
            }

        } catch (error) {
            console.log("Error in Deleting Member API")
        }
    }

    const handleshowHideJob = async (e) => {
        try {
            const showHideJob = await axios.put(`${REACT_APP_API_URL}/admin/managecareer/showHideJob/${e._id}`, e)

            if(showHideJob.data.success){
                GetJobs()
            }

        } catch (error) {
            console.log("Error in Update Show Hide Job API")
        }
    }

    // Job Apply Functions 
    const GetJobApplications = async () => {
        try {

            const APIJobApplicatoinData = await axios.get(`${REACT_APP_API_URL}/admin/managecareer/getjobapplications`)    
            setjobApplications(APIJobApplicatoinData.data.response)
        

        } catch (error) {
            console.log("Error in Get Applicatoin's API")
        }
    }

    const DeleteApplication = async(e) => {
        try {
            const APIContactData = await axios.delete(`${REACT_APP_API_URL}/admin/managecareer/DeleteJobApplicatoins/${e._id}`)

            if(APIContactData){
                alert("Applicatoin Delete successfully")

                GetJobApplications()
            }

        } catch (error) {
            console.log("Error in Deleting Applications API")
        }
    }

    const ReadJobApplication = async(e) => {
        try {
            const ReadJobApplication = await axios.put(`${REACT_APP_API_URL}/admin/managecareer/ReadJobApplicatoins/${e._id}`)

            if(ReadJobApplication.data.success){
                GetJobApplications()
            }

        } catch (error) {
            console.log("Error in Update Member API")
        }
    }
    

    const nextPage = () =>{
        if(currentPage !== nPage){
            setcurrentPage(currentPage+1)
        }
    }

    const previosPage = () => {
        if(currentPage !== 1){
            setcurrentPage(currentPage-1)
        }
    }

    const changePage = (id) => {
        setcurrentPage(id)
    }

    useEffect(()=>{
        setAllCareerData(CareerDetails)

        GetJobs()
        GetJobApplications()
    }, [])
  return (
    <>
        <div className="content-bg-area admin-content-heading">
            <h2>Manage Career </h2>

            <button className="admin-main-btn" onClick={openModal} >Add+ </button>
        </div>

        {(AllCareerData.length <= 0) && <div className="card-body content-bg-area text-center">
            <h4>No Data found</h4>
        </div>}
        {(AllCareerData.length > 0) &&<div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Department</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>JobType</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>JobLevel</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Openings</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Experience</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Location</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>PostDate</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>ApplyEndDate</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Description</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Responsibilities</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>requirements</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Benefits</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Path</h4></th>
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
                                            <h5 className="font-medium">{e.department}</h5>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.jobType}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.jobLevel}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.openings}</p>
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
                                                <input onChange={()=> handleShowData(i)} onClick={() => handleshowHideJob(e)} className="tgl tgl-light" id={'cb1-'+(i+1)} type="checkbox" checked={e.show} />
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
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.link}</p>
                                        </td>

                                        <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                        <a target='_blank' rel="noreferrer" href={e.videoLink}><p className="font-medium text-teal-500">{e.videoLink}</p></a>
                                            <h4 onClick={()=> setCareer(e)} data-bs-toggle="offcanvas" data-bs-target="#viewCareerDetail" aria-controls="offcanvasRight" className='text-dark' style={{cursor: "pointer ", marginRight: "15px"}}  ><FaIcons.FaRegEye /></h4>
                                            <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=> DeleteJob(e)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                            <h3 className='text-primary' style={{cursor: "pointer"}} onClick={()=>handleEditCareer(e, i)} ><FaIcons.FaEdit /></h3>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>									
        </div>}

        <div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                <h1 className='text-center' style={{fontWeight:"bold"}} >Job Applicatoins</h1><hr />
                {(jobApplications.length <= 0) && <div className="card-body content-bg-area text-center">
                    <h4>No Data found</h4>
                </div>}
                {(jobApplications.length > 0) && <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Email</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Contact</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Resume</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>CoverLetter</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((e, i)=>{
                            return(
                                <tr key={i+1} style={{fontWeight: e.read === false ? "bold" : "400" }}>
                                    <td className="p-3 text-sm">
                                        <h4 className="" style={{fontWeight: e.read === false ? "bold" : "400" }}>{i+1}</h4>
                                    </td>
                                    <td className="p-3">
                                        <h5 className="" style={{fontWeight: e.read === false ? "bold" : "400" }}>{e.name}</h5>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.email}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.contact}</p>
                                    </td>
                                    <td className="p-3">
                                        <a href={REACT_APP_API_URL+`/Uploads/`+e.resume} target='_blank'>  <img src={REACT_APP_API_URL+`/Uploads/`+e.resume} alt="" width={40} height={40} /> </a>
                                        {/* <p className="font-medium text-teal-500">{e.resume}</p> */}
                                    </td>
                                    <td className="p-3">
                                        <p className="font-medium text-teal-500">{e.coverLetter}</p>
                                    </td>
                                    <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                        <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>DeleteApplication(e)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                        <h3 className='' style={{cursor: "pointer"}} onClick={()=>openReadMessageModal(e, i)} >{e.read === false ? <IoIcons.IoMdMailUnread />: <IoMailOpen />}</h3>
                                    </td>
                                    
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>}

            </div>	
            <nav aria-label="Page navigation example ">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous" onClick={previosPage}>
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only"></span>
                        </a>
                    </li>
                    {
                        numbers.map((n,i) => (
                            <li class={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
                                <a class="page-link" href="#" onClick={()=>changePage(n)}>
                                    {n}
                                </a>
                            </li>
                        ))
                    }
                    
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next" onClick={nextPage}>
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only"></span>
                        </a>
                    </li>
                </ul>
            </nav>							
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
                                <label className="" htmlFor="">Department</label>
                                <select required onChange={handleChange} value={Career.department} name='department' className="form-select" placeholder="Department">
                                    <option value="" disabled>Department</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Marketing">Sales</option>
                                    <option value="Marketing">Product</option>
                                    <option value="Marketing">Data Science</option>
                                    <option value="Marketing">Operations</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Job Type</label>
                                <select required onChange={handleChange} value={Career.jobType} name='jobType' className="form-select" placeholder="JobType">
                                    <option value="" disabled >Job Type</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Job Level</label>
                                <select required onChange={handleChange} value={Career.jobLevel} name='jobLevel' className="form-select" placeholder="Job Level">
                                    <option value="" disabled >Job Level</option>
                                    <option value="Entry Level">Entry Level</option>
                                    <option value="Mid Level">Mid Level</option>
                                    <option value="Senior Level">Marketing</option>
                                    <option value="Executive">Sales</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Job Openings</label>
                                <input required onChange={handleChange} value={Career.openings} name='openings' type="text" className="form-control" id="" placeholder="Job Openings" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Experience</label>
                                <input required onChange={handleChange} value={Career.experience} name='experience' type="text" className="form-control" id="" placeholder="Experience" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Location</label>
                                <input required onChange={handleChange} value={Career.location} name='location' type="text" className="form-control" id="" placeholder="Location" />
                            </div>

                            {/* <div className="col-100 mt-3">
                                <label className="" htmlFor="">Posted Date</label>
                                <input required onChange={handleChange} value={Career.postedDate} name='postedDate' type="date" className="form-control" id="" placeholder="postedDate" />
                            </div> */}
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
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Benefits</label>
                                {/* <input required onChange={handleChange} value={Career.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" /> */}
                                <textarea name="benefits" value={Career.benefits} onChange={handleChange} rows={3} required />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Path</label>
                                <select required onChange={handleChange} value={Career.link} name='link' className="form-select" placeholder="Path">
                                    <option value="" disabled>Path</option>
                                    <option value="/Software">Software</option>
                                    <option value="/uiux">uiux</option>
                                    <option value="/digital">digital</option>
                                </select>
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
                            <label className="" htmlFor="">Contact</label>
                            <span style={{fontWeight: "400"}} >{ShowMessage.contact}</span>
                        </div>
                        <div className="col-100 mt-3">
                            <label className="" htmlFor="">Resume</label>
                            <a href={REACT_APP_API_URL+`/Uploads/`+ShowMessage.resume} target='_blank'>  <img src={REACT_APP_API_URL+`/Uploads/`+ShowMessage.resume} alt="" width={150} height={200} /> </a>
                        </div>
                        <div className="col-100 mt-3">
                            <label className="" htmlFor="">Cover Letter</label>
                            <span style={{fontWeight: "400"}} >{ShowMessage.coverLetter}</span>
                        </div>
                    </div>        
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
                        <input onChange={handleCheckBox} onClick={() => handleshowHideJob(Career)} checked={Career.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
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
                    <p className='mx-2' >{Career.description
                        ?.split('.')
                        .filter(item => item.trim() !== '')
                        .map((point, index) => (
                        <li key={index}>{point.trim()}.</li>
                    ))} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">responsibilities</label>
                    <p className='mx-2' >{Career.responsibilities
                        ?.split('.')
                        .filter(item => item.trim() !== '')
                        .map((point, index) => (
                        <li key={index}>{point.trim()}.</li>
                    ))} </p>
                    
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">requirements</label>
                    <p className='mx-2' >{Career.requirements
                        ?.split('.')
                        .filter(item => item.trim() !== '')
                        .map((point, index) => (
                        <li key={index}>{point.trim()}.</li>
                    ))} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">benefits</label>
                    <p className='mx-2' >{Career.benefits
                        ?.split('.')
                        .filter(item => item.trim() !== '')
                        .map((point, index) => (
                        <li key={index}>{point.trim()}.</li>
                    ))} </p>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ManageCareer
