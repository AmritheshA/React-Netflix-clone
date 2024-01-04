import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'

import requests from '../Requests'
import { Footer } from '../Components/Footer'

function Home() {
  return (
    <div>
      <Main />
      <Row id='1'title="Popular" requestURL={requests.requestPopular}/>
      <Row id='2'title="Top Rated" requestURL={requests.requestTopRated}/>
      <Row id='3'title="Trending" requestURL={requests.requestTrending}/>
      <Row id='4'title="Up Coming" requestURL={requests.requestUpcoming}/>
      <Row id='5'title="Now Playing" requestURL={requests.requestNowPlaying}/>
      <Row id='6'title="Horror" requestURL={requests.requestHorror}/>
      <Row id='7'title="Action Movies" requestURL={requests.requestActionMovies}/>
      <Footer />
    </div>
  )
}

export default Home;