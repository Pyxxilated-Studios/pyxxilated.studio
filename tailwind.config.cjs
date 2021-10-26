module.exports = {
	mode: 'jit',
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	},
	// you dont need `purge: enabled: production` because you are using jit
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				foreground: '#ffcdb2',
				background: '#112',
				secondary: '#b5838d',
				white: '#ecf0f1'
			}
		},
		stroke: (theme) => ({
			foreground: theme('colors.foreground'),
			background: theme('colors.foreground'),
			secondary: theme('colors.foreground')
		})
	},
	variants: {},
	plugins: []
};
