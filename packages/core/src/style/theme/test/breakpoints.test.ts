import { breakpoints } from "../breakpoints";

describe('breakpoints', () => {
	test('createMediaQuery', () => {
		expect(breakpoints.up('md')).toBe('@media (min-width: 960px)')
		expect(breakpoints.down('md')).toBe('@media (max-width: 960px)')
		expect(breakpoints.only('md')).toBe('@media (min-width: 960px and max-width: 960px)')
	})
})