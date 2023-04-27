import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import freelanceReducer from '../features/freelance'
import surveyReducer from '../features/survey'
import { configureStore } from '@reduxjs/toolkit'

// L'utilisation de la fonction configureStore de redux-toolkit
// Permet de réduire la quantité de code necessaire
// On fait l'économie de combineReducers(), createStore(), et la connection aux devtools

const store = configureStore({
  reducer: {
    theme: themeReducer,
    freelances: freelancesReducer,
    freelance: freelanceReducer,
    survey: surveyReducer,
  },
})

export default store
