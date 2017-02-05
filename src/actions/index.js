import { EMAIL_CHANGED } from './types'

export const emailChanged = (text) => {
  console.log(text)
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}
