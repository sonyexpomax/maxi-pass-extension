import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { signIn } from '../../../redux/actions/userActions';

function mapDispatchToProps(dispatch) {
    return ({
        signIn: data => dispatch(signIn(data)),
    });
}

export default connect(null, mapDispatchToProps)(LoginPage);
