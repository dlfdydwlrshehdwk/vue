import axios from "axios"

const weatherMixin = {
  methods: {
    async getWeatherInfo(city){
      const API_KEY=process.env.VUE_APP_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${API_KEY}`
      const res = await axios.get(url)
      let data = {
        label : res.data.name,
        code : res.data.name,
        temperature : this.displayTemparature(res.data.main.temp),
        humidity : res.data.main.humidity,
        wind : res.data.wind.speed
      }
      return data;
    },
    displayTemparature(temparature){
      return (temparature - 273.15).toFixed(1);
    }
  }
  }
    
export default weatherMixin