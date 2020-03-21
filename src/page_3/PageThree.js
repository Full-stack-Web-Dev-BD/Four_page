import React from 'react'
import './page_3.css'
function PageThree() {
    return (
        <div>
            <section>
                <div className="top">
                    <div className="top_layer"></div>
                    <div className="container">
                        <div className="col-md-10 offset-md-1">           
                        <div className="top_content row">
                            <div className="col-md-6 left">
                                <div className="date_top">
                                    <p>WHEN:<span>30.06.2018</span></p>
                                    <p>WHEN:<span>17:00</span></p>
                                </div>
                                <div className="video_title">
                                    <p>Your Video</p>
                                    <h1>Webinar Title</h1>
                                </div>
                                <div className="description">
                                    <p>Add a description of your offer and kke benifits.<span>What it is and hot it helps.</span></p>
                                </div>
                                <div className="timer_area">
                                    <h3>WEBINAR STARTS IN:</h3>
                                    <div className='justify'>
                                        <div className="single_clock">
                                            <div className="single_number">
                                                <span>04</span>
                                            </div>
                                            <p>days</p>
                                        </div>
                                        <div className="single_clock">
                                            <div className="single_number">
                                                <span>02</span>
                                            </div>
                                            <p>days</p>
                                        </div>
                                        <div className="single_clock">
                                            <div className="single_number">
                                                <span>18</span>
                                            </div>
                                            <p>days</p>
                                        </div>
                                        <div className="single_clock">
                                            <div className="single_number">
                                                <span>04</span>
                                            </div>
                                            <p>days</p>
                                        </div>
                                    </div>
                                    <button className="btn learn_btn">LEARN MORE</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right_content">
                                    <div className="video_i_frame">
                                        <iframe width="340" height="180" src="https://www.youtube.com/embed/y3RIHnK0_NE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                
                                    <div className="holder"><form>
                                            <div className="single_input">
                                                <label>YOUR NAME </label>
                                                <input/>
                                            </div>
                                            <div className="single_input mb-5">
                                                <label>YOUR E-MAIL </label>
                                                <input/>
                                            </div>
                                            <button className="btn reg_btn">REGISTER NOW </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className=" pt_80">
                            <div className="header">
                                <h2>What will you learn ? <span></span></h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.1</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.2</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.3</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.4</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.5</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="single_pare">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img src={require('./images/bicon.png')}/>
                                            </div>
                                            <div className="header_text">
                                                <h2>Benifit <span>No.6</span></h2>
                                            </div>
                                        </div>
                                        <p>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="web">
                    <div className="container">
                        <div className="web_container">
                            <div className="col-md-10 offset-md-1">
                                <div className="row">
                                    <div className="col-md-6 left_text">
                                        <div className="header pt_80">
                                            <h2>Webinar schedule <span></span></h2>
                                        </div>
                                        <p style={{fontWeight:'500',fontSize:'18px', maxWidth:'77%'}}>Add a descriptionof your offer and key benifits . What iit is and how it helps  your  customer </p>
                                        <h4 style={{fontWeight:'700'}}>WEBINAR STARTS IN:</h4>
                                        
                                        <div className='justify mt-3'>
                                            <div className="single_clock">
                                                <div className="single_number">
                                                    <span>04</span>
                                                </div>
                                                <p>days</p>
                                            </div>
                                            <div className="single_clock">
                                                <div className="single_number">
                                                    <span>02</span>
                                                </div>
                                                <p>days</p>
                                            </div>
                                            <div className="single_clock">
                                                <div className="single_number">
                                                    <span>18</span>
                                                </div>
                                                <p>days</p>
                                            </div>
                                            <div className="single_clock">
                                                <div className="single_number">
                                                    <span>04</span>
                                                </div>
                                                <p>days</p>
                                            </div>
                                        </div>
                                        <button className="btn reg_btn">REGISTER NOW</button>
                                    </div>
                                    <div className="col-md-6 right_text pt_80">
                                        <div className="line_holder">
                                            <div className="line"></div>
                                        </div>
                                            <h5 style={{fontWeight:'300', lineHeight:'0'}}>30.06.2018</h5>
                                            <p style={{fontWeight:'500', color:'#F31D42'}}>STARTS 17:00</p>
                                            <div className="post_1">

                                            <h3 className='mt-4' style={{fontWeight:'300'}}>TOPIC #1 <span>17:10</span></h3>
                                            <p className="mt-4" style={{fontSize:'18px'}}>Add a description of your offer and key  benefit  . What  it is and how it hwlps your customer.</p>

                                            
                                            <p className="mt-4" style={{fontWeight:'500', color:'#F31D42', lineHeight:'.5'}}> 17:45</p>
                                            <h5 className="" style={{fontWeight:'500', lineHeight:'0'}}>small break</h5>

                                            <h3 className='mt-4' style={{fontWeight:'300'}}>TOPIC #2 <span>18:00</span></h3>
                                            <p className="mt-4" style={{fontSize:'18px'}}>Add a description of your offer and key  benefit  . What  it is and how it hwlps your customer.</p>



                                            <p className="mt-4" style={{fontWeight:'500', color:'#F31D42', lineHeight:'.5'}}>17:45</p>
                                            <h5 className="" style={{fontWeight:'500', lineHeight:'0'}}>small break</h5>
                                            
                                            <h3 className='mt-4' style={{fontWeight:'300'}}>Q&A <span>19:00</span></h3>
                                            <p className="mt-4" style={{fontSize:'18px'}}>Add a description of your offer and key  benefit  . What  it is and how it hwlps your customer.</p>
                                        </div>
                                    </div>
                                    <p style={{width:'100%',fontWeight:'700',marginTop:'50px'}} className="text-center">WEBINAR ENDS 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer pb_150">
                    <div className="container pt_80">
                        <div className="header pt_80">
                            <h2>Webinar speaker <span></span></h2>
                        </div>
                        <div className="footer_content row">
                            <div className="col-md-4">
                                <div className="man_container">
                                    <img src={require('./images/man.png')}/>
                                </div>
                                <button className="btn reg_btn pos_btn">REGISTER NEW</button>
                            </div>
                            <div className="col-md-8" >
                                <div className="about_right">
                                    <h1>Michael Walker /<span>COMPANY NAME</span></h1>
                                    <h2>Add a description of your offer and key benefits. What it is and how it helps your customer.</h2>
                                    <p>A few word your product /offer . Focus on the  benefits  not the features. Explain  how your product will  improve your customer's life . Add a description of your offer and key benefits.Whst it is and ho it helps your customer.How will this help solve the customer's issue it the future . A few word about your product/offer. Focus on the benefits not  the features .Explain  how your product will  improve your customer's life </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageThree