import React, {Component, Fragment} from 'react';
import {fetchMessage, postMessage} from "../../store/actions/messageSyncActions";
import {connect} from "react-redux";
import './MainContainer.css';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardGroup,
    CardHeader,
    CardText,
    Col,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

class MainContainer extends Component {

    state = {
        author: '',
        message: ''
    };

    componentDidMount() {
        this.props.getMessage()
    };

    onChangeHandler = event => {
      const name = event.target.name;
      this.setState({[name]: event.target.value})
    };

    render() {

        const messages = this.props.messages.map(item => {
            return (
                <Card  outline color="primary"  key={item.id} className="itemMessage">
                    <CardHeader style={{color: '#0082dd'}} color="info">{item.author}</CardHeader>
                    <CardBody>
                        <CardText>{item.message}</CardText>
                    </CardBody>
                    <CardFooter style={{color: '#aaa', fontSize: "10px"}}>{item.date}v</CardFooter>
                </Card>
            )
        });

        const form = <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="author" className="mr-sm-2">Author</Label>
                <Input  value={this.state.author} onChange={this.onChangeHandler}
                        type="text" name="author" id="author" placeholder=" author..." />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="message" className="mr-sm-2">Message</Label>
                <Input value={this.state.message} onChange={this.onChangeHandler}
                       placeholder=" message..." style={{marginLeft: '15px'}} type="text" name="message" id="message" />
            </FormGroup>
            <Button color="danger" onClick={() => this.props.postMessages(this.state)}>Send</Button>
        </Form>;

        return (
            <Fragment>
                <header>
                    <div className="Container">
                        <h1>Messages</h1>
                    </div>
                </header>
                <div className="Container">
                    <div style={{}}>
                        <div className=" messageBlock">
                            {messages}
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="Container footer">
                        <div className="formBlock">
                            {form}
                        </div>
                    </div>
                </footer>
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
        getMessage: () => dispatch(fetchMessage()),
        postMessages: message => dispatch(postMessage(message))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);