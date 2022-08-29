import { ReactiveVar, useReactiveVar, makeVar } from "@apollo/client"

export const createReactiveVar = <T>(initialValue: T): ReactiveVar<T> =>
  makeVar<T>(initialValue)

export type ReactiveVarHooks<T> = [T, (payload: T) => void]

export const useReactiveVarHooks = <T>(
  reactiveVar: ReactiveVar<T>
): ReactiveVarHooks<T> => {
  const value = useReactiveVar(reactiveVar)
  const setValue = (payload: T) => {
    reactiveVar(payload)
  }
  return [value, setValue]
}
