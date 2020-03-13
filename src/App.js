import React from 'react';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import Keys from './keys';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

//Component Imports
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Add from './Components/Add';
import AnalyticsData from './Components/AnalyticsData';
import About from './Components/About';
import Contact from './Components/Contact';

ReactGA.initialize(Keys.GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname);

const App = () => {
  return (
    

    <div className="App">
      <NavBar></NavBar>
      <div id="top"></div>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h1>Hello there current and prospective churners!</h1>
            </div>
          </Col>
        </Row>
        <div className="">
        <Row>
          <Col sm={6} className="text-center">
          <Add cardData={Data.cards}></Add>
          </Col>
          <Col sm={6} className="text-center">
          <Search cardData={Data.cards}></Search>
          </Col>
        </Row>
        </div>
        
        {/* 
        <Row>
        <AnalyticsData></AnalyticsData>
        </Row> 
        */}
        <Row>
          <div id="about"></div>
          <About></About>
        </Row>
        <Row>
          <div id="contact"></div>
          <Contact></Contact>
        </Row>
      </Container>
    </div>
  );
}

export default App;
