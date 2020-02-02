import React from 'react'
import AboutPage from './pages/about-page/about-page.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

const App = () => {

  const getPage = () => {
    const route = window.location.pathname;
    return route === '/about' ? <AboutPage /> : <HomePage />
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  )


}

export default App;