import React from 'react'
import "index.css"

export default ({children})=>{
  return (
    <>
      {children.map(child=><div className="fullpage-item">{child}</div>)}
    </>
  )
}
