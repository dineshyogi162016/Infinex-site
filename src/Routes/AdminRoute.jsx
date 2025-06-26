import React, { useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdDashboard, MdPermContactCalendar } from 'react-icons/md';
import { FaFileAlt, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utilities/ContextAPI/AuthProvider';
import { RiMenuAddFill, RiTeamFill } from 'react-icons/ri';
import { TbListDetails } from 'react-icons/tb';
import Profile from '../admin/Component/Profile';

const AdminRoute = (props) => {
  const {Component} = props;
    const {checkLogin, logOut} = useAuth()
    let navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
        navigate("/login")
    }

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem("InfinexAdminLogin"))

        if(!loginData){
            navigate("/login")
        }
    },[])
  return (
    <div className="admin-dashboard" >

        {/* <!-- Sidebar + Content --> */}
        <div className="admin-container">
          {/*  Sidebar */}
           <div className=" sidebar admin-radius" id='admin-sidebar'>
            <div className='admin-nav-logo'>
                <Navbar.Brand className="p-0">
                    <Link to={'/dashboard'}>
                        <img src="/infinexLogo.svg" alt="Infinex Logo" />
                    </Link>
                </Navbar.Brand>
            </div>

            <div className="side-nav-bar">
                <ul className="nav flex-column mt-2">
                    <li className="nav-item"><NavLink className="nav-link" to={"/dashboard"} ><span className='icon mr-2'><MdDashboard /></span>Dashboard</NavLink></li> 
                    <li className="nav-item"><NavLink className="nav-link" to={"/ManageTeam"} ><span className='icon mr-2'> <RiTeamFill /></span>Team</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/ManageNavigation"} ><span className='icon mr-2'><RiMenuAddFill /></span>Navigation</NavLink></li> 
                    <li className="nav-item"><NavLink className="nav-link" to={"/ManageContact"} ><span className='icon mr-2'> <MdPermContactCalendar /></span>Contact Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/ManagePortfolio"} ><span className='icon mr-2'> <TbListDetails /></span>Portfolio</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/ManageCareer"} ><span className='icon mr-2'><FaFileAlt /></span>Career</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/setting"} ><span className='icon mr-2'><IoMdSettings /></span>Settings</NavLink></li>
                    
                </ul>
            </div>


          </div>

          {/* <!-- Content --> */}
          <div className="admin-content admin-radius" id='admin-content-area'>

            {/* Desktop View  */}
            <Navbar className='admin-radius admin-navbar' expand="lg" bg="light" id="admin-navbar">
            <div className="container-fluid">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown
                    title={<span className="profile-name"><img src="/assets/img/team/team-4.jpg" alt="" /></span>}
                    id="profile-dropdown"
                    align="end"
                    >
                    <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="#profile" data-bs-toggle="offcanvas" data-bs-target="#profileSidebar" aria-controls="offcanvasRight" >Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
            {/* Desktop Veiw End  */}


            {/* Mobile View  */}
            <Navbar className='admin-radius admin-navbar' expand="lg" bg="light" id="admin-Mobile-nav">
                <div className="container-fluid">
                    <Navbar.Brand className="admin-nav-logo p-0">
                    <Link to={"/dashboard"}>
                        <img src="/infinexLogo.svg" alt="Infinex Logo" />
                    </Link>
                    </Navbar.Brand>

                    <div className="mobile-left-nav d-flex">
                        <NavDropdown
                            title={<span className="profile-name"><img src="/assets/img/team/team-4.jpg" alt="" /></span>}
                            id="profile-dropdown"
                            align="end"
                            >
                            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
                        </NavDropdown>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='admin-radius'>
                        <Nav className="ms-auto">
                            <ul className="nav">
                                <li className="nav-item"><NavLink className="nav-link" to={"/dashboard"} ><span className='icon mr-2'><MdDashboard /></span>Dashboard</NavLink></li> 
                                <li className="nav-item"><NavLink className="nav-link" to={"/team"} ><span className='icon mr-2'> <FaUser /></span>Team</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to={"/setting"} ><span className='icon mr-2'><IoMdSettings /></span>Settings</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to={"/dashboard"} ><span className='icon mr-2'><MdDashboard /></span>Dashboard</NavLink></li> 
                                <li className="nav-item"><NavLink className="nav-link" to={"/team"} ><span className='icon mr-2'> <FaUser /></span>Team</NavLink></li>
                            </ul>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
            {/* Mobile View end  */}

            <div className="admin-content-area admin-radius">
                <Component />
            </div>
            
            <Profile />
          </div>
        </div>


        {/* <AdminDashboardTemplate /> */}

    </div>
  )
}

export default AdminRoute
