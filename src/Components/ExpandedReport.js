// ExpandedReport.js

import React from 'react';


const ExpandedReport = (props) => {
    const { id, src } = props;
    return (

        <iframe id={id} src={src} width= "0px" height= "0px" style={{ borderWidth: '0' }}>
        </iframe>
    )
}

export default ExpandedReport;
