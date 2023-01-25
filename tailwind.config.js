module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'white': '#ffffff',
            'primary': '#179778',
            'dark': '#373f3d',
            'light': '#8ea0a0',
            'error': '#e11c68',
        },
        fontSize: {
            sm: '13px',
            base: '14px',
            md: '16px',
            xl: '18px',
            xxl: '28px',
        },
        fontWeight: {
            bold: 600,
            semiBold: 500
        },
        fontFamily: {
            IBM: ['IBM Plex Sans', 'sans-serif'],
        },
        letterSpacing: {
            wide: '.87px'
        },
        extend: {
            dropShadow: {
                'white': '4px 8px 16px rgba(17, 67, 46 , 0.12)',
                'dark': '0 35px 35px rgba(0, 0, 0, 0.25)'
            },
            zIndex: {
                999: '999',
            },
        }
    },
    plugins: [],
}
