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
                    // Stop and remove previous container if exists (Windows way)
                    bat '''
                        docker ps -q --filter "name=my-chat-app-container" | findstr . && (
                            docker stop my-chat-app-container
                            docker rm my-chat-app-container
                        )
                    '''

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
