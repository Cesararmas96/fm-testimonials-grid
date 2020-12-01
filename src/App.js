import React from 'react';
import styled from 'styled-components';

import Card from './components/Card'
import img1 from './assets/image-daniel.jpg'
import img2 from './assets/image-jonathan.jpg'
import img3 from './assets/image-jeanette.jpg'
import img4 from './assets/image-patrick.jpg'
import img5 from './assets/image-kira.jpg'

const ConteinerCards = styled.div`
  margin: 50px auto;
   @media (min-width: 900px){
    margin: 0;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    max-width: 1214px;
    height: 670px;
    grid-gap: 20px;


  }
`;

const Main = styled.div`

 @media (min-width: 900px){
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto 30px;

 }
  
`

const App = () => {

    return (
    <Main>
        
    <ConteinerCards>
    
     <Card
      name="Daniel Clifford"
      graduate="Verified Graduate"
      title="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
               in the company I joined. I honestly feel I got every penny’s worth."
      coment=' “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. "'
      bgColor="#7541c8"
      avatar={img1}
    />

    <Card
      name="Jonathan Walters"
      graduate="Verified Graduate"
      title="The team was very supportive and kept me motivated"
      coment='“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I’ve made in myself. ”'
      bgColor="#48556a"
      avatar={img2}
    />

     <Card
      name="Jeanette Harmon"
      graduate="Verified Graduate"
      title="An overall wonderful and rewarding experience"
      coment=' “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
               while doing something I love. ”'
      bgColor="#ffffff"
      avatar={img3}
    />

      <Card
      name="Patrick Abrams"
      graduate="Verified Graduate"
      title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
            learning from their experiences was easy."
      coment='  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”'
      bgColor="#18202D"
      avatar={img4}
    />

          <Card
      name="Kira Whittle"
      graduate="Verified Graduate"
      title="Such a life-changing experience. Highly recommended!"
      coment=' “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”'
      bgColor="#ffffff"
      avatar={img5}
    />

   </ConteinerCards>

   </Main>
    );
}

export default App;