import './App.css';

function Footer() {

  
  let currentYear = new Date().getFullYear();
  return (
    <div className="App">
      <footer>Current Year: {currentYear}</footer>
    </div>
  );
}

export default Footer;
