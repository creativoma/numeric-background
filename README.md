# Numeric Background

Un componente React que genera fondos numéricos aleatorios con diferentes variantes de colores y opacidad.

## Instalación

```bash
npm install numeric-background
```

## Uso básico

```jsx
import { NumericBackground } from 'numeric-background'

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

## Props

| Prop        | Tipo                                    | Default             | Descripción                               |
| ----------- | --------------------------------------- | ------------------- | ----------------------------------------- |
| `variant`   | `'multicolor' \| 'single' \| 'opacity'` | `'multicolor'`      | Variante del fondo                        |
| `color`     | `string`                                | `'#3b82f6'`         | Color para variantes 'single' y 'opacity' |
| `opacity`   | `number`                                | `0.1`               | Opacidad para la variante 'opacity'       |
| `density`   | `number`                                | `100`               | Densidad de números en el fondo           |
| `fontSize`  | `number`                                | `16`                | Tamaño de fuente de los números           |
| `numbers`   | `string[]`                              | `['0','1',...,'9']` | Array de números a mostrar                |
| `className` | `string`                                | `''`                | Clases CSS adicionales                    |
| `children`  | `React.ReactNode`                       | -                   | Contenido a mostrar sobre el fondo        |

## Variantes

### Multicolor

Números en colores aleatorios:

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

```jsx
<NumericBackground variant="opacity" color="#8b5cf6" opacity={0.15}>
  {/* Tu contenido */}
</NumericBackground>
```

## Ejemplos avanzados

### Números personalizados

```jsx
<NumericBackground
  variant="multicolor"
  numbers={['α', 'β', 'γ', 'δ', 'ε']}
  density={150}
  fontSize={20}
>
  {/* Tu contenido */}
</NumericBackground>
```

### Fondo completo en página

```jsx
<NumericBackground variant="opacity" className="min-h-screen" opacity={0.05}>
  <div className="container mx-auto py-12">
    <h1>Mi aplicación</h1>
    {/* Resto del contenido */}
  </div>
</NumericBackground>
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Construir paquete
npm run build

# Publicar
npm publish
```

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS

## Licencia

MIT
