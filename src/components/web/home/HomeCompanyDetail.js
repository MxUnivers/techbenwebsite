import React from 'react';

const HomeCompanyDetail = () => {
    return (
        <div class="section-full p-t80 p-b50 overlay-wraper bg-parallax clouds1 bg-repeat" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url('images/background/bg-9.jpg')" }}>
            <div class="overlay-main bg-secondry opacity-05"></div>
            <div class="container ">
                <div class="row">
                    <div class="col-lg-4 col-md-12 m-b30">
                        <div class="rocket-pic">
                            <div class="rocket-animation ">
                                <img src="images/rocket.png" alt="" class="floating" />
                                <div class="rocket-fire"> <img src="images/fire.gif" alt="" class="floating" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 m-b30">
                        <div class="awesome-counter text-right text-white">
                            <h3 class="font-24">The Cryptocurrency</h3>
                            <h2 class="font-60 font-weight-600"><span class="site-text-primary"> AWESOME FACTS</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis. Nullam ornare odio eu lacus tincidunt malesuada.</p>

                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <div class="status-marks  text-white m-tb10">
                                    <div class="status-value text-right">
                                        <span class="counter">1150</span>
                                        <i class="fa fa-building font-26 m-l15"></i>
                                    </div>
                                    <h6 class="text-uppercase text-right">PROJECT COMPLETED</h6>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="status-marks  text-white m-tb10">
                                    <div class="status-value text-right">
                                        <span class="counter">5223</span>
                                        <i class="fa fa-users font-26 m-l15"></i>
                                    </div>
                                    <h6 class="text-uppercase text-white text-right">HAPPY CLIENTS</h6>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <div class="status-marks  text-white m-tb10">
                                    <div class="status-value text-right">
                                        <span class="counter">4522</span>
                                        <i class="fa fa-user-plus font-26 m-l15"></i>
                                    </div>
                                    <h6 class="text-uppercase text-white text-right">WORKERS EMPLOYED</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCompanyDetail;
