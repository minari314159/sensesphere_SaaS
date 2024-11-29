/* eslint-disable react/prop-types */
const LinkScroll = ({ children, to, offset = 0 }) => {
	const handleClick = () => {
		const targetElement = document.getElementById(to);
		if (targetElement) {
			const targetPosition =
				targetElement.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = targetPosition + offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		} else {
			console.warn(`Element with id "${to}" not found`);
		}
	};
	return (
		<button onClick={handleClick} className="cursor-pointer z-10 relative">
			{children}
		</button>
	);
};

export default LinkScroll;
