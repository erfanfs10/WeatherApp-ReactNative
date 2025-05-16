import { useState, useEffect } from "react";
import CardItem from "../components/CardItem";
import Card from "../components/Card";
import Tab from "../components/Tab";
import Temprature from "../assets/temprature.png";
import Weather from "../assets/weather.png";
import Wind from "../assets/wind.png";
import Humidity from "../assets/humidity.png";
import UV from "../assets/uv.png";

const Home = () => {
  const [city, setCity] = useState("Tehran");
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=257534eebe09413598b105642251605&q=${city}&aqi=no`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  // this hook update the data when the screen get mounted
  // and when the city changes
  useEffect(() => {
    getData();
  }, [city]);

  // this hook updates the data each 2 minutes.
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000 * 60 * 2);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Tab city={city} setCity={setCity}/>
      <Card>
        <CardItem
          title="Temprature"
          Imagesource={Temprature}
          data={`${data?.current?.temp_c} C`}
        />
        <CardItem
          title="Condition"
          Imagesource={Weather}
          data={data?.current?.condition?.text}
        />
        <CardItem
          title="Wind Speed"
          Imagesource={Wind}
          data={`${data?.current?.wind_kph} kph`}
        />
        <CardItem
          title="Humidity"
          Imagesource={Humidity}
          data={`${data?.current?.humidity} %`}
        />
        <CardItem title="UV" Imagesource={UV} data={data?.current?.uv} />
      </Card>
    </>
  );
};

export default Home;
