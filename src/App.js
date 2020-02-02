import React from 'react'
import { Route } from 'react-router-dom';

import AboutPage from './pages/about-page/about-page.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import CoursesPage from './pages/courses-page/courses-page.component';

const App = () => (
  <div className="container-fluid">
    <Header />
    <Route exact path='/' component={HomePage} />
    <Route path='/courses' component={CoursesPage} />
    <Route path='/about' component={AboutPage} />
  </div>
)


export default App;