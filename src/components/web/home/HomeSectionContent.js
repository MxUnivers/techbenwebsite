import React from 'react';

const HomeSectionContent = () => {
    return (
        <div class="section-full  p-t80 p-b50 bg-full-height bg-repeat-x graph-slide-image" style={{ backgroundImage: "url('images/background/bg-1.jpg')" }}>

            <div class="container">

                <div class="row">
                    <div class="col-lg-6 col-md-12 m-b30 clearfix">
                        <div class="bit-converter p-a40 bg-white">
                            <div class="wt-box">
                                <h2 class="text-uppercase m-t0 site-text-primary">Currency convertor</h2>
                                <p>Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took.</p>
                            </div>
                            <div class="currency-calculator sp-one">
                                <div style={{ width: "100%" }}>
                                    <crypto-converter-widget live="" shadow="" symbol="" fiat="united-states-dollar" crypto="bitcoin" amount="1" border-radius="0.60rem" background-color="#171f2c" decimal-places="2"><a href="https://cr.today/" rel="noopener">Converter Widget</a></crypto-converter-widget>
                                    {/*<a href="https://co-w.io/">co-w.io</a> */}
                                    <script src="gh/dejurin/crypto-converter-widget/dist/latest.min.js" async=""></script>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 m-b30">
                        <div class="wt-box graph-part-right text-white">
                            <strong class="text-uppercase title-first">cryptocurrency</strong>
                            <span class="text-uppercase site-text-primary display-block title-second">Start selling, buying and trading</span>
                            <p><strong>Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.</strong></p>
                            <ul class="list-check-circle primary">
                                <li>Simply dummy text of the Lorem Ipsum is printing and type setting. </li>
                                <li>Dummy text of the printing and typesetting industry. Text of the printing</li>
                                <li>And typesetting industry Lorem Ipsum has been. Ipsum has been the </li>
                                <li>Industry{"'"}s standard dummy since the 1500s, </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeSectionContent;
