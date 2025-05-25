import { useState, useEffect, useRef, useCallback, FC } from 'react'
import { NumericBackgroundProps } from './types'
import { COLORS, DEFAULT_CONFIG } from './constants'

/**
 * NumericBackground component renders a customizable numeric background
 * with options for color, opacity, font size, and different visual variants.
 * It uses a canvas to draw numbers in various styles including matrix effect.
 *
 * @param {NumericBackgroundProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
const NumericBackground: FC<NumericBackgroundProps> = ({
  variant = DEFAULT_CONFIG.variant,
  color = DEFAULT_CONFIG.color,
  opacity = DEFAULT_CONFIG.opacity,
  fontSize = DEFAULT_CONFIG.fontSize,
  numbers = DEFAULT_CONFIG.numbers,
  className = '',
  children,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({
          width: width || rect.width || window.innerWidth,
          height: height || rect.height || window.innerHeight,
        })
      }
    }

    updateDimensions()
    setMounted(true)

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width, height])

  const drawBackground = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width: canvasWidth, height: canvasHeight } = dimensions

    // High DPI support
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr
    canvas.style.width = canvasWidth + 'px'
    canvas.style.height = canvasHeight + 'px'
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // Set font properties
    ctx.font = `${fontSize}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // Calculate grid
    const charWidth = fontSize * 0.6
    const charHeight = fontSize * 1.2
    const cols = Math.ceil(canvasWidth / charWidth)
    const rows = Math.ceil(canvasHeight / charHeight)

    // Draw numbers
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * charWidth + charWidth / 2
        const y = row * charHeight + charHeight / 2
        const number = numbers[Math.floor(Math.random() * numbers.length)]

        // Apply variant-specific styling
        switch (variant) {
          case 'multicolor':
            ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)]
            ctx.globalAlpha = 1
            break
          case 'single':
            ctx.fillStyle = color
            ctx.globalAlpha = 1
            break
          case 'opacity':
            ctx.fillStyle = color
            ctx.globalAlpha = opacity
            break
          case 'matrix':
            // Matrix effect: green color with slight transparency
            ctx.fillStyle =
              color === DEFAULT_CONFIG.color ? DEFAULT_CONFIG.color : color
            ctx.globalAlpha = opacity
            break
          default:
            ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)]
            ctx.globalAlpha = 1
        }

        ctx.fillText(number, x, y)
      }
    }
  }, [mounted, dimensions, fontSize, numbers, variant, color, opacity])

  useEffect(() => {
    if (!mounted) return
    drawBackground()
  }, [mounted, drawBackground])

  // Loading state
  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className={`relative h-full w-full overflow-hidden ${className}`}
      >
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        style={{
          width: dimensions.width + 'px',
          height: dimensions.height + 'px',
        }}
      />

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}

export default NumericBackground
