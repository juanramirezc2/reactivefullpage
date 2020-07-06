import React from 'react'

export interface LayoutProps  {
  children: React.ReactNode
}
const fullpageStyles = {
  scrollSnapType: "y mandatory",
  scrollSnapPointsY: "repeat(100vh)",
  position: "fixed" as "fixed",
  overflowY: "scroll" as "scroll",
  overflowX: "hidden" as "hidden",
  height: "100vh",
  width: "100vw",
  top: "0",
  left: "0"
}

const fullpage_itemStyles = {
  width: "100vw",
  height: "100vh",
  scrollSnapAlign: "start"
}

const Reactive = (props: LayoutProps)=>{
  return (
    <div className="fullpage" style={fullpageStyles}>
      { React.Children.map(props.children, x => ( <div className="fullpage-item" style={fullpage_itemStyles}>{x}</div> )) }
    </div>
  )
}

export default Reactive
