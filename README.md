# expressBackend

This is my first attempts at programming a backend using express library.

### Introduction

The idea of this API is to store the films that a person watches.
There are film objects with some information like: Year, Title, User (who watched the film). There are also user objects that identify who watched a film.
The communication will be done with http requests (executed from an external application like Chrome or Postman). That requests will give you information with an object composed of an http code and a message.

### Objects

#### Film

`Film` is an interface to that has the posible information our films will have at the database.

```typescript
interface Film {
  user: string;
  title: string;
  year: number;
  viewingYear: number;
  duration?: number;
  link?: string;
}
```

#### HttpInfoResponse

`HttpInfoResponse` is an interface that specifies the response format. If a request doesn't response data, will responde an HttpInfoResponse object will the result of the execution.

```typescript
interface HttpInfoResponse {
  message: string;
  httpCode: number;
}
```

#### User

`User` is an interface that specifies the fields an User will have.

```typescript
interface User {
  userName: string;
  password: string;
  name: string;
  surname?: string;
  permission: permission;
}
```

The `User` object will user and enumeration to limit the permission field.

```typescript
enum permission {
  root = "root",
  user = "user",
}
```

### Database

#### MongoDB
Los datos se guardarán en una base de datos de `MongoDB`. Habrá 2 colecciones diferentes, una para los ususarios y otra para las películas.


### Structure

Router -> [Validator, Controller -> [Service -> [Models -> [Repository]]]]