import React from 'react';
import { Button } from '@material-ui/core';


class DataPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            token: ""
        }
    }

    componentDidMount() {
        var token = "";
        var reqHeaders = new Headers();
        reqHeaders.append("Accept", "application/json");
        reqHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "username": "AXW1018",
            "password": "" // Hard-code SBD password here for DEMO PURPOSES ONLY
        });

        var reqOptions = {
            method: 'POST',
            headers: reqHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://collibra.sandbox.sbd-caspian.com:4400/rest/2.0/auth/sessions",
        reqOptions)
            .then(response => response.text())
            .then(result => {
                token = result;
                console.log("TOKEN: " + token); 
                this.state.token = result;         
                this.state.isLoaded = true;
            })
            .catch(error => console.log('Error at POST: ', error));
        // const getOptions = {
        //     method: 'GET',
        //     headers: {'Content-Type': 'application/json'},
        //     redirect: 'follow'
        // }
        // fetch("https://collibra.sandbox.sbd-caspian.com:4400/rest/2.0/assets?offset=0&limit=5&nameMatchMode=ANYWHERE&typeInheritance=true&excludeMeta=true&sortField=NAME&sortOrder=ASC", getOptions)
        //         .then(response => response.json())
        //         .then(result => console.log(result))
        //         .catch(err => console.log("ERROR at GET: ", err))
    }

    render(){

        var {isLoaded, items} = this.state;

        if (!(isLoaded)){
            return (
                <Button variant="contained" color="primary"
                onClick={() => {
                    console.log(this.state.token)
                    let b64 = require('base-64');
                    let uname = 'AXW1018';
                    let pword = ''; // Hard-code SBD password here for DEMO PURPOSES ONLY
                    fetch("https://collibra.sandbox.sbd-caspian.com:4400/rest/2.0/assets?offset=0&limit=5&nameMatchMode=ANYWHERE&typeInheritance=true&excludeMeta=true&sortField=NAME&sortOrder=ASC", {
                        method: 'GET',
                        headers: {
                            "Authorization": `Basic ${b64.encode(`${uname}:${pword}`)}`,
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then(result => console.log(result))
                        .catch(err => console.log("ERROR at GET: " + err))


                    // fetch("https://collibra.sandbox.sbd-caspian.com:4400/rest/2.0/assets?offset=0&limit=5&nameMatchMode=ANYWHERE&typeInheritance=true&excludeMeta=true&sortField=NAME&sortOrder=ASC", {
                    //     method: 'GET',
                    //     credentials: 'include',
                    //     headers: {
                    //         'Content-Type': 'application/json'
                    //     }
                    // })
                    //     .then(response => response.json())
                    //     .then(result => console.log(result))
                    //     .catch(err => console.log("Error at GET: ", err))
                }}>
                    -- Log CSRF Token --
                </Button>

                
            ) 
        }
        else {
            return (
            
                <div> LOADING DONE --DATA RECIEVED</div>
            )
        }
        
    }
}

export default DataPage;