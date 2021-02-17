export function isNil(value: any) {
	return value == null
}

export function isFunction(value: any): value is Function {
	return typeof value === 'function'
}

export function isString(value: any): value is string {
	return typeof value === 'string'
}

export function isNumber(value: any): value is number {
	return typeof value === 'number'
}

export function isSymbol(value: any): value is Symbol {
	return typeof value === 'symbol'
}