import "../App.css";
import Logo from "../assets/logo-full_splash.png";
// import { useState } from "react";

function Home() {
	const date = new Date();

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
					<div className="max-md:w-4/5 flex mt-10 mb-3 gap-1.5 justify-center items-center">
						<h2 className="text-white text-2xl max-sm:text-xl ">
							Hymsol is currently under construction.
							<br />
							Stay tuned!
						</h2>
					</div>
				</section>
			</main>
			<footer className="bg-[#111a] text-[#ddd]  flex w-full h-11 justify-center items-center absolute bottom-0">
				<p className="w-fit text-[13px] italic">
					&copy;Copyright - Hymsol @{date.getFullYear()}
				</p>
			</footer>
		</div>
	);
}

export default Home;
