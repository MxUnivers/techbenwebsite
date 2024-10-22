import React from 'react'
import HomeSlider from '../../components/web/home/HomeSlider'
import HomeMarqueScroll from '../../components/web/home/HomeMarqueScroll'
import HomeValueSection from '../../components/web/home/HomeValue'
import HomeAboutStart from '../../components/web/home/HomeAboutStart'
import HomeAvantage from '../../components/web/home/HomeAvantage'
import HomeWorkSection from '../../components/web/home/HomeWorkSection'

const HomePage = () => {
  return (
  <div class="page-content">
      <HomeSlider/>
      <HomeMarqueScroll/>
      <HomeValueSection/>
      <HomeAboutStart/>
      <HomeAvantage/>
      <HomeWorkSection/>
    </div>
  )
}

export default HomePage
