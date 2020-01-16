import React, {useState} from 'react';

class Dashboard extends React.Component(){
    constructor() {
        super();
        this.state = {
            strikeCount: 0, ballCount: 0,
            foulCount: 0, hitCount: 0
        }
    }
}