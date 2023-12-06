export const saveToLocalStorage = (key: string, value: string) => {
    try {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, value);
        }
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
};

export const loadFromLocalStorage = (key: string) => {
    try {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem(key);
            if (value === null) {
                return "";
            }
            return value;
        }
    } catch (error) {
        console.error("Error reading from localStorage", error);
        return "";
    }
};

export const removeItemFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
};
