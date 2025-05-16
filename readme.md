# Task Tracker

A simple RESTful API for managing tasks using Node.js, Express, and MongoDB.

## Description

This application allows you to create, read, update, and delete tasks, as well as filter them by status (`todo`, `in-progress`, `done`). It uses MongoDB for data storage and Mongoose for object modeling.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible via network) I am using locally 

### Installation

1. **Clone the repository:**
   ```sh
   git clone [https://github.com/Shambhogit/Task-Tracker.git](https://roadmap.sh/projects/task-tracker)
   cd Task-Tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Edit the `.env` file to set your MongoDB connection string and port:
   ```
   MONGO_URL='mongodb://127.0.0.1:27017/task-tracker'
   PORT=3000
   ```

4. **Start MongoDB** (if not already running):
   ```sh
   mongod
   ```

5. **Start the application:**
   ```sh
   npm start
   ```

   The server will run on `http://localhost:3000` (or the port you set in `.env`).

---

## Application Workflow

1. **Server Initialization:**  
   The app loads environment variables, connects to MongoDB using [`connectToDB`](config/database.js), and sets up Express middleware for JSON and URL-encoded data.

2. **Routing:**  
   All task-related endpoints are available under `/api/tasks` and handled by [`routes/tasks.routes.js`](routes/tasks.routes.js).

3. **Data Model:**  
   Tasks are defined using a Mongoose schema in [`models/task.model.js`](models/task.model.js) with fields: `title`, `description`, `status`, and timestamps.

---

## API Endpoints

All endpoints are prefixed with `/api/tasks`.

### 1. Get All Tasks

- **Endpoint:** `GET /api/tasks`
- **Description:** Retrieve all tasks.
- **Example Response:**
  ```json
  {
    "tasks": [
      {
        "_id": "664a1e...",
        "title": "Buy groceries",
        "description": "Milk, Bread, Eggs",
        "status": "todo",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ]
  }
  ```

---

### 2. Get Task by ID

- **Endpoint:** `GET /api/tasks/:id`
- **Description:** Retrieve a single task by its ID.
- **Example Response:**
  ```json
  {
    "task": {
      "_id": "664a1e...",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": "todo",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
  ```

---

### 3. Create a Task

- **Endpoint:** `POST /api/tasks`
- **Description:** Create a new task.
- **Request Body:**
  ```json
  {
    "title": "Read a book",
    "description": "Read 20 pages",
    "status": "todo"
  }
  ```
- **Example Response:**
  ```json
  {
    "task": {
      "_id": "664a1e...",
      "title": "Read a book",
      "description": "Read 20 pages",
      "status": "todo",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
  ```

---

### 4. Update a Task

- **Endpoint:** `PUT /api/tasks/:id`
- **Description:** Update an existing task by ID.
- **Request Body:** (fields to update)
  ```json
  {
    "status": "done"
  }
  ```
- **Example Response:**
  ```json
  {
    "updatedTask": {
      "_id": "664a1e...",
      "title": "Read a book",
      "description": "Read 20 pages",
      "status": "done",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
  ```

---

### 5. Delete a Task

- **Endpoint:** `DELETE /api/tasks/:id`
- **Description:** Delete a task by ID.
- **Example Response:**
  ```json
  {
    "message": "Task deleted"
  }
  ```

---

### 6. Filter Tasks by Status

#### a. Get All "todo" Tasks

- **Endpoint:** `GET /api/tasks/filter/todo`
- **Example Response:**
  ```json
  {
    "todoTasks": [
      {
        "_id": "664a1e...",
        "title": "Buy groceries",
        "status": "todo"
      }
    ]
  }
  ```

#### b. Get All "done" Tasks

- **Endpoint:** `GET /api/tasks/filter/done`
- **Example Response:**
  ```json
  {
    "doneTasks": [
      {
        "_id": "664a1e...",
        "title": "Read a book",
        "status": "done"
      }
    ]
  }
  ```

#### c. Get All "in-progress" Tasks

- **Endpoint:** `GET /api/tasks/filter/in-progress`
- **Example Response:**
  ```json
  {
    "inProgressTasks": [
      {
        "_id": "664a1e...",
        "title": "Write code",
        "status": "in-progress"
      }
    ]
  }
  ```

---

## Error Handling

- All endpoints return appropriate HTTP status codes.
- If a task is not found, a 404 response is returned.
- On server/database errors, a 500 response is returned with an error message.

---

## File Structure

- [`index.js`](index.js): Entry point, sets up server and routes.
- [`config/database.js`](config/database.js): MongoDB connection logic.
- [`models/task.model.js`](models/task.model.js): Task schema/model.
- [`routes/tasks.routes.js`](routes/tasks.routes.js): All task-related API routes.
- `.env`: Environment variables for MongoDB and server port.

---

## Example Usage (with curl)

- **Create a Task:**
  ```sh
  curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"title":"Test Task","description":"Test Desc"}'
  ```

- **Get All Tasks:**
  ```sh
  curl http://localhost:3000/api/tasks
  ```

- **Update a Task:**
  ```sh
  curl -X PUT http://localhost:3000/api/tasks/<task_id> -H "Content-Type: application/json" -d '{"status":"done"}'
  ```

- **Delete a Task:**
  ```sh
  curl -X DELETE http://localhost:3000/api/tasks/<task_id>
  ```

---

## Author
Shambho Jaybhaye 
