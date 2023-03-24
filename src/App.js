import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Project_1 from './components/Project_1';
import Project_2 from './components/Project_2';
import Project_3 from './components/Project_3';
import Project_4 from './components/Project_4';
import Navpage from './components/Navpage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
     <Router>
               <Main/>
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route exact path="/project01" element={<Project_1 />} />
                    <Route exact path="/project02" element={<Project_2 />} />
                    <Route exact path="/project03" element={<Project_3 />} />
                    <Route exact path="/project04" element={<Project_4 />} />

                </Routes>
                <Footer/>
            </Router>
    </>
  );
}

export default App;
