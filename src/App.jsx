import React from 'react'
import { Header, Footer } from './Components';
import { Home, Boy, Girl, Man, Woman } from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/man' element={<Man />} />
                <Route exact path='/woman' element={<Woman />} />
                <Route exact path='/boy' element={<Boy />} />
                <Route exact path='/girl' element={<Girl />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
