import img from './../assets/Logo.png'


function Navbar () {

  return(
    <div>
      <div className="nameContainer"> 
      <img className = "logo" src={img}/>
      </div>

      <div className="linkContainer "> 
      <p className="link baseFont f1">WHAT WE DO <i className="arrow up"></i></p>
      <p className="link baseFont f1">WHO WE ARE <i className="arrow up"></i></p>
      <p className="link baseFont f1">CAREERS <i className="arrow up"></i></p>
      <p className="link baseFont f1">CONTACT <i className="arrow up"></i></p>
      </div>

    </div>
  )
}


export default Navbar;