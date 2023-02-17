import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookingDates from './component/BookingDate/BookingDates';
import RoomInfo from './component/RoomInfo/RoomInfo';
import { Grid } from '@mui/material';
import PersonalInfo from './component/PersonalInfo/PersonalInfo';
import AddressInfo from './component/AddressInfo/AddressInfo';
import PaymentOptionAndTags from './component/PaymentOptionAndTags/PaymentOptionAndTags';

function App() {
  return (
    <div>
        <BookingDates />
        <RoomInfo />
        <PersonalInfo />
        <AddressInfo />
        <PaymentOptionAndTags />
    </div>
  );
}

export default App;
