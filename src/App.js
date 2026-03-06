import logo from './logo.svg';
import Controls from './Controls.js';
import UserList from './UserList.js';
import Footer from './Footer.js';



function App() {

  let currentYear = new Date().getFullYear();

  let isLoggedIn = true;

  return (
    <div className="App">
       <section>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p isLoggedIn={isLoggedIn}>
        {isLoggedIn ? "Welcome back!" : "Please log in."}
      </p>
      </section>
      
      {isLoggedIn && <>
      <section>
        <Controls/>
      </section>
      <section>
        <UserList/> 
      </section>
       <section>
        <Footer/> 
      </section>
      </>}

    </div>

  );
}

export default App;
