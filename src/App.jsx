import './App.css'

import Nav from './copmonents/nav/Nav'
import Hero from './copmonents/hero/Hero'
import Leaderboard from './copmonents/leaderboard/Leaderboard'
import Explore from './copmonents/explore/Explore'
import TrendingArt from './copmonents/trending-art/TrendingArt'
import Collections from './copmonents/collections/Collections'
import bactToTop from './images/backToTop.svg'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <TrendingArt/>
      <Collections/>
      <Leaderboard/>
      <Explore/>
      <a href="#" className="backToTop" ><img src={bactToTop} alt=" back to top"/></a>
    </>
  )
}

export default App
