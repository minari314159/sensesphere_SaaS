
import { links, logos } from "../data.js";
import { logo, screen } from "../assets/index.js";

const Download = () => {
	return (
		<section
			id="download"
			className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
		
				<div className="container">
					<div className="flex items-center">
						<div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
							<div className="mb-10 flex items-center">
								<img src={logo} width={160} height={55} alt="xora" />
								<h1 className="text-neutral-light font-bold text-[2rem]">
									SenseSphere
								</h1>
							</div>

							<p className="body-1 mb-10 max-w-md">
								Try it now for free on iOS, Android, PC, Web - whatever your
								flavour, we&apos;ve got you covered.
							</p>

							<ul className="flex flex-wrap items-center gap-6">
								{links.map(({ id, url, icon }) => {
									const Icon = icon;
									return (
										<li
											key={id}
											className="download_tech-link download_tech-link_last-before download_tech-link_last-after">
											<a
												href={url}
												className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500">
												<span className="download_tech-icon">
													<Icon size={35} className="text-p3" />
												</span>
											</a>
										</li>
									);
								})}
							</ul>
						</div>

						<div className="mb-10 max-md:hidden">
							<div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
								<div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
									<span className="download_preview-dot left-6 bg-p2" />
									<span className="download_preview-dot left-11 bg-s3" />
									<span className="download_preview-dot left-16 bg-p1/15" />

									<img
										src={screen}
										width={855}
										height={655}
										alt="screen"
										className="rounded-xl"
									/>
								</div>
							</div>
						</div>
					</div>

					<ul className="mt-24 flex justify-center max-lg:hidden">
						{logos.map(({ id, url, width, height, title }) => (
							<li key={id} className="mx-10">
								<img src={url} width={width} height={height} alt={title} />
							</li>
						))}
					</ul>
				</div>
		
		</section>
	);
};
export default Download;
