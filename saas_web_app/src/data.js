import {
	GiAbstract013,
	GiAbstract030,
	GiAbstract099,
	GiModernCity,
	GiGreenhouse,
	GiParkBench,
	GiGreenPower,
} from "react-icons/gi";
import { LuHexagon, LuTriangle, LuCircle } from "react-icons/lu";
import { FaAndroid, FaAppStoreIos, FaWindows } from "react-icons/fa6";
import { WiDaySnowThunderstorm } from "react-icons/wi";
import { MdOutlineWeb } from "react-icons/md";

import {
	afterpay,
	alicia,
	amplitude,
	becky,
	drips,
	jim,
	magict,
	maze,
	melanie,
	plan_1,
	plan_2,
	plan_3,
	sonos,
} from "./assets";
export const features = [
	{
		id: 0,
		icon: GiAbstract013,
		caption:
			"Tracks real-time data on soil moisture, temperature, humidity, and air quality to optimize plant health and resource use.",
		title: "Environmental Monitoring",
		button: {
			icon: magict,
			title: "Watch demo",
		},
	},
	{
		id: 1,
		icon: GiAbstract030,
		caption:
			"Provides easy-to-read insights on landscape performance and health through mobile or web apps, making management simple for professionals.",
		title: "Interactive Dashboards",
		button: {
			icon: magict,
			title: "Read the docs",
		},
	},
	{
		id: 2,
		icon: GiAbstract099,
		caption:
			"Tracks and promotes biodiversity by analyzing habitat conditions and suggesting plantings or adjustments to encourage local wildlife.",
		title: "Biodiversity Support",
		button: {
			icon: magict,
			title: "Read the docs",
		},
	},
	{
		id: 3,
		icon: WiDaySnowThunderstorm,
		caption:
			"Sends alerts for conditions like drought stress, pest activity, or hazardous weather, enabling proactive care for landscapes.",
		title: "Ecosystem Alerts",
		button: {
			icon: magict,
			title: "Watch demo",
		},
	},
];

export const details = [
	{
		id: "0",
		icon: GiParkBench,
		title: "Urban Parks",
	},
	{
		id: "1",
		icon: GiGreenhouse,
		title: "Green Roofs",
	},
	{
		id: "2",
		icon: GiGreenPower,
		title: "Residential Landscapes",
	},
	{
		id: "3",
		icon: GiModernCity,
		title: "Smart Cities",
	},
];

export const plans = [
	{
		id: "0",
		title: "Core",
		priceMonthly: 19,
		priceYearly: 12,
		caption: "Best for solo creators",
		features: [
			"100MB Cloud storage",
			"100+ prompt templates",
			"5 projects",
			"24/7 support",
		],
		icon: LuCircle,
		logo: plan_1,
	},
	{
		id: "1",
		title: "Overdrive",
		priceMonthly: 79,
		priceYearly: 59,
		caption: "Most popular plan",
		features: [
			"All Starter features",
			"1TB additional storage",
			"Unlimited projects",
			"Analytics",
		],
		icon: LuTriangle,
		logo: plan_2,
	},
	{
		id: "2",
		title: "Team",
		priceMonthly: 39,
		priceYearly: 29,
		caption: "Exclusively for teams",
		features: [
			"All Overdrive features",
			"10TB additional storage",
			"50% off per member",
			"Real-time collaboration",
		],
		icon: LuHexagon,
		logo: plan_3,
	},
];

export const testimonials = [
	{
		id: "0",
		name: "Melanie Hurst",
		role: "Cyberleap",
		avatarUrl: melanie,
		comment:
			"Adopting this software was a breeze. It's made everyday tasks so much simpler.",
	},
	{
		id: "1",
		name: "Alicia Barker",
		role: "Cyberleap",
		avatarUrl: alicia,
		comment:
			"The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
	},
	{
		id: "2",
		name: "Becky Snider",
		role: "Floclips",
		avatarUrl: becky,
		comment:
			"Switched to SenseSphere last month, and I'm already seeing results. Best decision for our team!",
	},
	{
		id: "3",
		name: "Jim Bradley",
		role: "Vid capital intl",
		avatarUrl: jim,
		comment:
			"The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
	},
];

export const faq = [
	{
		id: "0",
		question: "Can SenseSphere help with sustainability goals",
		answer:
			"Absolutely! Drives eco-friendly practices by minimizing water and energy consumption.",
	},
	{
		id: "1",
		question: "Can I integrate SenseSphere with other platforms?",
		answer:
			"Absolutely! Not only that, you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "2",
		question:
			"How exactly does SenseSphere help with landscapre architecture practices?",
		answer:
			"SenseSphere is data-driven, empowering architects and managers with actionable insights to make informed decisions. Not only that it reduces labour and maintanance costs through automation and predictive insights.Lastly, it ensures landscapes are not only beautiful but also functional and responsive to environmental needs",
	},
	{
		id: "3",
		question: "What your refund policy?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "4",
		question: "Do you have corporate plans?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "5",
		question: "What happens when I’m out of storage?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "6",
		question: "Can I upgrade my plan?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "7",
		question: "How do I invite my team?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "8",
		question: "Do you offer training for individuals and teams?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
	{
		id: "9",
		question: "I’m locked out of my account what do I do?",
		answer:
			"Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
	},
];

export const logos = [
	{
		id: "0",
		title: "Afterpay",
		url: afterpay,
		width: 156,
		height: 48,
	},
	{
		id: "1",
		title: "Amplitude",
		url: amplitude,
		width: 194,
		height: 48,
	},
	{
		id: "2",
		title: "Sonos",
		url: sonos,
		width: 115,
		height: 48,
	},
	{
		id: "3",
		title: "Maze",
		url: maze,
		width: 142,
		height: 48,
	},
	{
		id: "4",
		title: "Drips",
		url: drips,
		width: 77,
		height: 48,
	},
];

export const links = [
	{
		id: "0",
		title: "Ios",
		icon: FaAppStoreIos,
		url: "#",
	},
	{
		id: "1",
		title: "Android",
		icon: FaAndroid,
		url: "#",
	},
	{
		id: "2",
		title: "Windows",
		icon: FaWindows,
		url: "#",
	},
	{
		id: "3",
		title: "Web",
		icon: MdOutlineWeb,
		url: "#",
	},
];
