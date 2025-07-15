
const LightTheme = {
    bg: 'rgba(214, 172, 20, 0.1)',
    color: 'black',
    button: {
        color: 'black',
    },
    border: {
        color: 'black',
    }
}

const DarkTheme = {
    bg: 'gray.800',
    color: 'white',
    button: {
        color: 'white',
        _hover : {
            bg: 'gray.700',
        }
    },
    border: {
        color: 'white',
    }
}

const changeTheme = (theme: string) => {
    if (theme === 'light') {
        return LightTheme;
    } else {
        return DarkTheme;
    }
}

export default changeTheme;