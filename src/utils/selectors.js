// Ces selectors sont utilisés avec le hook useSeletor
export const selectTheme = (state) => state.theme

export const selectFreelances = (state) => state.freelances

export const selectSurvey = (state) => state.survey

const voidFreelance = { status: 'void' }
export const selectFreelance = (freelanceId) => (state) => {
  return state.freelance[freelanceId] ?? voidFreelance
}

// state.freelance[freelanceId] ?? voidFreelance
// The nullish coalescing (??) operator is a logical operator that returns
// its right-hand side operand when its left-hand side operand
// is null or undefined, and otherwise returns its left-hand side operand.

// export const selectFreelance = (freelanceId) => (state) => {
//   const freelance = state.freelance[freelanceId]
//   if (freelance === null || freelance === undefined) {
//     return voidFreelance
//   } else {
//     return freelance
//   }
// }
