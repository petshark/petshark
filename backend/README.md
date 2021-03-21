# PETSHARK! Backend

## Data Source and Flyway
- Tables are created automatically by Hibernate (from the defined entities) every time the program launches.
- Flyway, hence, skips V1 (create_tables) migration scripts and only runs V2 (add_sample_data) scripts.

## Authentication
Test page at `/admin` requires authentication.     
Login credentials:
- role: ADMIN
    - username: admin
    - password: admin
- role: USER
    - username: user
    - password: user