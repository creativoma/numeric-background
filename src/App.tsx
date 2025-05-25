import { useState } from 'react'
import NumericBackground from './components/NumericBackground'
import { DEFAULT_CONFIG } from './components/constants'
import { variantType } from './components/types'

const App = () => {
  const [variant, setVariant] = useState<variantType>('matrix')
  const [color, setColor] = useState(DEFAULT_CONFIG.color)
  const [opacity, setOpacity] = useState(DEFAULT_CONFIG.opacity)
  const [fontSize, setFontSize] = useState(DEFAULT_CONFIG.fontSize)

  return (
    <div className="min-h-screen">
      {/* Control Panel */}
      <div className="fixed top-6 left-6 z-30 w-72">
        <div className="rounded-lg border border-gray-300 bg-white/95 p-6 shadow-lg backdrop-blur-sm">
          {/* Header */}
          <div className="mb-6">
            <h1 className="mb-1 text-xl font-bold text-gray-800">
              NumericBackground
            </h1>
            <p className="text-sm text-gray-600">Component Demo</p>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Variant Selector */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Variant
              </label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as variantType)}
                className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
              >
                <option value="matrix">Matrix</option>
                <option value="multicolor">Multicolor</option>
                <option value="single">Single Color</option>
                <option value="opacity">Opacity</option>
              </select>
            </div>

            {/* Color Picker */}
            {(variant === 'single' ||
              variant === 'opacity' ||
              variant === 'matrix') && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-8 w-16 rounded border border-gray-300"
                  />
                  <span className="font-mono text-xs text-gray-600">
                    {color.toUpperCase()}
                  </span>
                </div>
              </div>
            )}

            {/* Opacity */}
            {(variant === 'opacity' || variant === 'matrix') && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Opacity: {opacity}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            {/* Font Size */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Font Size: {fontSize}px
              </label>
              <input
                type="range"
                min="10"
                max="32"
                step="2"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-6 rounded border bg-gray-50 p-3">
            <div className="font-mono text-xs text-gray-700">
              <div>&lt;NumericBackground</div>
              <div className="ml-2">variant="{variant}"</div>
              {(variant === 'single' ||
                variant === 'opacity' ||
                variant === 'matrix') && (
                <div className="ml-2">color="{color}"</div>
              )}
              {(variant === 'opacity' || variant === 'matrix') && (
                <div className="ml-2">opacity={opacity}</div>
              )}
              <div className="ml-2">fontSize={fontSize}</div>
              <div>&gt;</div>
              <div className="ml-2 text-gray-500">/* content */</div>
              <div>&lt;/NumericBackground&gt;</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <NumericBackground
        variant={variant}
        color={color}
        opacity={opacity}
        fontSize={fontSize}
        numbers={variant === 'matrix' ? ['0', '1'] : DEFAULT_CONFIG.numbers}
        className="min-h-screen"
      >
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-full rounded-lg bg-white/80 px-12 py-12 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              @creativoma/numeric-background
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              A React component for creating customizable numeric backgrounds
            </p>
            <div className="flex justify-center space-x-4">
              <a className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
                Documentation
              </a>
              <a
                href="https://www.npmjs.com/package/@creativoma/numeric-background"
                target="_blank"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                Install Package
              </a>
            </div>
          </div>
        </div>
      </NumericBackground>
    </div>
  )
}

export default App