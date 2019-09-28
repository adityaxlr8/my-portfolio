import React, { Component } from 'react'
import {Grid , Cell } from 'react-mdl'

export default class AboutMe extends Component {
    render() {
      return (
        <div>
        <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Aditya Gupta</h2>
          <img 
            src= {require('../images/avatar.jpg')}
            alt="avatar"
            style={{
              height:'250px'  
            }}
            />
          </Cell>
          <Cell col={6}>
          <h2 
          style={{
           textAlign:'left'
          }}
          
          >About Me</h2>
          <hr/>
          <div className="contact-grid">
          <p 
          style={{
            width:'100%',
            margin:'auto',
            paddingTop:'1em',
            textAlign:'center'
          }}
          
          >
          I am a Front-end Developer, graduate of Bachelor of Computer Applications.
           I have some projects on front-end development, producing high quality responsive websites and exceptional user experience.
         You can pproach me when you need a developer who can provide:
          </p>  
          <ul
          style={{
            width:'100%',
            margin:'auto',
            paddingTop:'1em',
            textAlign:"left",
            fontFamily: 'Oxygen',
            fontWeight: 'bold'
          }} 
          >
          <li>Responsive HTML/CSS</li>
          <li>JavaScript</li> 
          <li>React/Redux</li>
          <li>High-level user experience</li>
          <li>Best practices</li>
          <li>Performance</li>
          <li>Git</li> 
          </ul>
          <p>
The work I provide is of highest quality, fully responsive, and tested in a wide range of devices.
 I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.
          </p>    


          </div>
          

          </Cell>
        </Grid>
        
        </div>
        </div>
      )
    }
  }