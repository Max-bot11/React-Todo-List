import React, { Component } from 'react';

class AddGuest extends Component {
    state = {
        firstName:'',
        lastName:'',
        age:'',
        born:'',
        profession:'',
        status:false
    }

    handleAddFirstName = (e) => {
        const firstName = e.target.value;
        // if(!firstName)return
        this.setState({ firstName });
        // console.log(firstName)
    }

    handleAddLastName = (e) => {
        const lastName = e.target.value;
        this.setState({ lastName });
        // console.log(lastName)
    }

    handleAddAge = (e) => {
        const age = Number(e.target.value);
        this.setState({ age })
        // console.log(age)
    }

    handleAddBorn = (e) => {
        const born = Number(e.target.value);
        this.setState({ born })
    }

    handleAddProfession = (e) => {
        const profession = e.target.value;
        this.setState({ profession })
    }

    handleAdd = () => {
        const {
            firstName,
            lastName,
            age,
            born,
            profession
        }=this.state
        if(!firstName||!lastName||!age||!born||!profession)return;
        this.props.onAdd(this.state);
        this.setState({
            firstName:'',
            lastName:'',
            age:'',
            born:'',
            profession:''
        })
    //     this.setState({ firstName: ''});
    //     this.setState({ lastName: ''});
    //     this.setState({ age: ''});
    //     this.setState({ born: ''});
    //     this.setState({ profession: ''});
    // }
    }
    render() {
        return (
            <div>
                <label> First Name </label>
                <input value={this.state.firstName} onChange={this.handleAddFirstName} placeholder="Enter Name"/>
                <label> Last Name </label>
                <input value={this.state.lastName} onChange={this.handleAddLastName} placeholder="Enter Last Name"/>
                <label> Age </label>
                <input value={this.state.age} onChange={this.handleAddAge} type="number" placeholder="Enter Age"/>
                <label> Born </label>
                <input value={this.state.born} onChange={this.handleAddBorn} type="number" placeholder="Enter Born Year"/>
                <label> Profession </label>
                <input value={this.state.profession} onChange={this.handleAddProfession} placeholder="Enter Profession"/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default AddGuest;