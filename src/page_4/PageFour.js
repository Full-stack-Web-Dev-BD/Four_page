import React from 'react'
import {Facebook, Twitter} from '@material-ui/icons'
import './page_4.css'
import StarIcon from '@material-ui/icons/Star';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import StarHalf from '@material-ui/icons/StarHalf'

import PersonIcon from '@material-ui/icons/Person';
function PageFour() {
    return (
        <div>
            <section>
                <div className="header_area">
                    <div className="container">
                        <div className="row header_content">
                            <div className="col-md-6">
                                <div className="logo">
                                    <img src={require('./images/logo.png')}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right_content_header d-flex ">   
                                    <div className="social_icon d-flex " style={{marginLeft:'auto'}}>
                                        <div className="single_icon">
                                           <div className="icon_holder">
                                             <Facebook />
                                           </div>
                                        </div>
                                        <div className="single_icon">
                                           <div className="icon_holder">
                                             <Twitter />
                                           </div>
                                        </div>
                                    </div>
                                    <button className="btn join_btn">Join us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="education_area">
                    <div className="container">
                        <div className="education_layer"></div>
                        <div className="text-center education_content">
                            <img src={require('./images/logo.png')}/>
                            <h1>Start Your Education Now </h1>
                            <div className='p'>    
                                <p>Fill in the form and our Grand Land University tutors will communicate <br/> with you for <span>Free Course.</span> Add a description of your offer and key benefits</p>
                            </div>
                            <form className="form">
                                <input placeholder="Your name"/>
                                <input placeholder="Your e-mail address"/>
                                <button className="btn get_btn mt-2">Get it now </button>
                            </form>
                            <div className='text-center'>
                                <div style={{display:'inline-box'}}>
                                    <div className="d-flex timer">
                                        <h3>Our Hot Proposition Ends:</h3>
                                        <div className="d-flex">
                                            <div className="single_time mr-4">
                                                <h1>05</h1>
                                                <p>Days</p>
                                            </div>
                                            <div className="single_time mr-4">
                                                <h1>06</h1>
                                                <p>Hours</p>
                                            </div>
                                            <div className="single_time mr-4">
                                                <h1>58</h1>
                                                <p>Minutes</p>
                                            </div>
                                            <div className="single_time mr-4">
                                                <h1>51</h1>
                                                <p>Seconds</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="our_benifit_area pt_120">
                    <div className="container">
                        <div className="benifit_content">
                            <div className="benifit_header text-center">
                                <p style={{color:'#4AAACB',fontSize:'26px'}}>Our Benefits</p>
                                <h1 className="bg_text">Show Customers There Needs <span> Learn</span> </h1>
                                <p className="mt-5 read">A supporting statement for your value proposition to encourage <br/>customers to complete your CTA</p>
                            </div>
                        </div>
                        <div className="row  mt-5">
                            <div className="col-md-4 card_content">
                                <div className="icon_side" >
                                    <img src={require('./images/user.png')}/>
                                </div>
                                <div className="text_side">
                                    <h2>Strong Point</h2>
                                    <p>Add a description of our offer and key benefits. What it is and how it help your customer . Add a descriptionof your  offer and key benefits.</p>
                                </div>
                            </div>
                            <div className="col-md-4 card_content">
                                <div className="icon_side" >
                                    <img src={require('./images/chart.png')}/>
                                </div>
                                <div className="text_side">
                                    <h2>Strong Point</h2>
                                    <p>Add a description of our offer and key benefits. What it is and how it help your customer . Add a descriptionof your  offer and key benefits.</p>
                                </div>
                            </div>
                            <div className="col-md-4 card_content">
                                <div className="icon_side" >
                                    <img src={require('./images/cap.png')}/>
                                </div>
                                <div className="text_side">
                                    <h2>Strong Point</h2>
                                    <p>Add a description of our offer and key benefits. What it is and how it help your customer . Add a descriptionof your  offer and key benefits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="clear_value_area pb_100 ">
                    <div className="container">
                        <div className="benifit_header text-center mb-5">
                            <h1 className="bg_text text-light">Clear value for your customer</h1>
                            <p className="mt-5 read text-light">A supporting statement for your value proposition to encourage <br/>customers to complete your CTA</p>
                        </div>
                        <div className="row mt-4">
                            <div className='col-md-4 p-10 col-sm-6'>
                                <div className="card">
                                    <img src={require('./images/card_1.png')}/>
                                    <div className="card_body">
                                        <div className="card_title">
                                            <h3 style={{whiteSpace:'nowrap'}}>Faculty of Economics</h3>
                                        </div>
                                        <p>Amanda Baker</p>
                                        <div className="card_pera">
                                            <p>Add a description of our offer and key benefits. What it is and how it help your customer </p>
                                        </div>
                                    </div>
                                    <div className="card_footer d-flex">
                                        <div className="d-flex mr-1">
                                            <PersonIcon style={{color:'#4AAACB'}}/>
                                            <span> 7 Student</span>
                                        </div>
                                        <div className="d-flex mr-1">
                                            <StarHalfOutlinedIcon style={{color:'#4AAACB'}}/>
                                            <span> 5 Rating</span>
                                        </div>
                                        <p className="free_btn free_border_2">Free</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 p-10 col-sm-6'>
                                <div className="card">
                                    <img src={require('./images/card_2.png')}/>
                                    <div className="card_body">
                                        <div className="card_title">
                                            <h3 style={{whiteSpace:'nowrap'}}>Faculty of Economics</h3>
                                        </div>
                                        <p>Amanda Baker</p>
                                        <div className="card_pera">
                                            <p>Add a description of our offer and key benefits. What it is and how it help your customer </p>
                                        </div>
                                    </div>
                                    <div className="card_footer d-flex">
                                        <div className="d-flex mr-1">
                                            <PersonIcon style={{color:'#4AAACB'}}/>
                                            <span> 7 Student</span>
                                        </div>
                                        <div className="d-flex mr-1">
                                            <StarHalfOutlinedIcon style={{color:'#4AAACB'}}/>
                                            <span> 5 Rating</span>
                                        </div>
                                        <p className="free_btn free_border_1">Free</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 p-10 col-sm-6'>
                                <div className="card">
                                    <img src={require('./images/card_3.png')}/>
                                    <div className="card_body">
                                        <div className="card_title">
                                            <h3 style={{whiteSpace:'nowrap'}}>Faculty of Economics</h3>
                                        </div>
                                        <p>Amanda Baker</p>
                                        <div className="card_pera">
                                            <p>Add a description of our offer and key benefits. What it is and how it help your customer </p>
                                        </div>
                                    </div>
                                    <div className="card_footer d-flex">
                                        <div className="d-flex mr-1">
                                            <PersonIcon style={{color:'#4AAACB'}}/>
                                            <span> 7 Student</span>
                                        </div>
                                        <div className="d-flex mr-1">
                                            <StarHalfOutlinedIcon style={{color:'#4AAACB'}}/>
                                            <span> 5 Rating</span>
                                        </div>
                                        <p className="free_btn free_border_1">Free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="powrfull_section ">
                    <div className="container">
                        <div className=" powrful_content p_100 ">
                            <div className="benifit_header w_100 text-center">
                                <p style={{color:'#4AAACB',fontSize:'26px'}}>About Grand Land University </p>
                                <h1 className="bg_text">Your Powrful Headline <span> Learn</span> </h1>
                            </div>
                            <div className="row benifit_content ">
                                <div className="col-md-6">
                                    <iframe width="530" height="315" style={{maxWidth:'100%'}} src="https://www.youtube.com/embed/XxZCRmfV5fw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="col-md-6 powtfull_right_content">
                                    <h3>About Grand Land University</h3>
                                    <p>Add description of your offer and key benefits  .Whats it is and how it helps  your customers . How will this help solve the customer's issues in ther future .</p>
                                    <div className="quet">
                                        <p>"How will this help solve the customer's issue in the future . Add a  descriptionof your offer and key benefits"</p>
                                    </div>
                                    <button className="btn get_btn pr-5 pl-5">Contuct us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="element_area">
                    <div className="container">
                        <div className="element_header">  
                            <h1>Trust Elements of Your Customer's</h1>
                            <p>A supporting statement ofr your value proposition to encourage <br/> customers to complete your CTA</p>
                        </div>
                        <div className="element_content row">
                            <div className="col-md-4 p-4 p_0">
                                <div className="single_user">
                                    <img src={require('./images/user1.png')}/>
                                    <h3>Miguel Hernandez</h3>
                                    <p>A few text about your product .How it help to solve client problem .It should convince the unconvinced</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-4 p_0 element_bottom_content text-center">
                                <div className="middle_content ">
                                    <StarIcon style={{color:'#F8D172',fontSize:'45px'}}/>
                                    <StarIcon style={{color:'#F8D172',fontSize:'45px'}}/>
                                    <StarIcon style={{color:'#F8D172',fontSize:'45px'}}/>
                                    <StarIcon style={{color:'#F8D172',fontSize:'45px'}}/>
                                    <StarHalf style={{color:'#F8D172',fontSize:'45px'}}/>
                                    <p className="text-center">4.7 out of 5</p>
                                </div> 
                                <div className="img_holder">
                                    <img src={require('./images/leptop 2.png')}/>
                                </div>
                            </div>
                            <div className="col-md-4 p-4 p_0">
                                <div className="single_user">
                                    <img src={require('./images/user2.png')}/>
                                    <h3>Miguel Hernandez</h3>
                                    <p>A few text about your product .How it help to solve client problem .It should convince the unconvinced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="gallary p_100">
                    <div className="container">
                        
                        <div className="benifit_header text-center">
                            <p style={{color:'#4AAACB',fontSize:'26px'}}>Our Gallery</p>
                            <h1 className="bg_text">Show Customers There Needs <span> Learn</span> </h1>
                            <p className="mt-5 read">A supporting statement for your value proposition to encourage <br/>customers to complete your CTA</p>
                        </div>
                        <div className="row">
                            <div className=" col-md-4 p_6">
                                <img src={require('./images/gallery1.png')}/>
                            </div>
                            <div className="col-md-4 dubble p_6">
                                <img  className="mb_6" src={require('./images/gallery2.png')}/>
                                <img src={require('./images/gallery3.png')}/>
                            </div>
                            <div className="col-md-4 p_6">
                                <img className="mb_6" src={require('./images/gallery4.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer_section">
                    <div className="fooer_overlay"></div>
                    <div className="container">
                        <div className='foorer_root'>
                            <div className="footer_header text-center">
                                <h1>Want to Get Free Courses ?</h1>
                                <p>Fill in the form and our Frand Land University  tutors will communicate<br/>with you for <span>Free Courses</span></p>
                            </div>    
                        </div>
                        <div className="footer_content">    
                            <div className="row">
                                <div className="col-md-4 man offset-md-4">
                                    <form className="form footer_form">
                                        <p>Free</p>
                                        <input placeholder='Your Name' />
                                        <input placeholder='Your Email Address' />
                                        <input placeholder='Your Phone Number' />
                                        <button className="btn footer_btn">Get it now</button>
                                    </form>
                                    <img src={require('./images/man.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PageFour
