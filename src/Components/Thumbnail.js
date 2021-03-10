//Thumbnail.js

import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import { reportsList } from '../Data/reportsList.js';

// var favlistinit = [];
// localStorage.setItem('favorites', favList);
// const [favList, addFav] = useState(favlist) // TODO - Tried in component [X]

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        const { id, img, title, src, desc, fav } = props.props;
        this.state = {
            id: id,
            src: src,
            img: img,
            title: title,
            border: 0,
            fullScreen: false,
            desc: desc,
            width: '100%',
            height: '100%',
            titleHeight: '5%',
            postion: 'relative',
            z: 0,
            fav: fav,
            }
        this.handleClick = this.handleClick.bind(this);
    }

    // create list
    remFav = () => {
        this.setState({fav: false})
        console.log(this.state.id + " was clicked")
        reportsList.map(report => {
            if(this.state.id == report.id){
                console.log("Map function matched IDs")
                report.fav = false;
            }
        })
    }
    addFav = () => {
        this.setState({fav: true})
        console.log(this.state.id + " was clicked")
    }

    handleClick() {
        document.getElementById("ExpandedReport").src = this.state.src;
        document.getElementById("ExpandedReport").id = "expandedReportFrame";
        document.getElementById("closeIcon").id = "closeIconExpanded";
    }

    render() {
        
        return (
            <Grid container style={{ width: this.state.width, height: this.state.height }}>
                <Grid item style={{ width: this.state.width, height: this.state.height }}>
                    {<img src={this.state.img} onClick={this.handleClick} style={{ width: this.state.width, height: this.state.height, cursor: "pointer" }}></img>}
                </Grid>
                <Grid item style={{ height: this.state.titleHeight, paddingLeft: '5px'}}>
                    <Typography style={{ fontSize:"14px", alignSelf: 'center', paddingTop: '5px' }}><strong>{this.state.title}</strong></Typography>
                </Grid>
                <Grid item>
                    {<br/>}
                    <div>
                        <a href={this.state.src} target="_blank">{this.state.desc.substr(0,100) + "..."}</a> 
                    </div>
                    {(this.state.fav) ? (
                        <AiFillStar style={{color: '#FFD20D'}}
                        onClick={this.remFav} size={28}></AiFillStar>
                    ) : (
                        <AiOutlineStar style={{color: '#FFD20D'}}
                        onClick={this.addFav} size={28}></AiOutlineStar>
                    )}
                    
                </Grid>
          </Grid>
        );
    }
}

export default Thumbnail;
