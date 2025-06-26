import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import {PortfolioDetails} from '../../LocalAssets/SampleData'

const ManagePortfolio = () => {

    const [Portfolio, setPortfolio] = useState ({
        image : "",
        name : "",
        description : "",
        category : "",
        plateform : "",
        businessType : "",
        url : "",
        videoLink : "",
        show : false
    })

    const [AllPortfolioData, setAllPortfolioData] = useState([])
    const [buttonType, setbuttonType] = useState("ADD+")
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    

    const handleChange = (e)=>{
        setPortfolio({...Portfolio, [e.target.name] : e.target.value})
    }
    const handleCheckBox = (e) => {
        setPortfolio({...Portfolio, [e.target.name]: !(Portfolio.show)})
    }


    const handleShowData = (i) => {
        const updateTableData = [...AllPortfolioData]

        updateTableData[i].show = !updateTableData[i].show;
        setAllPortfolioData(updateTableData)
    }
    

    const handleAddPortfolio = (e) => {
        e.preventDefault();
        if(buttonType === "UPDATE"){
            // AllPortfolioData[] = Portfolio ;

            setbuttonType("ADD+")
        }else{
            const preNav = [...AllPortfolioData, Portfolio]
    
            setAllPortfolioData(preNav)
        }

        setPortfolio({
            image : "",
            name : "",
            description : "",
            category : "",
            plateform : "",
            businessType : "",
            url : "",
            videoLink : "",
            show : false
        })

        closeModal()
    }

    const handleDeletePortfolio = (i) => {
        const newList = [...AllPortfolioData];
        newList.splice(i,1)
        setAllPortfolioData(newList)
    }
    const handleEditPortfolio = (e, i) => {
        setPortfolio(e)
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
        setAllPortfolioData(PortfolioDetails)
    }, [])
  return (
    <>
        <div className="content-bg-area admin-content-heading">
            <h2>Manage Portfolio </h2>

            <button className="admin-main-btn" onClick={openModal} >Add+ Portfolio</button>
        </div>

        <div className="card-body content-bg-area ">
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                        <th scope="col" className="p-3 font-semibold"><h4>Sr.</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Profile</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Category</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Business Type</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Plateform</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>url</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>videoLink</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>description</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {AllPortfolioData&&
                            AllPortfolioData.map((e, i)=>{
                                return(
                                    <tr key={i+1}>
                                        <td className="p-3 text-sm">
                                            <h4 className=" font-bold">{i+1}</h4>
                                        </td>
                                        <td className="p-3 text-sm">
                                            <img src={"/assets/img/Team/"+e.image} style={{width:"40px", borderRadius:"50px"}} alt="profile" />
                                        </td>
                                        <td className="p-3">
                                            <h5 className="font-medium">{e.name}</h5>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.category}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.businessType}</p>
                                        </td>
                                        <td className="p-3">
                                            <div className="checkbox-wrapper-6">
                                                <label className="" htmlFor="autoSizingSelect"></label>
                                                <input onChange={()=> handleShowData(i)} className="tgl tgl-light" id={'cb1-'+(i+1)} type="checkbox" checked={e.show} />
                                                <label className="tgl-btn" htmlFor={'cb1-'+(i+1)}> </label>
                                            </div>   
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.plateform}</p>
                                        </td>
                                        <td className="p-3">
                                        <a target='_blank' rel="noreferrer" href={e.url}><p className="font-medium text-teal-500">{e.url}</p></a>
                                        
                                        </td>
                                        <td className="p-3">
                                            <a target='_blank' rel="noreferrer" href={e.videoLink}><p className="font-medium text-teal-500">{e.videoLink.slice(0,30)}</p></a>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.description.slice(0,30)}</p>
                                        </td>
                                        <td className="p-3" style={{display: "flex", alignItems: "center"}}>
                                            <h4 onClick={()=> setPortfolio(e)} data-bs-toggle="offcanvas" data-bs-target="#viewPortalDetail" aria-controls="offcanvasRight" className='text-dark' style={{cursor: "pointer ", marginRight: "15px"}}  ><FaIcons.FaRegEye /></h4>
                                            <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>handleDeletePortfolio(i)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                            <h3 className='text-primary' style={{cursor: "pointer"}} onClick={()=>handleEditPortfolio(e, i)} ><FaIcons.FaEdit /></h3>
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>									
        </div>


        {/* Sidebar  */}
        <div class="offcanvas offcanvas-end" tabindex="-1" id="viewPortalDetail" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
              <h4 style={{fontWeight: "bold" }} class="offcanvas-title" id="offcanvasRightLabel">{Portfolio.name} Details</h4>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="row gy-2 gx-3 align-items-center">
                <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Show Status</label>   
                    <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                        <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                        <input onChange={handleCheckBox} checked={Portfolio.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
                        <label className="tgl-btn" htmlFor="cb1-6"> </label>
                    </div>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Image</label><br />
                    <img src={"/assets/img/Team/"+Portfolio.image} style={{width:"60px", borderRadius:"0px"}} alt="profile" />
                    <p className='m-0' >{Portfolio.image} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Portfolio Description</label>
                    <p className='m-0' >{Portfolio.description} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Portfolio Category</label>
                    <p className='m-0' >{Portfolio.category} </p>
                </div>
                <div className="col-100 mt-3">
                    <label className="" style={{fontWeight: "bold" }} htmlFor="">Plateform</label>
                    <p className='m-0' >{Portfolio.plateform} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Bussiness Type</label>
                    <p className='m-0' >{Portfolio.businessType} </p>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">URL</label>
                    <a target='_blank' rel="noreferrer" href={Portfolio.url}><p className="font-medium text-teal-500">{Portfolio.url}</p></a>
                </div>
                <div className="col-100 mt-3">
                    <label style={{fontWeight: "bold" }} className="" htmlFor="">Portfolio Video</label>
                    <a target='_blank' rel="noreferrer" href={Portfolio.videoLink}><p className="font-medium text-teal-500">{Portfolio.videoLink}</p></a>
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
                        <h3>Add/Update Portfolio</h3>
                    </div>
                    <form onSubmit={handleAddPortfolio}>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-100">
                                <label className="" htmlFor="">Portfolio Name</label>
                                <input required onChange={handleChange} value={Portfolio.name} name='name' type="text" className="form-control" id="" placeholder="Name" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Profile Image</label>
                                <input required type="file" id="PortfolioProfileImage" className="form-control" onChange={(e) => setPortfolio({...Portfolio, image: e.target.files[0]})} name='image' accept="image/*" placeholder='Profile Image'/>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Category</label>
                                <select required onChange={handleChange} value={Portfolio.category} name='category' className="form-select" placeholder="Category">
                                    <option selected disabled>...Category...</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="HR">HR</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Quality analysts">Quality analysts</option>
                                    <option value="Data analysts">Data analysts</option>
                                </select>
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Business Type</label>
                                <input required onChange={handleChange} value={Portfolio.businessType} name='businessType' type="text" className="form-control" id="" placeholder="Business Type" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Plateform</label>
                                <input required onChange={handleChange} value={Portfolio.plateform} name='plateform' type="text" className="form-control" id="" placeholder="Plateform" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">URL</label>
                                <input required onChange={handleChange} value={Portfolio.url} name='url' type="text" className="form-control" id="" placeholder="URL" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Video Link</label>
                                <input required onChange={handleChange} value={Portfolio.videoLink} name='videoLink' type="text" className="form-control" id="" placeholder="Video Link" />
                            </div>
                            <div className="col-100 mt-3">
                                <label className="" htmlFor="">Description</label>
                                {/* <input required onChange={handleChange} value={Portfolio.skills} name='skills' type="text" className="form-control" id="" placeholder="Skills" /> */}
                                <textarea name="description" value={Portfolio.description} onChange={handleChange} rows={3} required />
                            </div>
                            <div className="col-100 mt-3" style={{display: "flex",justifyContent: "space-between"}}> 
                                <label className="" htmlFor="">Show Status</label>   
                                <div className="checkbox-wrapper-6 d-flex" style={{display : "block"}}>
                                    <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                                    <input onChange={handleCheckBox} checked={Portfolio.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
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

export default ManagePortfolio
