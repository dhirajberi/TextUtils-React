import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = ({Name}) => {

  const [myStyle, setMyStyle] = useState({color: 'white', backgroundColor: 'black'})
  const [btnText, setBtnText] = useState("Dark Mode")

  const toggleStyle = () => {
    if(myStyle.color === 'white'){
      setMyStyle({color: 'black', backgroundColor: 'white'})
      setBtnText("Dark Mode")
    }
    else {
      setMyStyle({color: 'white', backgroundColor: 'black'})
      setBtnText("Light Mode")
    }
  }

  return (
    <>
    <div className="container" style={myStyle}>
      Welcome {Name} | <Link to="/">Home</Link> |<Link to="/about">About</Link> | <button onClick={toggleStyle}>{btnText}</button>
    </div>
    </>
  )
}

export default Header