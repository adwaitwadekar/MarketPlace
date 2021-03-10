// Card.js 

import React from 'react'
import {
    Link
} from 'react-router-dom'
import '../styles/Card.css'
import { Card } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';


class DeptCard extends React.Component {
    constructor(props) {
        super(props);
        const {id, img, metricsText, title, route } = props.properties;
        this.state = {
            id: id,
            img: img,
            metricsText: metricsText,
            title: title,
            route: route,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        
    }

    render() {
        return (
            <Grid item style={{padding: '28px 0px 74px'}}>
                <Card.Body border= 'none' 
                style={{ width: '280px', height: '280px', textAlign: 'center', background: 'rgba(0,0,0,0)' }}>
                    <Link to={this.state.route} className='link' id={this.state.id} onClick={this.handleClick}>
                        {<img src={this.state.img} style={{ height: '240px', width: '45%', objectFit:'contain' }}></img>}   
                        <Typography variant='h5' gutterBottom style={{color: 'black'}}>
                            <strong>{this.state.title}</strong>
                        </Typography>
                    </Link>
                </Card.Body>
            </Grid>
            )
    }

};


export default DeptCard;
