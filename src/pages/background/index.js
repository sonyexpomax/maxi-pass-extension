import { createStore } from 'redux';
import { wrapStore } from 'webext-redux';
import reducer from '../../redux/reducers';

const store = createStore(reducer, {});

wrapStore(store, { portName: 'MAXI_PASS' });
