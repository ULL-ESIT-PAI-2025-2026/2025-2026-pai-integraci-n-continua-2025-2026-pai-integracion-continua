[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/3Ro_9NPx)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23516292&assignment_repo_type=AssignmentRepo)
# :school: PAI Lab assignment [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple interactive Graphic web Application in vanilla Typescript

## Purpose

- This project simulates projectile motion in a browser using HTML5 Canvas and TypeScript.
- It models the physics of a projectile under constant gravity.
- A mathematical coordinate system is mapped to screen coordinates for rendering.
- The system draws axes, ticks, and labels to represent the graph space.
- The projectile trajectory is updated over time using numerical simulation.
- A controller manages the animation loop and physics updates.
- The model stores position, velocity, and gravity state.
- The view renders the projectile and its trajectory dynamically on the canvas.
- User inputs define initial conditions such as velocity, angle, height, and gravity.
- A secondary view displays real-time simulation results like time, distance, and maximum height.

## Project Directory Structure

This application consists of Typescript, HTML and CSS files. This means that there are no frameworks involved.

The project directory organization is as follows:

```text
.
├── LICENSE
├── p10_ProjectileAnimation.md
├── package.json
├── public
│   ├── index.html
│   └── styles.css
├── README.md
├── scripts
│   └── dev-server.js
├── src
│   └── exercises
│       ├── bouncing-ball-animation-example
│       │   ├── animation.html
│       │   ├── Ball.ts
│       │   ├── dist
│       │   ├── main.ts
│       │   ├── package.json
│       │   ├── package-lock.json
│       │   ├── README.md
│       │   ├── styles.css
│       │   ├── tsconfig.json
│       │   └── ViewAnimation.ts
│       ├── evaluation-exercise1-title
│       └── home-work
|           ├── parabolic-trajectory
|           |    ├──controller
|           |    |  └projectile-controllers.ts
|           |    ├──model
|           |    |  └projective-model.ts
|           |    ├──view
|           |    |  ├──graph
│           |    |  |  ├graph-config.ts
│           |    |  |  └graph.ts
|           |    |  ├──controls-view.ts
|           |    |  ├──information-view.ts
|           |    |  ├──projectile-view.ts
|           |    |  └──trajectory-view.ts
|           |    ├──luis-estevez-ivan-parabolic-trajectory.html
|           |    └──main.ts
│           ├── doc
│           └── uml
└── tsconfig.json
```

## Building and Running the code 

```bash
npm install
```

```bash
npm run build
```

```bash
npm run conect
```

## Building and Running the code y Live Demo. 

## 👨‍💻 Author

**Iván Luis Estévez**

---

## 📄 License

This project is licensed under the **MIT License**.

---

**Remember** to remove all binary files and empty directories in the final version of the project
