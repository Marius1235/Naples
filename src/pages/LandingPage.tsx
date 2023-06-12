import LandingPageComponent from "../components/LandingPageComponent"
const LandingPage = () => {

    return(
        <div>
			<LandingPageComponent/>
            <div className = "hexaTiles">
           <img id="tile-1" className="hexaTiles" src={require(`../assets/images/1.jpg`)} alt="1"  />
           <img id="tile-2" className="hexaTiles" src={require(`../assets/images/2.jpg`)} alt="2" />
           <img id="tile-3" className="hexaTiles" src={require(`../assets/images/3.jpg`)} alt="3" />
           <img id="tile-4" className="hexaTiles" src={require(`../assets/images/4.jpg`)} alt="4"  />
           <img id="tile-5" className="hexaTiles" src={require(`../assets/images/5.jpg`)} alt="5" />
           <img id="tile-6" className="hexaTiles" src={require(`../assets/images/6.jpg`)} alt="6" />
           <img id="tile-7" className="hexaTiles" src={require(`../assets/images/7.jpg`)} alt="7"  />
           <img id="tile-8" className="hexaTiles" src={require(`../assets/images/8.jpg`)} alt="8" />
           <img id="tile-9" className="hexaTiles" src={require(`../assets/images/9.jpg`)} alt="9" />
           </div>
		</div>
          
    )
}

export default LandingPage;