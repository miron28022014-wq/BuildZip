# BuildZip

Universal local ZIP-to-application builder for Windows.

## Current capabilities
- Drag & drop ZIP projects.
- Automatic project detection.
- Android/Gradle APK builds.
- Electron Windows builds.
- .NET self-contained win-x64 publishing.
- Rust release builds.
- Node/Web builds.
- Python package builds.
- CMake builds.
- Live build logs.
- Sandboxed Electron renderer.

## Important
BuildZip does not magically convert arbitrary source code into every platform. A ZIP must contain a recognizable project and the required toolchain must be installed. The architecture is adapter-based so additional platforms can be added without rewriting the UI.

## Development
1. Install Node.js LTS.
2. Run `npm install`.
3. Run `npm start`.
4. For Windows installer: `npm run dist`.
