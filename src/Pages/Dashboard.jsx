import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdDashboard } from 'react-icons/md';
import AdminDashboardTemplate from '../Component/AdminDashboardTemplate';
import { FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Dashboard = () => {
  return (
    <div className="admin-dashboard" >

        {/* <!-- Sidebar + Content --> */}
        <div className="admin-container">
          {/*  Sidebar */}
           <div className=" sidebar admin-radius" id='admin-sidebar'>
            <div className='admin-nav-logo'>
                <Navbar.Brand className="p-0">
                    <a href="/dashboard">
                        <img src="/infinexLogo.svg" alt="Infinex Logo" />
                    </a>
                </Navbar.Brand>
            </div>

            <div className="side-nav-bar">
                <ul className="nav flex-column mt-2">
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'> <FaUser /></span>Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><IoMdSettings /></span>Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'> <FaUser /></span>Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><IoMdSettings /></span>Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'> <FaUser /></span>Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><IoMdSettings /></span>Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'> <FaUser /></span>Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><IoMdSettings /></span>Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'> <FaUser /></span>Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><IoMdSettings /></span>Settings</a></li>
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
                    <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
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
                    <a href="/dashboard">
                        <img src="/infinexLogo.svg" alt="Infinex Logo" />
                    </a>
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
                                <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                                <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                            </ul>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
            {/* Mobile View end  */}

            <div className="content-area admin-radius">
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to Admin Panel</h1>
                <p>This is the main content area.</p>
            </div>
            
          </div>
        </div>


        {/* <AdminDashboardTemplate /> */}

    </div>
  )
}

export default Dashboard
