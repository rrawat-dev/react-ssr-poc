import {connect} from "react-redux";

import HomePage from './HomePage.component';

function mapStateToProps(state) {
    console.log(state);
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);