import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';

class NestedParent extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <h3>NESTED DEMO</h3>
                    <br/>
                    <Button onClick={()=>this.props.history.push("/NestedDemo/NestedChildOne")}>Open Child 1 Component</Button>
                    <br/>
                    <Button onClick={()=>this.props.history.push("/NestedDemo/NestedChildTwo")}>Open Child 2 Component</Button>
                </Card>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    };
}

export default connect(mapStateToProps)(NestedParent);