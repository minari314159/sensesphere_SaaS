/* eslint-disable react/prop-types */
const Button = ({ icon, href, onClick, additionalStyle, children }) => {
	const Inner = () => (
		<span className=" relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden ">
			{icon && (
				<img
					src={icon}
					alt="circle"
					className="size-10 mr-5 object-contain z-10"
				/>
			)}
			<span className="relative z-2 base-bold text-p1 uppercase">
				{children}
			</span>
			<span className="glow-before glow-after" />
		</span>
	);
	return href ? (
		<a
			href={href}
			className={`relative p-0.5 g5 rounded-xl shadow-glow group ${additionalStyle}`}>
			<Inner />
		</a>
	) : (
		<button
			className={` relative p-0.5 g5  rounded-xl  shadow-glow shadow-p2 group ${additionalStyle} `}
			onClick={onClick}>
			<Inner />
		</button>
	);
};

export default Button;
