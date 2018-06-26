import React, { Component } from 'react'

import './Homepage.css'

export default function Homepage (){
  
 return (
     <div className="welcome-page">

            <div className="welcome-wrapper">
          <div className="welcome-greeting">
              <h1>Welcome</h1>
          </div>
          <div className="login-button">
            <a href={process.env.REACT_APP_LOGIN}>Login </a>
            </div>
            </div>
    </div>
    )
  } 


