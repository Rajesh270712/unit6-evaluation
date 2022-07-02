import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"



const MoreDetails =() => {
    const {id}= useParams();
    const navigate =useNavigate()
    console.log(id);
    const [item, setMovie] = useState({});

    const getMovie =  ()=>{
        fetch(`http://localhost:8080/movies/${id}`)
        .then((res)=>res.json())
        .then((res)=> setMovie(res))
    }


    // 
    


    const bookTicket =(id) => {
        const book={
            movie_id:id,
            name:"Sam",
            seat:"A2"
        }
        fetch(`http://localhost:8080/moviesBooked`,{
            method:"POST",
            body :JSON.stringify(book),
            headers:{
                "Content-Type":"Application/json"
            }
        })
        
    }
    useEffect(()=>(getMovie()),[])
    // getMovie()

    function handleHome(){
        navigate("/bookings")
    }
    return(
        <div>

       <Button onClick={handleHome} >Go to Home Page</Button>

            <center>

                <div width="70%" margin="auto" >
                    <img width="50%" src={item.poster_path} alt="" />
                    <Text>Title: {item.title}</Text>
                    <Text>Language: {item.original_language}</Text>
                    <Text>Popularity: {item.popularity}</Text>
                    <Text>Release date: {item.release_date}</Text>
                    <Text>Vote average: {item.vote_average}</Text>
                    <Text>Overview: {item.overview}</Text>
                    <Button onClick={()=>bookTicket(item.id)} >Book Tickets</Button>
                </div>
            </center>
    

        </div>
    )
}

export default MoreDetails