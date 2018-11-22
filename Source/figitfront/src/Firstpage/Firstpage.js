import React from 'react';
import './FirstpageStyle.css';
import Pin from './logo2.png';


class Firstpage extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            value: ''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
      event.preventDefault();
      var url = 'http://localhost:5000/api/getRow';
      const value = this.state.value;
      alert(value);
      fetch(url, {
      method: 'post',
      headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'},
       body: JSON.stringify({value: this.state.value, str: 'Hello!'})
      
    })
      .then(res=>res.json())
      .then(res => console.log(res.wow) );

      var y = {value: this.state.value, str: 'Hello!'};
      alert(JSON.stringify(y));
    }

   


    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render(){
    return(   <div className="body">  
                <div className="topnav">
                    <a className="active" href="C:/Users/desai/Desktop/bootland.html"><img src={Pin} alt="FigitLogo"/></a>
                        <div className="topnav-right">
                            <a href="C:/Users/desai/Desktop/help.html">Help</a>
                            <a href="C:/Users/desai/Desktop/about.html">About</a>
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="header" id="home">
                    <p>Analysing Git.</p>
                    <p>Simplified.</p>
                </div>
                <div className="container-fluid">
                    <div className="form-group">  
                        <form action="#" onSubmit={(event)=>{this.onSubmit(event)}}>
                            <div className="d-flex justify-content-center">
                                <input type="email" className="form-control" id="usr" name="username" placeholder="Enter your email here" value={this.state.value} onChange={this.handleChange}></input>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="button"><span>Get Started</span></button>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <a href="#home">or Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );  
    }
}

export default Firstpage;