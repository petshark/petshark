# PETSHARK!

## Docker Setup
- The `docker` folder contains the setup for deployable images.
  The same images are used as basis for the development setup.
- `docker-compose.yml` uses the deployable images and starts
  them with configuration tuned for development.

## Docker Compose Cheat Sheet (development)
- `docker-compose up`
- `docker-compose down`

## Docker Cheat Sheet (production)
- `docker build --file ./docker/adminer/Dockerfile --tag ps-adminer .`
- `docker run -p 80:8080 -e ADMINER_AUTOLOGIN=true ps-adminer:latest`
- `docker volume ls`
- `docker volume rm <volume-name>`
