import React, {useState} from 'react';

export class Display extends React.Component(){
    constructor(){
        super();
        this.state = {
            strikeCount: 0, ballCount: 0,
            foulCount: 0, hitCount: 0
        }
    }
    render(){
        return (
            <div>
                <h1>Strikes: {this.state.ballCount}</h1>
            </div>
        )
    }
}