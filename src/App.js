import './App.css';
import React, { useState } from 'react';



function App() {

  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  // State to be used to display the brand of the current phone number
  const [brand, setBrand] = useState('')

  const handleChange = (e) => {

    setNumber(e.target.value)
  }

  const handleClick = (event) => {

    setSearch(number)



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
        // Example of updating the brand of the current phone number after
        // testing it.
        return setBrand('MTN')
        // return <h1>This is an MTN number</h1>
      } else if (airtel.includes(prefix)) {
        // return <h1>This is an AIRTEL number</h1>
      } else if (GLO.includes(prefix)) {
        // return <h1>This is a GLO number</h1>
      } else if (_9mobile.includes(prefix)) {
        // return <h1>This is a 9MOBILE number</h1>
      }
      else {
        // return <h1>Enter a correct phone number</h1>
      }
    }
    // Call the function here so that it runs once when the button is clicked
    DisplayText();
    event.preventDefault()
  }




  return (
    <div className="container">
      {/* {DisplayText()} */}
      {/* You are calling the function Display text here.
      It is not working because the function is inside handleclick and
      it is not accessible by code outside handleClick. 
      It is working when you do 
          const handleClick = (event) => {
            setSearch(number)
          }
      because now the function DisplayText is available globally.
      You can read more on function scope. https://stackoverflow.com/questions/7295634/javascript-nested-function
      */}

      {/* One solution could be to create a state(lines 11) that keeps track and sets the current mobile brand(line 58). 
      Then use this state to update you UI line 93 */}
      {/*Remember to call your function once so that it runs when you click the button (line 72)*/}
      <h1>This is an {brand} number </h1>

      <input type="text" id='num' value={number} onChange={handleChange} placeholder="Enter the phone number" />
      <button onClick={handleClick}>Search</button>

    </div>
  );

}

export default App;
