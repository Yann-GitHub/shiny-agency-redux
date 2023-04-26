// import { legacy_createStore as createStore } from 'redux'
// import { combineReducers } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import freelanceReducer from '../features/freelance'
import surveyReducer from '../features/survey'
import { configureStore } from '@reduxjs/toolkit'

// L'utilisation de la fonction configureStore de redux-toolkit
// Permet de réduire la quantité de code necessaire
// On fait l'économie de combineReducers(), createStore(), et la partie devtools

const store = configureStore({
  reducer: {
    theme: themeReducer,
    freelances: freelancesReducer,
    freelance: freelanceReducer,
    survey: surveyReducer,
  },
})

// const reducer = combineReducers({
//   // le themeReducer est responsable de la propriété `theme` du state
//   theme: themeReducer,
//   freelances: freelancesReducer,
//   freelance: freelanceReducer,
//   survey: surveyReducer,
// })

// const reduxDevtools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
// const store = createStore(reducer, reduxDevtools)

export default store
