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
      <div className="fixed top-4 left-4 z-30 w-64">
        <div className="rounded-lg border border-gray-200/50 bg-white/90 p-4 shadow-lg backdrop-blur-md">
          {/* Header */}
          <div className="mb-4 border-b border-gray-200 pb-3">
            <h1 className="mb-1 text-lg font-bold text-[#1673ff]">
              NumericBackground
            </h1>
            <p className="text-xs text-gray-500">
              Interactive Configuration Panel
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Variant Selector */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-700">
                Style Variant
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  ['matrix', 'multicolor', 'single', 'opacity'] as variantType[]
                ).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                      variant === v
                        ? 'bg-[#1673ff] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            {(variant === 'single' ||
              variant === 'opacity' ||
              variant === 'matrix') && (
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Color Selection
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-8 w-12 cursor-pointer rounded border border-gray-200"
                  />
                  <span className="rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700">
                    {color.toUpperCase()}
                  </span>
                </div>
              </div>
            )}

            {/* Opacity Slider */}
            {(variant === 'opacity' || variant === 'matrix') && (
              <div>
                <label className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-700">
                  <span>Opacity</span>
                  <span className="rounded-full bg-[#1673ff]/10 px-2 py-0.5 font-mono text-xs text-[#1673ff]">
                    {opacity.toFixed(1)}
                  </span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-[#1673ff]"
                />
              </div>
            )}

            {/* Font Size Slider */}
            <div>
              <label className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-700">
                <span>Font Size</span>
                <span className="rounded-full bg-[#1673ff]/10 px-2 py-0.5 font-mono text-xs text-[#1673ff]">
                  {fontSize}px
                </span>
              </label>
              <input
                type="range"
                min="10"
                max="32"
                step="2"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-[#1673ff]"
              />
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <div className="border-b border-gray-200 bg-gray-800 px-3 py-1.5">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="ml-1 text-xs text-gray-400">App.tsx</span>
              </div>
            </div>
            <div className="p-2 font-mono text-xs leading-relaxed text-gray-800">
              <div>
                <span className="text-purple-600">&lt;NumericBackground</span>
              </div>
              <div className="ml-2">
                <span className="text-blue-600">variant</span>=
                <span className="text-green-600">"{variant}"</span>
              </div>
              {(variant === 'single' ||
                variant === 'opacity' ||
                variant === 'matrix') && (
                <div className="ml-2">
                  <span className="text-blue-600">color</span>=
                  <span className="text-green-600">"{color}"</span>
                </div>
              )}
              {(variant === 'opacity' || variant === 'matrix') && (
                <div className="ml-2">
                  <span className="text-blue-600">opacity</span>=
                  <span className="text-orange-600">{opacity}</span>
                </div>
              )}
              <div className="ml-2">
                <span className="text-blue-600">fontSize</span>=
                <span className="text-orange-600">{fontSize}</span>
              </div>
              <div>
                <span className="text-purple-600">/&gt;</span>
              </div>
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
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
          <div className="max-w-xl rounded-2xl border border-white/30 bg-white/85 px-8 py-8 text-center shadow-xl backdrop-blur-lg">
            <div className="mb-4 inline-block rounded-lg bg-[#1673ff] px-4 py-1.5">
              <span className="text-xs font-bold tracking-wider text-white uppercase">
                React Component
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-black text-gray-800">
              @creativoma/
              <br />
              numeric-background
            </h1>
            <p className="mb-6 text-base leading-relaxed text-balance text-gray-600">
              Create stunning animated numeric backgrounds with multiple
              variants and full customization
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/creativoma/numeric-background"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border-2 border-gray-800 bg-white px-5 py-2.5 text-sm font-bold text-gray-800 shadow-md transition-all hover:bg-gray-800 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@creativoma/numeric-background"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg bg-[#1673ff] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1673ff]/90"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.334v8l6.666 3.834V15.5l-4-2.334v-4l4-2.333V3.334L0 7.334zm6.666 8V19l6.668 3.833V19l-4-2.333v-4l4-2.334V7l-6.668-3.833v8.167zM13.334 19v3.833L20 19v-3.833l-6.666 3.833zm6.666-7.667v-4l-4-2.333V7l4-2.333v-4L13.334 3.5v3.833l4 2.334v4l-4 2.333V19l6.666-3.833v-3.834z" />
                </svg>
                Install from NPM
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-200 pt-6">
              <div className="text-center">
                <div className="text-xl font-black text-gray-800">4</div>
                <div className="text-xs font-semibold text-gray-500">
                  Variants
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-black text-gray-800">
                  TypeScript
                </div>
                <div className="text-xs font-semibold text-gray-500">
                  Full Support
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-black text-gray-800">MIT</div>
                <div className="text-xs font-semibold text-gray-500">
                  License
                </div>
              </div>
            </div>
          </div>
        </div>
      </NumericBackground>
    </div>
  )
}

export default App
