# (rev)olve

Boston's most cracked hackathon - organized by rev, Boston's premier hacker community.

## Event Details

- **Date:** November 7-9, 2025
- **Location:** MIT Innovation HQ, Cambridge, MA  
- **Duration:** 48 hours

## Stack

- **Package Manager:** pnpm
- **Framework:** Next.js 15 with App Router & Turbopack
- **Styling:** Tailwind CSS 4 + dither-plugin
- **UI Components:** shadcn/ui
- **Animations:** anime.js v4
- **3D Graphics:** Three.js + @react-three/fiber + @react-three/drei

## Design Philosophy

### Monochrome Sophistication
- **Pure black & white** color palette (oklch 0.02 to 0.98)
- **No color** - inspired by technical diagrams, blueprints, and vintage print
- Film grain overlay for texture
- Scanline effects for retro CRT aesthetic
- Dithered imagery using Atkinson dithering (reversed: white on black)

### Visual Language
- **Wireframe 3D** - orbital mechanics with geometric primitives
- **Technical grids** - multiple overlay systems (100px, 20px)
- **Blueprint aesthetics** - lines, annotations, coordinate systems
- **Vintage print** - halftone textures, film grain
- **Sophisticated typography** - tight tracking, proper rhythm, monospace hierarchy

### 3D Scene Architecture
- Wireframe icosahedron + octahedron core (counter-rotating)
- 12 sponsor nodes as octahedrons orbiting at 45° tilt
- Spiral field lines (16 curves) creating energy field effect
- 2000-particle ambient field in spherical distribution
- All geometries use wireframe materials with varying opacity
- Fog for depth perception

### Animation System
- Smooth orbital rotation (0.12 rad/s)
- Pulsing lights and subtle oscillations
- Text flicker-in with letter spacing animation
- Wave effects on title text
- Glitch micro-animations (optional)
- Ambient particle drift

## Development

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000

## Build

```bash
pnpm build
pnpm start
```

## Structure

- `/src/app` - Next.js app router
  - `page.tsx` - Main landing page with all sections
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global styles, theme variables, animations
- `/src/components`
  - `FlickerText.tsx` - Hero text (no animation, instant render)
  - `OrbitScene.tsx` - 3D wireframe orbital visualization
  - `AnimatedBackground.tsx` - Rotating 3D wireframe cubes and octahedrons
  - `ParticleField.tsx` - Canvas-based particle network system
  - `TechnicalOverlay.tsx` - Animated technical diagrams and overlays
  - `TracksSection.tsx` - 4 core tracks with rotating network visualization
  - `PrizeCarousel.tsx` - Slot machine-style prize showcase with dithered logos
  - `PrizeShowcase.tsx` - 3D network prize distribution (legacy)
  - `Countdown.tsx` - Real-time countdown to event
- `/src/components/ui` - shadcn/ui components
- `/public` - Static assets

## Features

### Hero Section
- Massive title with text shadow glow
- 3D wireframe orbital scene
- Film grain + scanlines overlay
- Animated scroll indicator

### Overview Section
- Grid layout with stats cards
- Event details in bordered container
- Technical grid overlay
- Hover states on all interactive elements

### Prize Tracks Section
- 7 prize tracks in grid layout
- Hover effects with subtle transitions
- Tag categorization
- Sequential numbering

### Application Section
- Embedded Notion form
- Gradient overlays for seamless integration

### Footer
- Multi-column layout
- Pulsing status indicators
- Clean social links

## Prizes & Sponsors

### Prize Tracks ($1,000 each)
1. **Best Robotics Hack** - Innate Bots (+ Mars personal robot)
2. **Best Consumer Hardware** - OMI AI (+ 10 OMIs for hackers, 1 for winner)
3. **Best RL Hack** - Osmosis AI
4. **Best Computer Use Agent** - Sorce Jobs
5. **Best Personal Manufacturing** - Adam CAD
6. **Best Personal Memory Hack** - Supermemory AI
7. **Best Startup Potential** - Upfront Capital

### Participant Credits
- **Modal** - $500 in GPU compute credits
- **Exa AI** - $50 in search API credits
- **MorphLLM** - $50 in LLM API credits

### Additional Sponsors
- **Mission St Capital** - Boba Sponsor
- **Augmentation Lab** - Organization Partner

**Total Prize Pool:** $7,000+ in cash + hardware + credits

## Technical Details

