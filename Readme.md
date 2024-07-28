# MERN Stack Todo app

This is a full stack Todo app built with the MERN stack. It uses **Mongo DB**, **Express js**, **React js** and **Node js**. It uses typescript as a primary language for both the frontend and backend.

## Setup the project

Make sure you have pnpm an mongo db compass installed in your system.

```bash
git clone https://github.com/sarmad426/mern-todo-app.git
```

Go to the project directory

```bash
cd mern-todo-app
```

**Setup the backend**:

```bash
cd backend
pnpm i
pnpm build
```

**Run the backend**:

```bash
pnpm start
```

**Setup the frontend**:

```bash
cd frontend
pnpm i
```

**Run the frontend**:

```bash
pnpm dev
```

## Setup the MERN project from scratch

```bash
md frontend backend
```

**Setup the backend:**

```bash
cd backend
pnpm init -y
```

**Add required dependencies:**

```bash
pnpm add express mongoose dotenv
pnpm add -D nodemon
pnpm add typescript ts-node @types/node @types/express
pnpm dlx tsc --init
```

**Setup the front end:**

```bash
cd frontend
pnpm create vite .
pnpm i
```

**Run the backend:**

```bash
pnpm start
```

It will start listening at port 5000. Test it at <http://localhost:5000/api/todos>

**Run the frontend:**

```bash
pnpm dev
```

Go to <http://localhost:5173/>

Todo app setup successful. 🎉
