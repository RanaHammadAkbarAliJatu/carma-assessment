import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChart } from "react-d3-components";
import { useSelector, useDispatch } from "react-redux";
function Chart() {
    const { top_ratedFetchDataSuccess } = useSelector((state) => state);
    const [values, setValues] = useState({});
    const [values2, setValues2] = useState({});
    useEffect(() => {
        if(top_ratedFetchDataSuccess.length > 0){
            let labels = []
            let data = []
            let data2 = []
            let top10 = top_ratedFetchDataSuccess.slice(0, 10)
            top10.map((item) => {
                labels.push(item.title)
                data.push(item.vote_count)
                data2.push(item.vote_average)
            })
            data2.push(7)
            setValues({
                labels: labels,
                datasets: [
                    {
                        label: "movies by vote average",
                        backgroundColor: "#0069b4b3",
                        borderColor: "#0069b4",
                        borderWidth: 1,
                        hoverBackgroundColor: "#0069b447",
                        hoverBorderColor: "#0069b4",
                        data: data
                    }
                ]
            })
            setValues2({
                labels: labels,
                datasets: [
                    {
                        label: "movies by rating",
                        backgroundColor: "#0069b4b3",
                        borderColor: "#0069b4",
                        borderWidth: 1,
                        hoverBackgroundColor: "#0069b447",
                        hoverBorderColor: "#0069b4",
                        data: data2
                    }
                ]
            })
        }
    }, [])
    return (
        <div className="container">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                the top 10 rated movies by vote count
            </h1>
            <Bar
                data={values}
                style={{ width: "70%", height: "50%" }}

            />
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                the top 10 rated movies vote average
            </h1>
            <Bar
                data={values2}
                style={{ width: "50%", height: "50%" }}

            />
        </div>
    );
}
export default Chart;
