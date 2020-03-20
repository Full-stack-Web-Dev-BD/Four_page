import React from 'react'
import './page_1.css'
import DoneIcon from '@material-ui/icons/Done';

function PageOne() {
    return (
        <div>
            <section>
                <div className="slider_outer_area">
                    <div className="container">
                        <div className="slider_content pt_200">
                            <div class  Name="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="row">
                                        <div className="col-md-6"> 
                                            <div className="left_side">
                                                <div class="rotate_image">
                                                    <img src={require('./image/icon.png')}/>
                                                </div>
                                                <div className="top">
                                                    <p>OVER 100 INSURANCE OFFERS FROM </p>
                                                    <p>VARIOUS INSURANCE AGENCIES IN ONE PLACE.</p>
                                                    <p>Complete forms and get access.</p>
                                                </div>
                                                <div className="bottom mt_30">
                                                    <h1>Protect your family</h1>
                                                    <h1>with insurance.</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-8 ml-auto">
                                                    <div className="form">
                                                        <div className="form_header">
                                                            <p>Encourage customer to complete your CTA</p>
                                                        </div>
                                                        <div className="filed">
                                                            <input placeholder="Enter your name"/>
                                                            <input placeholder="Enter your email"/>
                                                            <button className="btn offer_btn">CTEATE A OFFER</button>
                                                        </div>
                                                    </div>
                                                </div>
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
                <div className="tc_area pt_80 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pb_80 border_bottom_light">
                                <div className="tc_right_content">
                                    <img src={require('./image/tc.png')}/>
                                </div>
                            </div>
                            <div className="col-md-6 pb_80 border_bottom_colord">
                                <div className="tc_left_content">
                                    <h1>Take care your family</h1>
                                    <p>A few words about your product . A few words about your product. Focus on the benefit not the features . Explain how  your product will improve your  customer's life. A few words about your product . Explain how your product will improve   your customer's life . A few word about your product.</p>
                                    <div className="mt-5">
                                        <button className="btn phone_call">Enter your phone </button>
                                        <button className="btn phone_call bg_">Get a phone call </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="house_insurance_area pt_80 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 pb_80 border_bottom_light">
                                <div className="house_insurance">
                                    <img src={require('./image/side_img.png')}/>
                                </div>
                            </div>
                            <div className="col-md-6 pb_80 border_bottom_colord">
                                <div className="tc_left_content">
                                    <p>Get an insurance Quote!</p>
                                    <h1>House insurance</h1>
                                    <p>A few words about your product . A few words about your product. Focus on the benefit not the features . Explain how  your product will improve your  customer's life. A few words about your product . Explain how your product will improve   your customer's life . A few word about your product.</p>
                                    <p style={{lineHeight:'.5'}}><span style={{color:'#8BB748',fontWeight:'500'}}><DoneIcon/></span> Encourage customer to complete your CTA</p>
                                    <p style={{lineHeight:'.5'}}><span style={{color:'#8BB748',fontWeight:'500'}}><DoneIcon/></span>Encourage your customer </p>
                                    <p style={{lineHeight:'.5'}}><span style={{color:'#8BB748',fontWeight:'500'}}><DoneIcon/></span>Add a description of your offer and key benefits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="powrfull_area pt_80 pb_80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 " style={{paddingTop:"100px"}}>
                                <div className="counter_top counter_border">
                                    <div className="counter_left pb-3">
                                        <p>Satisfied customer</p>
                                        <h3>581 590</h3>
                                    </div>
                                    <div className="diveder"></div>
                                    <div className="counter_right pb-3">
                                        <p>Satisfied customer</p>
                                        <h3>3 141.21</h3>
                                    </div>
                                </div>
                                <div className="counter_top">
                                    <div className="counter_left pt-3">
                                        <p>Satisfied customer</p>
                                        <h3>581 590</h3>
                                    </div>
                                    <div className="diveder"></div>
                                    <div className="counter_right pt-3">
                                        <p>Satisfied customer</p>
                                        <h3>3 141.21</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p style={{textTransform:"capitalize"}}>What our customer are saying </p>
                                <h2>Powrfull headline</h2>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="quet">
                                            <img src={require('./image/quet.png')}/>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <p>
                                        A few words about your product . A few words about your product. Focus on the benefit not the features . Explain how  your product will improve your  customer's life. A few words about your product . Explain how your product will improve   your customer's life . A few word about your product
                                        </p>
                                        <p style={{fontWeight:"500"}}>Michael Walker</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer_area pt_80 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 style={{fontWeight:"700"}}>How much insurance do i need ? </h2>
                                <h5 style={{fontWeight:'500'}}>Encourage customer to complete your CTA</h5>
                                <button className="btn mt-5" style={{borderRadius:"30px", background:'white', padding:'10px 20px', color:'gray', fontWeight:'500'}}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageOne

