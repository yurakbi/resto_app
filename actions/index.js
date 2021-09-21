const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    }
}

const menuRequested = (newMenu) => {
    return {
        type: "MENU_REQUESTED"
    }
}

export {
    menuLoaded,
    menuRequested
};