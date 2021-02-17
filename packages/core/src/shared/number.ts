import { isNil, isNumber, isSymbol } from "./predicate";


export function toNumber(value: any): number{
	if (isNumber(value)) return value
	if (isSymbol(value)) return NaN
	return Number(value)
}

export function clamp(
	number: number,
	lower: number,
	upper: number
): number{
	number = toNumber(number)
	if (!isNil(upper)){
		upper = toNumber(upper)
		number = number <= upper ? number : upper
	}
	if (!isNil(lower)){
		lower = toNumber(lower)
		number = number >= lower ? number: lower
	}
	return number
}
