# ChatApp

A simple, real-time web-based chat application. Built with core HTML and JavaScript for seamless communication. The app is containerized using Docker and follows a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins for automated testing and deployment.

## 🚀 Features

### Real-Time Messaging
- One-to-one chat support
- Instant message delivery
- Lightweight and responsive UI

### Simple Architecture
- **index.html**: Basic frontend interface for chat
- **index.js**: All core logic including DOM handling and message logic

## 🛠️ Tech Stack

### Frontend
- HTML5
- Vanilla JavaScript (ES6)

### DevOps & Tooling
- Docker for containerization
- Jenkins for CI/CD automation
- GitHub for version control and hosting

## 📦 Docker & Containerization

This project is fully containerized using **Docker**, making it easy to build, run, and deploy anywhere.

### 🐳 How to Run with Docker

1. **Build Docker Image**
   ```bash
   docker build -t chatapp .
   ```

2. **Run the Docker Container**
    ```bash
   docker run -p 8080:8080 chatapp
   ```

### CI/CD with Jenkins
- This project uses Jenkins to automate:
    - Code build
    - Docker image creation
    - Deployment to server/container

### Jenkins Pipeline Summary
- Uses Jenkinsfile defined in the root directory
- Automatically triggered on git push to the main branch
- Steps include:
    - Install dependencies (if any)
    - Build Docker image
    - Push to DockerHub (optional)
    - Deploy to container


### 🤝 Contributions
- Pull requests are welcome! Feel free to contribute with:
    - 🧠 Adding new chat features (e.g., emoji support, group chat)
    - 💡 Improving UI/UX or styling
    - 🐞 Fixing bugs or optimizing JavaScript
    - 📦 Creating a production-ready deployment setup
    - 📜 Writing better documentation or setup scripts


## 👏 Acknowledgments
- Docker
- Jenkins
- GitHub

## 📞 Contact
Your Name - haiderzaidi45h@gmail.com

Project Link - [GitHub Repository](https://github.com/haider-zaidi/chatApp)

