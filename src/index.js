import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import './styles/index.css';

const rootView = document.getElementById('root');

const root =
    createRoot(
        rootView,
    );
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);

