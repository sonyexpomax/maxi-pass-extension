import { connect } from 'react-redux';
import Logins from './Logins';
import { getLogins } from '../../../redux/actions/loginsActions';
import { changeUrl } from '../../../redux/actions/pageActions';

function mapDispatchToProps(dispatch) {
    return ({
        getLogins: data => dispatch(getLogins(data)),
        changeUrl: data => dispatch(changeUrl(data)),
    });
}

const mapStateToProps = () => {
    return (state) => {
        return {
            logins: state.logins.allLogins,
            isLoading: state.logins.isLoading,
        };
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logins);
