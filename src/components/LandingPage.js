import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import '../styles/PortfolioApp.css'
import '../images/avatar.jpg'

export default class LandingPage extends Component {
    render() {
      return (
         <div style={{width:'100%',margin:'auto'}} >
           <Grid className="landing-grid">
             <Cell col={12} >
                <img 
                src= {require('../images/avatar.jpg')}
                alt="avatar"
                className="avatar-img"
                />
                  <div className="banner-text" >
                    <h1>Frontend Web Developer</h1>
                    
                    <hr/>
                  <p>HTML/CSS | Materialize CSS | Javascript | React | Webpack |
                   Redux | GIT | JSON | Firebase</p>

                   <div className="social-links">
                    {/* LinkedIn  */}
                    <a href="https://www.linkedin.com/in/aditya-gupta-6a8129173/" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    {/* Github  */}
                    <a href="https://github.com/adityaxlr8" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                    {/* Gmail  */}
                    <a href="mailto:adityaxlr8@gmail.com" target="_blank">
                      <i className="fa fa-envelope-open" aria-hidden="true"/>
                    </a>
                  
                   </div>
                  </div>
             </Cell>
            </Grid>
        
          </div>
      )
    }
  }