import { black, white } from "./theme/palette";

const themeOptions = {
	palette: {
		light: {
			pri: '#5063C2',
			sec: '#5063C2',
			acc: '#5063C2',
			text: {
				title: '#5C6280',
				body1: '#1F2127',
				body2: '#9298B3',
				button: white,
				surface: white,
				disabled: '#A5A5A5'
			},
			bg: {
				pg: '#F5F5F5',
				button: '#F5F5F5',
			}
		},
		dark: {
			pri: '#337DFF',
			sec: '#82B1FF',
			acc: '#40C4FF',
			text: {
				title: white,
				body1: white,
				body2: '#E6E6E6',
				button: white,
				surface: black,
				disabled: '#5C5F66'
			},
			bg: {
				pg: '#0D0F1A', // main/pg background
				card: '#141924', // card
				pop: '#1C222E', // dialog
				bar: '#1F2430',
				table: '#1E2430',
				drawer: '#242633',
				button: '#363D4D',
				menu: '#363D4D', // menu, button
				disabled: '#39404D',
			}
		}
	},
	breakpoints: {
		xs: 0,
		sm: 600,
		md: 960,
		lg: 1280
	},
	spacer: 5,
	typography: {
		title: {
			fontsize: '16px',
			fontWeight: 500,
			lineHeight: '24px'
		},
		body1: {
			fontsize: '14px',
			fontWeight: 500,
			lineHeight: '22px'
		},
		body2: {
			fontsize: '12px',
			fontWeight: 500,
			lineHeight: '20px'
		}
	}
}
