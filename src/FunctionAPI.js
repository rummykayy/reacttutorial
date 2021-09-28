import React, { useState,useEffect} from "react";
import axios from 'axios';

export const FunctionAPI = (props) => {
  

    const [Id,setId] = useState("")
    const [List,setList] = useState([])
    const [Name,setName] = useState("")
    const [ShowUpdate,setShowUpdate] = useState(false)
    var handleSave = (e) => {
        setId(e.target.id)
        setShowUpdate(false)
        alert(e.target.id)
            var url = 'https://jsonplaceholder.typicode.com/users/'+Id
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                  id: Id,
                  name: Name
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    return json;
                })
        }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((json) => {
                console.log(json)
                setList(json)
                return json;
            })
    },[])
    return (
    <div>
    <table border="1" name="cell">
        {List.map((jsonList) => (
            <tr key={jsonList.id} border="1">
                <td>{jsonList.id}</td>
                <td>{jsonList.name}</td>
                <td>{jsonList.username}</td>
               {ShowUpdate 
                && <div>
                    <input type="text" name="name" onChange={(e) =>{setName(e.target.value)}}/>
                    <button id={jsonList.id} onClick={handleSave}>Update</button>
                </div>
               }
                <td><button onClick={(e) =>{setShowUpdate(true)}}>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
        ))}
    </table>
</div>
   )
   }  
        
        
    
 
     
