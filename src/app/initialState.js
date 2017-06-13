const emptyState = (state = {}) => {
  return {
    ...state,
    errors: {}
  }
}

export default {
  currentUser: emptyState(),
}
