export as namespace AppStore

import { GlobalState } from './globalSlice'

export type RootState = {
  global: GlobalState
}
