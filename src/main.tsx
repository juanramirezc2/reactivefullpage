import React from 'react'
import "index.css"

export interface LayoutProps  {
   children: React.ReactNode
}

const Reactive = (props: LayoutProps)=>{
  return (
    <div>
      { React.Children.map(props.children, x => ( <div className="fullpage-item">{x}</div> )) }
    </div>
  )
}

export default Reactive
