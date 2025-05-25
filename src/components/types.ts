import { ReactNode } from 'react'

export type variantType = 'multicolor' | 'single' | 'opacity' | 'matrix'

export interface NumericBackgroundProps {
  variant?: variantType
  color?: string
  opacity?: number
  fontSize?: number
  numbers?: string[]
  className?: string
  children?: ReactNode
  width?: number
  height?: number
}