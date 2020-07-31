import './card.css'
import React from 'react'

export default (props) => {
  const style = {
    backgroundColor: props.color || '#fff'

  }

  return (
    <>
      <div className="card" style={style} >
        <div className="title" style={style}>{props.title}</div>
        <div className="content">
          {props.children}
        </div>
        <div className="footer">
          {props.footer}
        </div>
      </div>
    </>    
  )
}   
