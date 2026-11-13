# Sohaib Abdullah Sadiq — 3D Cyber Portfolio

An eye-catching, realistic 3D portfolio website built with **React**, **Three.js**, **Tailwind CSS**, **Lucide Icons**, and **Vite**.

Designed with a **Product Engineer mindset**, combining realistic 3D WebGL scenes, interactive hardware telemetry, and tactile 3D perspective physics to highlight Sohaib's triple strengths:
1. **Enterprise Data Center Administration** (NTC Data Center, Windows/Linux Server operations, VMware, 99.9% uptime).
2. **Modern Web Engineering** (React.js, Next.js, Redux, RESTful APIs, ShadCN).
3. **High-Fidelity 3D Simulation** (Awarded Best Final Year Project for *Operation Black Mirage* in Unreal Engine 5).

---

## 🚀 3D & Realism Features

- **Interactive 3D Server Core (`ServerCore3D.jsx`)**:
  - Full 360° interactive drag-to-orbit WebGL scene rendered in Three.js.
  - Realistic point-light bloom, metallic chassis plates, rotating orbital data rings, and live processor temperature telemetry (`36.4°C`).
  - **3 Switchable 3D Visual Modes**:
    1. `Data Center Core`: Enterprise server rack node with live pulsing status LEDs.
    2. `UE5 3D Terrain`: Real height-map 3D wireframe mesh representing the Kupwara mountain terrain from *Operation Black Mirage*.
    3. `Cloud Network`: Interconnected 3D distributed lattice representing modern microservices.
- **Ambient 3D Particle Stream & Ground Grid (`Background3D.jsx`)**:
  - High-performance Three.js background canvas with 700+ streaming data packets and an enterprise server room ground grid that dynamically reacts to mouse position.
- **Tactile 3D Tilt Cards (`Card3D.jsx`)**:
  - Physics-based 3D rotation (`rotateX`, `rotateY`, `translateZ`) on hover.
  - Dynamic specular glare light effect that tracks mouse movement across tempered glass and metallic card surfaces.
- **Realistic Telemetry & Diagnostics Terminal (`SystemTerminal.jsx`)**:
  - CRT Scanline toggle (`[CRT ON/OFF]`) with authentic retro-futuristic scanlines.
  - Executable diagnostic queries (`help`, `sysinfo`, `skills`, `experience`, `projects`, `award`, `contact`, `clear`) + single-click chips.
  - Realistic server rack activity lights (`RACK_DC-01: ONLINE | NIC: 10Gbps | RAID 10 OK`).

---

## 🛠️ Tech Stack

- **3D Engine**: Three.js
- **Framework**: React 18
- **Styling**: Tailwind CSS v3 with custom glow utilities and 3D perspectives
- **Icons**: Lucide React
- **Build Tool**: Vite 6

---

## 💻 Running the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
