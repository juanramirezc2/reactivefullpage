import React from 'react'
import "index.css"

export default reactive
const reactive = ({children})=>{
  return (
    <div>
      {children.map(child=><div className="fullpage-item">{child}</div>)}
    </div>
  )
}
