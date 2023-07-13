/**
 * eslint-disable react/jsx-pascal-case
 *
 * @format
 */

import React from "react";
import "./App.css";
import "./components/style.css";
import Navs from "./components/navigation";
import Home from "./components/HOME";
import Sec2 from "./components/section-2";
import Sec3 from "./components/section-3";
import Sec5 from "./components/section-5";
import Sec4 from "./components/section-4";
import Sec6 from "./components/section-6";
import Sec7 from "./components/section-7";



function App() {
	return (
		<div className="MAIN">
			<div className="home">
				<header>
					<Navs />
				</header>
				<div className="mai-body-img">
					<div className="body-img">
						<img
							src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
							alt=""
						/>
					</div>
				</div>
				<Home />
			</div>
			<div className="sec-cnge-line"></div>
			<div>
				<Sec2 />
			</div>
			<div className="sec-cnge-line"></div>
			<div>
				<Sec3 />
			</div>
			<div className="sec-cnge-line"></div>
			<div>
			<Sec4 />
      </div>
      <div className="sec-cnge-line"></div>
	  <div>
			<Sec5 />
      </div>
	  <div className="sec-cnge-line"></div>

	  <div>
		<Sec6 />
	  </div>
	  <div className="sec-cnge-line"></div>
	  <div>
		<Sec7 />
	  </div>
	 
      

		</div>
	);
}

export default App;
