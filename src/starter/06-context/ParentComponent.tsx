import ThemeProvider from './ThemeProvider';
import Component from './Component';

function ParentComponent() {
    return (
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
}

export default ParentComponent;