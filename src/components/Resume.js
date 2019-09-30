import React, { Component } from 'react';
import { Grid, Cell ,Button} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import '../images/avatar.jpg'
import '../documents/AdityaResume.pdf'

class Resume extends Component {
      constructor(props) {
        super(props)
        this.state = { 

        };
        this.resumeDownload = this.resumeDownload.bind(this)  
      }
      resumeDownload(){
        const url = 'https://drive.google.com/open?id=1gxZ5eP2qcN3f7gP1MuKRLvM2WLy_T3Cl';
        window.open(url, '_blank');
        console.log(url)
      }
  render() {  
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src= {require('../images/avatar.jpg')}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>
            <div style={{
              textAlign: 'center',
              marginTop:'2em'
                   }}>
            <Button raised accent ripple onClick={this.resumeDownload}>
            Download Resume</Button>
            </div>
            
            <h2 style={{paddingTop: '2em'}}>Aditya Gupta</h2>
            
            <h4 style={{color: 'grey'}}>Frontend Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>J6,DDA Market, Near Valmiki Mandir, Shakurpur, New Delhi(100034)</p>
            <h5>Phone</h5>
            <p>+91 7979832758</p>
            <h5>Email</h5>
            <p>adityaxlr8@gmail.com</p>
            <h5>Web</h5>
            <p>https://my-portfoliox.herokuapp.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="Magadh University"
                 schoolDescription="Bachelor of Computer Applications"
                  />
            
               <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Bihar School Examination Board"
                 schoolDescription="Intermediate examination"
                  />
                  <Education
                  startYear={2009}
                  endYear={2011}
                  schoolName="Kendriya Vidyalaya No-1 Gaya"
                  schoolDescription="Matriculation examination"
                   />  
                <hr style={{borderTop: '3px solid #e22947'}} />
              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={75}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="React"
                    progress={75}
                    />
                    <Skills
                    skill="Redux"
                    progress={75}
                    />
                    <Skills
                    skill="Webpack"
                    progress={75}
                    />
                    <Skills
                    skill="Git"
                    progress={75}
                    />
                    <Skills
                    skill="Firebase"
                    progress={75}
                    />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;