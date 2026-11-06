import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/terms" element={<TermsOfUse />} />
				<Route path="*" element={<PrivacyPolicy />} />
			</Routes>
		</Router>
	);
}
