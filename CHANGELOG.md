# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security

- Removed unused suspicious dependency "6@0.0.1" (test package from 2014)

### Fixed

- Fixed responsive design issues on mobile devices
- Control panel now properly scales with smaller screens using reduced padding and font sizes
- Main content card width adjusted for mobile (max-w-sm on mobile, max-w-xl on larger screens)
- Action buttons now display as full-width on mobile, side-by-side on tablet/desktop
- Header text sizes now scale correctly across all breakpoints
- Improved spacing and layout consistency on small screens
- Stats section (4 Variants, TypeScript, MIT) now has proper mobile spacing

### Changed

- Updated React from 19.2.1 to 19.2.4
- Updated Vite from 7.2.6 to 7.3.1
- Updated all development dependencies to latest stable versions

## [1.0.7] - 2024-12-06

### Changed

- Complete redesign of demo interface with modern UI/UX
- Enhanced control panel with gradient buttons and improved styling
- Added interactive variant selection with visual feedback
- Improved code preview with syntax highlighting
- Enhanced main content card with gradient effects and better typography
- Added GitHub and NPM icons to action buttons
- Improved responsive design and visual hierarchy

## [1.0.6] - 2024-12-06

### Changed

- Translated documentation to English
- Added CHANGELOG.md file

## [1.0.5] - 2024-12-05

### Changed

- Improved component performance
- Updated dependencies

## [1.0.0] - 2024-12-01

### Added

- ✨ Initial release of NumericBackground component
- 🎨 Support for 4 variants: multicolor, single, opacity, matrix
- ⚙️ Configurable props for color, opacity, size and custom numbers
- 📦 Optimized build with tree-shaking
- 🔧 Full TypeScript support
