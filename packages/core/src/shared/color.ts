import { clamp } from "./number";
import { isString } from "./predicate";


const HEX_COLOR_REGEX = /^#([A-Fa-f0-9]{3}){1,2}$/

export function isHexColor(value: any): value is string{
	if (!isString(value)) return false
	return HEX_COLOR_REGEX.test(value)
}

export function toRgba(hex: string): number[] {
	if (isHexColor(hex)){
		hex = hex.slice(1)
		let colors: string[] = []
		if (hex.length === 3){
			colors = hex.split('').map(c => c+c)
		} else {
			colors = hex.match(/\w{2}/g)!
		}
		return colors.map(str => parseInt(str, 16))
	}
	throw new Error(`toRgba: ${hex} is not a valid hex color string.`)
}

export function rgba(hex: string, op: number): string{
	let colors = toRgba(hex)
	return `rgba(${colors.join(',')},${ clamp(op, 0, 1) })`
}
