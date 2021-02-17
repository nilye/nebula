import { CSSProperties } from "@linaria/core";

export interface ThemeColor {
	pri: string,
	sec: string,
	acc: string,
	text: { [key: string]: string },
	bg: { [key: string]: string }
}

export const white = '#FFFFFF'
export const black = '#000000'
export const themeColors = __PALETTE__

export const functionalColor = {
	ok: '#25C71E',
	warn: '#E6BA0B',
	error: '#FF6953'
}

export type ThemedStyleCreator = (c: ThemeColor) => object | string
export function createTheme(cb: ThemedStyleCreator): CSSProperties{
	return Object.keys(themeColors).reduce((acc: object, name: string) => ({
		...acc,
		[`.theme-${name} &`]: cb(themeColors[name])
	}), {})
}
