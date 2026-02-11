import { Download, LoaderCircle } from "lucide-react";
import "./App.css";
import Logo from "./assets/logo-full_splash.png";
import AndroidIcon from "../src/assets/android.svg";
import { useState } from "react";

function App() {
	const date = new Date();
	const [isLoading, setIsLoading] = useState(false);
	async function handleFileDownload() {
		try {
			setIsLoading(true);
			const res = await fetch(
				"https://github.com/Joseph-Kwaku-Sackey/Hymsol-web/blob/ae5d2d4bebc544e3fb4f2da98ee3a04fb5efed1e/public/Hymsol_experimental-build_v1.0.0.apk",
			);
			const blob = await res.blob();

			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "Hymsol_experimental-build_v1.0.0.apk";
			a.click();

			URL.revokeObjectURL(url);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<div
			id="main-container"
			className=" min-h-dvh isolate flex gap-15 flex-col relative"
		>
			<div className="bg-[#000000d5] h-full  absolute -z-300 backdrop-blur-lg  w-full " />
			<main className=" h-full  flex items-center flex-col z-300 relative mt-20">
				<section className="flex-col flex items-center w-full text-center ">
					<header className="h-15 flex items-center top-0 pl-4 z-100 mr-6">
						<img src={Logo} width={100} className="w-33 md:w-38" />
					</header>
					{/* <h1 className="text-white text-[33px] max-sm:text-[28px] max-md:w-4/5">
						Hymsol App Test
					</h1> */}
					<div className="max-md:w-4/5 flex mt-10 mb-3 gap-1.5 justify-center items-center">
						<h2 className="text-amber-200 text-2xl max-sm:text-xl ">
							Android Experimental Build
						</h2>
						{/* <TestTubeDiagonal colo  r="#fee685" size={20} />{" "} */}
						{/* <h2 className="text-amber-200 italic text-2xl max-sm:text-xl font-bold ">
							build
						</h2> */}
					</div>
					<p className="text-white max-sm:w-[90%] w-120 text-[15px] ">
						The Android testing version of Hymsol is{" "}
						<span className="text-green-300 font-bold">now available!</span>{" "}
						Click on the button below to download and test for free (Press and
						wait). Send your feedback through the app{" "}
						<span className="text-green-300 ">
							( Settings {"-> "} Help & Feedback )
						</span>{" "}
						after testing. Thank you for using Hymsol.
					</p>
					{/* <p className="text-white max-sm:w-[90%] w-120 text-center"></p> */}
				</section>
				<button
					className="mt-15 download-btn text-[17px] text-white bg-linear-to-r from-green-700 bg-green-600 w-9/12 max-w-100 py-3 md:py-4 flex gap-3 justify-center items-baseline rounded-full hover:cursor-pointer hover:scale-90 active:scale-90 transition-all"
					onClick={handleFileDownload}
				>
					{isLoading ? (
						<LoaderCircle className="loader-spin" />
					) : (
						<>
							<img src={AndroidIcon} width={100} className="w-6" />
							<p>Download apk</p>
							<Download size={20} className="relative top-0.5" />
						</>
					)}
				</button>
				<p className="text-white/40 mt-10 ">version 1.0.0</p>
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
