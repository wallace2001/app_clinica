import { createContext, useState } from "react";

interface ContextProps {
    screenSelected: string;
    onPressToSelectScreen(value: string): void;
}

export const ContextApp = createContext({} as ContextProps);

export const AppProvider = ({children}) => {
    const [screenSelected, setScreenSelected] = useState<string>('adoption');

    const onPressToSelectScreen = (value: string) => {
        setScreenSelected(value);
    };

    return (
        <ContextApp.Provider value={{
            screenSelected,
            onPressToSelectScreen,
        }}>
            {children}
        </ContextApp.Provider>
    );
};