import logo from './Selene-logo-nobg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Selene</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <form className='search-box'>
            <input type='search' placeholder='IP, email, username, company, domain, wallet ...'/>
         </form>
        <p>Search results: 0</p>  
                  
      </header>

      <div className='results'>
          <div className='result'>
            {/*<h3>Selene</h3>
            <p>Tailored Threat Intelligence</p>*/}


          </div>
      </div>




    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://github.com/SeleneCTI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Selene CTI - Coming soon!
        </a>
      </header> */}
    </div>
  );
}

export default App;
