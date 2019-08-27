import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click Me Here!';
}
const App = () =>{
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    );
};

ReactDOM.render(
  <App />,
    document.querySelector("#root")
);