import React, { Component } from 'react'
import {Grid , Cell , List , ListItem , ListItemContent } from 'react-mdl'
import '../images/avatar.jpg'

export default class ContactMe extends Component {
    render() {
      return (
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
            <p 
            style={{
              width:'75%',
              margin:'auto',
              paddingTop:'1em',
            }}
            
            >
            Aditya Gupta loves programming, writing, speaking, traveling, and lifting heavy things.
            He does not love talking about himself in the 3rd person.
            He is trying to practice gratitude in every little thing. ✨
            He is trying to live in this moment. 🧘‍♀️
            He is trying to be the light in the darkness. 😉 
            For more info, check out his writing, speaking, projects, and photos.
            </p>
          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          <div className="contact-list">
              <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}} icon="person">
                <i className= "fa fa-phone-square" aria-hidden="true" />
                (+91) 7979832758
                </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}} icon="person">
              <i className= "fa fa-envelope" aria-hidden="true" />
              adityaxlr8@gmail.com
              </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}} icon="person">
            <i className= "fa fa-skype" aria-hidden="true" />
            live:adityaxlr8_1
            </ListItemContent>
          </ListItem>
            </List>
          </div>
          

          </Cell>
        </Grid>
        
        </div>
      )
    }
  }