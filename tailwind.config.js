module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'index-shape-top': "url('/images/pages/index/top_section/shape-top.svg')",
                'index-comment-2nd': "url('/images/pages/index/2nd_section/comment-shape.svg')",
                'index-comment-2nd-mobile': "url('/images/pages/index/2nd_section/comment-shape-mobile.svg')",
                'index-highlight-yellow-2nd': "url('/images/pages/index/2nd_section/highlight-yellow-2nd.svg')",
                'index-highlight-orange-2nd': "url('/images/pages/index/2nd_section/highlight-orange-2nd.svg')",
                'index-highlight-green-2nd': "url('/images/pages/index/2nd_section/highlight-green-2nd.svg')",
                'index-shape-3rd': "url('/images/pages/index/3rd_section/shape-3rd.svg')",
                'index-comment-3rd': "url('/images/pages/index/3rd_section/comment-shape.svg')",
                'index-comment-3rd-mobile': "url('/images/pages/index/3rd_section/comment-shape-mobile.svg')",
                'index-character-4th': "url('/images/pages/index/4th_section/character.png')",
                'index-character-4th-mobile': "url('/images/pages/index/4th_section/character-mobile.png')",
                'index-comment-4th': "url('/images/pages/index/4th_section/comment-shape.svg')",
                'index-comment-4th-mobile': "url('/images/pages/index/4th_section/comment-shape-mobile.svg')",
                'index-highlight-pink-4th': "url('/images/pages/index/4th_section/highlight-pink.svg')",
                'index-character-5th': "url('/images/pages/index/5th_section/character.png')",
                'index-comment-5th': "url('/images/pages/index/5th_section/comment-shape.svg')",
                'index-comment-5th-mobile': "url('/images/pages/index/5th_section/comment-shape-mobile.svg')",
                'index-highlight-violet-5th': "url('/images/pages/index/5th_section/highlight-violet.svg')",
                'index-comment-6th': "url('/images/pages/index/6th_section/comment-shape.svg')",
                'index-comment-6th-mobile': "url('/images/pages/index/6th_section/comment-shape-mobile.svg')",
                'index-highlight-red-6th': "url('/images/pages/index/6th_section/highlight-red.svg')",
                'index-comment-7th': "url('/images/pages/index/7th_section/comment-shape.svg')",
                'index-comment-7th-mobile': "url('/images/pages/index/7th_section/comment-shape-mobile.svg')",
                'index-shape-footer': "url('/images/pages/index/footer_section/shape-footer.svg')",
                'impressum-shape-top': "url('/images/pages/impressum/shape-top.svg')",
            },
            fontFamily: {
                sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            fontSize: {
                '6xl': '4rem',
            },
            dropShadow: {
                'square-card': '0px 4px 4px rgba(13, 85, 207, 0.24)',
            },
            colors: {
                UtilityRed100: '#FFEBEB',
                UtilityRed112: '#FFD6D6',
                UtilityRed125: '#FFC7C7',
                UtilityRed150: '#FFA3A3',
                UtilityRed200: '#E00000',
                UtilityRed300: '#BD0303',

                UtilityBlue100: '#EBF5FF',
                UtilityBlue112: '#D6EBFF',
                UtilityBlue125: '#C7E3FF',
                UtilityBlue150: '#A3D1FF',
                UtilityBlue200: '#5AACFF',
                UtilityBlue300: '#0070E0',

                UtilityDarkBlue125: '#D6E3FF',
                UtilityDarkBlue300: '#0055FF',

                UtilityGreen100: '#EAFFF8',
                UtilityGreen112: '#C7F5E5',
                UtilityGreen125: '#ADF0D9',
                UtilityGreen150: '#7BEAC5',
                UtilityGreen200: '#00C282',
                UtilityGreen300: '#07A873',

                UtilityYellow100: '#FFF6EB',
                UtilityYellow112: '#FFEDD6',
                UtilityYellow125: '#FFE6C7',
                UtilityYellow150: '#FFCE8F',
                UtilityYellow200: '#FFAE47',
                UtilityYellow300: '#F58E0A',

                UtilityLime100: '#F0F3CE',
                UtilityLime112: '#EAF0AF',
                UtilityLime125: '#E0EA80',
                UtilityLime150: '#CCDA49',
                UtilityLime200: '#B5C200',
                UtilityLime300: '#A8A700',

                UtilityOrange100: '#FFE8E0',
                UtilityOrange112: '#FFE0D6',
                UtilityOrange125: '#FFD4C7',
                UtilityOrange150: '#FFB59E',
                UtilityOrange200: '#FF7043',
                UtilityOrange300: '#E64A19',

                UtilityViolet100: '#ECE0FF',
                UtilityViolet112: '#E5D6FF',
                UtilityViolet125: '#DBC7FF',
                UtilityViolet150: '#A16BFF',
                UtilityViolet200: '#8743FF',
                UtilityViolet300: '#702EE6',

                Green125: '#ADF0D9',
                Green300: '#07A873',
                Green400: '#057651',

                Yellow300: '#F58E0A',
                Yellow400: '#A66007',
                Yellow112: '#FFEDD6',
                Yellow125: '#FFE6C7',
                Violet125: '#DBC7FF',
                Violet150: '#A16BFF',
                Violet300: '#702EE6',

                Grey100: '#FAFBFB',
                Grey200: '#F1F3F4',
                Grey300: '#E7ECEF',
                Grey400: '#C6CDD2',

                Red200: '#E00000',

                Text01: '#04142F',
                Text02: '#4E5D78',
                Text03: '#8A94A6',
                Text04: '#B7BDC8',

                Text01PrimaryOcclusion: '#24324C',

                Gray200: '#F1F3F4',
                Gray300: '#E7ECEF',
                Gray400: '#C6CDD2',
                Gray500: '#718592',

                Secondary100: '#4F66BA',
                Secondary200: '#1A3289',
                Secondary300: '#152560',
                Secondary400: '#091540',

                SecondaryButton: '#EAF0F5',

                Primary100: '#007FFF',
                Primary200: '#0C66FF',
                Primary300: '#0D55CF',
                Primary350: '#0C4DBB',
                Primary400: '#0A44A5',

                ProjectColor100: '#06EEC1',
                ProjectColor200: '#E17055',
                ProjectColor300: '#7F71EA',
                ProjectColor400: '#00CEC9',
                ProjectColor500: '#FDCB6E',
                ProjectColor600: '#1DE686',
                ProjectColor700: '#FB70A1',
                ProjectColor800: '#45AFFC',
                ProjectColor900: '#B4E44E',
                ProjectColor1000: '#E06EFD',

                UtilityBlue: '#EBF5FF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}