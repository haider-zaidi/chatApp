pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials'  // Jenkins credentials ID for Docker Hub
        GITHUB_CREDENTIALS = 'github-credentials'          // Jenkins credentials ID for GitHub
        CONTAINER_NAME='ichat-app'
        DOCKER_IMAGE_NAME = 'haiderzaidi123/ichat-app'
    }
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Checkout the code from GitHub
                    checkout scm
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    bat 'docker build -t %DOCKER_IMAGE_NAME% .'
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub using stored credentials
                    docker.withRegistry('', DOCKER_HUB_CREDENTIALS) {
                        // Push the Docker image to Docker Hub
                        bat "docker push %DOCKER_IMAGE_NAME%"
                    }
                }
            }
        }
        stage('Running a container') {
            steps {
                script {
                    bat '''
                    docker stop %CONTAINER_NAME% || exit 0
                    docker rm %CONTAINER_NAME% || exit 0
                    docker run -d -p 8000:8000 --name %CONTAINER_NAME% %DOCKER_IMAGE_NAME%
                '''
                }
            }
        }
    }
    post {
        always {
            // Clean up the Docker image after the job completes
            bat 'docker rmi %DOCKER_IMAGE_NAME%'
        }
    }
}
