import './App.css';

function Delete() {

  return (
    <div className="Delete">
        <input></input>
        <button>
         Delete ts
        </button>
      
    </div>

  );
}

function Controls() {

  return (
    <div className="Controls">
        <Delete/>

        <button>
         Sort by Group   
        </button>
        <button>
         Sort by ID
        </button>
        <button>
         Grid/List 
        </button>

    </div>

  );
}


export default Controls;
