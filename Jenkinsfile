pipeline {
    agent any

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Clone Code') {
            steps {
                script {
                    echo 'Code is already present locally. Skipping clone...'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image...'
                    bat 'docker build -t "ichat-app" .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    echo 'Stopping and removing existing container if it exists...'
                    bat '''
                        for /F "tokens=*" %%i in ('docker ps -q --filter "name=ichat-app"') do (
                            docker stop %%i
                            docker rm %%i
                        )
                    '''
                    echo 'Running new Docker container...'
                    bat 'docker run -d --name ichat-app -p 3000:3000 ichat-app'
                }
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                script {
                    echo 'Build or deploy failed!'
                }
            }
        }
    }

    post {
        failure {
            echo 'Build failed!'
        }
        success {
            echo 'Build succeeded!'
        }
    }
}
