import img from './../assets/Logo.png'
import { Link } from 'react-router-dom';

function Navbar () {

  return(
    <div>
      <div className="nameContainer"> 
      <img className = "logo" src={img}/>
      </div>
      <div className="linkContainer "> 
      <Link  className="link baseFont f1" to="WHATWEDO">WHAT WE DO <i className="arrow up"></i> </Link>
      <Link  className="link baseFont f1" to="WHOWEARE">WHO WE ARE <i className="arrow up"></i> </Link>
      <Link  className="link baseFont f1" to="CAREERS">CAREERS <i className="arrow up"></i> </Link>
      <Link  className="link baseFont f1" to="CONTACT">CONTACT <i className="arrow up"></i> </Link>
      </div>

    </div>
  )
}


export default Navbar;