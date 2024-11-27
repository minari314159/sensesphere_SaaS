import { Element, Link } from "react-scroll";
import { Button } from "../components";
import { logo, hero } from "../assets";

const Hero = () => {
	return (
		<section className="relative pt-60 pb-50 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
			<Element name="hero">
				<div className="container">
					<div className="relative z-2 max-w-512 max-lg:max-w-388">
						<div className="caption small-2 uppercase text-p3">
							IoT for Smarter Landscape Design
						</div>
						<h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
							Sustainable, efficient & responsive
						</h1>
						<p className="max-w-440 mb-14 body-1 max-md:mb-10">
							Designed for architects, urban planners, and facility managers,
							this smart device seamlessly connects to environmental sensors,
							automated systems, and cloud analytics to revolutionize landscape
							design and maintenance.
						</p>
						<Link
							to="features"
							offset={-100}
							spy
							smooth
							className="cursor-pointer">
							<Button icon={logo}>Try it Now</Button>
						</Link>
						<div className="absolute top-[2rem] -left-[calc(50%-600px)] w-[1230px] pointer-events-none z-[-1]">
							<img src={hero} className=" max-lg:h-auto" alt="hero" />
						</div>
					</div>
				</div>
			</Element>
		</section>
	);
};

export default Hero;
