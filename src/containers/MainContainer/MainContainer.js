import React, {Component, Fragment} from 'react';
import {fetchMessage} from "../../store/actions/messageSyncActions";
import {connect} from "react-redux";
import './MainContainer.css';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class MainContainer extends Component {

    componentDidMount() {
        this.props.getMessage()
    };

    render() {

        const messages = this.props.messages.map(item => {
            return (
                <div key={item.id} className="itemMessage">
                    <h6>{item.author}</h6>
                    <p>{item.message}</p>
                </div>
            )
        });

        const form = <Form>
            <FormGroup >
                <Label for="author" sm={2}>Author</Label>
                <Col sm={10}>
                    <Input type="text" name="email" id="author" placeholder=" author..." />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label for="message">Message</Label>
                <Input style={{marginLeft: '15px'}} rows={5} type="textarea" name="text" id="message" />
            </FormGroup>
            <div>
                <Button style={{marginLeft: "15px"}} color="primary">Send</Button>{' '}
            </div>
        </Form>;

        return (
            <Fragment>
                <div className="Container">
                    <h1>Messages</h1>
                    <div className="row">
                        <div className="col-7 messageBlock">
                            {messages}
                        </div>

                        <div className="col-5">
                            {form}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMessage: () => dispatch(fetchMessage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);