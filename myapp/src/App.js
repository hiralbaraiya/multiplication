import React, { Component } from 'react';
import './App.css';
import Select from 'react-select'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ismulti: true, selectedOption: [] }
    this.data = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  }

  handleChange = (selectedOption) => {

    this.setState({ selectedOption: selectedOption })
  }

  removeOpt(value) {
    // console.log(this.refs.select.select)
    console.log(value)
    let obj = [...this.state.selectedOption];
    obj.splice(value,1);
    this.setState({selectedOption:obj})
    // console.log(obj)
    // this.refs.select.select.removeValue(value);
    //this.setState({ selectedOption: this.state.selectedOption.filter(x => x.value !== value)});

  }

  render() {
    let option = this.state.selectedOption
    return (
      <div className="App">
        <input type="radio" name="gender" onChange={() => { this.setState({ ismulti: true }) }} checked={this.state.ismulti} /> Multiple
        <input type="radio" name="gender" onChange={() => { this.setState({ ismulti: false, selectedOption: option.slice(0,1) }) }} /> Single
        <br></br><br></br> 
        <Select
          value={option}
          onChange={this.handleChange}
          ref='select'
          isMulti={this.state.ismulti}
          options={this.data}
        />
        {
          this.state.ismulti === false ?option.length? <div className='list' onClick={() => this.removeOpt(0)}>{option[0].value}
             
          </div>:
            option.value ?
              <div className='list' onClick={() => this.removeOpt(0)}>{option.value}
             
              </div> :
              <p></p> :option.value?
              <div className='list' onClick={() => this.removeOpt(0)}>{option.value}
             
              </div> 
              :
            option.length !== 0 ?
              option.map((list, index) => {
                return (<div className='list' onClick={() => this.removeOpt(index)}>{list.value}
               </div>)
              })
              :
              <p></p>
        }
      </div>
    );
  }
}

export default App;
