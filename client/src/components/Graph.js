import { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Graph(props) {
    const [tempData, setTempData] = useState(null);
    const [precipitationData, setPrecipitationData] = useState(null);
    const [humidityData, setHumidityData] = useState(null);

    useEffect(() => {
        setTempData({
            labels: props.daily.map((obj) => {
                const milliseconds = obj.dt * 1000;
                const dateObject = new Date(milliseconds);
                return (dateObject.toLocaleString("en-US", { day: "numeric", month: "numeric" }));
            }),
            datasets: [{
                label: "Max Temperature",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "rgba(255, 0, 0, 0.9)",
                data: props.daily.map((obj) => {
                    return obj.temp.max;
                })
            },
            {
                label: "Min Temperature",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "rgba(255, 150,0,0.9)",
                data: props.daily.map((obj) => {
                    return obj.temp.min;
                })
            }]
        });
        setPrecipitationData({
            labels: props.daily.map((obj) => {
                const milliseconds = obj.dt * 1000;
                const dateObject = new Date(milliseconds);
                return (dateObject.toLocaleString("en-US", { day: "numeric", month: "numeric" }));
            }),
            datasets: [{
                label: "Precipitation",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "rgb(100, 100, 255)",
                data: props.daily.map((obj) => {
                    return obj.precipitation;
                })
            }]
        });
        setHumidityData({
            labels: props.daily.map((obj) => {
                const milliseconds = obj.dt * 1000;
                const dateObject = new Date(milliseconds);
                return (dateObject.toLocaleString("en-US", { day: "numeric", month: "numeric" }));
            }),
            datasets: [{
                label: "Humidity",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderColor: "rgba(0, 100, 0, 0.9)",
                data: props.daily.map((obj) => {
                    return obj.humidity;
                })
            }]
        });
    }, []);
    

    return (
        <div className="Chart">
            {props.type === "temp" && tempData &&
            <Chart
                type="line" 
                data={tempData}
                options={{
                    plugins: {
                        title:{
                            display:true,
                            text:"Temperature Variation",
                            font: { size: 30 }
                        }
                    }
                }}
            />
            }
            {props.type === "precipitation" && precipitationData &&
            <Chart
                type="line" 
                data={precipitationData}
                options={{
                    plugins: {
                        title:{
                            display:true,
                            text:"Precipitation Variation",
                            font: { size: 30 }
                        }
                    } 
                }}
            />
            }
            {props.type === "humidity" && humidityData &&
            <Chart
                type="line" 
                data={humidityData}
                options={{
                    plugins: {
                        title:{
                            display:true,
                            text:"Humidity Variation",
                            font: { size: 30 }
                        }
                    }
                }}
            />
            }
        </div>
    );
}