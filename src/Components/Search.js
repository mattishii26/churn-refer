import React, {useState} from 'react';
import {
    Container,
    InputGroup,
    Dropdown,
    DropdownButton,
    Button
} from 'react-bootstrap';



const Search = (props) => {
    let [cardCompanyTitle, setCardCompanyTitle] = useState("Select a Card Company");
    let [creditCardTitle, setCreditCardTitle] = useState("Select a Credit Card");
    let [cardCompanySelected, setCardCompanySelected] = useState(true);
    let [cardChoices, setCardChoices] = useState([]);

    const creditCardCompanyHandler = (e) =>{
        setCardCompanyTitle(e);
        setCardCompanySelected(false);
        
        let cardOptions = [];
        cardOptions = props.cardData.filter((item) =>item.cardCompany == e)[0].creditCards;
        let res = [];
        cardOptions.forEach(card =>{
        res.push(<Dropdown.Item eventKey={card}>{card}</Dropdown.Item>)
        })
        setCardChoices(res);
    }

    return (
        <Container>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Looking for a referral link?</InputGroup.Text>
            </InputGroup.Prepend>

            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={cardCompanyTitle}
                id="input-group-dropdown-1"
                onSelect={(e) => creditCardCompanyHandler(e)}
            >
                {
                    props.cardData.map(card => {
                        return(
                        <Dropdown.Item eventKey={card.cardCompany}>{card.cardCompany}</Dropdown.Item>
                        )
                    })
                }
            </DropdownButton>
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={creditCardTitle}
                id="input-group-dropdown-2"
                disabled={cardCompanySelected}
                onSelect={e => setCreditCardTitle(e)}
            >
                {
                    cardChoices
                }
            </DropdownButton>
            <InputGroup.Append>
      <Button variant="outline-secondary">Find me a Link!</Button>
    </InputGroup.Append>
        </InputGroup>
        </Container>
        
    )
}
export default Search;