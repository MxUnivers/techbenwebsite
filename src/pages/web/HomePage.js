import React from 'react'
import HomeSlider from '../../components/web/home/HomeSlider'
import HomeMarqueScroll from '../../components/web/home/HomeMarqueScroll'
import HomeValueSection from '../../components/web/home/HomeValue'
import HomeAboutStart from '../../components/web/home/HomeAboutStart'
import HomeAvantage from '../../components/web/home/HomeAvantage'
import HomeWorkSection from '../../components/web/home/HomeWorkSection'
import HomeSectionContent from '../../components/web/home/HomeSectionContent'
import HomeBlog from '../../components/web/home/HomeBlog'
import HomeTestimonial from '../../components/web/home/HomeTestimonial'
import HomeSponsor from '../../components/web/home/HomeSponsor'

const HomePage = () => {
    return (
        <div class="page-content">
            <HomeSlider />
            <HomeMarqueScroll />
            <HomeValueSection />
            <HomeAboutStart />
            <HomeTestimonial />
            <HomeAvantage />
            <HomeWorkSection />
            <HomeSectionContent />
            <HomeBlog />
            <HomeSponsor />
        </div>
    )
}

export default HomePage
