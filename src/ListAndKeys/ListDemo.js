import React, { Component } from 'react'

export default class ListDemo extends Component {
    render() {

        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li>{number}</li>
        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        )
    }
}
