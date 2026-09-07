<div align="center">

# 🗂️ FlowBoard

**A Kanban-style task management board — built to feel like the real thing, not a tutorial clone.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)](https://flowboard-views.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)

**[🔗 Live Demo](https://flowboard-views.vercel.app/)** · **[Report Bug](https://github.com/rossniraja/flowboard/issues)** · **[Author](https://github.com/rossniraja)**

</div>

---

### Three views. One source of truth. Zero backend.

FlowBoard isn't just a drag-and-drop toy — it's the same task list rendered three different ways (Board / List / Calendar), all synced off one shared state, with persistence so your board survives a refresh.

<div align="center">
  <img src="./docs/demo-board.gif" alt="Kanban board with drag and drop" width="700"/>
  <p><i>Drag a card, watch it persist. No page reload required.</i></p>
</div>

---

## ✨ Features

| | |
|---|---|
| 🧱 **Kanban board** | Tasks organized into `Todo` → `Progress` → `Done` columns |
| 🖱️ **Drag & drop** | Move cards between columns via `dnd-kit`, state updates instantly |
| 💾 **Persistent storage** | Tasks saved to `localStorage` — refresh the page, your board's still there |
| 🔄 **Multi-view sync** | Board, List, and Calendar are three lenses on the *same* state, not three separate data sources |
| ✏️ **Full CRUD** | Add, edit, and delete tasks with title, description, priority, and due date |
| ⚡ **Instant UI** | Powered by React's `useState`/`useEffect` — no API calls, no loading spinners |

<div align="center">
  <img src="./docs/demo-views.gif" alt="Switching between Board, List, and Calendar views" width="700"/>
  <p><i>Same data, three views — Board → List → Calendar.</i></p>
</div>

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| **Framework** | React 19 |
| **Build tool** | Vite 8 |
| **Drag & drop** | dnd-kit |
| **Linting** | ESLint 10 |
| **Persistence** | `localStorage` (browser-native, no backend) |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Board.jsx          # Kanban board layout, task state orchestration
│   ├── column.jsx         # Single column (filters tasks by status)
│   ├── card.jsx            # Individual task card
│   ├── AddTaskForm.jsx     # New task creation form
│   ├── EditTaskForm.jsx    # Edit existing task
│   ├── ListView.jsx        # Flat list view of all tasks
│   └── CalendarView.jsx    # Calendar-based task view
├── App.jsx                 # View switching + top-level task state
└── main.jsx                 # App entry point
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/rossniraja/flowboard.git
cd flowboard

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

---

## 🗺️ Roadmap

- [x] Drag-and-drop between columns
- [x] Persistent storage (`localStorage`)
- [ ] Task filtering by priority / due date
- [ ] Backend sync (Node/Express) for multi-device persistence
- [ ] User auth for multi-user boards

---

## 👩‍💻 Author

**Rossni Raja**

[![GitHub](https://img.shields.io/badge/GitHub-rossniraja-181717?logo=github&style=flat-square)](https://github.com/rossniraja)

---

<div align="center">
  <sub>Built as part of a frontend portfolio — feedback and PRs welcome.</sub>
</div>
