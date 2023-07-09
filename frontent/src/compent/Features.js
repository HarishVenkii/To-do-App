import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
    return (

        <div className="container-xxl bg-white p-0">
 

            <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Features<span></span></p>
                    <h1 className="text-center mb-5">List of options:</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-laptop-code fa-2x"></i>
                                
                            </div>
                            <h5 className="mb-3">Task Creation and Organization</h5>
                            <p className="m-0">Easily create tasks, assign due dates, and categorize them into projects. TaskForce allows you to capture all the essential details for each task, ensuring nothing gets overlooked.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-search fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Prioritize and Stay on Track</h5>
                            <p className="m-0">Prioritize tasks based on urgency and importance. Set reminders and deadlines to ensure tasks are completed on time. TaskForce helps you focus on what matters most.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h5 className="mb-3">Data Security</h5>
                            <p className="m-0">TaskForce prioritizes the security of your data. Your information is encrypted and stored securely, giving you peace of mind knowing your data is protected.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mail-bulk fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Access Anywhere, Anytime</h5>
                            <p className="m-0">Stay productive on the go with TaskForce's responsive design. Access your tasks and updates from any device, ensuring you never miss a beat.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-thumbs-up fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Simple and Intuitive Interface</h5>
                            <p className="m-0">TaskForce offers a clean and intuitive interface, making it easy to navigate and use. Spend less time on learning curves and more time focusing on your tasks.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <h5 className="mb-3">Visualize Progress</h5>
                            <p className="m-0">Track task progress with visual indicators and progress bars. Get a clear overview of pending, ongoing, and completed tasks.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, Tamil Nadu, India</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+91 345 678 8990</p>
                        <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-github"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <a className="btn btn-link" href="#">About Us</a>
                        <a className="btn btn-link" href="#">Contact Us</a>
                        <a className="btn btn-link" href="##">Privacy Policy</a>
                        <a className="btn btn-link" href="#">Terms & Condition</a>
                        <a className="btn btn-link" href="#">Career</a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-1.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-2.jpg" alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-3.jpg" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-4.jpg" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-5.jpg" alt="Image"/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="Home-page-assets/img/portfolio-6.jpg" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Task Management tool</a>, All Right Reserved. 
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#">Home</a>
                                <a href="#">Cookies</a>
                                <a href="#">Help</a>
                                <a href="#">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}
export default Features;