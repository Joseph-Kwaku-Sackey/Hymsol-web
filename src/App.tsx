import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PrivacyPolicy />} />
				{/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
			</Routes>
		</Router>
	);
}
