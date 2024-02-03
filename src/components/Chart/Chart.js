import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props =>{
return(
<div className="charts">
{props.DataPoints.map(datapoints=>{
    <ChartBar key={datapoints.label}
     value={datapoints.value}
      maxvalue={datapoints.maxvalue} 
      label={datapoints.label}/>
})}
</div>
)
}

export default Chart