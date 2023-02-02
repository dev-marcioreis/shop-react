import React from 'react'
import Banner from '../components/banner/Banner'
import SliderCard from '../components/slider/SliderCard'
import Category from '../components/category/Category'

const Pages = () => {
  return (
    <>
        <section className="home">
            <div className="section">
                <div className="container">
                    <Banner />
                    <SliderCard />
                    <Category />
                </div>
            </div>
        </section>
    </>
  )
}

export default Pages