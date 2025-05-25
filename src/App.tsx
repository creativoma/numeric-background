'use client'

import { useState } from 'react'
import NumericBackground from './NumericBackground'

const App = () => {
  const [variant, setVariant] = useState<
    'multicolor' | 'single' | 'opacity' | 'matrix'
  >('matrix')
  const [color, setColor] = useState('#00ff41')
  const [opacity, setOpacity] = useState(0.8)
  const [fontSize, setFontSize] = useState(14)
  const [animationSpeed, setAnimationSpeed] = useState(50)

  return (
    <div className="min-h-screen">
      <div className="fixed top-20 left-4 z-20 max-w-xs space-y-4 rounded-lg border border-green-500/30 bg-black/80 p-4 text-green-400 shadow-2xl backdrop-blur-sm mb-10">
        <h3 className="text-lg font-bold text-green-300">Canvas Optimizado</h3>

        <div>
          <label className="mb-2 block text-sm font-medium">Variante:</label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as typeof variant)}
            className="w-full rounded border border-green-500/50 bg-black p-2 text-green-400"
          >
            <option value="matrix">Matrix Rain</option>
            <option value="multicolor">Multicolor</option>
            <option value="single">Color único</option>
            <option value="opacity">Con opacidad</option>
          </select>
        </div>

        {(variant === 'single' ||
          variant === 'opacity' ||
          variant === 'matrix') && (
          <div>
            <label className="mb-2 block text-sm font-medium">Color:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 w-full rounded border border-green-500/50 bg-black"
            />
          </div>
        )}

        {(variant === 'opacity' || variant === 'matrix') && (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Opacidad: {opacity}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Tamaño: {fontSize}px
          </label>
          <input
            type="range"
            min="8"
            max="24"
            step="2"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>

        {variant === 'matrix' && (
          <div>
            <label className="mb-2 block text-sm font-medium">
              Velocidad: {animationSpeed}ms
            </label>
            <input
              type="range"
              min="20"
              max="200"
              step="10"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>
        )}
      </div>

      <NumericBackground
        variant={variant}
        color={color}
        opacity={opacity}
        fontSize={fontSize}
        animationSpeed={animationSpeed}
        numbers={
          variant === 'matrix'
            ? ['0', '1']
            : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        }
        className="mt-10 min-h-screen"
      >
        <div className="mb-10 flex h-screen items-center justify-center">
          <div
            className={`${variant === 'matrix' ? 'border border-green-500/30 bg-black/90 text-green-300' : 'bg-white/90 text-gray-800'} max-w-md rounded-xl p-10 text-center shadow-2xl backdrop-blur-sm`}
          ></div>
        </div>
      </NumericBackground>
    </div>
  )
}

export default App
