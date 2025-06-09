import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdDashboard } from 'react-icons/md';
import AdminDashboardTemplate from '../Component/AdminDashboardTemplate';

const Dashboard = () => {
  return (
    <div className="admin-dashboard" >
       <Navbar expand="lg" bg="light" id="admin-navbar">
          <div className="container-fluid">
            <Navbar.Brand className="admin-nav-logo p-0">
              <a href="/dashboard">
                <img src="/infinexLogo.svg" alt="Infinex Logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <ul className="nav admin-Mobile-nav">
                  <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
                  <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                </ul>
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

        {/* <!-- Sidebar + Content --> */}
        <div className="admin-container">
          {/*  Sidebar */}
           <div className=" sidebar" id='admin-sidebar'>
             <ul className="nav flex-column mt-2">
              <li className="nav-item"><a className="nav-link" href="#"><span className='icon mr-2'><MdDashboard /></span>Dashboard</a></li> 
              <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
            </ul>



            {/* <aside class="main-sidebar hidden-print ">
              <section class="sidebar" id="sidebar-scroll">
                  <ul class="sidebar-menu">
                      <li class="nav-level">--- Navigation</li>
                      <li class="active treeview">
                          <a class="waves-effect waves-dark" href="index.html">
                              <i class="icon-speedometer"></i><span> Dashboard</span>
                          </a>                
                      </li>
                      <li class="nav-level">--- Components</li>
                      <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-briefcase"></i><span> UI Elements</span><i class="icon-arrow-down"></i></a>
                          <ul class="treeview-menu">
                              <li><a class="waves-effect waves-dark" href="accordion.html"><i class="icon-arrow-right"></i> Accordion</a></li>
                              <li><a class="waves-effect waves-dark" href="button.html"><i class="icon-arrow-right"></i> Button</a></li>
                              <li><a class="waves-effect waves-dark" href="label-badge.html"><i class="icon-arrow-right"></i> Label Badge</a></li>
                              <li><a class="waves-effect waves-dark" href="bootstrap-ui.html"><i class="icon-arrow-right"></i> Grid system</a></li>
                              <li><a class="waves-effect waves-dark" href="box-shadow.html"><i class="icon-arrow-right"></i> Box Shadow</a></li>
                              <li><a class="waves-effect waves-dark" href="color.html"><i class="icon-arrow-right"></i> Color</a></li>
                              <li><a class="waves-effect waves-dark" href="light-box.html"><i class="icon-arrow-right"></i> Light Box</a></li>
                              <li><a class="waves-effect waves-dark" href="notification.html"><i class="icon-arrow-right"></i> Notification</a></li>
                              <li><a class="waves-effect waves-dark" href="panels-wells.html"><i class="icon-arrow-right"></i> Panels-Wells</a></li>
                              <li><a class="waves-effect waves-dark" href="tabs.html"><i class="icon-arrow-right"></i> Tabs</a></li>
                              <li><a class="waves-effect waves-dark" href="tooltips.html"><i class="icon-arrow-right"></i> Tooltips</a></li>
                              <li><a class="waves-effect waves-dark" href="typography.html"><i class="icon-arrow-right"></i> Typography</a></li>
                          </ul>
                      </li>

                      <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-chart"></i><span> Charts &amp; Maps</span><span class="label label-success menu-caption">New</span><i class="icon-arrow-down"></i></a>
                          <ul class="treeview-menu">
                              <li><a class="waves-effect waves-dark" href="float-chart.html"><i class="icon-arrow-right"></i> Float Charts</a></li>
                              <li><a class="waves-effect waves-dark" href="morris-chart.html"><i class="icon-arrow-right"></i> Morris Charts</a></li>
                          </ul>
                      </li>

                      <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-book-open"></i><span> Forms</span><i class="icon-arrow-down"></i></a>
                          <ul class="treeview-menu">
                              <li><a class="waves-effect waves-dark" href="form-elements-bootstrap.html"><i class="icon-arrow-right"></i> Form Elements Bootstrap</a></li>
                              
                              <li><a class="waves-effect waves-dark" href="form-elements-advance.html"><i class="icon-arrow-right"></i> Form Elements Advance</a></li>
                          </ul>
                      </li>
                      
                      <li class="treeview">
                          <a class="waves-effect waves-dark" href="basic-table.html">
                              <i class="icon-list"></i><span> Table</span>
                          </a>                
                      </li>


                      <li class="nav-level">--- More</li>

                      <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icon-docs"></i><span>Pages</span><i class="icon-arrow-down"></i></a>
                          <ul class="treeview-menu">
                              <li class="treeview"><a href="#!"><i class="icon-arrow-right"></i><span> Authentication</span><i class="icon-arrow-down"></i></a>
                                  <ul class="treeview-menu">
                                      <li><a class="waves-effect waves-dark" href="register1.html" target="_blank"><i class="icon-arrow-right"></i> Register 1</a></li>
                                      
                                      <li><a class="waves-effect waves-dark" href="login1.html" target="_blank"><i class="icon-arrow-right"></i><span> Login 1</span></a></li>
                                      <li><a class="waves-effect waves-dark" href="forgot-password.html" target="_blank"><i class="icon-arrow-right"></i><span> Forgot Password</span></a></li>
                                      
                                  </ul>
                              </li>
                              
                              <li><a class="waves-effect waves-dark" href="404.html" target="_blank"><i class="icon-arrow-right"></i> Error 404</a></li>
                              <li><a class="waves-effect waves-dark" href="sample-page.html"><i class="icon-arrow-right"></i> Sample Page</a></li>
                              
                          </ul>
                      </li>


                      <li class="nav-level">--- Menu Level</li>

                      <li class="treeview"><a class="waves-effect waves-dark" href="#!"><i class="icofont icofont-company"></i><span>Menu Level 1</span><i class="icon-arrow-down"></i></a>
                          <ul class="treeview-menu">
                              <li>
                                  <a class="waves-effect waves-dark" href="#!">
                                      <i class="icon-arrow-right"></i>
                                      Level Two
                                  </a>
                              </li>
                              <li class="treeview">
                                  <a class="waves-effect waves-dark" href="#!">
                                      <i class="icon-arrow-right"></i>
                                      <span>Level Two</span>
                                      <i class="icon-arrow-down"></i>
                                  </a>
                                  <ul class="treeview-menu">
                                      <li>
                                          <a class="waves-effect waves-dark" href="#!">
                                              <i class="icon-arrow-right"></i>
                                              Level Three
                                          </a>
                                      </li>
                                      <li>
                                          <a class="waves-effect waves-dark" href="#!">
                                              <i class="icon-arrow-right"></i>
                                              <span>Level Three</span>
                                              <i class="icon-arrow-down"></i>
                                          </a>
                                          <ul class="treeview-menu">
                                              <li>
                                                  <a class="waves-effect waves-dark" href="#!">
                                                      <i class="icon-arrow-right"></i>
                                                      Level Four
                                                  </a>
                                              </li>
                                              <li>
                                                  <a class="waves-effect waves-dark" href="#!">
                                                      <i class="icon-arrow-right"></i>
                                                      Level Four
                                                  </a>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </section>
            </aside> */}

          </div>

          {/* <!-- Content --> */}
          <div className="content-area" id='admin-content-area'>
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


        {/* <AdminDashboardTemplate /> */}

    </div>
  )
}

export default Dashboard
