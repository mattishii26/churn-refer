import React, { useState } from 'react';
import ReactGA from 'react-ga';
import {
    Container,
    InputGroup,
    Dropdown,
    DropdownButton,
    Button,
    FormControl,
    ButtonGroup,
    Modal,
    Alert
} from 'react-bootstrap';

import './global.css';

const Search = (props) => {
    const cardString = "Select a Card Company";
    const creditCardString = "Select a Credit Card";

    let [addShown, setAddShown] = useState(false);
    let [cardCompanyTitle, setCardCompanyTitle] = useState(cardString);
    let [creditCardTitle, setCreditCardTitle] = useState(creditCardString);
    let [cardCompanySelected, setCardCompanySelected] = useState(true);
    let [cardChoices, setCardChoices] = useState([]);
    let [referralLink, setReferralLink] = useState("");
    let [filterString, setFilterString] = useState("");
    let [creditCardSelected, setCreditCardSelected] = useState(false);
    let [getReferralLink, setGetReferralLink] = useState("");

    const creditCardCompanyHandler = (e) => {
        setCardCompanyTitle(e);
        setCardCompanySelected(false);

        let cardOptions = [];
        cardOptions = props.cardData.filter((item) => item.cardCompany == e)[0].creditCards;
        let res = [];
        cardOptions.forEach(card => {
            res.push(card);
        })
        setCardChoices(res);
    }

    const copyHandler = (url) => {
        navigator.clipboard.writeText(url);
    }
    const resetSearchForm = () => {
        setCardCompanySelected(true);
        setCreditCardSelected(false);
        setCardCompanyTitle(cardString);
        setCreditCardTitle(creditCardString);
        setCardChoices([]);
        setReferralLink("");
        setFilterString("");
        setGetReferralLink("");
    }

    const getLinkHandler = async () => {
        const rawResponse = await fetch(`https://drs8w4z3c7.execute-api.us-west-1.amazonaws.com/PROD/?CreditCard=${creditCardTitle}&CardCompany=${cardCompanyTitle}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await rawResponse.json();
        ReactGA.event({
            category: "Searching Referral",
            action: "User Got a Referral Link",
        });
        if (content != null) {
            setReferralLink(content.ReferralLink);
            setGetReferralLink(
                <InputGroup
                    className="mb-3"
                >
                    <FormControl
                        placeholder="Referral Link URL"
                        aria-label="Referral Link URL"
                        aria-describedby="basic-addon2"
                        value={content.ReferralLink}
                        onChange={() => setReferralLink(content.ReferralLink)}
                    />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={() => {copyHandler(content.ReferralLink)}}>Copy Me!</Button>
                    </InputGroup.Append>
                </InputGroup>
            );
        } else {
            setGetReferralLink(
                <Alert variant="danger">
                    {cardCompanyTitle} {creditCardTitle} referral links could not be found. :(
          </Alert>);
        }
    }

    return (
        <Container className="m-2">
            <div className="buttonBackground">
                <Button variant="success" 
                onClick={() => { 
                    setAddShown(true);
                    ReactGA.event({
                        category: "Looking for Referral",
                        action: "User pressed Looking for Referral Button",
                    });
                    }}>
                    <img src="./pay.png" className="buttonImage" />
                &nbsp;Looking for a Referral Link?
            </Button>
            </div>

            <Modal
                show={addShown}
                onHide={() => { setAddShown(false); resetSearchForm(); }}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Giving back to the community! Thank you</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={ButtonGroup}
                            variant="success"
                            className="p-2"
                            title={cardCompanyTitle}
                            onSelect={(e) => creditCardCompanyHandler(e)}
                        >
                            {
                                props.cardData.map(card => {
                                    return (
                                        <Dropdown.Item eventKey={card.cardCompany}>{card.cardCompany}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            variant="success"
                            title={creditCardTitle}
                            className="p-2"
                            hidden={cardCompanySelected}
                            onSelect={ev => { setCreditCardTitle(ev); setCreditCardSelected(true); }}
                        >
                            <FormControl
                                autoFocus
                                className="mx-3 my-2 w-auto"
                                placeholder="Type to filter..."
                                value={filterString}
                                onChange={(ev) => setFilterString(ev.target.value)}
                            />
                            {
                                cardChoices.filter(x => x.toLowerCase().includes(filterString.toLowerCase())).map(cardItem => {
                                    return (
                                        <Dropdown.Item eventKey={cardItem}>{cardItem}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                        <Button
                            variant="primary"
                            hidden={!creditCardSelected}
                            onClick={getLinkHandler}
                        >
                            Get Link
                </Button>
                    </InputGroup>
                    {
                        getReferralLink
                    }
                </Modal.Body>
            </Modal>
        </Container>

    )
}
export default Search;