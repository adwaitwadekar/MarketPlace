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
        this.setState({fav: false});
        console.log(this.state.title + " was clicked at remFav, ID: " + this.state.id);
        for(var i in window.sessionStorage){
            if(i == this.state.id){
                sessionStorage.removeItem(this.state.id);
                //alert("Asset removed from favorites!");
            }
            else{
                //alert(this.state.title + " is not in favorites!");
            }
        }
    }
    addFav = () => {
        this.setState({fav: true});
        console.log(this.state.title + " was clicked at addFav, ID: " + this.state.id);
        for(var i in window.sessionStorage){
            if(i == this.state.id){
                //alert("Asset already favorited!");
            }
            else{
                sessionStorage.setItem(this.state.id, this.state.title);
                //alert(this.state.title + " added to favorites!");
            }
        }
    }

    handleClick() {
        document.getElementById("ExpandedReport").src = this.state.src;
        document.getElementById("ExpandedReport").id = "expandedReportFrame";
        document.getElementById("closeIcon").id = "closeIconExpanded";
    }

    render() {
        
        return (
            <Grid container style={{ width: this.state.width, height: this.state.height, border: 'solid' }}>
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
                    {(sessionStorage.getItem(this.state.id) != null) ? (
                        <AiFillStar style={{color: '#FFD20D'}}
                        onClick={this.remFav} size={38}></AiFillStar>
                    ) : (
                        <AiOutlineStar style={{color: '#FFD20D'}}
                        onClick={this.addFav} size={38}></AiOutlineStar>
                    )}
                    
                </Grid>
          </Grid>
        );
    }
}

export default Thumbnail;
