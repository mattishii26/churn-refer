import React, { useState } from 'react';
import {
    Container,
    InputGroup,
    Dropdown,
    DropdownButton,
    FormControl,
    Button,
    Modal,
    ButtonGroup,
    Form,
    Alert
} from 'react-bootstrap';

import './global.css';

const Add = (props) => {
    const cardString = "Select a Card Company";
    const creditCardString = "Select a Credit Card";

    let [addShown, setAddShown] = useState(false);
    let [cardCompanyTitle, setCardCompanyTitle] = useState(cardString);
    let [creditCardTitle, setCreditCardTitle] = useState(creditCardString);
    let [cardCompanySelected, setCardCompanySelected] = useState(true);
    let [creditCardSelected, setCreditCardSelected] = useState(false);
    let [cardChoices, setCardChoices] = useState([]);
    let [inputEmail, setInputEmail] = useState("");
    let [inputUrl, setInputUrl] = useState("");
    let [filterString, setFilterString] = useState("");
    let [alertMessage, setAlertMessage] = useState("");
    let [showAlert, setShowAlert] = useState(false);

    const creditCardCompanyHandler = (e) => {
        setCardCompanyTitle(e);
        setCardCompanySelected(false);

        let cardOptions = [];
        cardOptions = props.cardData.filter((item) => item.cardCompany === e)[0].creditCards;
        setCardChoices(cardOptions);
    }

    const resetAddForm = () => {
        setCardCompanyTitle(cardString);
        setCreditCardTitle(creditCardString);
        setCardCompanySelected(true);
        setCreditCardSelected(false);
        setCardChoices([]);
        setInputEmail("");
        setInputUrl("");
    }
    const referMeHandler = async () => {
        setAddShown(false);
        const rawResponse = await fetch('https://drs8w4z3c7.execute-api.us-west-1.amazonaws.com/PROD', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              Email: inputEmail === ""? null: inputEmail, 
              ReferralLink: inputUrl === ""? null: inputUrl,
              CardCompany: cardCompanyTitle,
              CreditCard: creditCardTitle
            })
        });
        const content = await rawResponse.json();
        console.log(content);
        console.log(rawResponse);
      
        if(content !== null){
            setAlertMessage(<Alert variant="danger" dismissible onClose={() =>{setShowAlert(false)}}>
            <Alert.Heading>Oh no!</Alert.Heading>
            <p>
            {content.errorMessage}
            </p>
          </Alert>);
        }else{
            setAlertMessage(<Alert variant="success" dismissible onClose={() =>{setShowAlert(false)}}>
            <Alert.Heading>On your way to some points!</Alert.Heading>
            <p>
            Your referral link for the {cardCompanyTitle} {creditCardTitle} has been successfully added!
            </p>
          </Alert>);
        }
        setShowAlert(true);

        resetAddForm();
    }
    return (
        <Container className="m-2">
            <div className="buttonBackground">
            <Button variant="success" onClick={() => { setAddShown(true) }}>
            <img src="./cashback.png" className="buttonImage"/>
                &nbsp;Want to add your referral link?
            </Button>
            </div>
            {
                showAlert? alertMessage : ""
            }

            <Modal
                show={addShown}
                onHide={() => { setAddShown(false); resetAddForm(); }}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>On your way to some referral points! Woohoo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <b>Instruction:</b><br />
                        Select the credit card you are entering a referral link for. <br />
                        If you'd like to get notified on when your link is used or deleted, feel free to enter your email!
                    </p>
                    <b>Rules</b>
                    <ol>
                            <li>Referral links are automatically deleted after 30 days or once copied by a user</li>
                            <li>Referral links are only accepted if they do not exist in the system already</li>
                        </ol>
                    <ButtonGroup>
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="success"
                            title={cardCompanyTitle}
                            id="input-group-dropdown-1"
                            className="p-2"
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
                            as={InputGroup.Prepend}
                            variant="success"
                            title={creditCardTitle}
                            id="input-group-dropdown-2"
                            className="p-2"
                            disabled={cardCompanySelected}
                            hidden={cardCompanySelected}
                            onSelect={e => { setCreditCardTitle(e); setCreditCardSelected(true) }}
                        >
                            <FormControl
                                autoFocus
                                className="mx-3 my-2 w-auto"
                                placeholder="Type to filter..."
                                value={filterString}
                                onChange={(ev) => setFilterString(ev.target.value)}
                            />
                            {
                                cardChoices.filter(x => x.toLowerCase().includes(filterString.toLowerCase())).map(cardItem =>{
                                    return(
                                        <Dropdown.Item eventKey={cardItem}>{cardItem}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </ButtonGroup>
                    <Form
                        hidden={!creditCardSelected}
                    >
                        <Form.Group>
                            <Form.Label>Referral Link</Form.Label>
                            <Form.Control type="text" placeholder="Enter Referral Link" value={inputUrl} onChange={(ev) => { setInputUrl(ev.target.value) }} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={inputEmail} onChange={(ev) => { setInputEmail(ev.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { setAddShown(false); resetAddForm(); }}>
                        Don't want to be referred?
          </Button>
                    <Button hidden={inputUrl === "" ? true : false} variant="primary" onClick={referMeHandler}>
                        Refer me!
          </Button>
                </Modal.Footer>
            </Modal>
                            
        </Container>

    )
}
export default Add;