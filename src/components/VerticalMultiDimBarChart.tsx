import * as React from 'react';
import { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./shared.css"

export interface VerticalMultiDimBarChartProps {
  
}
 
export interface VerticalMultiDimBarChartState {
  
}

const CustomXAxisTick = (props: any): JSX.Element => {
  console.log(props.payload.value);
  const { x, y, payload, data } = props;
  const tableData = data[payload.index]
  return (
      <foreignObject x={x-100} y={y} width={"200px"} height="100%">
        {/* <span className="tick-label"> Bace are{payload.value}</span> */}
        <Table aria-label="simple table" width={200}>
              <TableBody>
                  <TableRow>
                    <TableCell align="center" width={100}>{tableData.county}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" width={100}>{tableData.city}</TableCell>
                  </TableRow>
              
              </TableBody>
            </Table>
      </foreignObject>
  );
};


const CustomXAxisSpanTick = (props: any): JSX.Element => {
  console.log(props.payload.value);
  const { x, y, payload, data } = props;
  const tableData = data[payload.index]
  return (
    <g>
      <foreignObject
        className="test"
        x={x - 120}
        y={y}
        width={"130px"}
        height="100%"
      >
        <span className="tick-label tick-label-top">
          <div>{tableData.county}</div>
          <div>{tableData.city}</div>
        </span>
        {/* <span className="tick-label tick-label-bottom">{tableData.city}</span> */}
      </foreignObject>
    </g>
  );
};


// const CssAxisTick = createReactClass({
//   render() {
//     const { x, y, payload } = this.props;
//     return (
//       <foreignObject x={x} y={y} width="100%" height="100%">
//         {<Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>County</TableCell>
//                   <TableCell align="right">City</TableCell>
//                   {/* <TableCell align="right"></TableCell> */}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {/* {geoData.map((row) => (
//                   <TableRow key={row.name}>
//                     <TableCell component="th" scope="row">
//                       {row.county}
//                     </TableCell>
//                     <TableCell align="right">{row.city}</TableCell>
//                   </TableRow>
//                 ))} */}

//               </TableBody>
//             </Table>
//          }
//         <span className="tick-label">{payload.value}</span>
//       </foreignObject>
//     );
//   },
// });
 

class VerticalMultiDimBarChart extends Component<VerticalMultiDimBarChartProps, VerticalMultiDimBarChartState> {
  constructor(props: VerticalMultiDimBarChartProps) {
    super(props);
    // this.state = { :  };
  }
  render() { 
    const geoData = [
      { name: "a", county: "Bulgaria", city: "Sofia", orders: 1999, sales: 4000 }
    ]
    const data = [
      { name: "a", foo: 2, bar: 4 },
      { name: "b", foo: 8, bar: 2 },
      { name: "c", foo: 9, bar: 6 },
      { name: "d", foo: 15, bar: 8 }
    ];
    const geoDataFlat = [
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
    ]

    

    const geoDataBitFlat = [
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
    ]

    const getFlatBig = [...geoDataBitFlat,...geoDataBitFlat,...geoDataBitFlat, ]
    return (
      <div>
        <h2>VerticalMultiDimBarChart</h2>
        <div>
          <h3>Chart with Table Axis</h3>
          <BarChart width={800} height={400} data={geoDataFlat} layout="horizontal">
          <CartesianGrid stroke="0" />
          <XAxis
            type="category"
            dataKey="name"
            allowDataOverflow={true}
            // tick={{
            //   fill: "#c1c1c1",
            //   fontSize: 12,
            //   // angle: -35,
            //   textAnchor: "end",
            // }}
            tick={<CustomXAxisTick data={geoDataFlat}/>}
            height={200}
          />
          <YAxis type="number"  />
            <Bar dataKey="orders" label fill="#8884d8" />
            <Bar dataKey="sales" label fill="grey" />
          </BarChart>
        </div>
        <div>
          <h3>Chart with span Axis</h3>
          <BarChart width={800} height={400} data={geoDataBitFlat} layout="horizontal">
          <CartesianGrid stroke="0" />
          <XAxis
            type="category"
            dataKey="name"
            allowDataOverflow={true}
            // tick={{
            //   fill: "#c1c1c1",
            //   fontSize: 12,
            //   // angle: -35,
            //   textAnchor: "end",
            // }}
            tick={<CustomXAxisSpanTick data={geoDataBitFlat}/>}
            height={200}
          />
          <YAxis type="number"  />
            <Bar dataKey="orders"  fill="#8884d8" />
            <Bar dataKey="sales"  fill="grey" />
          </BarChart>
        </div>

        <div>
          <h3>Chart with span Axis (Really Big Data)</h3>
          <BarChart width={800} height={400} data={getFlatBig} layout="horizontal">
          <CartesianGrid stroke="0" />
          <XAxis
            type="category"
            dataKey="name"
            allowDataOverflow={true}

            tick={<CustomXAxisSpanTick data={getFlatBig}/>}
            height={200}
          />
          <YAxis type="number"  />
            <Bar dataKey="orders"  fill="#8884d8" />
            <Bar dataKey="sales"  fill="grey" />
          </BarChart>
        </div>
      </div>
    );
  }
}
 
export default VerticalMultiDimBarChart;