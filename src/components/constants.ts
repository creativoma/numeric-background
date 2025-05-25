import { variantType } from './types'

/**
 * Constants for the NumericBackground component.
 * This file exports a default configuration object and an array of colors used for the multicolor variant.
 * The default configuration includes properties like variant, color, opacity, fontSize, numbers, and matrixNumbers.
 * The COLORS array contains hex color codes that can be used to randomly color the numbers in the background.
 */
export const DEFAULT_CONFIG = {
  variant: 'single' as variantType,
  color: '#000000',
  opacity: 0.6,
  fontSize: 14,
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  matrixNumbers: ['0', '1'],
}

/**
 * Array of color hex codes used for the multicolor variant of the NumericBackground component.
 * These colors can be used to randomly color the numbers in the background.
 */
export const COLORS = [
  '#ef4444',
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#8b5cf6',
  '#ec4899',
  '#6366f1',
  '#06b6d4',
  '#f97316',
  '#14b8a6',
]
