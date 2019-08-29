import React from 'react';
import './App.css';


class App extends React.Component {

  componentDidMount()
  {
   setTimeout(()=>{ alert("Hello"); }, 3000)
  };

  componentWillMount()
  {
    alert("Goodbye");
  }

  render(){
  
    return (
      <div className="App">
   
        <h1>It's My Test Page</h1>
  
      </div>
    );
  }


  }
 

export default App;