const initState = {
    themeId: 1,
}

export type initStateType = {
    themeId: number
}

export const themeReducer = (state:initStateType = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) =>  {
    return { type: 'SET_THEME_ID', id} as const
} // fix any

type changeThemeIdType = ReturnType<typeof changeThemeId>
