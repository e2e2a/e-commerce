import React from 'react'
import Header from '../components/Header'
import RecommendFood from '../components/RecommendFood'
import Service from '../components/Service'
import NewFood from '../components/NewFood'
import Service2 from '../components/Service2'
import Special from '../components/Special'


const Home = () => {
  return (
    <div>
        <Header />
        <RecommendFood />
        <Service />
        <NewFood />
        <Service2 />
        <Special />
    </div>
  )
}

export default Home