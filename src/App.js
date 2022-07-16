import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  // };

  const toggleMode = (cls) => {
    // removeBodyClasses();
    //document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DARK Mode has been enabled", "success");
      document.title = 'TextUtils - DARK Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LIGHT Mode has been enabled", "success");
      document.title = 'TextUtils - LIGHT Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze" />
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
