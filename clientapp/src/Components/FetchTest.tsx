// eslint-disable-next-line

import React from 'react';

export default class FetchTest extends React.Component {
    constructor(props:any){
        super(props);
    }
    componentDidMount(){
        fetch('/api/SampleData/WeatherForecasts')
        .then(a => a.json())
        .then(b=>console.log(b))
    }

    render() {
        return (
            <div>heelo</div>
        )
    }
}