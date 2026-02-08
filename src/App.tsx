import { Download } from "lucide-react";
import "./App.css";
import Logo from "./assets/logo-full_splash.png";

function App() {
	return (
		<div id="main-container" className=" h-dvh overflow-hidden isolate">
			<div className="bg-[#000000cc] h-dvh absolute -z-300 backdrop-blur-lg  w-full " />
			<header className="h-15 flex items-center pl-4 z-100">
				<img src={Logo} width={110} />
			</header>
			<article className=" h-full flex items-center flex-col gap-20 pt-20 z-300">
				<section className="flex-col flex items-center w-full text-center gap-5">
					<h1 className="text-white text-4xl max-sm:text-3xl font-bold max-md:w-4/5">
						Hymsol Android Experimental App
					</h1>
					<p className="text-white max-sm:w-[90%] w-120 ">
						The Android Experimental Version of Hymsol is{" "}
						<span className="text-green-200 font-bold">now available</span>.
						Click on the button below to download and test for free.
					</p>
				</section>
				<button className="flex gap-5 w-full justify-center items-center">
					{/* <h2 className="text-green-300  text-2xl font-bold">
						Now Available!
					</h2> */}
					<a
						download
						href="/Hymsol_experimental_v1.0.0.apk"
						className="download-btn bg-white w-4/5 max-w-100 py-3 flex gap-3 justify-center rounded-full hover:bg-black hover:text-white active:scale-80 transition-all"
					>
						Download App
						<Download size={20} />
					</a>
				</button>
			</article>
		</div>
	);
}

export default App;
