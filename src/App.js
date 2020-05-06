import React from 'react';
import {Cards, Chart ,CountryPicker} from './components';
import styles from'./App.module.css';

import {fetchdata} from './api/index.js';
import image from'./images/components.png';


class App extends React.Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetcheddata = await fetchdata();
     this.setState({data:fetcheddata});
  }
  handleCountryChange = async (country)=>{
    // console.log(country);
    //fetch data
    //set state
    const fetcheddata = await fetchdata(country);
    // console.log(fetcheddata);
    this.setState({data:fetcheddata, country:country});
  }
  render(){
    const {data,country}=this.state
  return (
    <div className={styles.container}>
      <img src={image} className="styles.image" alt="Covid-19" />
      <Cards data= {data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      
    </div>
  );
}
}

export default App;