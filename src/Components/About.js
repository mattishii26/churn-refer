import React from 'react';

import {
    Container
} from 'react-bootstrap';

const About = () => {
    return(
        <Container fluid>
            <div className="text-center">
            <h1>
                <u>About</u>
            </h1>
            </div>

            
            <h3>
                Who or what is a churner?
            </h3>
            <p>
                A churner is someone who opens a credit card, mainly for the sign up bonus' associated with the card. 
            </p>
            <h3>
            What is this site for?
          </h3>
          <p>
            This site is a way to spread the love to the <a href="https://www.reddit.com/r/churning">/r/churning</a> community, by easily sharing and using referral links!
          </p>
          <h2>
            How can I start churing?
          </h2>
          <p>
              Head over to the <a href="https://www.reddit.com/r/churning/wiki/index">/r/churning wiki</a>, as it has a lot of useful information!
          </p>
            <h2>
                How can I add or get a referral link from your website?
            </h2>
          <p>
            There's no sign up, no commitment, no nothing. Just add your own referral link to get points or search for one to give back to the community!
          </p>
          <h2>
            Are there any rules?
          </h2>
          <p>
            To give everyone a fair chance, referral links are randomly picked and automatically deleted once the link has been clicked on. Also, if your link is already in the system, it will not be accepted.
          </p>
          <h2>Where did you get your icons from?</h2>
          <p>
            I got my icons all from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>!
          </p>
          <ul>
            <li>Credit Card in tab icon made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a></li>
            <li>Add Referral link icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
            <li>Looking for referral link icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
          </ul>
          
        </Container>
    )
}

export default About;