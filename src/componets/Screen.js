import React from 'react'; 
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';  
import Favstops from './Favstops';
import './Screen.css';  
import { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check'; 
import CloseIcon from '@material-ui/icons/Close'; 
import FavoriteIcon from '@material-ui/icons/Favorite'; 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const Screen = ({arr,query}) => {   
  const [state, setstate] = useState({})
  const idsFromLocalStorage = JSON.parse(localStorage.getItem("Favourite"))
  const arraysOfIds = idsFromLocalStorage?.split("A")


    const setFav = (id) =>{ 
      localStorage.setItem(id,"fav"); 
      localStorage.setItem("Favourite", JSON.stringify(localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) + "A" + id : id)) 
      setstate({}); 
      window.location.reload()
    } 
    const removeFav = (stopId) => {
      localStorage.removeItem(stopId)
      arraysOfIds?.splice(arraysOfIds.indexOf(stopId), 1)
      localStorage.removeItem("Favourite")
      arraysOfIds?.forEach(element => {
          if (arraysOfIds.length > 0 && element.length > 0) {
              localStorage.setItem("Favourite", JSON.stringify(localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) + "A" + element : element))
          }
      });
      setstate({})
      window.location.reload()
  }
   
    return ( 
        <div className="Table">   
          <Paper elevation={3} className="paper">  
            <TableContainer>  
                <Table className="" aria-label="simple table"> 
                  <TableHead> 
                    <TableRow> 
                      <TableCell align="center">Stops</TableCell>
                      <TableCell align="center" >Bus</TableCell>
                      <TableCell align="center">Tram</TableCell>
                      <TableCell align="center">Ferry</TableCell>
                      <TableCell align="center">Suburban</TableCell>
                      <TableCell align="center">Express</TableCell>
                      <TableCell align="center">Regional</TableCell> 
                      <TableCell align="center">More Info</TableCell>  
                      <TableCell align="center">Favourite</TableCell>
            
                      
                    </TableRow> 
                  </TableHead>  
                  <TableBody>
                        {arr.filter(value => value.name.toLowerCase().includes(query.toLowerCase())).map(row => ( 
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center" >{row.products.bus === true ? <CheckIcon/> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products.tram === true ? <CheckIcon />: <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products.ferry === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products.suburban === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center"> {row.products.express === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products.regional === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center"><Link to={`/More/${row.id}`}>Click here</Link></TableCell>   
                            <TableCell align="center">
                            {localStorage.getItem(row.id) === "fav" ?
                             <FavoriteIcon onClick={e => { removeFav(row.id); }}>SetFav</FavoriteIcon> : <FavoriteBorderIcon onClick={e => { setFav(row.id) }}>RemFav</FavoriteBorderIcon>}
                            </TableCell>
          
                        </TableRow>   
                        ))}                                          
                  </TableBody>
                </Table>
            </TableContainer>
          </Paper>
          <Favstops state={state} ids={arraysOfIds} />
        </div>  
    )
}

export default Screen