### Color System
All colors use oklch color space for perceptual uniformity:
- Background: `oklch(0.02 0 0)` - Pure black
- Foreground: `oklch(0.98 0 0)` - Pure white
- Grays: `oklch(0.05-0.70 0 0)` - Achromatic scale
- No hue, no chroma - pure monochrome

### Typography
- **Font:** Geist Mono (monospace) for everything
- **Tracking:** -0.02em to -0.01em (tight)
- **Weights:** Regular, Bold
- **Hierarchy:** Size + opacity variations

### Effects & Overlays
- **Film grain:** SVG noise filter at 8% opacity
- **Scanlines:** 3px repeating gradient
- **Grid (technical):** 100px grid at 2% opacity
- **Grid (fine):** 20px grid at 0.8% opacity
- **Vignette:** Radial gradient fade to black
- **Dither:** Atkinson algorithm, reversed palette

### Animations
- `wave`: 8s clip-path animation
- `pulse-subtle`: 4s opacity fade
- `bounce-slow`: 3s translate animation
- `glitch-1/2`: 2.5s transform glitches

## Using Dither Plugin

The site uses `dither-plugin` for image dithering. To apply:

```tsx
<div className="dither">
  <Image src="/path/to/image.jpg" alt="..." />
</div>
```

Available sizes: `dither`, `dither-sm`, `dither-lg`, `dither-xl`

**Note:** rev_logo.png is NOT dithered - all other imagery should be wrapped in dither divs.

## Performance Notes

- 3D scene uses wireframe materials (low poly count)
- Particle system optimized with BufferGeometry
- Film grain uses data URI SVG (no external file)
- All animations use CSS/requestAnimationFrame
- Fog reduces distant rendering load

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (dither-plugin is Safari-compatible)
- Mobile: Optimized, 3D scene scales appropriately

## Adding Sponsor Logos

Sponsor logos are in `/public/sponsors/`:

- `osmosis.jpeg` - Osmosis AI
- `sorce.png` - Sorce Jobs
- `adamcad.png` - Adam CAD
- `supermemory.png` - Supermemory AI
- `innate.png` - Innate Bots
- `upfront.png` - Upfront Capital
- `omi.png` - OMI AI
- `modal.avif` - Modal
- `exa.jpg` - Exa AI
- `morph.png` - MorphLLM
- `missionstcapital.jpeg` - Mission St Capital
- `augmentationlab.jpeg` - Augmentation Lab

**Note:** All sponsor logos (except rev_logo.png) are automatically dithered using the Atkinson algorithm with reversed palette (white on black). Logos have rounded corners and use object-contain to handle irregular aspect ratios.

## Final Design System

### Pure Monochrome
- **All text lowercase** (rev branding consistency)
- **Zero color** - only black (#000000) to white (#ffffff)
- **No animation lag** - hero text renders instantly
- **Subtitle integration** - white/60 opacity, better tracking for subtle presence
- **No labels** - visual elements speak for themselves

### Visual Layers (Every Section)
1. **3D Wireframe Backgrounds** - Rotating cubes and octahedrons
2. **Particle Network System** - 80 connected nodes with canvas
3. **Technical Overlays** - Spinning diagrams, coordinates, labels
4. **Grid Systems** - Multiple overlay densities
5. **Geometric Decorations** - Circles, squares, triangles
6. **Film Grain** - SVG noise overlay
7. **Scanlines** - CRT effect

### Tracks & Prizes (Separated)

**Core Tracks Section:**
- **Left**: Rotating canvas network with 4 orbiting nodes
- **Right**: Track descriptions with examples
- Animated connections between nodes
- Pulsing center hub

**Prize Carousel:**
- Slot machine vertical scroll (3s auto-rotate)
- 7 prizes with dithered sponsor logos
- Large prize amounts (text-5xl)
- Manual navigation dots
- Blur/opacity effects on non-active items
- All logos dithered except rev_logo.png

**Credits & Partners:**
- All sponsor logos included and dithered
- Rounded corners on logo containers
- Object-contain for irregular aspect ratios

## Next Steps

- [x] Sponsor logos added and dithered
- [x] All text lowercase (rev branding)
- [x] Tracks and prizes separated into distinct sections
- [x] Hero text instant render (no lag)
- [ ] Optimize 3D performance for mobile
- [ ] Add meta tags and Open Graph images
- [ ] Test carousel on various screen sizes
- [ ] Consider adding ambient sound toggle
- [ ] Implement analytics tracking
- [ ] Add accessibility improvements (ARIA labels)
- [ ] Test dither effect consistency across logo formats
