import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                dark: 'rgba(var(--dark), <alpha-value>)',
                light: 'rgba(var(--light), <alpha-value>)',
                primary: {
                    DEFAULT: 'rgba(var(--primary-medium), <alpha-value>)',
                    light: 'rgba(var(--primary-light), <alpha-value>)',
                    dark: 'rgba(var(--primary-dark), <alpha-value>)',
                },
                "std-gray": 'rgba(var(--std-grey), <alpha-value>)'
            },
            fontFamily: {
                heading: ['"Satisfy"', 'serif'],
                body: ['"Asap"', 'sans-serif'],
            },
            borderWidth: {
                'canvas': '16px',
                'canvas-lg': '24px',
            }
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: "100%",
                md: "768px",
                lg: "950px",
            }
        }
    },
    plugins: [
        require('@mertasan/tailwindcss-variables')
    ]
}
