import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import {AllTeam} from '../../LocalAssets/SampleData'
import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const ManageTeam = () => {

    const [Team, setTeam] = useState ({
        profileImage : "",
        name : "",
        email : "",
        jobrole : "",
        contact : "",
        address : "",
        bio : "",
        skills : "",
        show : false
    })

    const [AllTeamData, setAllTeamData] = useState([])
    const [buttonType, setbuttonType] = useState("ADD+")
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    

    const handleChange = (e)=>{
        setTeam({...Team, [e.target.name] : e.target.value})
    }
    const handleCheckBox = (e) => {
        setTeam({...Team, [e.target.name]: !(Team.show)})
    }


    const handleShowData = (i) => {
        const updateTableData = [...AllTeamData]

        updateTableData[i].show = !updateTableData[i].show;
        setAllTeamData(updateTableData)
    }


    const handleAddTeam = async(e) => {
        e.preventDefault();
        if(buttonType === "UPDATE"){
            try {
                const APITeamData = await axios.put(`${REACT_APP_API_URL}/admin/manageteam/updatemember/${Team._id}`, Team)

                console.log("APITeamData",  APITeamData)

                if(APITeamData.data.success){
                    alert(APITeamData.data.message)

                    GetMembers()
                }else{
                    console.log("Update Member Response : ", APITeamData.data)
                }

            } catch (error) {
                console.log("Error in Update Member API")
            }

            setbuttonType("ADD+")
        }else{
            
            try {
                const APITeamData = await axios.post(`${REACT_APP_API_URL}/admin/manageteam/addmember`, Team)

                if(APITeamData.data.success){
                    alert(APITeamData.data.message)

                    GetMembers()
                }else{
                    console.log("Add Member Response : ", APITeamData.data)
                }

            } catch (error) {
                console.log("Error in Adding Member API")
            }
            
            // const preNav = [...AllTeamData, Team]
            // setAllTeamData(preNav)
        }

        setTeam({
            name : "",
            email : "",
            jobrole : "",
            Contact : "",
            address : "",
            bio : "",
            skills : "",
            show : "off"
        })

        closeModal()
    }

    const handleDeleteTeam = (i) => {
        const newList = [...AllTeamData];
        newList.splice(i,1)
        setAllTeamData(newList)
    }

    const handleEditTeam = (e, i) => {
        setTeam(e)
        openModal()
        setbuttonType("UPDATE")
        // handleAddTeam()
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

    // Team Api's 
    const GetMembers = async () => {
        try {

            const APITeamData = await axios.get(`${REACT_APP_API_URL}/admin/manageteam/getmembers`)    
            setAllTeamData(APITeamData.data.response)

        } catch (error) {
            console.log("Error in Get Member's API")
        }
    }

    const DeleteMember = async (e) => {
        try {
            const APITeamData = await axios.delete(`${REACT_APP_API_URL}/admin/manageteam/deletemember/${e._id}`)

            console.log("APITeamData",  APITeamData)

            if(APITeamData){
                alert("Delete message successfully")

                GetMembers()
            }

        } catch (error) {
            console.log("Error in Deleting Member API")
        }
    }

    useEffect(()=>{
        // setAllTeamData(AllTeam)

        GetMembers()
    }, [])


  return (
    <>
        <div className="content-bg-area admin-content-heading">
            <h2>Manage Team </h2>

            <button className="admin-main-btn" onClick={openModal} >Add+ Member</button>
        </div>
        
        {(AllTeamData.length <= 0) && <div className="card-body content-bg-area text-center">
            <h4>No Data found</h4>
        </div>}
        {(AllTeamData.length > 0) && <div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Profile</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Email</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Contact</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Jobrole</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Address</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>bio</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Skills</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {AllTeamData&&
                            AllTeamData.map((e, i)=>{
                                return(
                                    <tr key={i+1}>
                                        <td className="p-3 text-sm">
                                            <h4 className=" font-bold">{i+1}</h4>
                                        </td>
                                        <td className="p-3 text-sm">
                                            {/* {NavIcon = allIcons[e.icon]}
                                            <h2 className=" font-bold">{NavIcon && <NavIcon />}</h2> */}
                                            <img src={"/assets/img/team/"+e.profileImage} style={{width:"40px", borderRadius:"50px"}} alt="profile" />
                                        </td>
                                        <td className="p-3">
                                            <h5 className="font-medium">{e.name}</h5>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.email}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.contact}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.jobrole}</p>
                                        </td>
                                        <td className="p-3">
                                            <div className="checkbox-wrapper-6">
                                                <label className="" htmlFor="autoSizingSelect"></label>
                                                <input onChange={()=> handleShowData(i)} className="tgl tgl-light" id={'cb1-'+(i+1)} type="checkbox" checked={e.show} />
                                                <label className="tgl-btn" htmlFor={'cb1-'+(i+1)}> </label>
                                            </div>   
                                        </td>
                                        <td className="p-3">
                                            {/* <p className="font-medium text-teal-500">{e.address.slice(0,13)}</p> */}
                                            <p className="font-medium text-teal-500">{e.address}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.bio}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.skills}</p>
                                            {/* {skillsArray = e.skills.split()} */}
                                                {/* <p className="font-medium text-teal-500">{
                                                    skillsArray.map((e)=>{
                                                        return(
                                                            <span className='text-info' >{e}</span>
                                                        )
                                                    })
                                                }</p> */}
                                        </td>
                                        <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                            {/* <span className="inline-flex items-center rounded-3xl font-semibold bg-teal-400 text-teal-500"><MdIcons.MdOutlineDeleteForever /></span> */}
                                            <h4 onClick={()=> setTeam(e)} data-bs-toggle="offcanvas" data-bs-target="#viewTeamMemberDetail" aria-controls="offcanvasRight" className='text-dark' style={{cursor: "pointer ", marginRight: "15px"}}  ><FaIcons.FaRegEye /></h4>
                                            <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>DeleteMember(e)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                            <h3 className='text-primary' style={{cursor: "pointer"}} onClick={()=>handleEditTeam(e, i)} ><FaIcons.FaEdit /></h3>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>									
        </div>}

        {/* Sidebar  */}
        <div class="offcanvas offcanvas-end" tabindex="-1" id="viewTeamMemberDetail" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
              <h4 style={{fontWeight: "bold" }} class="offcanvas-title" id="offcanvasRightLabel">{Team.name} Details</h4>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="row gy-2 gx-3 align-items-center">
                <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Show Status</label>   
                    <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                        <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                        <input onChange={handleCheckBox} checked={Team.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
                        <label className="tgl-btn" htmlFor="cb1-6"> </label>
                    </div>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Profile Image</label><br />
                    <img src={"/assets/img/Team/"+Team.profileImage} style={{width:"60px", borderRadius:"0px"}} alt="profile" />
                    <p className='m-0' >{Team.profileImage} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Member Email</label>
                    <p className='m-0' >{Team.email} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Member Job Role</label>
                    <p className='m-0' >{Team.jobrole} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Member Contact</label>
                    <p className='m-0' >{Team.contact} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Member Address</label>
                    <p className='m-0' >{Team.address} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Member Bio</label>
                    <p className='m-0' >{Team.bio} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Member Skills</label>
                    <p className='m-0' >{Team.skills} </p>
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
                        <h3>Add/Update Team</h3>
                    </div>
                    <form onSubmit={handleAddTeam}>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-100">
                                <label className="" htmlFor="">Member Name</label>
                                <input required onChange={handleChange} value={Team.name} name='name' type="text" className="form-control" id="" placeholder="Name" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Profile Image</label>
                                <input type="file" id="TeamProfileImage" className="form-control" onChange={(e) => setTeam({...Team, profileImage: e.target.files[0]})} name='profileImage' accept="image/*" placeholder='Profile Image'/>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Email</label>
                                <input required onChange={handleChange} value={Team.email} name='email' type="text" className="form-control" id="" placeholder="Email" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Job Role</label>
                                <select required onChange={handleChange} value={Team.jobrole} name='jobrole' className="form-select" placeholder="Job Role">
                                    <option selected disabled>Choose Job Title...</option>
                                    <option value="Super Admin">Super Admin</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="HR">HR</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Contact</label>
                                <input required onChange={handleChange} value={Team.contact} name='contact' type="text" className="form-control" id="" placeholder="Contact No." />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Address</label>
                                <input required onChange={handleChange} value={Team.address} name='address' type="text" className="form-control" id="" placeholder="Address" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Bio</label>
                                <input required onChange={handleChange} value={Team.bio} name='bio' type="text" className="form-control" id="" placeholder="Bio" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Member Skills</label>
                                <input required onChange={handleChange} value={Team.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" />
                            </div>
                            <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                                <label className="" htmlFor="">Show Status</label>   
                                <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                                    <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                                    <input onChange={handleCheckBox} checked={Team.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
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
    </>
  )
}

export default ManageTeam
