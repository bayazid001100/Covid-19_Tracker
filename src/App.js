import React, { Component } from 'react';
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api';


class App extends Component {
    state = {
        data:{},

    }
    
    async componentDidCatch(){
        const fetchData = await fetchData();

        this.setState({data: fetchData})
    }
    render() {
        const {data} =this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;