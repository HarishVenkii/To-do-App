import React from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function Home() {
  return (
    <>
    
    <div className="container-xxl bg-white p-0">
        {/* <!-- Navbar & Hero Start --> */}
       
            <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">TASK MANAGEMENT TOOL</h1>
                            <p className="text-white pb-3 animated slideInDown">TaskForce is a user-friendly task management tool designed to streamline your workflow and enhance productivity. With its intuitive interface and powerful features, TaskForce helps you stay organized, collaborate effectively, and accomplish your goals effortlessly.</p>
                            <Link to="/login" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Get Started</Link>
                            <Link to="/about" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">About Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src="Home-page-assets/img/hero.png" alt="" />
                        </div>
                   
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}


  


        {/* <!-- Service Start --> */}
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
        {/* <!-- Service End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                    <h1 className="text-center mb-5">Our Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="Home-page-assets/img/mohanrajan_pic.jpeg" alt="" />
                                <h3>Mohanrajan A</h3>
                                <h6>Software Devloper</h6>
                                <i>VIT, Vellore (20MIS0059)</i>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="#github"><i className="fab fa-github"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.instagram.com/mohan_d_stylish_romeo/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square mx-1" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="Home-page-assets/img/harish_pic.jpg" alt="" />
                                <h3>Harish V</h3>
                                <h6>Software Devloper</h6>
                                <i>VIT, Vellore (20MIS0066)</i>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="https://github.com/HarishVenkii"><i className="fab fa-github"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.instagram.com/palak.not_paneer/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.linkedin.com/in/harish-v-7baa3922b/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="Home-page-assets/img/sree.jpeg" alt="" />
                                <h3>Sreeja V</h3>
                                <h6>Software Devloper</h6>
                                <i>VIT, Vellore (20MIS0139)</i>
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="https://github.com/Sreejavadanala"><i className="fab fa-github"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.instagram.com/sreejavadanala/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square mx-1" href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item bg-light rounded">
                            <div className="text-center border-bottom p-4">
                                <img className="img-fluid rounded-circle mb-4" src="Home-page-assets/img/jahnavi.jpg" alt=""/>
                                <h3>Yenireddy Jahnavi</h3>
                                <h6>Software Devloper</h6>
                                <i>VIT, Vellore (20MIS0161)</i> 
                            </div>
                            <div className="d-flex justify-content-center p-4">
                                <a className="btn btn-square mx-1" href="https://github.com/YenireddyJahnavi"><i className="fab fa-github"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.instagram.com/jahnavi_3103/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square mx-1" href="https://www.linkedin.com/in/jahnavi-reddy-283825262/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End -->
        

        <!-- Footer Start --> */}
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
        {/* <!-- Footer End -->


        <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>   
    
    </>
  );
}

export default Home;