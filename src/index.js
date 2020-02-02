import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDom from 'react-dom'

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about-page/about-page.component';

ReactDom.render(<AboutPage />, document.getElementById('root'))