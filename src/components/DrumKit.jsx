import React, { useEffect, useState } from 'react'
import data from '../data'
function DrumKit() {
    const [display, setDisplay] = useState(null)
    useEffect(()=>{
        document.addEventListener("keydown", drumkey)
    },[])
    const drumkey = (e)=>{
        let key = e.key
        let keys = ['q','w','e','a','s','d','z','x','c']
        if(keys.includes(key)){
            playAudio(key)
        }
    }
    const playAudio = (key)=>{
        const element = document.getElementsByClassName("clip "+key)
        element[0].play()
        
        
    }
    return (
    <div className='container' >
    <div id="drum-machine">
        <div className='drum-pad-container'>
            {data.map(item=> <React.Fragment key={item.id} >
                <button className='drum-pad'id={item.key} onClick={()=>{playAudio(item.key.toLowerCase()); setDisplay(item.desc)}} ><audio type="audio/mp3" id={item.key} className={"clip "+item.key.toLowerCase()} src={item.instrument}></audio>{item.key}</button>
            </React.Fragment>)}
        </div>
        <div className='display-container'>
            <div id='display'>
                <p >{display}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DrumKit