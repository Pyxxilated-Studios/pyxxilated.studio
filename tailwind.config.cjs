const defaultTheme = require('tailwindcss/defaultTheme');

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
			},
			fontFamily: {
				sans: ['Helvetica', ...defaultTheme.fontFamily.sans]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.white'),
						maxWidth: null,

						h1: {
							color: theme('colors.foreground'),
							fontSize: theme('text-4xl')
						},

						h2: {
							color: theme('colors.foreground'),
							fontSize: theme('text-2xl'),
							margin: theme('my-4')
						},

						h3: {
							color: theme('colors.foreground'),
							fontSize: theme('text-xl'),
							margin: theme('mb-4')
						},

						p: {
							margin: theme('mb-4')
						},

						a: {
							color: theme('colors.foreground'),
							textDecoration: 'none',
							'&:hover': {
								color: theme('colors.secondary')
							}
						}
					}
				}
			})
		},
		listStyleType: { circle: 'circle' },
		stroke: (theme) => ({
			foreground: theme('colors.foreground'),
			background: theme('colors.foreground'),
			secondary: theme('colors.foreground')
		})
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')]
};
