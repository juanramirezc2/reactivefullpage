import React from 'react'
import "index.css"

const reactive = ({children})=>{
  return (
    <div>
      {children.map(child=><div className="fullpage-item">{child}</div>)}
    </div>
  )
}
export default reactive
