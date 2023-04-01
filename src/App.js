import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(7 40 70)'
      showAlert("Dark mode has been enabled", "success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null)
    }, 3000)
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} changeMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert = {showAlert}/>}>
            </Route>
          </Routes>
        
        {/* <About/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
