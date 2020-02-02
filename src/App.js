import React from 'react'
import AboutPage from './pages/about-page/about-page.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => {
  const route = window.location.pathname;

  return route === '/about' ? <AboutPage /> : <HomePage />
}

export default App;