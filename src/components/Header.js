import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({Name, darkMode, toggleMode}) => {

  // const [myStyle, setMyStyle] = useState({color: 'white', backgroundColor: 'black'})
  // const [btnText, setBtnText] = useState("Dark Mode")

  // const toggleStyle = () => {
  //   if(myStyle.color === 'white'){
  //     setMyStyle({color: 'black', backgroundColor: 'white'})
  //     setBtnText("Dark Mode")
  //   }
  //   else {
  //     setMyStyle({color: 'white', backgroundColor: 'black'})
  //     setBtnText("Light Mode")
  //   }
  // }

  return (
    <>
    <div className="container">
      Welcome {Name} | <Link to="/TextUtils-React">Home</Link> | <Link to="/about">About</Link> 
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode} Dark Mode</label>
      </div>
    </div>
    </>
  )
}

export default Header