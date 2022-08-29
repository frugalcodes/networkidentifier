import './App.css';
import React, { useState } from 'react';



function App() {

  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')


  const handleChange = (e) => {
     
    setNumber(e.target.value)
  }

  const handleClick = (event) => {
 
       setSearch (number) 
      


        let string_length = number.length;
        let firstFourNum = number.slice(0, 4)
        let zeroFirst = number.slice(0, 1)
        var num = /^[+0-9]+$/;
    
        if (number.match(num)) {
          if (zeroFirst == 0 && string_length == 11) {
            var prefix = Number(number.slice(1, 4));
            
          }
          else if (zeroFirst !== 0 && string_length == 10) {
            prefix = number.slice(0, 3);
           
            

          }
          else if (firstFourNum == "+234" && string_length == 14) {
            prefix = Number(number.slice(4, 7));
            
          } 
        
        }
           
          let MTN = [803, 806, 703, 706, 813, 816, 810, 814, 903, 906, 702]
          let airtel = [802, 808, 708, 812, 701, 704, 902, 904, 901, 907]
          let GLO = [805, 807, 705, 815, 811, 905]
          let _9mobile = [809, 818, 817, 909, 908]
        

          function DisplayText() {

            if (MTN.includes(prefix)) {
                return <h1>This is an MTN number</h1>
          } else if (airtel.includes(prefix)) {
                return <h1>This is an AIRTEL number</h1>
          } else if (GLO.includes(prefix)) {
            return <h1>This is a GLO number</h1>
          } else if (_9mobile.includes(prefix)) {
            return <h1>This is a 9MOBILE number</h1>
          } 
          else {
            return <h1>Enter a correct phone number</h1>
          }
       }
  
       event.preventDefault()
      }
     
       
      

  return (
    <div className="container">
        
       {DisplayText()}
       
      <input  type="text" id='num'  value={number} onChange={handleChange} placeholder="Enter the phone number"/> 
      <button onClick={handleClick}>Search</button>
      
    </div>
  );

}

export default App;
