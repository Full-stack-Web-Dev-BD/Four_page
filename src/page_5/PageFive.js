import React from 'react'
import './page_5.css'
import {StarOutlined} from '@material-ui/icons'
function PageFive() {
    return (
        <div>
            <section>
                <div className="header_section">
                    <div className="container">
                        <div className="header_content pt-5">
                            <div className="col-md-10 offset-md-1">
                                <div className="logo mb-5">
                                    <img src={require('./images/logo.png')}/>
                                </div>
                                <div className="slider_content col-md-10 offset-md-1 mt-5 mb-5 text-center">
                                    <h3 className="mt-5 mb-5">The fitness benefit that works for every<br/>body and every goal</h3>
                                    <p>With over music-driven , trainer-led fitness classes,employees can work out when they want , where they want, the way they want.</p>
                                    <div className="small">
                                        <p>" I can use Aaptliv anything , at home or even on my lunch  break at work.The <br/>trainers keep me motivited and excited to work out . T really love  Aaptliv </p>

                                    </div>
                                    <h6>
                                        <StarOutlined/>
                                        <StarOutlined/>
                                        <StarOutlined/>
                                        <StarOutlined/>
                                        <StarOutlined/>
                                       <span style={{marginLeft:'15px'}}> -Kate, Aaptliv Member</span>
                                    </h6>
                                    <button className="btn get_btn">Get In Tuch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="phone_section mt_70" >
                    <div className="container">
                        <div className="phone_contant row">
                            <div className='col-md-6 mobile'>
                                <img src={ require('./images/mobile.png')}/>
                            </div>
                            <div className="col-md-6 mobile_right">
                                <h2 className="mb-5">All the benefits of classes.<br/> None of the limits</h2>
                                <div className="d-flex mt-5">
                                    <div style={{minWidth:'20%'}}>
                                        <img src={require('./images/calander.png')}/>
                                    </div>
                                    <div className="single_post">
                                        <h3> Whenever they want.</h3>
                                        <p>Designed for every employee's lifestyle,every preference and everyt schedule.</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div style={{minWidth:'20%'}}>
                                        <img src={require('./images/location.png')}/>
                                    </div>
                                    <div className="single_post">
                                        <h3> Whenever they want.</h3>
                                        <p>Designed for every employee's lifestyle,every preference and everyt schedule.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="fitness">
                    <div className="container">
                        <div className="rowfitness_content">
                            <h2>All their fitness in one place</h2>
                            <div className="col-md-8 offset-md-2 d-flex phone_group">
                                <div className="img1">
                                    <p className="text-center mr_73">Unique programs & <br/>hallange</p>
                                    <img src={require('./images/mobile.png')}/>
                                </div>
                                <div className="img3">
                                    <div className="imgTop">
                                        <p className="text-center mr_7">Expert trainers</p>
                                        <img src={require('./images/mobile.png')}/>
                                    </div>
                                    <div className="new">
                                        <p className="ml_73">Custom tracking & <br/> reporting</p>
                                        <img src={require('./images/mobile.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo_bottom">
                        <div className="container">
                            <div className="col-md-10 offset-md-1">
                                <div className="row">
                                    <h2 style={{textAlign:'center', padding:'20px 0'}}>Companies improving employee wellness with Aaptliv:</h2>
                                    <div className="col-md-4 text-center">
                                        <img  src={require('./images/w.png')}/>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <img  src={require('./images/t.png')}/>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <img  src={require('./images/s.png')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="footer_section">
                    <div className="container">
                        <div className="header_content pt-5">
                            <div className="col-md-10 offset-md-1">
                                <div className="slider_content mt-5 mb-5 text-center">
                                    <h3 className="mt-5 mb-5">With the perfect mix of coaching and music , see why  8 million people have downloaded Aaptliv.</h3>
                                    <h3 className="mt-5 mb-5">Give  your  company a new way to do wellness.</h3>
                                    <button className="btn get_btn mb-5">Get In Tuch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageFive
