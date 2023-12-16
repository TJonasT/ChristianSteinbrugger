
function WelcomeScreen (){
  return(
    <div>
      <div className="mainTextContainer">
        <p className="f2 white">Professional, trustworthy & ethical -
          Christian Steinbrugger Inc.</p>
          <button>let us help manage your projects</button>

      </div>
      <img className="img welcomeImg" src="https://clarklandresources.com/wp-content/uploads/home-hero.jpg"/>
      <img className="img mountainImg" src="https://clarklandresources.com/wp-content/themes/clark2021/images/mountains.svg"/>

      <div className="splitTextContainer">
      <img className="img" src="https://clarklandresources.com/wp-content/uploads/map-green.png"/>
      <div className="splitText c1">


        <h1 className="f3 white">What we do for you</h1>
        <p className="white">
        Our approach revolves around effective project management, seamless collaboration, and strategic planning.
        </p> 
        <ul className="white">
          <li><strong>Customized Project Management:</strong>Tailoring our approach to fit the specific requirements of your project, ensuring efficiency and success.</li>
          <li><strong>Seamless Collaboration:</strong>Fostering an environment of teamwork and clear communication, ensuring everyone is aligned towards common goals.</li>
          <li><strong>Resource Optimization: </strong>Maximizing the use of resources to enhance project outcomes and cost-effectiveness.</li>
          <li><strong>Strategic Planning and Execution: </strong> Developing and implementing strategic plans that transform your vision into reality, ensuring a successful and timely project delivery.</li>


        </ul>
          <button>get a quote for your project</button>
        </div>
      </div>

    </div>
  )
}

export default WelcomeScreen