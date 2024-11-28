import {
	GiAbstract013,
	GiAbstract030,
	GiAbstract099,
	GiModernCity,
	GiGreenhouse,
	GiParkBench,
	GiGreenPower,
} from "react-icons/gi";
import { WiDaySnowThunderstorm } from "react-icons/wi";

import { magict } from "./assets";
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
