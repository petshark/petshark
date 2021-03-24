# PETSHARK! Backend

## Data Source and Flyway
- Tables are created automatically by Hibernate (from the defined entities) every time the program launches.
- Flyway, hence, skips V1 (create_tables) migration scripts and only runs V2 (add_sample_data) scripts.

## Authentication
### Login form
Test page at `/admin` requires authentication by users of type "ADMIM" via the login form.     
### API requests
API requests can be authenticated by users of both type "USER" and "ADMIN" via Basic HTTP Authentication.
An example request with cURL would be:
```
curl --user username:password localhost:8080/api
```
### Login credentials for both login form and API requests are:
- role: ADMIN
    - username: admin
    - password: admin
- role: USER
    - username: user
    - password: user