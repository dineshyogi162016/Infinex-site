import React from 'react'

const Footer = () => {
  return (
    <>
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">Infinex Tech</h3>
        <p>Transforming businesses through innovative technology solutions and expert consulting.</p>
        <div className="social-links d-flex justify-content-center">
          <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href=""><i className="bi bi-skype"></i></a>
          <a href=""><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">Infinex Technologies</strong> <span>All Rights Reserved</span>
          </div>
          {/* <div className="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you've purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
          </div> */}
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
