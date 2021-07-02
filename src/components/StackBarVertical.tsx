import React, { Component } from 'react'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import "./shared.css"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export interface StackBarVerticalProps {
  
}
 
export interface StackBarVerticalState {
  
}
 
const CustomXAxisTick = (props: any): JSX.Element => {
  console.log(props.payload.value);
  const { x, y, payload, data } = props;
  const tableData = data[payload.index]
  return (
    <g>
      <foreignObject x={x-120} y={y} width={"140px"} height="100%">
        <span className="tick-label tick-label-top">
          <div>
            {tableData.county}
            </div>
            <div>
            {tableData.city}
            </div>
            </span>
        {/* <span className="tick-label tick-label-bottom">{tableData.city}</span> */}
        {/* <Table aria-label="simple table" width={200}>
              <TableBody>
                  <TableRow>
                    <TableCell width={100}>{tableData.county}</TableCell>
                    <TableCell width={100}>{tableData.city}</TableCell>
                  </TableRow>
              
              </TableBody>
            </Table> */}
      </foreignObject>
    </g>
  );
};

class StackBarVertical extends Component<StackBarVerticalProps, StackBarVerticalState> {
  
  render() { 
    const data = [
      { name: "Item 1", foo: 2, bar: 4, foo1: 5, bar1: 6, foo2: 22, bar2: 43, foo3: 32, bar3: 34 },
      { name: "Item 2", foo: 2, bar: 5, foo1: 6, bar1: 8, foo2: 12, bar2: 33, foo3: 22, bar3: 24 },
      { name: "Item 4", foo: 4, bar: 6, foo1: 5, bar1: 2, foo2: 42, bar2: 23, foo3: 12, bar3: 44 },
    ];

    const geoData = [
      { name: "a", county: "Bulgaria", city: "Dobrich", foo: 2, bar: 4, foo1: 5, bar1: 6, foo2: 22, bar2: 43, foo3: 32, bar3: 34 },
      { name: "b", county: "Bulgaria", city: "Varna",  foo: 2, bar: 5, foo1: 6, bar1: 8, foo2: 12, bar2: 33, foo3: 22, bar3: 24  },
      { name: "c", county: "Bulgaria", city: "Dobrich",   foo: 4, bar: 6, foo1: 5, bar1: 2, foo2: 42, bar2: 23, foo3: 12, bar3: 44 },
      { name: "d", county: "Romania", city: "Bucharest",   foo: 2, bar: 4, foo1: 5, bar1: 6, foo2: 22, bar2: 43, foo3: 32, bar3: 34 },
      { name: "a", county: "", city: "Sofia", foo: 2, bar: 5, foo1: 6, bar1: 8, foo2: 12, bar2: 33, foo3: 22, bar3: 24 },
      { name: "b", county: "Bulgaria", city: "Varna",   foo: 4, bar: 6, foo1: 5, bar1: 2, foo2: 42, bar2: 23, foo3: 12, bar3: 44 },
      { name: "c", county: " ", city: "Dobrich",   foo: 2, bar: 4, foo1: 5, bar1: 6, foo2: 22, bar2: 43, foo3: 32, bar3: 34 },
      { name: "d", county: "Romania", city: "Bucharest",  foo: 2, bar: 5, foo1: 6, bar1: 8, foo2: 12, bar2: 33, foo3: 22, bar3: 24  },
    ]
    const getFlatBig = [...geoData,...geoData,...geoData, ]
    return (<div >
      
      <h1>Horizontal StackBar Single measure/ single dimension </h1>  
        <BarChart width={200} height={800} data={data.slice(0,1)} layout="horizontal">
          <XAxis  dataKey="name"/>
          <YAxis />
          <Bar  label stackId={0} dataKey="foo" fill="grey" />
          <Bar  label stackId={0} dataKey="foo1" fill="yellow" />
          <Bar  label stackId={0} dataKey="foo2" fill="pink" />
          <Bar  label stackId={0} dataKey="foo3" fill="orange" />
          <Bar  label stackId={0} dataKey="bar" fill="red" />
          <Bar  label stackId={0} dataKey="bar1" fill="blue" />
          <Bar  label stackId={0} dataKey="bar2" fill="yellow" />
          <Bar  label stackId={0} dataKey="bar3" fill="green" />
        </BarChart>
      <h1>Vertical StackBar Single measure/ 2 dimension </h1>
        <BarChart width={500} height={800} data={data} layout="horizontal">
          <XAxis dataKey="name"  />
          <YAxis />
          <Bar  label stackId={0} dataKey="foo" fill="grey" />
          <Bar  label stackId={0} dataKey="foo1" fill="yellow" />
          <Bar  label stackId={0} dataKey="foo2" fill="pink" />
          <Bar  label stackId={0} dataKey="foo3" fill="orange" />
          <Bar  label stackId={0} dataKey="bar" fill="red" />
          <Bar  label stackId={0} dataKey="bar1" fill="blue" />
          <Bar  label stackId={0} dataKey="bar2" fill="yellow" />
          <Bar  label stackId={0} dataKey="bar3" fill="green" />
        </BarChart>
        <h1>Horizontal StackBar Single measure/ Multi dimension </h1>
        <BarChart width={1600} height={800} data={getFlatBig} layout="horizontal">
          <XAxis height={100} tick={<CustomXAxisTick data={getFlatBig}/>}/>
          <YAxis />
          <Bar  label stackId={0} dataKey="foo" fill="grey" />
          <Bar  label stackId={0} dataKey="foo1" fill="yellow" />
          <Bar  label stackId={0} dataKey="foo2" fill="pink" />
          <Bar  label stackId={0} dataKey="foo3" fill="orange" />
          <Bar  label stackId={0} dataKey="bar" fill="red" />
          <Bar  label stackId={0} dataKey="bar1" fill="blue" />
          <Bar  label stackId={0} dataKey="bar2" fill="yellow" />
          <Bar  label stackId={0} dataKey="bar3" fill="green" />
        </BarChart>
    </div>);
  }
}
 
export default StackBarVertical;