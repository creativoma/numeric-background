'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

export interface NumericBackgroundProps {
  variant?: 'multicolor' | 'single' | 'opacity' | 'matrix'
  color?: string
  opacity?: number
  fontSize?: number
  numbers?: string[]
  className?: string
  children?: React.ReactNode
  width?: number
  height?: number
  animationSpeed?: number
}

const NumericBackground: React.FC<NumericBackgroundProps> = ({
  variant = 'single',
  color = '#4A90E2',
  opacity = 0.6,
  fontSize = 14,
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  className = '',
  children,
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const colors = [
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

  const drawStaticMatrix = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width: canvasWidth, height: canvasHeight } = dimensions

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

    const charWidth = fontSize * 0.6
    const charHeight = fontSize
    const cols = Math.ceil(canvasWidth / charWidth)
    const rows = Math.ceil(canvasHeight / charHeight)

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * charWidth + charWidth / 2
        const y = row * charHeight + charHeight / 2
        const number = numbers[Math.floor(Math.random() * numbers.length)]

        if (variant === 'multicolor') {
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
          ctx.globalAlpha = 1
        } else if (variant === 'single') {
          ctx.fillStyle = color
          ctx.globalAlpha = 1
        } else if (variant === 'opacity') {
          ctx.fillStyle = color
          ctx.globalAlpha = opacity
        }

        ctx.fillText(number, x, y)
      }
    }
  }, [mounted, dimensions, fontSize, numbers, variant, color, opacity, colors])

  useEffect(() => {
    if (!mounted) return
    drawStaticMatrix()
  }, [mounted, drawStaticMatrix])

  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className={`relative mt-10 h-full w-full overflow-hidden ${className}`}
      >
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden top-10 ${className}`}
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
