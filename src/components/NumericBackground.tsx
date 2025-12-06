import { useState, useEffect, useRef, useCallback, FC, useMemo } from 'react'
import { NumericBackgroundProps } from './types'
import { COLORS, DEFAULT_CONFIG } from './constants'

const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  return (...args: T) => {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(
        () => {
          func(...args)
          lastExecTime = Date.now()
        },
        delay - (currentTime - lastExecTime)
      )
    }
  }
}

const NumericBackground: FC<NumericBackgroundProps> = ({
  variant = DEFAULT_CONFIG.variant,
  color = DEFAULT_CONFIG.color,
  opacity = DEFAULT_CONFIG.opacity,
  fontSize = DEFAULT_CONFIG.fontSize,
  numbers,
  className = '',
  children,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const numbersToUse = useMemo(() => {
    if (numbers) return numbers
    return variant === 'matrix'
      ? DEFAULT_CONFIG.matrixNumbers
      : DEFAULT_CONFIG.numbers
  }, [numbers, variant])

  const gridConfig = useMemo(() => {
    const charWidth = fontSize * 0.6
    const charHeight = fontSize * 1.2
    const cols = Math.ceil(dimensions.width / charWidth)
    const rows = Math.ceil(dimensions.height / charHeight)

    return { charWidth, charHeight, cols, rows }
  }, [fontSize, dimensions.width, dimensions.height])

  const preGeneratedData = useMemo(() => {
    const { cols, rows, charWidth, charHeight } = gridConfig
    const data = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * charWidth + charWidth / 2
        const y = row * charHeight + charHeight / 2
        const number =
          numbersToUse[Math.floor(Math.random() * numbersToUse.length)]
        const colorIndex = Math.floor(Math.random() * COLORS.length)

        data.push({ x, y, number, colorIndex })
      }
    }

    return data
  }, [gridConfig, numbersToUse])

  const throttledUpdateDimensions = useMemo(
    () =>
      throttle(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          setDimensions({
            width: width || rect.width || window.innerWidth,
            height: height || rect.height || window.innerHeight,
          })
        }
      }, 100),
    [width, height]
  )

  useEffect(() => {
    throttledUpdateDimensions()
    setMounted(true)

    window.addEventListener('resize', throttledUpdateDimensions)
    return () => window.removeEventListener('resize', throttledUpdateDimensions)
  }, [throttledUpdateDimensions])

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

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    ctx.font = `${fontSize}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    preGeneratedData.forEach(({ x, y, number, colorIndex }) => {
      switch (variant) {
        case 'multicolor':
          ctx.fillStyle = COLORS[colorIndex]
          break
        case 'single':
        case 'opacity':
          ctx.fillStyle = color
          break
        case 'matrix':
          ctx.fillStyle =
            color === DEFAULT_CONFIG.color ? DEFAULT_CONFIG.color : color
          break
        default:
          ctx.fillStyle = color
      }

      ctx.globalAlpha = opacity
      ctx.fillText(number, x, y)
    })
  }, [mounted, dimensions, fontSize, variant, color, opacity, preGeneratedData])

  useEffect(() => {
    if (!mounted) return
    drawBackground()
  }, [mounted, drawBackground])

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
