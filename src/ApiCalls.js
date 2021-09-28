import React from "react";
import axios from 'axios';

export default class SearchCountry extends React.Component {
    constructor(props) {
        console.log("I am inside the Constructor")
        super(props)
        this.state = {
            list: [],
            showUpdate: false,
            id: "1",
            name: ""
        }
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((json) => {
                console.log(json)
                this.setState({
                    list: json
                })

                return json;
            })
    }
    handleEdit = (e) => {
        this.setState({
            showUpdate: true,

        })
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSave = (e) => {
        this.setState({
            id: e.target.id,
            showUpdate: false
        })
        var url = 'https://jsonplaceholder.typicode.com/users/' + this.state.id
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                var arr = this.state.list.filter((list1) => { return list1.id === json.id}) 
                console.log(arr[0].name)
            this.setState({
                list[arr[0].id-1].name : arr.name
            }); 
            return json;
        })   
    }
    render() {
        return (
            <div>
                <table border="1" name="cell">

                    {this.state.list.map((jsonList) => (
                        <tr key={jsonList.id} border="1">
                            <td>{jsonList.id}</td>
                            <td>{jsonList.name}</td>
                            <td>{jsonList.username}</td>
                            {this.state.showUpdate
                                && <div>
                                    <input type="text" name="name" onChange={this.handleChange} />
                                    <button onClick={this.handleSave}>Update</button>
                                </div>
                            }
                            <td><button id={jsonList.id} onClick={this.handleEdit}>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }


}