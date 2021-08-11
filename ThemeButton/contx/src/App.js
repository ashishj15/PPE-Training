import logo from './logo.svg';
import './App.css';
import React from 'react';

const BtnContext = React.createContext('btn btn-danger');
class App extends React.Component{
  render(){
    return(
      <BtnContext.Provider value = "btn btn-info">
        <Button/>
      </BtnContext.Provider>
    );
  }
}

function Button(props){
  return(
    <div className="container">
      <ThemedButton/>
    </div>
  );
}

class ThemedButton extends React.Component{
  static contextType = BtnContext;
  render(){
    return <button className={this.context}>ThemedButton</button>
  }
}
export default App;
