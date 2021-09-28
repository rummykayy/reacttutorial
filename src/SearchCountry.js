import React from "react";
export default class SearchCountry extends React.Component {
    constructor(props) {
        console.log("I am inside Constructor")
        super(props)
        this.state = {
            CountryList: this.props.Country
        }
    }
   

    handleSearch = (e) => {
        alert(e.target.value);
        console.log(this.state.CountryList)
        if(e.target.value === "")
            return this.state.CountryList
        else {   
        const list = this.state.CountryList.filter(countryList => 
              countryList.includes(e.target.value)) 
        console.log(list)
        this.setState({CountryList: list})   
        } 
    }
    render() {
        return (
            <div className="search">
                <input type="search" placeholder="Search" onChange={this.handleSearch} />
                {this.state.CountryList.map((countryName) => (
                    <div className="list">
                        <p>{countryName}</p>
                    </div>

                ))}

            </div>
        )
    }
}