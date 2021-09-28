import React from 'react';

export default class LifeCycle extends React.Component {

    constructor(props){
        console.log("I am inside the Constructor")
        super(props)
        this.state = {
            Name: "Containers",
            Price: "Rs.150"
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    static getDerivedStateFromProps(props, state) {
        console.log("I am inside DerivedStateFromProps Method")
        return {
            Name: "Chopper"
        }
      }
    componentDidMount() {
        console.log("I am inside componentDidMount Method")
    }
    render(){
        console.log("I am inside render Method")
        return(
            <div>
                
                {this.state.Name}<input type="text" name="Name" onChange={this.handleChange} /><br/>
                {this.state.Price}<input type="text" name="Price" onChange={this.handleChange} />
            </div>
        )
    }

}