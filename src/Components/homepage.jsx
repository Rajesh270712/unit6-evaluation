import { Box, Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


export const HomePage =() => {
    const {auth} = useSelector((state)=>(state))
    const navigate= useNavigate()
  
    const [movies, SetMovies] = useState([])
    useEffect(()=>{
        fetch(`  http://localhost:8080/movies  `)
        .then((res)=>(res.json()))
        .then(res=>SetMovies(res))
   },[])



   const handleDetails=(id)=>{
    navigate(`/movie/${id}`)
   }
    return(
        <div>
           <center><h1>Homepage</h1></center>
            <Box display="flex" flexWrap="wrap" gap="10%" >
                {
                    movies.map((movie)=>(
                        <Box width="40%" border="1px solid grey" p={5} >
                            <img width={100} src={movie.poster_path} alt="" />
                            <Text>{movie.title}</Text>
                            <Button onClick={()=>handleDetails(movie.id)} > More Details </Button>
                        </Box>
                    ))
                }
            </Box>
        </div>
    )
}

