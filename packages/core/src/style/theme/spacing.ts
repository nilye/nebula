export const spacer = __SPACER__

type DirectionType = 'left' | 'top' | 'right' | 'bottom' | 'x' | 'y' | 'all'
function spacing(
	type: 'margin' | 'padding',
	direction: DirectionType,
	density: number
){
	const v = density * spacer + 'px',
		result: any = {}

	if (direction === 'x' || direction === 'all'){
		result[type+'-left'] = v
		result[type+'-right'] = v
	}
	if (direction === 'y' || direction === 'all'){
		result[type+'-top'] = v
		result[type+'-bottom'] = v
	} else {
		result[type+direction] = v
	}

	return result
}

export const margin = spacing.bind(null, 'margin')
export const m = margin
export const padding = spacing.bind(null, 'padding')
export const p = padding
