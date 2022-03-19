import React, { Component } from 'react'

export default class Count extends Component {
    state = { carName: '123123' }

    increment = () => {
        const { value } = this.selectNumber
        this.props.incre(value*1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decre(value*1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if(this.props.count%2 !==0){
            this.props.incre(value*1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.increAsync(value*1,500)
    }
    render() {
        console.log('UI组件接收的props',this.props)
        return (
            <div>
                <h1>我是count组件</h1>
                <h2>当前求和为:{this.props.count}，下方组件总人数为{this.props.numberOfPeople}</h2>&nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
                <hr />
            </div>
        )
    }
}
