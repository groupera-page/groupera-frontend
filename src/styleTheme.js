import {blue, cyan, gray, green, indigo, orange, pink, purple, red, teal, themeColors, yellow} from "./util/colors";

const styleTheme = {
	fg: "palevioletred",
	bg: "white",
	...themeColors,
	...indigo,
	...blue,
	...gray,
	...purple,
	...red,
	...green,
	...orange,
	...pink,
	...yellow,
	...cyan,
	...teal,
	cardShadow: "0 2px 12px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.08)",
};

export default styleTheme;
