import React from 'react' 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';  
import './Moredisplay.css';

const Moredisplay = ({ary}) => {
    return ( 
        <div className="Table"> 
            <h1 className="header">Possible Stops</h1> 
            <Paper elevation={3} className="paper"> 
              <TableContainer>
                  <Table className="" aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="center">Direction</TableCell> 
                              <TableCell align="center">Platform No</TableCell>
                              <TableCell align="center">Schedule date</TableCell>
                              <TableCell align="center">Mode</TableCell>
                              <TableCell align="center">Operator</TableCell>
                          </TableRow>
                      </TableHead> 
                      <TableBody> 
                          {ary.map(row =>(
                              <TableRow key= {row.tripid}>
                                  <TableCell align="center">{row.direction ? row.direction: "NA"}</TableCell>  
                                  <TableCell align="center">{row.platform ? row.platform:"NA"}</TableCell>
                                  <TableCell align="center">{row.when ? new Date(row.when).toLocaleString():"NA"}</TableCell>
                                  <TableCell align="center">{row.line.mode? row.line.mode:"NA"}</TableCell>
                                  <TableCell align="center">{row.line.operator.name ? row.line.operator.name:"NA"}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
            </Paper> 
            
        </div>
    )
} 
export default Moredisplay
