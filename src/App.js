import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import {
  Container,
  Jumbotron
} from 'react-bootstrap';

//Component Imports
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Add from './Components/Add';


const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Container>
        <Jumbotron>
          <h1>Hello there current and prospective churners!</h1>
          <h3>
            What is this site for?
          </h3>
          <p>
            This site is a way to spread the love to the <a href="https://www.reddit.com/r/churning">/r/churning</a> community, by easily sharing and using referral links!
          </p>
          <h2>
            How can I start?
          </h2>
          <p>
            There's no sign up, no commitment, no nothing. Just add your own referral link to get points or search for one to give back to the community!
          </p>
          <h2>
            Are there any rules?
          </h2>
          <p>
            To give everyone a fair chance, referral links are randomly picked and automatically deleted once the link has been clicked on or if the link has been in the system for more than 30 days.<br/>

            Also, if your link is already in the system, it will not be accepted.
          </p>
        </Jumbotron>
        <Add cardData={Data.cards}></Add>
        <Search cardData={Data.cards}></Search>

      </Container>


    </div>
  );
}

export default App;
