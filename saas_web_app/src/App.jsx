import {
	Download,
	FAQ,
	Features,
	Header,
	Hero,
	Pricing,
	Testimonials,
} from "./sections";
function App() {
	return (
		<main className="overflow-hidden  w-full  font-sans ">
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<FAQ />
			<Testimonials />
			<Download />
		</main>
	);
}

export default App;
