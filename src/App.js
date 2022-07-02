import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Login from './Components/login';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/homepage';
import MoreDetails from './Components/moreDetails';
import Booking from './Components/bookings';
function App() {
  return (
    <ChakraProvider theme={theme}>


        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path='/homepage' element={<HomePage/>} ></Route>
          <Route path='/movie/:id' element={<MoreDetails/>} ></Route>
          <Route path="/bookings" element={<Booking/>} > </Route>
        </Routes>

    </ChakraProvider>
  );
}

export default App;
