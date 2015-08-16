import React from 'react';
import MainPage from './components/mainpage.jsx';

window.React = React;

React.render(
    <MainPage />, document.getElementById('content')
);
