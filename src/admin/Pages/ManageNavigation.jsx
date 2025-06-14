import React, { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import AdminNavigation from '../../LocalAssets/SampleData'

const ManageNavigation = () => {

    const allIcons = { ...MdIcons, ...FaIcons, ...IoIcons };
    let NavIcon
    const [NavItem, setNavItem] = useState ({
        icon : "",
        itemName : "",
        itemLink : "",
        show : "off",
    })

    const [NavigationData, setNavigationData] = useState([])


    const handleChangeNav = (e)=>{
        setNavItem({...NavItem, [e.target.name] : e.target.value})
    }

    const handleAddNavItem = () => {
        const preNav = [...NavigationData, NavItem]

        setNavigationData(preNav)

        setNavItem({
            icon : "",
            itemName : "",
            itemLink : "",
            show : "off",
        })
    }

    const handleNavDelete = (i) => {
        const newList = [...NavigationData];
        const aaa = newList.splice(i,1)
        setNavigationData(newList)
    }
    console.log("NavigationData", NavigationData)
    useEffect(()=>{
        setNavigationData(AdminNavigation)
    }, [])
  return (
    <>
        <div className='ManageNavigation content-bg-area'>
            <div className="navigation-Form">
                <div className="heading-area " style={{paddingRight: "20px", borderRight: "4px solid #f0f5f9"}} >
                    <h4>Add Nav Item</h4>
                </div>
                <div className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto">
                        {/* <label className="visually-hidden" htmlFor="autoSizingInput">Name</label> */}
                        <input onChange={handleChangeNav} value={NavItem.itemName} name='itemName' type="text" className="form-control" id="" placeholder="NavItem Name" />
                    </div>
                    <div className="col-auto">
                        {/* <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label> */}
                        <div className="input-group">
                            {/* <div className="input-group-text">@</div> */}
                            <input onChange={handleChangeNav} value={NavItem.itemLink} name='itemLink' type="text" className="form-control" id="" placeholder="NavItem Link" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                        <select onChange={handleChangeNav} value={NavItem.icon} name='icon' className="form-select" >
                            <option selected disabled>Choose Nav Logo...</option>
                            <option value="MdDashboard">Dashboard</option>
                            <option value="FaUser">User</option>
                            <option value="IoMdSettings">Setting</option>
                        </select>

                        {/* Image Option Select */}
                        {/* <select onChange={handleChangeNav} name='icon' className="form-select" id="ImageExample" style={{width: "160px"}}>
                            <option selected disabled>Choose Nav Logo...</option>
                            <option value={"<MdDashboard />"} data-img-src="/assets/img/team/MdDashboard.png">Dashboard</option>
                            <option value={"<FaUser />"} data-img-src="/assets/img/team/FaUser.png">User</option>
                            <option value={"<IoMdSettings />"} data-img-src="/assets/img/team/IoMdSettings.png">Setting</option>
                        </select> */}
                    </div>
                    <div className="col-auto">    
                        <div className="checkbox-wrapper-6" style={{display : "block"}}>
                            <label className="" htmlFor="autoSizingSelect">OFF/ON</label>
                            <input onChange={handleChangeNav} value={NavItem.show} name='show' className="tgl tgl-light" id="cb1-6" type="checkbox"  />
                            <label className="tgl-btn" htmlFor="cb1-6"> </label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button onClick={handleAddNavItem} className="btn admin-main-btn">Add+</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card-body content-bg-area ">
            {/* <h4 className="text-gray-500 text-lg font-semibold mb-5">Current Navigation item list </h4> */}
            <div className="relative overflow-x-auto">
                
                <table className="centent-align-center table table-hover text-sm text-gray-500">
                    <thead>
                        <tr className="text-sm">
                            <th scope="col" className="p-3 font-semibold"><h4>Icon</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>NavItem Name</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>NavItem Link</h4> </th>
                            <th scope="col" className="p-3 font-semibold"><h4>Status</h4></th>
                            <th scope="col" className="p-3 font-semibold"><h4>Action</h4></th>
                            {/* <th scope="col" className="p-3 font-semibold"><h4>Edit</h4></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {NavigationData&&
                            NavigationData.map((e, i)=>{
                                return(
                                    <tr key={i+1}>
                                        <td className="p-3 text-sm">
                                            {NavIcon = allIcons[e.icon]}
                                            <h2 className=" font-bold">{NavIcon && <NavIcon />}</h2>
                                        </td>
                                        <td className="p-3">
                                            <h5 className="font-medium">{e.itemName}</h5>
                                        </td>
                                        <td className="p-3">
                                            <p className="font-medium text-teal-500">{e.itemLink}</p>
                                        </td>
                                        <td className="p-3">
                                            <div className="checkbox-wrapper-6">
                                                <label className="" htmlFor="autoSizingSelect"></label>
                                                <input className="tgl tgl-light" id={'cb1-'+(i+1)} type="checkbox" checked={e.show} />
                                                <label className="tgl-btn" htmlFor="cb1-7"> </label>
                                            </div>   
                                        </td>
                                        <td className="p-3" style={{display: "flex", justifyContent: ""}}>
                                            {/* <span className="inline-flex items-center rounded-3xl font-semibold bg-teal-400 text-teal-500"><MdIcons.MdOutlineDeleteForever /></span> */}
                                            <h2 className='text-danger' style={{cursor: "pointer ", marginRight: "15px"}} onClick={()=>handleNavDelete(i)} ><MdIcons.MdOutlineDeleteForever /></h2>
                                            <h3 className='text-primary' style={{cursor: "pointer"}} ><FaIcons.FaEdit /></h3>
                                        </td>
                                        {/* <td className="p-3">
                                             <span className="inline-flex items-center rounded-3xl font-semibold bg-teal-400 text-teal-500"><MdIcons.MdOutlineDeleteForever /></span>
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>									
        </div>
    </>
  )
}

export default ManageNavigation
