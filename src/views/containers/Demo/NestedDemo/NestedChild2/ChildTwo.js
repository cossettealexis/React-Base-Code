import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

class ChildTwo extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <div>
                        <Button variant="secondary" onClick={()=>this.props.history.push("/NestedDemo")}>Back</Button>
                    </div>
                    <br/>
                    <h3>Child Two</h3>
                </Card>
            </Container>
        );
    }
}

export default ChildTwo;