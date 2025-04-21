
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
          			50: 'hsl(var(--primary-50))',
          			100: 'hsl(var(--primary-100))',
          			200: 'hsl(var(--primary-200))',
          			300: 'hsl(var(--primary-300))',
          			400: 'hsl(var(--primary-400))',
          			500: 'hsl(var(--primary-500))',
          			600: 'hsl(var(--primary-600))',
          			700: 'hsl(var(--primary-700))',
          			800: 'hsl(var(--primary-800))',
          			900: 'hsl(var(--primary-900))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
          			50: 'hsl(var(--secondary-50))',
          			100: 'hsl(var(--secondary-100))',
          			200: 'hsl(var(--secondary-200))',
          			300: 'hsl(var(--secondary-300))',
          			400: 'hsl(var(--secondary-400))',
          			500: 'hsl(var(--secondary-500))',
          			600: 'hsl(var(--secondary-600))',
          			700: 'hsl(var(--secondary-700))',
          			800: 'hsl(var(--secondary-800))',
          			900: 'hsl(var(--secondary-900))',
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
          			50: 'hsl(var(--tertiary-50))',
          			100: 'hsl(var(--tertiary-100))',
          			200: 'hsl(var(--tertiary-200))',
          			300: 'hsl(var(--tertiary-300))',
          			400: 'hsl(var(--tertiary-400))',
          			500: 'hsl(var(--tertiary-500))',
          			600: 'hsl(var(--tertiary-600))',
          			700: 'hsl(var(--tertiary-700))',
          			800: 'hsl(var(--tertiary-800))',
          			900: 'hsl(var(--tertiary-900))',
				},
				neutral: {
					DEFAULT: 'hsl(var(--neutral))',
					foreground: 'hsl(var(--neutral-foreground))',
          			50: 'hsl(var(--neutral-50))',
          			100: 'hsl(var(--neutral-100))',
          			200: 'hsl(var(--neutral-200))',
          			300: 'hsl(var(--neutral-300))',
          			400: 'hsl(var(--neutral-400))',
          			500: 'hsl(var(--neutral-500))',
          			600: 'hsl(var(--neutral-600))',
          			700: 'hsl(var(--neutral-700))',
          			800: 'hsl(var(--neutral-800))',
          			900: 'hsl(var(--neutral-900))',
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--surface-foreground))',
          			elevated: 'hsl(var(--surface-elevated))',
          			'elevated-foreground': 'hsl(var(--surface-elevated-foreground))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
          			50: 'hsl(var(--success-50))',
          			100: 'hsl(var(--success-100))',
          			500: 'hsl(var(--success-500))',
          			900: 'hsl(var(--success-900))',
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))',
          			50: 'hsl(var(--info-50))',
          			100: 'hsl(var(--info-100))',
          			500: 'hsl(var(--info-500))',
          			900: 'hsl(var(--info-900))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
          			50: 'hsl(var(--warning-50))',
          			100: 'hsl(var(--warning-100))',
          			500: 'hsl(var(--warning-500))',
          			900: 'hsl(var(--warning-900))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
          			50: 'hsl(var(--destructive-50))',
          			100: 'hsl(var(--destructive-100))',
          			500: 'hsl(var(--destructive-500))',
          			900: 'hsl(var(--destructive-900))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'fade-out': {
					from: {
						opacity: '1'
					},
					to: {
						opacity: '0'
					}
				},
				'slide-in': {
					from: {
						transform: 'translateX(-100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'slide-out': {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.2s ease-out',
				'fade-out': 'fade-out 0.2s ease-out',
				'slide-in': 'slide-in 0.2s ease-out',
				'slide-out': 'slide-out 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
