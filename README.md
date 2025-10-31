# Task Tracker

A simple full-stack app for managing tasks.

## Tech Stack
- Backend: Node.js + Express + SQLite3
- Frontend: React + Axios

## Setup Instructions
1. Clone repo  
2. `cd backend && npm install && node server.js`  
3. `cd frontend && npm install && npm start`  
4. Backend runs on `http://localhost:3000`, frontend on `http://localhost:5173`

## API Endpoints
| Method | Endpoint | Description |
|--------|-----------|--------------|
| POST | /tasks | Create task |
| GET | /tasks | List all tasks |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete task |
| GET | /insights | Get summary of task statuses |
