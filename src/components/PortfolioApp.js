import React, { Component } from 'react'
import {Layout, Header , Navigation , Drawer , Content} from 'react-mdl'
import Main from './Main'
import {Link} from 'react-router-dom'
import '../styles/PortfolioApp.css'

export default class PortfolioApp extends Component {
  render() {
    return (
      <div>
          <div className="demo-big-content">
          <Layout>  
              <Header className="header-color" title={<a href="/">MY PORTFOLIO</a>}  scroll>             
              <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactme">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="contactme/">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
          </div>  
      </div>
    )
  }
}
