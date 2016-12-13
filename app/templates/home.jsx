import React, {Component} from 'react';
import {render} from 'react-dom';
var Rebase = require('re-base');
import styles from '../styles/home.css';

var base = Rebase.createClass({
  apiKey: "AIzaSyDXkUUzDuNKMB8AClYWcYhG_NfBppzXX-I",
  authDomain: "oliver-wyatt.firebaseapp.com",
  databaseURL: "https://oliver-wyatt.firebaseio.com",
  storageBucket: "oliver-wyatt.appspot.com",
  messagingSenderId: "697016236096"
}, 'myApp')

console.log(base)

class Hello extends Component {
    render() {
        return (
            <div className={styles.header}>
              hello!
            </div>
        )
    }
}

render(<Hello/>, document.getElementById('root'))
