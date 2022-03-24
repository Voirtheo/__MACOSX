import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import Discovery from './pages/Discovery';
import Videos from './pages/Videos';



const App = () => {

  return (
    <div>
      <div>
        <Link to={"/discovery"} >发现音乐</Link>
        <Link to={"/videos"} >视频</Link>
      </div>
      <div>
        <Routes>
          <Route path="/discovery" element={Discovery} />
          <Route path="/videos" element={Videos} />
        </Routes>
      </div>
    </div>
  )
}
export default App;



