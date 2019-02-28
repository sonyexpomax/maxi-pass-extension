import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { signOut } from '../../../redux/actions/userActions';

function mapDispatchToProps(dispatch) {
    return ({
        logOut: data => dispatch(signOut(data)),
    });
}

export default connect(null, mapDispatchToProps)(MainMenu);
