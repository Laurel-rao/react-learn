import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      showOn : true,
    };

    this.tick = this.tick.bind(this);
    // this.myfunc = this.myfunc.bind(this)
  }


  componentDidMount() {
    // this 代表的是componentDidMount 这个函数
    this.timerID = setInterval(this.tick.bind(this), 1000);

    function a() {
      console.log();
    }

    a();
    console.log(this);
    console.log("componentDidMount正在渲染");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount正在卸载timerID");
    clearInterval(this.timerID);
    console.log("componentWillUnmount渲染完成");
  }



  myfunc(date) {
    let name1 = date.toLocaleTimeString();
    let name2 = date.toLocaleString();
    let name3 = date.toLocaleDateString();
    let name4 = date.toTimeString();

    console.log("toLocaleTimeString== ", name1);
    console.log("toLocaleString== ", name2);
    console.log("toLocaleDateString== ", name3);
    console.log("toTimeString== ", name4);
  }

  tick() {
    console.log(this.state.showOn);
    this.setState(prevstate => ({
      date: new Date(),
      showOn: !prevstate.showOn
    }));


    // const a = this.state.date;
    // [1, 2, 3].map((num)=>this.myfunc(a));
  }

  render() {
    return (
      <div className="App">
        {/*<div className="Btn-1"></div>*/}
        {/*<div className="load-border"></div>*/}
        <header className="App-header">
          <h2>欢迎来到我的世界--饶佳俊</h2>
          {this.state.showON && this.myfunc()}
          <h1>现在是{this.state.date.toLocaleTimeString()}</h1>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class myff extends Component {
  myfunc() {
    return <div>myfunc</div>
  };

  render() {
    let c = {backgroundColor: "green", textAlign: "center"};
    let arr = [<div>我是div</div>, <p>我是p</p>, <span>我是span</span>]
    return (
      <div style={c}>
        {arr}
        <hr/>
        <span style={{width: 200, backgroundColor: "red"}}>啦啦啦</span>
      </div>
    )

  }
}


export default App;
