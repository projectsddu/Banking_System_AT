// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import './GenericChart.css'


export default function LinChart(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [leftData, setleftData] = useState({})
    useEffect(() => {

        setData(props.data)
        setleftData(props.prop)
        setLoading(true)

    })
    return (
        <div className="main-chart-wrapper">
            <div className="chart-wrapper">
                <div className="left-chart">
                    <h1>{loading ? leftData["header"] : ""}</h1><br />
                    <p>"<em>{loading ? leftData["quote"] : ""}</em> "</p><br />
                    <h4>{loading ? leftData["ul_header"] : ""}:</h4>
                    <ul>
                        {loading ? leftData["ul_data"].map((e) => {
                            return (<li>{e}</li>)
                        }) : ""}
                    </ul>
                </div>
                <div className="generic_chart">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid stroke="#07acf2" />
                        <XAxis dataKey="name" stroke="#07acf2" />
                        <YAxis stroke="#07acf2" />
                        <Tooltip />
                        <Area type="monotone" dataKey="income" stroke="rgb(7, 242, 226)" fill="rgba(7, 242, 226,1)" />
                        <Area type="monotone" dataKey="expense" stroke="#ccff00" fill="rgba(204, 255, 0,0.5)" />
                    </AreaChart>
                </div>
            </div>
        </div>
    )
}