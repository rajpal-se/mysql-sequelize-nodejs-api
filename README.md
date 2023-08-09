## How to Start MySQL Server?

To Start the MySQL Server

```bash
docker compose up --build
```

To Stop the MySQL Server

```bash
docker compose down
```

>**Note:** PhpMyAdmin service will run on port 8080. http://localhost:8080/

To access MySQL Server from outside of docker

```
HOST: localhost
PORT: 6000
USER: root
PASSWORD: Password#12345
```

## How to start the project?

First open the terminal in the root folder of project.
```bash
npm install
npm start
```
**Note:** The server will run at http://localhost:5010/
