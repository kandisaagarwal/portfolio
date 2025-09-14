import { Route , BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/';

const App = () => {
  return (
    <div className="bg-zinc-900">
      {/* <Home/> */}
        <main>
            <Router>
                {/* <Navbar /> */}
                <Home/>
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes> */}
            </Router>
        </main>
    </div>
  )
}

export default App