// Card.js 

import React from 'react'
import {
    Link
} from 'react-router-dom'
import '../styles/Card.css'
import { Card } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'


class DeptCard extends React.Component {
    constructor(props) {
        super(props);
        const {id, img, metricsText, title } = props.properties;
        this.state = {
            id: id,
            img: img,
            metricsText: metricsText,
            title: title,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        
    }

    render() {
        return (
            <Grid item >
                <Card style={{ width: '300px', height: '325px', textAlign: 'center' }}>
                    <Link to="/previews" className='link' id={this.state.id} onClick={this.handleClick}>
                        <Card.Body className='cardBody' style={{ background: '#e6e6e6', height: '240px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingBottom: 0 }}>
                            {/*<img src={this.state.img} style={{ height: '45%', width: '45%', objectFit:'contain' }}></img>*/}
                            <Card.Title style={{ display: 'flex', alignSelf: 'flex-start', fontSize: '25px' }}>{this.state.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{ display: 'flex', background: 'lightGrey', height: '85px', fontSize: '20px', justifyContent: 'center', alignItems: 'center' }}>{this.state.metricsText}</Card.Footer>
                    </Link>
                </Card>
            </Grid>
            )
    }

};


export default DeptCard;
