import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import themeReducer from '../features/theme'
import freelancesReducer from '../features/freelances'
import freelanceReducer from '../features/freelance'
import surveyReducer from '../features/survey'
// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble

const reducer = combineReducers({
  // le themeReducer est responsable de la propriété `theme` du state
  theme: themeReducer,
  freelances: freelancesReducer,
  freelance: freelanceReducer,
  survey: surveyReducer,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
const store = createStore(reducer, reduxDevtools)

export default store
