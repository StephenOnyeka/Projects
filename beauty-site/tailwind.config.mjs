/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
  			Playfair: [
  				'Playfair',
  				'serif'
  			],
  			Poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			Libre: [
  				'Libre Baskerville',
  				'serif'
  			]
  		},
  		height: {
  			'screen/1.1': 'calc(100vh/1.1)',
  			'screen/1.2': 'calc(100vh/1.2)',
  			'screen/1.5': 'calc(100vh/1.5)',
  			'screen/1.8': 'calc(100vh/1.8)',
  			'screen/2': '50vh',
  			'screen/3': 'calc(100vh / 3)',
  			'screen/4': 'calc(100vh / 4)',
  			'screen/5': 'calc(100vh / 5)'
  		},
  		// width: {
  		// 	'600': '600px',
  		// 	'700': '700px',
  		// 	'750': '750px',
  		// 	'800': '800px'
  		// },
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// },
  		// keyframes: {
  		// 	'accordion-down': {
  		// 		from: {
  		// 			height: '0'
  		// 		},
  		// 		to: {
  		// 			height: 'var(--radix-accordion-content-height)'
  		// 		}
  		// 	},
  		// 	'accordion-up': {
  		// 		from: {
  		// 			height: 'var(--radix-accordion-content-height)'
  		// 		},
  		// 		to: {
  		// 			height: '0'
  		// 		}
  		// 	}
  		// },
  		// animation: {
  		// 	'accordion-down': 'accordion-down 0.2s ease-out',
  		// 	'accordion-up': 'accordion-up 0.2s ease-out'
  		// }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
