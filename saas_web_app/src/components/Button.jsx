import { LinkScroll } from "../components/index";
/* eslint-disable react/prop-types */
const Button = ({ icon, children, to }) => {
	return (
		<LinkScroll to={`${to}`} offset={-100}>
			<div className="relative p-0.5 g5 rounded-2xl  group  inner-before  w-fit group-hover:before:opacity-100 overflow-hidden">
				<span className="relative flex items-center min-h-[60px]  px-4 g4 rounded-2xl  w-fit">
					{icon && (
						<img
							src={icon}
							alt="circle"
							className="size-10 mr-5 object-contain z-10"
						/>
					)}

					<span className="relative z-2 font-poppins base-bold text-p1 uppercase">
						{children}
					</span>
				</span>

				<span className="glow-before glow-after" />
			</div>
		</LinkScroll>
	);
};
export default Button;
