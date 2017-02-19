import React, {Component} from 'react'

function Filter(props) {
    return <li className={props.class} data-value={props.data} >{props.value}</li>
}

export default Filter
