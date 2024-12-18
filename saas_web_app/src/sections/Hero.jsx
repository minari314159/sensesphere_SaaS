
import { Button } from "../components";
import { hero, zap } from "../assets";

const Hero = () => {
	return (
		<section id="hero" className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
			
				<div className="container">
					<div className="relative z-2 max-w-512 max-lg:max-w-388">
						<p className="caption small-2 uppercase text-p3">
							IoT for Smarter Landscape Design
						</p>
						<h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
							Sustainable, efficient & responsive
						</h1>
						<p className="max-w-440 mb-14 body-1 max-md:mb-10">
							Designed for architects, urban planners, and facility managers,
							this smart device seamlessly connects to environmental sensors,
							automated systems, and cloud analytics to revolutionize landscape
							design and maintenance.
						</p>

						<Button icon={zap} to="features">
							Try it Now
						</Button>

						<div className="absolute top-[20rem] left-[10rem] md:top-[2rem] md:left-[30rem] w-[1230px] h-[1230px] md:w-[1230px] pointer-events-none z-[-5] shadow-glow rounded-full">
							<img src={hero} className=" w-[600px] " alt="hero" />
						</div>
					</div>
				</div>
			
		</section>
	);
};

export default Hero;
