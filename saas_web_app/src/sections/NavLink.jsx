import { Link as LinkScroll } from "react-scroll";

// eslint-disable-next-line react/prop-types
const NavLink = ({ title, isOpen }) => {
	// eslint-disable-next-line react/prop-types
	const navTitle = title.toLowerCase();
	return (
		<LinkScroll
			onClick={() => isOpen(false)}
			to={`${navTitle}`}
			smooth
			spy
			offset={-150}
			activeClass="nav-active"
			className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
			{title}
		</LinkScroll>
	);
};

export default NavLink;
