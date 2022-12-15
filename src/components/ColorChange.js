import React, {useState} from 'react'

const ColorChange = () => {
  // Initially set it to black
  const [myStyle, setMyStyle] = useState({backgroundColor: 'black', height: "100px"});

  // function to change color
  const changeColor = (event) => {
    setMyStyle({backgroundColor: event.target.value, height: "100px"});
  }

  // custom color
  const [color, setColor] = useState('');

  const handleOnchange = (event) => {
    setColor(event.target.value);
    setMyStyle({backgroundColor: event.target.value, height: "100px"});
  }

  return (
    <>
    <div className="container my-3">
    <div style={myStyle}></div>
    <button className="mx-2 my-2" onClick={changeColor} value="red">Red</button>
    <button className="mx-2 my-2" onClick={changeColor} value="blue">Blue</button>
    <button className="mx-2 my-2" onClick={changeColor} value="green">Green</button>
    <button className="mx-2 my-2" onClick={changeColor} value="yellow">Yellow</button>
    Not in list? Just type it (even hashtag will work) <input type="text" value={color} onChange={handleOnchange}/>
    </div>
    </>
  )
}

export default ColorChange