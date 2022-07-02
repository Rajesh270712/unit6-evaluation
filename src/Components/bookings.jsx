import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Booking = () => {
  const [bookedMovie, SetBookedMovie] = useState([]);

  function getData(){
      fetch(`  http://localhost:8080/moviesBooked  `)
        .then(res => res.json())
        .then(res => SetBookedMovie(res));

  }
  useEffect(() => {
    getData()
  }, []);


  const handleDelete =(id) => {
    fetch(`http://localhost:8080/moviesBooked/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json"
        }
    })
    .then(getData())
  }


console.log(bookedMovie);
  return (
    <center>
        <center>

      <h1>Booked Movies</h1>
        </center>
      <table style={{marginTop:"30px"}} >
        <thead>
          <tr>
          
              <th>Movie Id</th>
              <th>Seat No.</th>
              <th>Cancel Booking</th>
           
          </tr>
        </thead>
        <tbody>
          {bookedMovie.map(movie => (
            <tr>
              <td>{movie.movie_id}</td>
              <td>{movie.seat}</td>
              <td><Button onClick={()=>handleDelete(movie.id)} >Cancel Booking</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default Booking;
