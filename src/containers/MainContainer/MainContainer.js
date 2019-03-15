import React, {Component, Fragment} from 'react';
import {fetchMessage} from "../../store/actions/messageSyncActions";
import {connect} from "react-redux";

class MainContainer extends Component {

    componentDidMount() {
        this.props.getMessage()
    };

    render() {
        console.log(this.props.messages);
        return (
            <Fragment>
                <div className="Container">

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