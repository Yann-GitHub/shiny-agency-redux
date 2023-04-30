import { createSlice } from '@reduxjs/toolkit'
// import { createReducer, createAction } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggle: (state) => {
      return state === 'light' ? 'dark' : 'light'
    },
    set: (state, action) => {
      return action.payload
    },
  },
})

export const { toggle, set } = actions

export default reducer

//////////////////////////////////////////////////
// action creators sont générés via les fonctions createAction()
// Il n'est plus necessaire d'utiliser des variables pour les noms d'action
// export const toogleTheme = createAction('theme/toogle')
// export const setTheme = createAction('theme/set')

// Le reducer
// Il est créé via la fonction createReducer
// Plus besoin d'utliser une variable uniquement pour l'action
// Plus besoin de retourner le state à la fin lorsque l'on utilise le builder
// export default createReducer('light', (builder) =>
//   builder
//     .addCase(toogleTheme, (state) => {
//       return state === 'light' ? 'dark' : 'light'
//     })
//     .addCase(setTheme, (state, action) => {
//       return action.payload
//     })
// )

//////////////////////////////////////////////////
