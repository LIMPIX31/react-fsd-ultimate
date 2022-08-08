import { ReactNode } from 'react'

export interface HasChildren<T = ReactNode> {
  children?: T
}

export interface Value<T> {
  value: T
}

export interface Changeable<T> {
  onChange: (value: T) => void
}

export type DataInput<T> = Value<T> & Changeable<T>

export interface Clickable {
  onClick: () => void
}

export interface Styled {
  className?: string
}
