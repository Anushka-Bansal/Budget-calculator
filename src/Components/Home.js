// Importing Required Libraries and Components

import React, { useRef, useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
// import NavBar from '../components/NavBar';

// Storing all Expensex
var expend = [];

// Functional Component for Budgets
export function Home() {

    // Declaring States using hooks

    const [bud, setBud] = useState(0);
    const [state, setState] = useState({
        exp: 0,
        bal: 0
    });
    const [data, setData] = useState([]);

    // Declaring useRef to getting current values

    const budget = useRef(null);
    const expenses = useRef(null);
    const title = useRef(null);

    // Addign Total Budget

    const submitB = (e) => {
        e.preventDefault();
        setBud(budget.current.value)
        setState({
            exp: 0,
            bal: budget.current.value
        })
        e.target.reset();
    }

    // Adding Expenses with title and amount

    const submitE = (e) => {
        e.preventDefault();
        let info = { title: title.current.value, amount: expenses.current.value }
        setData([...data, info])
        expend.push(parseInt(expenses.current.value))
        console.log(expend)
        let add = expend.reduce((a, b) => a + b, 0)
        console.log(add);
        let bala = bud - add;
        setState({
            exp: add,
            bal: bala
        })
        e.target.reset();
    }

    // Deleting the Expenses from the list

    const del = (index) => {
        expend.splice(index, 1)
        let add = expend.reduce((a, b) => a + b, 0)
        console.log(add);
        let bala = bud - add;
        setState({
            exp: add,
            bal: bala
        })
        data.splice(index, 1)
    }

    // Updating the Expenses in the list

    const up = (index, item) => {
        document.getElementById("t").value = item.title;
        document.getElementById("a").value = item.amount;
        expend.splice(index, 1)
        let add = expend.reduce((a, b) => a + b, 0)
        console.log(add);
        let bala = bud - add;
        setState({
            exp: add,
            bal: bala
        })
        data.splice(index, 1)
        console.log(item)
    }

    // Returning Designing Part of Web Page

    return (
        <>
        <Container className="bg-dark mt-4 mb-2">
            {/* <NavBar /> */}
            <br />
            <center><h1 style={{textTransform:"uppercase", color:"red"}}>Budget Calculator</h1></center>
            <br />
            <Container className="mb-4">
                <Row>
                    <Col>
                        <Card className="bg-secondary" style={{ padding: '30px'}}>
                            <Form onSubmit={submitB}>
                                <Row>
                                    <Form.Label>BUDGET</Form.Label>
                                    <Form.Control type="number" className="form-control-lg" placeholder="Enter Your Budget" ref={budget} required />
                                </Row>
                                <br />
                                <Row>
                                    <Button variant="success" type="submit">Calculate</Button>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center bg-dark" style={{ padding: '30px' }}>
                            <Row>
                                <Col>
                                    <Card className="bg-warning">
                                        <Card.Body>
                                            <Card.Title >BUDGET</Card.Title>
                                            <Card.Text style={{fontWeight: "bold"}}>&#8377; {bud}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-danger">
                                        <Card.Body>
                                            <Card.Title >EXPENSES</Card.Title>
                                            <Card.Text style={{fontWeight: "bold"}}>&#8377; {state.exp}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="bg-success">
                                        <Card.Body>
                                            <Card.Title >BALANCE</Card.Title>
                                            <Card.Text style={{fontWeight: "bold"}}>&#8377; {state.bal}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card className="bg-secondary" style={{ padding: '25px' }}>
                            <Form onSubmit={submitE}>
                                <Row>
                                    <Form.Label>EXPENSES</Form.Label>
                                    <Form.Control type="text" id="t" className="form-control-lg" placeholder="Enter Your Expense" ref={title} required />
                                </Row>
                                <br />
                                <Row>
                                    <Form.Control type="number" id="a" className="form-control-lg" placeholder="Enter Your Expense Amount" ref={expenses} required />
                                </Row>
                                <br />
                                <Row>
                                    <Button variant="danger" type="submit">Add Expenses</Button>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-secondary" style={{ padding: '30px' }}>
                            <Table striped hover className="text-center">
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>Expenses Title</th>
                                        <th>Expenses Amount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.amount}</td>
                                                    <td>
                                                        <Button variant="warning" onClick={() => up(index, item)}><i class="fa fa-pencil" ></i></Button>&nbsp;
                                                        <Button variant="danger" onClick={() => del(index)}> X
                                                            {/* <i class="fa fa-trash" ></i> */}
                                                            </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </Container>
        </>
    )
}

// Exporting Functional Component

export default Home
