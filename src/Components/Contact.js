import React from 'react';
import {
    Container
} from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="text-center">
            <div className="text-center">
                <h2>
                    <u>
                        Contact
                    </u>
                </h2>
            </div>
            <p>
                Am I missing a credit card? Have any questions? Encounter any issues?
            </p>
            <p>
                Feel free to <a href="mailto:ishiimatthew@gmail.com?subject=Churnin' Points Contact">Contact Me!</a>
            </p>

        </Container>
    )
}

export default Contact;