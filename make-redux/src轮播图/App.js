import Swiper from './components/swiper'
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    let images = [
      { src: require("./assets/images/1.jpg").default, url: "https://pro.jd.com/mall/active/4Py9BoKUDuy89JMqA9QkBqkPZNYX/index.html?innerAnchor=100018902024&focus=4" },
      { src: require("./assets/images/2.jpg").default, url: "https://item.jd.com/100021786460.html?extension_id=eyJhZCI6IjM1MDMiLCJjaCI6IjIiLCJza3UiOiIxMDAwMjE3ODY0NjAiLCJ0cyI6IjE2MzcxMzQ4MzAiLCJ1bmlxaWQiOiJ7XCJjbGlja19pZFwiOlwiYmVlZjc0ZDUtMjdiOS00MGRkLThkMjctOTIyYmRhZGNjOTMxXCIsXCJtYXRlcmlhbF9pZFwiOlwiNTAwMDQxMDc5NVwiLFwicG9zX2lkXCI6XCIzNTAzXCIsXCJzaWRcIjpcImJmYjJmNDA1LTc0MzQtNDVmYS1iOWZlLWY4Mzk3NzEzYTc0ZVwifSJ9&jd_pop=beef74d5-27b9-40dd-8d27-922bdadcc931&abt=0" },
      { src: require("./assets/images/3.jpg").default, url: "https://channel-m.jd.com/pc/psp/1096149033?imup=CgYKABIAGAASEQip0NeKBBDyqAEaACDECigBGLAbIAAqJW1peHRhZ19pLHVjLHhnYixnaWEsY2lkLGZfYmFfZmxfbDQ5MzkyCG1peHRhZ19pStIBSXxNSVhUQUdfSVIsSV9BX0ZMX1UxMzkzMyxJX0FfUkVfVTEzOTMzLElfQV9QTF9SLElfQV9TTF9SLElfQV9DU19MMTU1NzAsSV9VX0ZMX1IsSV9TX0ZMX1IsSV9SX0ZMX0wxNTU3MyxJX1BfRkxfUixJX0dfWEdfUixJX0dfUkxfTEMsSV9CX0ZMX1IsR0lBLFhHQixVQXxHKklfQV9GTF9VMTM1ODAsRypJX1JfRkxfVTEzNTgwO0Z8TUlYVEFHX0ZSLEZfQkFfRkxfTDQ5Mzl8&extension_id=eyJhZCI6IjM1MDQiLCJjaCI6IjIiLCJza3UiOiIxMDk2MTQ5MDMzIiwidHMiOiIxNjM3MTM0ODQ1IiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcImMyYTQ4NWNiLWQ1YjgtNDA1OC04OTIyLTVkNzVmMGZmMGI0YVwiLFwibWF0ZXJpYWxfaWRcIjpcIjgxNTkzODAzMzE2MDQ5MTE0OTlcIixcInBvc19pZFwiOlwiMzUwNFwiLFwic2lkXCI6XCIzMTY0MWViMy1mMzU4LTQzZTEtYTEwYS05MjkxOTMwZjgwYThcIn0ifQ==&jd_pop=c2a485cb-d5b8-4058-8922-5d75f0ff0b4a&abt=0" }
    ]
    this.setState({ images: images })
  }
  render() {
    return (
      <div className="App">
        <div className='banner'>
          <Swiper data={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
