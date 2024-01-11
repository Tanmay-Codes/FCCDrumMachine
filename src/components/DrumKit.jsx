import React, { useEffect } from 'react'
import data from '../data'
function DrumKit() {
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
        const element = document.getElementsByClassName(key+"clip")
        element[0].play()
        
    }
    return (
    <div className='container' >
    <div id="drum-machine">
        <div className='drum-pad'>
            {data.map(item=> <React.Fragment key={item.id} >
                <button className='pad-button' onClick={()=>playAudio(item.key.toLowerCase())} ><audio id={item.key} className={item.key.toLowerCase() + "clip"} src={item.instrument}></audio>{item.key}</button>
            </React.Fragment>)}
        </div>
        <div className='display-container'>
            <div id='display'>

            </div>

        </div>
    </div>
    </div>
  )
}

export default DrumKit