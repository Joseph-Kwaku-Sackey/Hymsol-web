import { Download } from "lucide-react";
import "./App.css";
import Logo from "./assets/logo-full_splash.png";

function App() {
  const date = new Date()
	return (
		<div
			id="main-container"
			className=" min-h-dvh isolate flex gap-15 flex-col"
		>
			<div className="bg-[#000000cc] min-h-dvh   absolute inset -z-300 backdrop-blur-lg  w-full " />
			<header className="h-15 flex items-center top-0 pl-4 z-100">
				<img src={Logo} width={110} />
			</header>
			<article className=" h-full flex items-center flex-col z-300 ">
				<section className="flex-col flex items-center w-full text-center gap-5">
					<h1 className="text-white text-4xl max-sm:text-3xl font-bold max-md:w-4/5">
						Hymsol Android Experimental App
					</h1>
					<p className="text-white max-sm:w-[90%] w-120 text-[15px] ">
						The Android Experimental Version of Hymsol is{" "}
						<span className="text-green-200 font-bold">now available</span>.
						Click on the button below to download and test for free. Send your
						feedback through the app{" "}
						<span className="text-green-200 ">
							(Settings → Help & Feedback )
						</span>{" "}
						after testing. Thank you for using Hymsol.
					</p>
					{/* <p className="text-white max-sm:w-[90%] w-120 text-center"></p> */}
				</section>
				<button className="flex gap-5 w-full justify-center items-center mt-15 ">
					{/* <h2 className="text-green-300  text-2xl font-bold">
						Now Available!
					</h2> */}
					<a
						download
						href="/Hymsol_experimental_v1.0.0.apk"
						className="download-btn bg-white w-4/5 max-w-100 py-3 flex gap-3 justify-center rounded-full hover:bg-black hover:text-white active:scale-90 transition-all"
					>
						Download App
						<Download size={20} />
					</a>
				</button>
				<p className="text-white mt-5 italic text-sm"></p>
			</article>
			<footer className="bg-[#111a] text-[#ddd]  flex w-full h-11 justify-center items-center absolute bottom-0">
				<p className="w-fit text-[13px] italic">
					&copy;Copyright: Hymsol @{date.getFullYear()}
				</p>
			</footer>
		</div>
	);
}

export default App;
