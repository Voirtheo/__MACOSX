import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
    }
    render() {
        return (
            <div>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>123</li>
                    <li>345</li>
                    <li>467</li>
                </ul>
            </div>
        )
    }
}
