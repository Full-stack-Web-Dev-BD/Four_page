import React from 'react'
import './page_2.css'
import { ArrowDropDownOutlined,ArrowRight,Instagram ,Twitter, Facebook, ArrowUpward} from  '@material-ui/icons'

function PageTwo() {
    return (
        <div>
            {/* ===================Menu area ================= */}
            <section>
                <div className="menu_outer">
                    <div className="container">
                        <div className="row header_content">
                            <div className="col-md-6">
                                <div className="header_left_content d-flex">
                                    <div className="logo">
                                        <img src={require('./image/logo.png')}/>
                                    </div>
                                    <div className="text">    
                                        <span>Your name</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="header_right_content" style={{textAlign:'right'}}>
                                    <div className="social_media_top" style={{display:'inline-block',marginLeft:'auto'}}>
                                        <div className="social_icon_top d-flex">
                                            <div className="single_icon_top mr-2">
                                                <div className="root_icon_top">
                                                    <div className="icon_holder">
                                                        <Facebook style={{color:'#EC4144',cursor:'pointer'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single_icon_top mr-2">
                                                <div className="root_icon_top">
                                                    <div className="icon_holder">
                                                        <Twitter style={{color:'#EC4144',cursor:'pointer'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single_icon_top mr-2">
                                                <div className="root_icon_top">
                                                    <div className="icon_holder_top">
                                                        <Instagram style={{color:'#EC4144',cursor:'pointer'}}/>
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
                <div className="unique pb-5" >
                    <div className="container">
                        <div className="row unique_content">
                            <div className="col-md-6 pt-t unique_left mt-5 mb-5">
                                <h1>Your Unique</h1>
                                <h1>Selling Proposition</h1>
                                <div className="p-4"></div>
                                <p>Focus on the benifit not the feature.Explain how your product will improve your customer's lige.</p>
                                <div className="cost pt-5">
                                    <div className="">
                                        <p className="cost_head">Cost only:</p>
                                        <div className="price">
                                            <p>$</p>
                                            <h1>49</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <button className="btn buy_btn">Buy it ! </button>
                                    <button className="btn ml-2 read_more " >Read more <ArrowDropDownOutlined style={{color:'#EC4144',cursor:'pointer'}}/></button>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="head_phone">
                                    <img style={{maxWidth:"100%", maxHeight:'100%'}} src={require('./image/head_phone.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="about pb-5" >
                    <div className="container">
                        <div className="row about_content">
                            <div className="col-md-3 read_content ">
                                <div className="read_about">
                                    <h3>About Product</h3>
                                    <div className="about_text">
                                        <p style={{fontWeight:'500'}}>A few word about product/offer.Focus on the benifit not the feature.</p>
                                        <p style={{textAlign:'justify'}}>A few word about product/offer.Focus on the benifit not the feature.Explain how product wil</p>
                                        <p>Learn more:</p>
                                        <div className="social_icon d-flex">
                                            <div className="single_icon mr-2">
                                                <div className="root_icon">
                                                    <div className="icon_holder">
                                                        <Twitter/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single_icon mr-2">
                                                <div className="root_icon">
                                                    <div className="icon_holder">
                                                        <Twitter/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single_icon mr-2">
                                                <div className="root_icon">
                                                    <div className="icon_holder">
                                                        <Twitter/>
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
                <div className="galary_area pt-5">
                    <div className="container">
                        <div className="row galary_content">
                            
                            <div className="single_image">
                                <img src={require('./image/galary_1.png')}/>
                            </div>
                            <div className="single_image">
                                <img src={require('./image/galary_2.png')}/>
                            </div>
                            <div className="single_image">
                                <img src={require('./image/galary_3.png')}/>
                            </div>
                        </div>
                        <div className="row galary_content">
                            
                            <div className="single_image">
                                <img src={require('./image/galary_3.png')}/>
                            </div>
                            <div className="single_image">
                                <img src={require('./image/galary_6.png')}/>
                            </div>
                            <div className="single_image">
                                <img src={require('./image/galary_6.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="stront_point pt-5">
                    <div className="container">
                        <div className='strong_content'>
                            <h3 className="stront_header" style={{fontWeight:'300',background:'#F5F5F5',padding:'15px 50px'}}><strong>Strong Poing </strong> Your Product Presented in Use</h3>
                            <div className="p-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer.Focus on the benifit not the feature.Explain how product wil</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer.Focus on the benifit not the feature.Explain how product wil</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer.Focus on the benifit not the feature.Explain how product wil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">Explain how your product will improve customer life.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">Explain how your product will improve customer life.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">Explain how your product will improve customer life.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex single_para">
                                            <div style={{color:'#EC4144', minWidth:'45px'}}><ArrowRight/></div>
                                            <p className="f_500 fz_22">A few word about product/offer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="encourage_area">
                    <div className="container">
                        <div className="  encourage_content pt-5 pb-5">
                            <h1 className="text-center text-light">Encourage your customer </h1>
                            <p className="text-center">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                            <div className="text-center">
                                <button className="btn buy_btn_white">Buy it !</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className ="product_area mt-5">
                    <div className="container">
                        <div className="product_content  row">
                            <div className="col-md-4 no_gutter">
                               <div className="other_product p-4">
                                    <h2 className="pt-5 mt-3">Other products</h2>
                                    <p>A few word about product/offer.Focus on the benifit not the feature.Explain how product wil improve customer life.</p>
                                    <p className="text-right"> See more <ArrowRight style={{color:'#ED4244'}} /></p>
                               </div>
                            </div> 
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_1.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div>       
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_2.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div> 
                        </div>
                        <div className="product_content  row">
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_3.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div>
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_4.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div>       
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_5.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div> 
                        </div>
                    
                        <div className="product_content  row">
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_6.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div>
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_7.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div>       
                            <div className="col-md-4 no_gutter">
                               <div className="card">
                                   <img src={require('./image/card_8.png')}/>
                                   <div className="card_title p-4">
                                       <h2 className="fw_300">$</h2>
                                       <h2 className="fw_700">24,50</h2>
                                   </div>
                                    <div className="card_body ">
                                        <p>Show your customer there need</p>
                                    </div>
                               </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <footer className="footer text-center">
                    <div className="text-center">
                        <div style={{display:'inline-block',cursor:'pointer'}}>
                            <ArrowUpward style={{color:'#EC4144',cursor:'pointer'}}/> <br/>
                            <span className="btn_up">Back to top</span>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default PageTwo
