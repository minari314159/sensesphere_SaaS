import { LinkScroll } from "../components/index";

// eslint-disable-next-line react/prop-types
const NavLink = ({ title, isOpen }) => {
	// eslint-disable-next-line react/prop-types
	const navTitle = title.toLowerCase();
	return (
		<LinkScroll to={`${navTitle}`} offset={-100}>
			<div
				onClick={() => isOpen(false)}
				className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 active:nav-active">
				{title}
			</div>
		</LinkScroll>
	);
};

export default NavLink;
