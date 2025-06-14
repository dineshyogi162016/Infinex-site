import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const [formData, setformData] = useState({
        name : "",
        email : "",
        subject : "",
        message : ""
    })
    const [formError, setformError] = useState({})
    
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


    const handlechange = (e) => {
        setformData({...formData, [e.target.name] : e.target.value})
    }

    console.log("form error : ", formError )
    const handleSubmit = () => {
        if(varify()){
            // console.log("Form Data : ", formData )
        }
    }


    const varify = () => {
        let localError = {};
        let valid = true;

        if(formData.name.length === 0){
            localError.name = "Name must be required!"
            valid = false
        }else if (formData.name.length < 4){
            localError.name = "Name should be minimum 4 character!"
            valid = false
        }

        if(formData.email.length <=0){
            localError.email = "Email must be required!"
            valid = false
        }else if(!emailRegex.test(formData.email)){
            localError.email = "Not a valid email!"
            valid = false
        }

        if(formData.subject.length === 0){
            localError.subject = "Subject must be required!"
            valid = false
        }else if (formData.subject.length < 6){
            localError.subject = "Subject should be minimum 6 character!"
            valid = false
        }

        if(formData.message.length === 0){
            localError.message = "Message must be required!"
            valid = false
        }else if (formData.message.length < 10){
            localError.message = "Message should be minimum 10 character!"
            valid = false
        }


        setformError(localError)

    }

  return (
    <>
        <section id="contact" className="contact section">

            <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
            </div>

            <div className="container" data-aos="fade" data-aos-delay="100">

            <div className="row gy-4">

                <div className="col-lg-4">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                        <Link to={"/"} href="https://g.co/kgs/wL2LUqV" style={{textDecoration : "none", color: "black"}}>
                            <h3>Address</h3>
                            <p> Infinex Technologies Pvt. Ltd | Jaipur
        https://g.co/kgs/wL2LUqV </p>
                        </Link>
                    </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <Link to={"tel:+911234567890"} style={{textDecoration : "none", color: "black"}}>
                                <h3>Call Us</h3>
                                <p>+918955100493</p>
                            </Link>
                        </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                        <aLink to={"mailto:info@infinextechnologies.com"} style={{textDecoration : "none", color: "black"}}>
                            <h3>Email Us</h3>
                            <p>info@infinextechnologies.com</p>
                        </aLink>
                    </div>
                </div>

                </div>

                <div className="col-lg-8">
                    <div className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                        <div className="row gy-4">

                        <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={handlechange} />
                        </div>

                        <div className="col-md-6 ">
                            <input type="email" className="form-control" name="email" placeholder="Your Email" required="" onChange={handlechange} />
                        </div>

                        <div className="col-md-12">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" required="" onChange={handlechange} />
                        </div>

                        <div className="col-md-12">
                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required="" onChange={handlechange}></textarea>
                        </div>

                        <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            {(formError.name || formError.email || formError.subject || formError.message) && <div className="error-message">{(formError.name || formError.email || formError.subject || formError.message)}</div>}
                            <div className="sent-message">Your message has been sent. Thank you!</div>

                            <button type="submit" onClick={handleSubmit}>Send Message</button>
                        </div>

                        </div>
                    </div>
                </div>

            </div>

            </div>

        </section>
    </>
  )
}

export default ContactSection
