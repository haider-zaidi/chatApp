pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo 'Code is already present locally. Skipping clone...'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build('ichat-app')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove previous container if it exists
                    bat """
                        FOR /F "tokens=*" %%i IN ('docker ps -q --filter "name=chat-app-container"') DO (
                            docker stop chat-app-container
                            docker rm chat-app-container
                        )
                    """

                    // Run new container
                    bat 'docker run -d -p 8000:8000 --name chat-app-container ichat-app'
                }
            }
        }
    }

    post {
        success {
            echo 'Chat app deployed successfully!'
        }
        failure {
            echo 'Build or deploy failed!'
        }
    }
}
