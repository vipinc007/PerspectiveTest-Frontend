## How to setup the frontend application

### Requirements

- Download and install Docker and Docker compose
- Install NodeJs 10.x.x
- Download [Git](https://git-scm.com/download/) , if you do not have this already installed.
- Clone the "dev" branch of the repo.

### Backend API Configuration

You will need to change the API configuration in the file "src/settings/AppSettings.jsx"

- Change the value for the variable "BACKEND_API_URL". This url should be the the backend api url. The url should should be the root url and should end with a "/".

### Installation

- Build a docker image `docker-compose up --build`. This will build and run the docker container.
- To list the running containers `docker ps`. This will display `CONTAINER ID`
- To kill a running container `docker kill <container-id>`

### Start a server

- To start the docker container `docker-compose up`
- App server available at - `http://localhost:3000/`

### Troubleshooting

If there are issues and you want to delete all your volumes and start fresh.

- `docker system prune`
- `docker container prune`
- `docker image prune`
- `docker network prune`
- `docker volume prune`

### Remove docker volume and unused containers

- `docker rmi $(docker images -q)`
- `docker volume prune`
