export const breakpointsKey = ['xs', 'sm', 'md', 'lg']
export const bp = __BREAKPOINTS__
/**
 * value  |0     600    960    1280
 * bp     |xs    |sm    |md    |lg
 * range  |  xs  |  sm  |  md  |  lg
 * window |------|------|------|--------->
 */


type MediaQueryRangeType = 'up' | 'down' | 'only'

function createMediaQuery(
	range: MediaQueryRangeType,
	breakpoint: string
){
	let rules = []
	if (range === 'up' || range === 'only'){
		rules.push(`min-width: ${bp[breakpoint]}px`)
	}
	if (range === 'down' || range === 'only'){
		const index = breakpointsKey.indexOf(breakpoint)
		const value = breakpointsKey[index + 1]
		// last
		if (!value){
			rules.push(`max-width: ${bp[breakpoint]}px`)
		}
		// first
		else if (index === 0){
			rules.push('')
		}
	}
	return `@media (${ rules.join(' and ') })`
}

export const breakpoints = {
	values: bp,
	up: createMediaQuery.bind(null, 'up'),
	down: createMediaQuery.bind(null, 'down'),
	only: createMediaQuery.bind(null, 'only')
}

