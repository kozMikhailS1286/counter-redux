const initialState = {
    value: 0
}



type initialStateType = typeof initialState;
export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state,
                value: state.value + 1
            }
        case 'INC-VALUE-FROM-LOCAl-STORAGE': {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state;
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const incValueFromLocalStorageAC = (value: number) => ({type: 'INC-VALUE-FROM-LOCAl-STORAGE', value} as const)


export type incActionType = ReturnType<typeof incValueAC>
export type incActionFromLocalStorageType = ReturnType<typeof incValueFromLocalStorageAC>

type ActionType = incActionType | incActionFromLocalStorageType