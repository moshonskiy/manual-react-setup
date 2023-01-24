import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const Root: FunctionComponent = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root;
