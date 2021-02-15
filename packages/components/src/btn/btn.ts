import { defineComponent, h, SetupContext } from 'vue'
import { btn as btnCls } from './style'

type ButtonColorType = 'default' | 'primary' | 'secondary'
type ButtonSizeType = 'small' | 'medium' | 'large'
type ButtonVariantType = 'default' | 'outlined' | 'text'

interface ButtonProps {
	color: ButtonColorType,
	size: ButtonSizeType,
	variant: ButtonVariantType,
	disabled: boolean,
	width: number,
	loading: boolean
	htmlTag: string,
}

export default defineComponent({
	name: 'btn',
	props: {
		color: { type: String, default: 'default' },
		size: { type: String, default: 'medium' },
		variant: { type: String, default: 'default' },
		disabled: { type: Boolean, default: false },
		width: { type: Number },
		loading: { type: Boolean, default: false },
		htmlTag: { type: String, default: 'button' },
	},

	setup(
		props: ButtonProps,
		{ attrs, slots }: SetupContext
	) {

		return () => h(props.htmlTag, {
			class: [btnCls, {
				_primary: props.color === 'primary',
				_secondary: props.color === 'secondary',
				_small: props.size === 'small',
				_large: props.size === 'large',
				_outlined: props.variant === 'outlined',
				_disabled: props.disabled,
			}],
			...attrs,
		}, slots.default && slots.default())
	}
})

