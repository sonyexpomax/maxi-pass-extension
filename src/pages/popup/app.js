import './app.css';
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Button, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './LoginPage';
import * as listActions from '../../redux/actions/listActions';

@connect((store) => {
    console.log('=========== store ============');
    console.log(store);
    return {
        lists: store.lists,
    };
})

class App extends React.Component {
    render() {
        const { lists, dispatch } = this.props;
        const options = lists.records.map((record) => {
            return {
                key: record.id,
                text: record.name,
                value: record.id,
                icon: record.icon,
            };
        });
        return (
            <div className="mpe-main">
                {/*<Image src='MaxiLogo.png' size='small' />*/}
                {/*<div className="ui one wide column">*/}
                <h4 className="mpe-main__header">MaxiPass</h4>
                <Dropdown
                    selection
                    placeholder='Select List'
                    options={options}
                />
                <Button onClick={() => dispatch(listActions.addList({ id: Math.random(), name: Math.random() }))}>Add list </Button>
                <LoginPage/>
            </div>
        );
    }
}

export default App;
