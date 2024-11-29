import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { magic, close, logo } from "../assets";
import { useEffect, useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 32);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`fixed top-0 left-0 z-50 py-10 w-full ${
				hasScrolled &&
				" bg-s1/50 py-5 backdrop-blur-[8px] transition-all duration-500"
			}`}>
			<div className="container flex h-14 items-center max-lg:px-5">
				<Link
					to="hero"
					offset={-250}
					spy
					smooth
					className="lg:hidden cursor-pointer z-2 flex-1 flex items-center gap-3 ">
					<img src={logo} width={40} height={40} alt="logo" />
					<h1 className="text-neutral-light font-bold text-[1.5rem]">
						SenseSphere
					</h1>
				</Link>
				<div
					className={`w-full max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:bg-s2  ${
						isOpen ? "max-lg:opacity-100" : "max-lg:opacity-0"
					}`}>
					<div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
						<nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
							<ul className="flex max-lg:block max-lg:px-12">
								<li className="nav-li">
									<NavLink title="Features" isOpen={setIsOpen} />
									<div className="dot" />
									<NavLink title="Pricing" isOpen={setIsOpen} />
									<div className="dot" />
								</li>
								<li className="nav-logo">
									<Link
										to="hero"
										offset={-250}
										spy
										smooth
										className={`flex items-center gap-3 max-lg:hidden transition-transform duration-500 cursor-pointer`}>
										<img src={logo} width={40} height={40} alt="logo" />
										<h1 className="text-neutral-light font-bold text-[1.5rem]">
											SenseSphere
										</h1>
									</Link>
								</li>
								<li className="nav-li">
									<NavLink title="FAQ" isOpen={setIsOpen} />
									<div className="dot" />
									<NavLink title="Download" isOpen={setIsOpen} />
									<div className="dot" />
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center">
					<img
						src={isOpen ? close : magic}
						alt="magic"
						className="size-1/2 object-contain"
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
