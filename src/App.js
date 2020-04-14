import React from 'react';
import List from './components/List/List';
import AddGuest from './components/AddGuest/AddGuest'
import './App.css';

class App extends React.Component {
  state = {
    data:[
      {
        firstName:'Wolfgang',
        lastName:'Amadeus',
        age:35,
        born:1756,
        profession:'Composer, Pianist',
        status:true
      },
      {
        firstName:'Frederic',
        lastName:'Chopin',
        age:39,
        born:1810,
        profession:'Pianist',
        status:false
      }
    ]
  }
  handleAdd = (figure) => {
    const newData = [...this.state.data];
    newData.push(figure);
    this.setState({ data: newData });
// console.log(newData)
  }

  handleDelete = (index) =>{
    const newData = [...this.state.data];
    // console.log(newData)
    newData.splice(index, 1);
    this.setState({ data: newData });
  }

  handleChangeStatus = (index) => {
    // console.log(index)
    const newData = [...this.state.data];
    newData[index].status = !newData[index].status;
    this.setState({ data: newData });
  }

  render(){
    return (
      <div className="figures-list">
        <AddGuest 
          onAdd={this.handleAdd}
        />
        <List 
          data={this.state.data} 
          onDelete={this.handleDelete}
          onChangeStatus={this.handleChangeStatus}
        />
      </div>
    );
  }
}

export default App;
