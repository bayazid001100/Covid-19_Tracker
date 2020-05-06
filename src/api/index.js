import axios from 'axios';
 const url = "https://covid19.mathdro.id/api";
 export const fetchdata = async (country) =>{
     let changeableUrl=url;
     if(country){
         changeableUrl = `${url}/countries/${country}`;
     }
     try {
         const { data:{ confirmed,recovered,deaths,lastupdate} } =  await axios.get(changeableUrl);

         const modifiedData= {confirmed,recovered,deaths,lastupdate}
         
         return modifiedData;
         
     } catch (error) {
         
     }
 }

 export const fetchDailyData = async () =>{
     try {
         
        const {data} = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportdate,
        }))
        return modifiedData;

     } catch (error) {
         console.log('error')
         
     }
 }
  
 export const fetchCountries = async () =>{
     try {
         const {data:{countries}} = await axios.get(`${url}/countries`);
         return countries.map((country)=>country.name);
     } catch (error) {
         
     }
 }