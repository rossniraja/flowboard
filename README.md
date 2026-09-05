# FlowBoard

A Kanban-style task management board built with React + Vite. Add tasks, move them across Todo / In Progress / Done, edit or delete them, and switch between Board, List, and Calendar views.

🔗 **Live demo:** [flowboard-views.vercel.app](https://flowboard-views.vercel.app/)

---

## Features

- **Kanban board view** — tasks organized into `Todo`, `Progress`, and `Done` columns
- **Multiple views** — toggle between Board, List, and Calendar layouts
- **Add / Edit / Delete tasks** — full CRUD on tasks via simple forms
- **Task metadata** — title, description, priority, and due date per task
- **Client-side state** — instant UI updates with React's `useState`, no backend needed

## Tech Stack

| Layer      | Tech                  |
|------------|-----------------------|
| Framework  | React 19              |
| Build tool | Vite 8                |
| Linting    | ESLint 10             |
| Deployment | Vercel                |

## Project Structure

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

## Getting Started

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

## Roadmap

- [ ] Drag-and-drop between columns
- [ ] Persistent storage (localStorage or a backend)
- [ ] Task filtering by priority / due date
- [ ] User auth for multi-user boards

## Author

**Rossni Raja**
[GitHub](https://github.com/rossniraja)

---

*Built as a personal project to practice React component architecture, state management, and deployment workflows.*
