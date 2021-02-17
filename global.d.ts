import { ThemeColor, Typography } from "packages/core/style";

declare global {
	let __PALETTE__: Record<string, ThemeColor>
	let __BREAKPOINTS__: Record<string, number>
	let __SPACER__: number
	let __TYPO__: Typography
}
