import React, { useState } from 'react'
import ReactPictureInPicture from 'react-picture-in-picture'


const App = () => {
  const [active, setActive] = useState(false) // state of the picture in picture mode

  const [playerOptions, setPlayerOptions] = useState({ // change player option dynamically
    autoplay : true,
    loop: true,
    muted : true
  })
 
  const successEnable = () => {
    console.log("Pip mode Enable")
  }

  const successDisable = () => {
    console.log("pip mode disable");
  }

  return (
    <div className='video-container'>
      <ReactPictureInPicture 
        className='video' 
        loop = {playerOptions.loop}
        autoplay = {playerOptions.autoplay}
        control = {playerOptions.control}
        isActive={active}
        muted = {playerOptions.muted}
        callBackSuccessOnDisable= {() => successDisable()}
        callBackSuccessOnEnable={() => successEnable()}  
      >
        <source src="https://cdn.arnellebalane.com/videos/original-video.mp4"/>
      </ReactPictureInPicture>

      <button onClick={() => setActive(!active)}>Test</button>
    </div>
  )
}

export default App
