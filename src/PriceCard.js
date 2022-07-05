import React, { useState } from 'react'

function PriceCard(props) {
    console.log(props.data.animate)
    let[animate,setAnimate] = useState("col-lg-4 "+props.data.animate)
  return (<>

<div className= {animate} >
        <div className="card mb-5 mb-lg-0" >
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.d1.content}</h5>
            <h6 className="card-price text-center">${props.data.d2.content}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.d3.muted? 'text-muted' : ''}><span className="fa-li"><i className={props.data.d3.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d3.content}</li>
              <li className={props.data.d4.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d4.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d4.content}</li>
              <li className={props.data.d5.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d5.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d5.content}</li>
              <li className={props.data.d6.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d6.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d6.content}</li>
              <li className={props.data.d7.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d7.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d7.content}</li>
              <li className={props.data.d8.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d8.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d8.content}</li>
              <li className={props.data.d9.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d9.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d9.content}</li>
              <li className={props.data.d10.muted? 'text-muted' : ''}><span className="fa-li"><i  className={props.data.d10.muted? "fas fa-times" : "fas fa-check"}></i></span>{props.data.d10.content}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>





    
        
        </>
  )
}

export default PriceCard