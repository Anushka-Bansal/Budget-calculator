import React, { useRef, useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'


function Homee() {

    const [bud, setBud] = useState(0);
    const [state, setState] = useState({
        exp: null,
        bal: null
    });

    const [data, setData] = useState([]);
    const budget = useRef(null);
    //console.log(budget.current.value)

    let a = budget.current
    console.log(a)
    const expenses = useRef(null);
    const title = useRef(null);

    const submitB = (e) => {
        e.preventDefault();
        setBud(budget.current.value)
        //e.
        //console.log(budget.current.value)
    }

    const submitE = (e) => {
        e.preventDefault();
        let bala = bud - expenses.current.value;
        setState({
            exp: expenses.current.value,
            bal: bala
        })

        let info = { title: title.current.value, amount: expenses.current.value }
        setData(info)
    }
    //console.log(bud);

    return (
        <>
            <Container>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={submitB}>
                                <Form.Row>
                                    <Form.Label>Budget</Form.Label>
                                    <Form.Control type="number" className="form-control-lg" placeholder="Enter Your Budget" ref={budget} />
                                </Form.Row>
                                <br />
                                <Form.Row>
                                    <Button type="submit">Add</Button>
                                </Form.Row>
                            </Form>
                        </Col>
                        <Col>
                            <Form onSubmit={submitE}>
                                <Form.Row>
                                    <Form.Label>Expenses</Form.Label>
                                    <Form.Control type="text" className="form-control-lg" placeholder="Enter Your Expense" ref={title} />
                                </Form.Row>
                                <br />
                                <Form.Row>
                                    <Form.Control type="number" className="form-control-lg" placeholder="Enter Your Expense Amount" ref={expenses} />
                                </Form.Row>
                                <br />
                                <Form.Row>
                                    <Button type="submit">Add</Button>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container className="text-center">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>BUDGET</Card.Title>
                                    <Card.Text>{bud}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>EXPENSES</Card.Title>
                                    <Card.Text>{state.exp}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>BALANCE</Card.Title>
                                    <Card.Text>{state.bal}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        </>
    )
}

export default Homee
