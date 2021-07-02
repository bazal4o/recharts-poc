import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import createReactClass from "create-react-class";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export interface HorizontalMultiDimBarChartProps {
  
}
 
export interface HorizontalMultiDimBarChartState {
  
}



// const CssAxisTick = createReactClass({
//   render() {
//     debugger;
//     const { x, y, payload } = this.props;
//     return (
//       <g>
//         <foreignObject x={-150} y={y} width="100%" height="100%">
//           <span className="tick-label"> Bace are{payload.value}</span>
//         </foreignObject>
//       </g>
//     );
//   },
// });

const CustomXAxisTick = (props: any): JSX.Element => {
  console.log(props.payload.value);
  const { x, y, payload, data } = props;
  const tableData = data[payload.index]
  return (
    <g>
      <foreignObject x={0} y={y} width={"200px"} height="100%">
        {/* <span className="tick-label"> Bace are{payload.value}</span> */}
        <Table aria-label="simple table" width={200}>
              <TableBody>
                  <TableRow>
                    <TableCell width={100}>{tableData.county}</TableCell>
                    <TableCell width={100}>{tableData.city}</TableCell>
                  </TableRow>
              
              </TableBody>
            </Table>
      </foreignObject>
    </g>
  );
};
 
class HorizontalMultiDimBarChart extends Component<HorizontalMultiDimBarChartProps, HorizontalMultiDimBarChartState> {

  
  // getCustomYAxisTick

  render() {
    const geoDataHierarchy = [
      {
        name: "a",
        county: {
          name: "Bulgaria",
          rowSpan: 3,
          cities: [{ city: "Sofia", orders: 1999, sales: 4000 }],
        },
      },
      //{ name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      // { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      // { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
    ];
    const geoDataFlat = [
      { name: "a", county: "Bulgaria", city: "Sofia",  orders: 1999, sales: 4000 },
      { name: "b", county: "Bulgaria", city: "Varna",  orders: 4999, sales: 7000  },
      { name: "c", county: "Bulgaria", city: "Dobrich",  orders: 1000, sales: 2000  },
      { name: "d", county: "Romania", city: "Bucharest",  orders: 1999, sales: 4000  },
    ]
    const geoData = [
      { name: "a", county: "Bulgaria", city: "Sofia", data: [ { orders: 1999, sales: 4000 }]},
      { name: "b", county: "Bulgaria", city: "Varna", data: [ { orders: 4999, sales: 7000 }] },
      { name: "c", county: "Bulgaria", city: "Dobrich", data: [ { orders: 1000, sales: 2000 }] },
      { name: "d", county: "Romania", city: "Bucharest", data: [ { orders: 1999, sales: 4000 }] },
    ]

    const geoDataBig = [...geoDataFlat, ...geoDataFlat, ...geoDataFlat, ...geoDataFlat,...geoDataFlat, ...geoDataFlat,...geoDataFlat, ...geoDataFlat, ]
    const data = [
      { name: "a", foo: 2, bar: 4 },
      { name: "b", foo: 8, bar: 2 },
      { name: "c", foo: 9, bar: 6 },
      { name: "d", foo: 15, bar: 8 }
    ]; 
    return (
      <div>
        <h2>Horizontal MultiDim BarChart</h2>
        <h4>With Table Container</h4>
        <span>
          <TableContainer style={{ width: 1200 }} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>County</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {geoData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.county}
                    </TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right" height={100}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          // width={800}
                          // height={100}
                          data={row.data}
                          layout="vertical"
                        >
                          <XAxis type="number" hide height={0} />
                          <YAxis type="category" hide />
                          <Bar background dataKey="orders" fill="#8884d8" />
                          <Bar background dataKey="sales" fill="grey" />
                        </BarChart>
                      </ResponsiveContainer>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          

        </span>
        <h4>Without Table Container</h4>
        <BarChart width={800} height={400} data={geoDataBig} layout="vertical">
          <XAxis type="number" width={200} />
          <YAxis
            type="category"
            tick={<CustomXAxisTick data={geoDataBig} />}
            width={200}
          />
          <Bar background dataKey="orders" fill="#8884d8" />
          <Bar background dataKey="sales" fill="grey" />
        </BarChart>

        <h4>Hierrachy Data</h4>
        <div>
          <TableContainer style={{ width: 1200 }} component={Paper}>
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                  <TableCell>County</TableCell>
                  <TableCell align="right">City</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow>
                  <TableCell width={100} rowSpan={3}>Bulgaria</TableCell>
                  <TableCell>Sofia</TableCell>
                  <TableCell width={300} height={100}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={geoDataHierarchy[0].county.cities}
                      layout="vertical"
                    >
                      <XAxis type="number" hide />
                      <YAxis type="category" hide />
                      <Bar background dataKey="orders" fill="#8884d8" />
                      <Bar background dataKey="sales" fill="grey" />
                    </BarChart>
                  </ResponsiveContainer>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width={100}>Varna</TableCell>
                  <TableCell width={300} height={100}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={geoDataHierarchy[0].county.cities}
                      layout="vertical"
                    >
                      <XAxis type="number" hide />
                      <YAxis type="category" hide />
                      <Bar background dataKey="orders" fill="#8884d8" />
                      <Bar background dataKey="sales" fill="grey" />
                    </BarChart>
                  </ResponsiveContainer>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width={100}>Dobrich</TableCell>
                  <TableCell width={300} height={100}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={geoDataHierarchy[0].county.cities}
                      layout="vertical"
                    >
                      <XAxis type="number" hide />
                      <YAxis type="category" hide />
                      <Bar background dataKey="orders" fill="#8884d8" />
                      <Bar background dataKey="sales" fill="grey" />
                    </BarChart>
                  </ResponsiveContainer>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Romania</TableCell>
                  <TableCell width={100}>Bucharest</TableCell>
                  <TableCell width={300} height={100}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={geoDataHierarchy[0].county.cities}
                      layout="vertical"
                    >
                      <XAxis type="number" hide />
                      <YAxis type="category" hide />
                      <Bar background dataKey="orders" fill="#8884d8" />
                      <Bar background dataKey="sales" fill="grey" />
                    </BarChart>
                  </ResponsiveContainer>
                  </TableCell>
                </TableRow>
                   
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}
 
export default HorizontalMultiDimBarChart;