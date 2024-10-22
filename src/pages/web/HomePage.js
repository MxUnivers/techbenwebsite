import React from 'react'
import HomeSlider from '../../components/web/home/HomeSlider'
import HomeMarqueScroll from '../../components/web/home/HomeMarqueScroll'
import HomeValueSection from '../../components/web/home/HomeValue'

const HomePage = () => {
  return (
  <div class="page-content">
      <HomeSlider/>
      <HomeMarqueScroll/>
      <HomeValueSection/>
    </div>
  )
}

export default HomePage
