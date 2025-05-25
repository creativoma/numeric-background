# @creativoma/numeric-background

![Screenshot](public/screenshot.png)

Un componente React moderno que genera fondos numéricos animados con diferentes variantes de colores y opacidad. Perfecto para añadir un toque visual dinámico a tus aplicaciones.

[![npm version](https://img.shields.io/npm/v/@creativoma/numeric-background.svg)](https://www.npmjs.com/package/@creativoma/numeric-background)

## 🚀 Instalación

```bash
npm install @creativoma/numeric-background
```

```bash
yarn add @creativoma/numeric-background
```

```bash
pnpm add @creativoma/numeric-background
```

## 📖 Uso básico

```jsx
import { NumericBackground } from '@creativoma/numeric-background'

function App() {
  return (
    <NumericBackground variant="multicolor">
      <div className="p-8">
        <h1>Tu contenido aquí</h1>
        <p>El fondo numérico se renderiza detrás de este contenido</p>
      </div>
    </NumericBackground>
  )
}
```

## 🎨 Variantes disponibles

### Multicolor

Números en colores aleatorios vibrantes:
![Multicolor Background](public/example-1.png)

```jsx
<NumericBackground variant="multicolor">{/* Tu contenido */}</NumericBackground>
```

### Color único

Todos los números del mismo color:

```jsx
<NumericBackground variant="single" color="#ff6b6b">
  {/* Tu contenido */}
</NumericBackground>
```

### Con opacidad

Números con transparencia ajustable:
![Opacidad](public/example-2.png)

```jsx
<NumericBackground variant="opacity" color="#8b5cf6" opacity={0.15}>
  {/* Tu contenido */}
</NumericBackground>
```

### Matrix

Efecto estilo Matrix con números estáticos:
![Estilo Matrix](public/example-3.png)

```jsx
<NumericBackground variant="matrix" color="#00ff00">
  {/* Tu contenido */}
</NumericBackground>
```

## ⚙️ Props

| Prop        | Tipo                                                | Default             | Descripción                                         |
| ----------- | --------------------------------------------------- | ------------------- | --------------------------------------------------- |
| `variant`   | `'multicolor' \| 'single' \| 'opacity' \| 'matrix'` | `'multicolor'`      | Variante del fondo                                  |
| `color`     | `string`                                            | `'#3b82f6'`         | Color para variantes 'single', 'opacity' y 'matrix' |
| `opacity`   | `number`                                            | `0.1`               | Opacidad para la variante 'opacity'                 |
| `fontSize`  | `number`                                            | `16`                | Tamaño de fuente de los números                     |
| `numbers`   | `string[]`                                          | `['0','1',...,'9']` | Array de números a mostrar                          |
| `className` | `string`                                            | `''`                | Clases CSS adicionales                              |
| `children`  | `React.ReactNode`                                   | -                   | Contenido a mostrar sobre el fondo                  |
| `width`     | `number`                                            | `auto`              | Ancho personalizado del canvas                      |
| `height`    | `number`                                            | `auto`              | Alto personalizado del canvas                       |

## 💡 Ejemplos avanzados

### Números personalizados

![Números personalizados](public/example-4.png)

```jsx
<NumericBackground
  variant="multicolor"
  numbers={['α', 'β', 'γ', 'δ', 'ε', 'π', 'Σ', '∞']}
  fontSize={20}
>
  <div className="p-8">
    <h2>Símbolos matemáticos</h2>
  </div>
</NumericBackground>
```

### Fondo de página completa

```jsx
<NumericBackground variant="opacity" className="min-h-screen" opacity={0.05}>
  <div className="relative z-10 container mx-auto py-12">
    <h1 className="mb-8 text-4xl font-bold">Mi aplicación</h1>
    <p>Contenido principal con fondo numérico sutil</p>
  </div>
</NumericBackground>
```

### Configuración de alta densidad

```jsx
<NumericBackground
  variant="matrix"
  color="#10b981"
  fontSize={12}
  numbers={['1', '0']}
  width={800}
  height={600}
>
  <div className="p-12">
    <h2>Efecto Matrix personalizado</h2>
  </div>
</NumericBackground>
```

### Canvas con dimensiones fijas

```jsx
<NumericBackground
  variant="single"
  color="#ff6b6b"
  width={1200}
  height={800}
  fontSize={18}
>
  <div className="flex h-full items-center justify-center">
    <h1>Fondo con dimensiones fijas</h1>
  </div>
</NumericBackground>
```

## 🛠️ Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/creativoma/numeric-background.git
cd numeric-background

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Linting y formato
npm run lint
npm run format

# Construir librería
npm run build

# Construir demo
npm run build:demo

# Vista previa
npm run preview

# Publicar (requiere permisos)
npm publish
```

## 🧪 Estructura del proyecto

```
numeric-background/
├── src/
│   ├── components/
│   │   ├── constants.ts
│   │   ├── NumericBackground.tsx
│   │   └── types.ts
│   ├── App.tsx                 # Demo application
│   ├── main.tsx               # Demo entry point
│   ├── index.ts               # Library entry point
│   └── index.css
├── dist/                      # Archivos compilados
├── public/                    # Demo assets
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts            # Demo build config
├── vite.config.lib.ts        # Library build config
└── tailwind.config.js
```

## 📋 Requisitos

- React >= 18.0.0
- React DOM >= 18.0.0

## 🏗️ Tecnologías

- **React** - Biblioteca de componentes
- **TypeScript** - Tipado estático
- **Vite** - Build tool y bundler
- **Tailwind CSS** - Framework de CSS

## 📦 Formatos disponibles

Este paquete incluye múltiples formatos para máxima compatibilidad:

- **ESM** (`dist/index.esm.js`) - Para aplicaciones modernas
- **UMD** (`dist/index.umd.js`) - Para compatibilidad universal
- **TypeScript** (`dist/index.d.ts`) - Definiciones de tipos

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

MIT © [creativoma](https://github.com/creativoma)

## 🏷️ Changelog

### 1.0.0

- ✨ Primera versión del componente NumericBackground
- 🎨 Soporte para 4 variantes: multicolor, single, opacity, matrix
- ⚙️ Props configurables para color, opacidad, tamaño y números personalizados
- 📦 Build optimizado con tree-shaking
- 🔧 Soporte completo para TypeScript
