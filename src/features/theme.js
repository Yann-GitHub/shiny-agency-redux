import { createReducer, createAction } from '@reduxjs/toolkit'

// On utilise des variables pour les noms des actions
// pour éviter les fautes de frappe
// const TOGGLE_THEME = 'theme/toggle'
// const SET_THEME = 'theme/set'

// action creators
// export const toggleTheme = () => ({ type: TOGGLE_THEME })
// export const setTheme = (theme = 'light') => ({
//   type: SET_THEME,
//   payload: theme,
// })

// action creators sont générés via les fonctions createAction()
// Il n'est plus necessaire d'utiliser des variables pour les noms d'action
export const toogleTheme = createAction('theme/toogle')
export const setTheme = createAction('theme/set')

// Le reducer

// on utilise une valeur par défaut pour donner le state initial
// export default function reducer(state = 'light', action) {
//   if (action.type === TOGGLE_THEME) {
//     return state === 'light' ? 'dark' : 'light'
//   }
//   if (action.type === SET_THEME) {
//     return action.payload
//   }
//   return state
// }

// Le reducer
// Il est créé via la fonction createReducer
// Plus besoin d'utliser une variable uniquement pour l'action
// Plus besoin de retourner le state à la fin lorsque l'on utilise le builder
export default createReducer('light', (builder) =>
  builder
    .addCase(toogleTheme, (state) => {
      return state === 'light' ? 'dark' : 'light'
    })
    .addCase(setTheme, (state, action) => {
      return action.payload
    })
)
