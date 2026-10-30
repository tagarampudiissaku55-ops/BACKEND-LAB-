
# Backend Development Fundamentals — Lab 1
## Node.js and Express Server

### 1. Student Details

- **Student Name:** Tagarampudi Issaku
- **Student ID / Registration Number:** 252U1R9155
- **Course:** B.Tech — Computer Science and Engineering
- **Year / Semester:** 2nd Year and 2 Term 
- **Section:** 112
- **University / Institution:** Aurora Deemed To Be University 
- **Faculty Name:** Mr D Joel Prasahnth
- **Lab:** Backend Development Fundamentals — Lab 1

---

### 2. Project Objective

The objective of this lab is to understand the fundamentals of backend development using Node.js and Express.js.

This project demonstrates how to create an HTTP server using Node.js's built-in `http` module and how to build a web application using Express.js. It also demonstrates HTTP methods, routing, JSON responses, status codes, middleware, and handling unknown routes.

### 3. Technologies Used

- Node.js
- Express.js
- JavaScript
- npm (Node Package Manager)
- Visual Studio Code
- Git and GitHub
- Render (deployment)

### 4. Project Structure

```text
Backend-Development-Lab-01/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

**File descriptions:**

- `server.js` — Creates a basic HTTP server using Node.js.
- `app.js` — Creates an Express application with four route behaviors.
- `package.json` — Contains project metadata and dependencies.
- `package-lock.json` — Records the resolved npm dependency versions.
- `.gitignore` — Excludes files and folders that should not be tracked by Git.
- `screenshots/` — Stores screenshots of the application endpoints.
- `README.md` — Documents the project, setup, testing, and results.

### 5. Installation and Setup

#### Prerequisites

Install Node.js LTS and Visual Studio Code.

Verify the installation:

```bash
node -v
npm -v
```

#### Step 1: Initialize the project

```bash
npm init -y
```

#### Step 2: Install Express

```bash
npm install express
```

The `npm install express` command installs Express and adds it to the project's dependencies.

If the project dependencies are already recorded in `package.json` and `package-lock.json`, run `npm install` to install them.

#### Step 3: Run the Node.js HTTP server

```bash
node server.js
```

Open the following URL in your browser:

http://localhost:3000

The server responds with:

```text
Hello
```

#### Step 4: Run the Express server

Stop the basic HTTP server before starting Express if both use port 3000.

```bash
node app.js
```

Open the following URL:

http://localhost:3000

The Express application displays its welcome message.

### 6. API Endpoints

The Express application provides the following endpoints:

| Method | Endpoint | Description | Expected Status |
|---|---|---|---|
| GET | `/` | Returns a welcome message | 200 OK |
| GET | `/about` | Returns student details as JSON | 200 OK |
| GET | `/time` | Returns the current date and time as JSON | 200 OK |
| GET | `/unknown` | Returns a not-found response | 404 Not Found |

#### Example responses

**Home — `GET /`**

```text
Welcome to my Backend Development Lab 1!
```

**About — `GET /about`**

```json
{
  "name": "YOUR NAME",
  "section": "YOUR SECTION"
}
```

Replace these example values with your actual student details in `app.js`.

**Time — `GET /time`**

```json
{
  "currentDateTime": "2026-10-29T10:00:00.000Z"
}
```

The timestamp above is an illustrative example. The application generates the actual value dynamically using `new Date()`.

**Not Found — `GET /unknown`**

```json
{
  "error": "404 - Page Not Found"
}
```

### 7. Screenshots

The following screenshots should be captured from the running application and saved in the `screenshots/` directory.

#### Home Route

![Home Route](./screenshots/home.png)

#### About Route

![About Route](./screenshots/about.png)

#### Time Route

![Time Route](./screenshots/time.png)

#### Not Found Route

![Not Found Route](./screenshots/not-found.png)

### 8. Problems Faced and Solutions

Complete this section based on the issues you actually encountered during development.

| Problem | Solution |
|---|---|
| [Describe an actual issue] | [Explain how you resolved it] |
| [Describe another issue, if applicable] | [Explain the solution, if applicable] |

Do not list problems you did not experience.

### 9. Learning Outcomes

Through this lab, I aim to learn how to:

- Create an HTTP server using Node.js.
- Build a web server using Express.js.
- Understand request and response objects.
- Define routes using `app.get()`.
- Return text and JSON responses.
- Use HTTP status codes such as 200 and 404.
- Handle unknown routes using middleware.
- Test endpoints in a web browser.
- Manage project dependencies using npm.
- Use GitHub for version control and Render for deployment.

### 10. Deployment on Render

The Express application is intended to be deployed on Render as a Web Service.

**Build command:**

```bash
npm install
```

**Start command:**

```bash
node app.js
```

The application uses the following port configuration:

```javascript
const PORT = process.env.PORT || 3000;
```

This allows Render to provide the port required by the deployment environment.

**Live Application URL:** [Add your actual Render URL after successful deployment]

Example endpoint paths after deployment:

- `https://your-service.onrender.com/`
- `https://your-service.onrender.com/about`
- `https://your-service.onrender.com/time`
- `https://your-service.onrender.com/unknown`

Replace `your-service.onrender.com` with your real Render domain.

### 11. Git and GitHub

The project can be maintained using Git and submitted through a personal GitHub repository.

Create a `.gitignore` file containing:

```gitignore
node_modules/
.env
```

This prevents Git from tracking the installed dependency folder and environment-variable secrets.

To upload the project using Git:

```bash
git init
git add .
git commit -m "Complete Backend Development Fundamentals Lab 1"
```

Connect your own GitHub repository and push the code using the repository's actual remote URL.

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git branch -M main
git push -u origin main
```

If your project is already connected to a remote repository, check the existing configuration before adding another remote.

### 12. Conclusion

This lab introduces the fundamentals of backend development using Node.js and Express.js. It demonstrates basic server creation, routing, JSON responses, HTTP status codes, middleware, and preparation for deployment.

The completed project provides a foundation for learning more advanced backend concepts, including REST APIs, database integration, authentication, and application deployment.

---

**Submission Repository:** [Add your GitHub repository URL]

**Live Deployment:** [Add your actual Render URL]
