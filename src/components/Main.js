import React from 'react';
import { Switch,Route  } from 'react-router-dom'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import  ContactMe from './ContactMe'
import Projects from './Projects'
import Resume from './Resume'

const Main = () => (
    <Switch>
    <Route exact path ="/" component= {LandingPage} exact={true} />
    <Route exact path ="/aboutme" component={AboutMe} />
    <Route exact path ="/contactme" component={ContactMe} />
    <Route exact path ="/projects" component={Projects} />
    <Route exact path ="/resume" component={Resume} />
    </Switch>
)

export default Main;