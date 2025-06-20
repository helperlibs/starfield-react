# 🌌 Starfield React Lib

Starfield React Lib is a lightweight and easy-to-use React component that renders a starfield animation background using `canvas`. It simulates a smooth interstellar journey, similar to Star Wars hyperspace effects — ideal for futuristic and immersive UIs.

***🔗 [Click here to preview Starfield Demo](https://starfieldreact.vercel.app/)***



### Installation

```bash
npm install @helperd/starfield-react
# or
yarn add @helperd/starfield-react
```



### Usage

```tsx
import { Starfield } from "@helperd/starfield-react";

function App() {
  return (
	<>
	  <Starfield />
	  <header>
		<h1>Starfield React Lib</h1>
	  </header>
	</>
  );
}

export default App;
```

The component renders a full-screen `canvas` with stars moving toward the user.

---

### Available Props (optional)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `numStars` | `number` | `300` | Total number of animated stars |
| `speed` | `number` | `2` | Speed of star movement |
| `starSize` | `number` | `1.5` | Base size of the stars |
| `maxOpacity` | `number` | `0.8` | Maximum opacity a star can reach |
| `maxDepth` | `number` | `500` | Maximum depth — how far stars can travel |
| `zIndex` | `number` | `-1` | z-index of the canvas layer |
| `backgroundColor` | `string` | `transparent` | Background color of the canvas |

---

### Compatibility

- React **17, 18, and 19**
- Supports **ESM** and **CommonJS**
- Lightweight — only React as a peer dependency

---

### Development

```bash
npm run dev     # Start build watcher with tsup
npm run build   # Build for production
```

---

### License

© [Évelyn Lacerda](https://github.com/evelynlacerda) and [HelperDev](https://helperdev.com.br)
