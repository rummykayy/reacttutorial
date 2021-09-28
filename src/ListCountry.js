import React from "react";
import SearchCountry from "./SearchCountry";

export default class LifeCountry extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Country: ['America','Australia','Austria','Brazil','Chile','Cuba','Denmark','Egypt','India','Italy','Mexico','Malaysia','Singapore']
           
        }
    }
   
   

    render(){
        console.log("ListCountry render");
        return(
            <div>
                <SearchCountry Country={this.state.Country} />
               
            </div>
    )}

}    