import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

export interface GlobalState {
  title: string
}

const initialState: GlobalState = {
  title: 'react-app',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const { change } = globalSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const changeTitleAsync = (title: string) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(change(title))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTitle = (state: AppStore.RootState) => {
  return state.global.title
}

export default globalSlice.reducer
