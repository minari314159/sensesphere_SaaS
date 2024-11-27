import { Features, Header, Hero } from "./sections";
function App() {
	return (
		<main className="overflow-hidden bg-neutral w-full h-[100vh]  font-sans ">
			<Header />
			<Hero />
			<Features />
		</main>
	);
}

export default App;
