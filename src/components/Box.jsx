import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => {

    const variant = props.variant ? props.variant : 'danger'

    return (
        <>
            <Card border={variant} className="mb-3">
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Box