//Thumbnail.js

import React from "react" 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        const { img, title, src } = props.props;
        this.state = {
            src: src,
            img: img,
            title: title,
            border: 0,
            fullScreen: false,
            width: '100%',
            height: '100%',
            titleHeight: '5%',
            postion: 'relative',
            z: 0,
            }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        document.getElementById("ExpandedReport").src = this.state.src;
        document.getElementById("ExpandedReport").id = "expandedReportFrame";
        document.getElementById("closeIcon").id = "closeIconExpanded";
    }

    
    render() {
        
        return (
            <Grid container style={{ width: this.state.width, height: this.state.height }}>
                <Grid item style={{ width: this.state.width, height: this.state.height *.95 }}>
                    {/*<img src={this.state.img} onClick={this.handleClick} style={{ width: this.state.width, height: this.state.height, cursor: "pointer" }}></img>*/}
                </Grid>
                <Grid item style={{ height: this.state.titleHeight, paddingLeft: '5px'}}>
                    <Typography style={{ fontSize:"14px", alignSelf: 'center', paddingTop: '5px' }}>{this.state.title}</Typography>
                </Grid>
          </Grid>
        );
    }
}

export default Thumbnail;
