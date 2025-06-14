import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox />
            <InfoBox info={weatherInfo} />
        </div>
    );
}