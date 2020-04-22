import React, { Component } from 'react';
//functional component we need to get ride of this stuff and pass the props to the argument

const Like = (props) => {
    let classes="fa fa-heart";
        if (!props.liked) classes+= "-o";
        return ( 
         <i 
            onClick={props.onClick} 
            style={{cursor:"pointer"}}
            className={classes}
            aria-hidden="true">

        </i> );
    }

 

export default Like;