import React, { Component } from "react";
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'two', die3: 'three', isRolling: false};
        this.getRandom = this.getRandom.bind(this);
    }

    getRandom() {
        let rand1 = Math.floor(Math.random() * 6 );
        let rand2 = Math.floor(Math.random() * 6 );
        let rand3 = Math.floor(Math.random() * 6 );
        this.setState({ 
            die1: this.props.sides[rand1], 
            die2: this.props.sides[rand2],
            die3: this.props.sides[rand3],
            isRolling: true
        });
        // Wait 1 sec reset isRolling
        setTimeout( () => {
            this.setState({isRolling: false})
        },1000)
    }

    render(){
        return (
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Die face= {this.state.die1} shaking={this.state.isRolling} />
                    <Die face= {this.state.die2} shaking={this.state.isRolling}/>
                    <Die face= {this.state.die3} shaking={this.state.isRolling}/>
                </div>
                <button onClick={this.getRandom} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        );
    }
}

export default RollDice;