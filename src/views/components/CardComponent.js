import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {isOpen && (
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                )}
                <Button variant='primary' onClick={onClickHandler}>Click me!</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;