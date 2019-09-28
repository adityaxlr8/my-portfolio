import React, { Component } from 'react'
import { Tab , Tabs , Grid , Cell , Card , CardTitle , CardText , CardActions , Button ,CardMenu ,IconButton } from 'react-mdl'





export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
    this.gitExpensify = this.gitExpensify.bind(this)
    this.gitIndecision = this.gitIndecision.bind(this)
    this.gitAce = this.gitAce.bind(this)
    this.gitWeather = this.gitWeather.bind(this)
    this.herokuExpensify = this.herokuExpensify.bind(this)
    this.herokuIndecision = this.herokuIndecision.bind(this)
    this.herokuAce = this.herokuAce.bind(this)
    this.herokuWeather = this.herokuWeather.bind(this)
}
gitExpensify(){
  const url = 'https://github.com/adityaxlr8/1expensify-app';
  window.open(url, '_blank');
}
herokuExpensify(){
  const url = 'https://expensifyx-app.herokuapp.com/';
  window.open(url, '_blank');
}
gitIndecision(){
  const url = 'https://github.com/adityaxlr8/indecision-app';
  window.open(url, '_blank');
}
herokuIndecision(){
  const url = 'https://indecisionx-app.herokuapp.com/';
  window.open(url, '_blank');
}
gitAce(){
  const url = 'https://github.com/adityaxlr8/AceEditorApp';
  window.open(url, '_blank');
}
herokuAce(){
  const url = 'https://ace-editor-app.herokuapp.com/';
  window.open(url, '_blank');
}
gitWeather(){
    const url = 'https://github.com/adityaxlr8/weather-app';
  window.open(url, '_blank');
}
herokuWeather(){
  const url = 'https://weatheropenx-app.herokuapp.com/';
  window.open(url, '_blank');
}


toggleCategories(){
  
  if (this.state.activeTab ===0) {
    return(
      <div className="projects-grid">
     {/** Expensifyx-app */} 
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
    Expesifyx-app
    </CardTitle>
    <CardText>
    Expense app is complete app to track your all the expenses bared by your pocket or bared by you & manage your personal finance.
     So that you can trace where your money goes as well as from where money comes in, you can limit & plan accordingly.
    </CardText>
    <CardActions border>
        <Button onClick={this.gitExpensify} colored>Github</Button>
        <Button onClick={this.herokuExpensify}colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
      </Card>
      
       {/** Indecision-app */} 
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
    Indecisionx-app
    </CardTitle>
    <CardText>
    The indecision app will help you make up your mind, when you can’t decide between an array of options.
     Add the options you’d like the app to go through and it will randomly select for you.
    </CardText>
    <CardActions border>
        <Button onClick={this.gitIndecision} colored>Github</Button>
        <Button onClick={this.herokuIndecision}colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
      </Card>
      
       {/** ace-editor-app */} 
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
    AceEditor-app
    </CardTitle>
    <CardText>
    AceEditor is a feature-rich solution for securely collabrating with a partner to code great projects.Two-way sync really helps in making collabration more fun and easy.
    </CardText>
    <CardActions border>
        <Button onClick={this.gitAce} colored>Github</Button>
        <Button onClick={this.herokuAce} colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
      </Card>
      
       {/** WeatherOpenX-app */} 
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', 
    background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
    WeatherOpenX
    </CardTitle>
    <CardText>
    `The "WeatherOpenx" is a great way to find weather. 
    Equipped with location-based technology to detect a user's locality, the application can automatically display the latest official weather forecasts of city nearby`
    </CardText>
    <CardActions border>
        <Button onClick={this.gitWeather} colored>Github</Button>
        <Button onClick={this.herokuWeather }colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
      </Card>
  
      </div>

    )
  }

}



render() {
    return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React</Tab>  
            </Tabs>
    
              <Grid>
              <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
              </Cell>
              </Grid>    
            
          
        </div>    
    );
}
  }