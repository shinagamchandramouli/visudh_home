import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function CardItem(props) {

    // console.log(props);

    if (props.first) {
        return (
            <Card className = {props.name} >
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">{props.btn}</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <Card className = {props.name}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">{props.btn}k</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )

}

export default CardItem
