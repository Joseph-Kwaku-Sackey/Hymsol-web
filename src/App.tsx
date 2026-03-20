import {
	createBrowserRouter,
	createRoutesFromChildren,
	Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacy";

const router = createBrowserRouter(
	createRoutesFromChildren([
		<Route>
			<Route path="/" element={<Home />} />
			<Route path="/privacy" element={<PrivacyPolicy/>} />
		</Route>,
	]),
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
