# Cluster Test Project V2
This is an attempt to run a simple Keycloak cluster in a Docker container.  It has:
 - A Keycloak server
 - A Postgres SQL database
 - A frontend to log into
 - A backend server

Currently, the backend server is not working in a Docker container.  It is an issue with how Docker Desktop works on 
the Mac.  For now, it returns an HTTP 403 code when invoked.

## Source
This was adapted from Chapter 2 of the book
[Keycloak - Identity and Access Management for Modern Applications](https://drive.google.com/file/d/1-RvgN7mb4Y_h5y4t4nHGMlgO25MoNhK2/view).

See Chapter 2 of the book for more information.

## Admin Account
```text
http://localhost:8080/auth
```
Brings up the administration console.

Username: admin

Password: admin

## To Run
```text
docker-compose up -d --force-recreate
```

Then use this hyperlink [http://localhost:8000](http://localhost:8000).

**Note** that before running this, it is important that the *myrealm* and a user is created, as shown in Chapter 1, page 11.  Then, *myclient*
should be created, as shown in Chapter 2, page 23.

## To Stop
```text
docker-compose down
```


## To Reset The Database
Delete the *postgres* directory.  You may have to stop and start the project twice.

