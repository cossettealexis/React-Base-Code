import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

class ChildOne extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <div>
                        <Button variant="secondary" onClick={()=>this.props.history.push("/NestedDemo")}>Back</Button>
                    </div>
                    <br/>
                    <h3>Child One</h3>
                </Card>
            </Container>
        );
    }
}

export default ChildOne;