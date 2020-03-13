import React from 'react';

import {
    Container,
    ProgressBar
} from 'react-bootstrap';

const AnalyticsData = () => {
    return (
        <Container>
            <div  className="text-center">
            <h2>
                <u>Data? Show me the data!</u>
            </h2>
            </div>
            <b>
                Top 10 entered Referrals
            </b>
            <ol>
                <li>
                    <b>Chase Sapphire Reserve</b>
                    <ProgressBar>
                <ProgressBar variant="success" now={(35/300) * 100} label={`${35} of ${3000}`} />
            </ProgressBar>
                </li>
            </ol>
            <b>
                Top 10 used Referrals
            </b>
            <ol>
                <li>
                    <b>Chase Sapphire Reserve</b>
                    <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} label={`${35}%`} />
                <ProgressBar variant="warning" now={20} key={2} label={`${35}%`}/>
            </ProgressBar>
                </li>
            </ol>
        </Container>
    )
}
export default AnalyticsData;