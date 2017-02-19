import React, {Component} from 'react'
import {render} from 'react-dom'
import Normalize from 'normalize.css'
import Rx from 'rxjs'

import Filter from './Components/filter.jsx'

function App() {
    return (
        <div>
            <ul>
                <Filter class="filter-item" value="Man" data="1"/>
                <Filter class="filter-item" value="Woman" data="2"/>
            </ul>
        </div>
    )
}

render(<App />, document.getElementById('root'))

var count$ = Rx.Observable.fromEvent(document.querySelectorAll(".filter-item"), "click")

count$.subscribe(x => console.log(x.target.dataset.value))
