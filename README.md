###ChennaFlix
ChennaFlix is a full-fledged online video streaming platform inspired by popular services like Netflix. It provides a vast library of movies and TV shows to users with an intuitive interface, seamless playback experience, and personalized recommendations.

##Tech Stack
#Backend:
Language: Java (Spring Boot)
Database: PostgreSQL (for user data and media catalog)

#Frontend:
Framework: Angular
Styling: CSS / SASS / Bootstrap

#Prerequisites
Java 17
Node.js (v14+) and npm (v6+)
MySQL/PostgreSQL
Docker (Optional but recommended for deployment)
Git
Docker Containerization

The ChennaFlix application is fully containerized using Docker, which simplifies the deployment process and ensures consistency across different environments. To run the application within Docker containers, make sure Docker is installed and follow these steps:

#Clone the repository:
bash
git clone https://github.com/your-username/ChennaFlix.git
cd ChennaFlix

#Build and run the Docker containers:
bash
docker-compose up --build

#Access the application:
Frontend: Visit http://localhost:4200 to use the ChennaFlix frontend.
Backend: The backend runs on http://localhost:8000 and interacts with the database.
