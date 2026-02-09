import { Download, } from "lucide-react";
import "./App.css";
import Logo from "./assets/logo-full_splash.png";

function App() {
	const date = new Date();
	return (
		<div
			id="main-container"
			className=" min-h-dvh isolate flex gap-15 flex-col relative"
		>
			<div className="bg-[#000000cc] h-full  absolute -z-300 backdrop-blur-lg  w-full " />
			<header className="h-15 flex items-center top-0 pl-4 z-100">
				<img src={Logo} width={110} />
			</header>
			<main className=" h-full  flex items-center flex-col z-300 relative">
				<section className="flex-col flex items-center w-full text-center ">
					<h1 className="text-white text-4xl max-sm:text-3xl font-bold max-md:w-4/5">
						Hymsol App
					</h1>
					<div className="max-md:w-4/5 flex mt-10 mb-3 gap-1.5 justify-center items-center">
						<h2 className="text-amber-200 italic text-2xl max-sm:text-xl font-bold ">
							Android Experimental Build
						</h2>
						{/* <TestTubeDiagonal colo  r="#fee685" size={20} />{" "} */}
						{/* <h2 className="text-amber-200 italic text-2xl max-sm:text-xl font-bold ">
							build
						</h2> */}
					</div>
					<p className="text-white max-sm:w-[90%] w-120 text-[15px] ">
						The Android Experimental Version of Hymsol is{" "}
						<span className="text-lime-100 font-bold">now available</span>.
						Click on the button below to download and test for free. Send your
						feedback through the app{" "}
						<span className="text-lime-100 ">
							( Settings {"-> "} Help & Feedback )
						</span>{" "}
						after testing. Thank you for using Hymsol.
					</p>
					{/* <p className="text-white max-sm:w-[90%] w-120 text-center"></p> */}
				</section>
				<button className="flex gap-5 w-full justify-center items-center my-15  ">
					{/* <h2 className="text-green-300  text-2xl font-bold">
						Now Available!
					</h2> */}
					<a
						download
						href="/Hymsol_experimental-build_v1.0.0.apk"
						className="download-btn text-black font-medium border-2 border-amber-400  bg-linear-to-r from-amber-200/30 bg-white w-4/5 max-w-100 py-4 flex gap-3 justify-center rounded-full hover:scale-90 active:scale-90 transition-all "
					>
						Download App
						<Download size={20} />
					</a>
				</button>
				<p className="text-white italic text-sm"></p>
			</main>
			<footer className="bg-[#111a] text-[#ddd]  flex w-full h-11 justify-center items-center absolute bottom-0">
				<p className="w-fit text-[13px] italic">
					&copy;Copyright: Hymsol @{date.getFullYear()}
				</p>
			</footer>
		</div>
	);
}

export default App;
