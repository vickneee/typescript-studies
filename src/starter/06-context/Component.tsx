import useTheme from './useTheme';

function Component() {
    const { theme, setTheme } = useTheme();
    console.log(theme);

    const styles = {
        light: { backgroundColor: 'white' },
        dark: { backgroundColor: 'black'},
        system: { backgroundColor: 'gray' },
    };

    return (
        <div style={styles[theme]}>
            <h2>random component</h2>
            <button
                onClick={() => {
                    if (theme === 'dark') {
                        setTheme('system');
                        return;
                    }
                    setTheme('dark');
                }}
                className='btn btn-center'
            >
                toggle theme
            </button>
        </div>
    );
}

export default Component;