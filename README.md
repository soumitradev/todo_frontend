# ToDo++
## What?
This is the next level of my todo list web app. This time, it has a backend written in Python and powered by Flask. It is a CRUD app that uses a RESTful API. This is the code repository for the frontend. It can Create, Read, Update and Delete notes. It can store notes publicly, and you can access these notes from any device anywhere in the world. The frontend for this app is still a work in progress.

The backend API repo: [https://github.com/soumitradev/todo_backend](https://github.com/soumitradev/todo_backend)

I'm hosting this frontend on GitHub Pages.

I have hosted the backend API on Heroku, and you can make requests to it here:

[https://soumitradev-todo-api.herokuapp.com/api/v1/todo/all](https://soumitradev-todo-api.herokuapp.com/api/v1/todo/all)

It handles basic POST and GET requests to implement full CRUD functionality.

You can make a GET request to READ notes:
- You can read all notes by making a GET request (or just pasting the link in your browser) here: [https://soumitradev-todo-api.herokuapp.com/api/v1/todo/all](https://soumitradev-todo-api.herokuapp.com/api/v1/todo/all). This returns all the notes stored on the server in JSON text.
- You can read a specific note with a specific ID by making a GET request (or just pasting the link in your browser) like this:
[https://soumitradev-todo-api.herokuapp.com/api/v1/todo?id=<id>](https://soumitradev-todo-api.herokuapp.com/api/v1/todo?id=<id>). Remember to replace <id> with the ID you want to access though! If the id does not exist in the database, a 400 Bad Request Error will be returned along with a bit of JSON text giving more information on the error.

You can make a POST request to CREATE, UPDATE and DELETE notes:
- To CREATE a note, make a POST request to [https://soumitradev-todo-api.herokuapp.com/api/v1/todo](https://soumitradev-todo-api.herokuapp.com/api/v1/todo) with the fields `title` and `text`. The server returns the new note stored on the server as JSON text. This text contains the `id`, `title`, and `text` values. If the `title` and `text` fields are not given, a 400 Bad Request Error will be returned along with a bit of JSON text giving more information on the error.
> Eg:
    ```
    curl -d "title=My Own Title Text&text=This is my body text" -X POST https://soumitradev-todo-api.herokuapp.com/api/v1/todo
    ```
    will return `{ 'id': <id>, 'title': 'My Own Title Text', 'text': 'This is my body text'}` and store the note on the server.

- To UPDATE a note, make a POST request to [https://soumitradev-todo-api.herokuapp.com/api/v1/todo](https://soumitradev-todo-api.herokuapp.com/api/v1/todo) with the fields `id`, `title`, and `text`. The server returns the updated note stored on the server as JSON text. This text contains the `id`, `title`, and `text` values. If a note with that ID doesn't exist or if the `title` and `text` fields are not given, a 400 Bad Request Error will be returned along with a bit of JSON text giving more information on the error.

> Eg:
    ```
    curl -d "id=<id>&title=My New Title Text&text=This is my new body text" -X POST https://soumitradev-todo-api.herokuapp.com/api/v1/todo
    ```
    will return `{ 'id': <id>, 'title': 'My New Title Text', 'text': 'This is my new body text'}` and update the note on the server.

- To DELETE a note, make a POST request to [https://soumitradev-todo-api.herokuapp.com/api/v1/todo](https://soumitradev-todo-api.herokuapp.com/api/v1/delete) with the `id` field. The server returns the note that was deleted as JSON text. If a note with that ID doesn't exist, a 400 Bad Request Error will be returned along with a bit of JSON text giving more information on the error.

> Eg:
    ```
    curl -d "id=<id>" -X POST https://soumitradev-todo-api.herokuapp.com/api/v1/delete
    ```
    will return `{ 'id': <id>, 'title': 'My New Title Text', 'text': 'This is my new body text'}` and delete the note on the server.


**NOTE:** All the examples in the POST request section use `curl`. Make sure that `curl` is installed on your machine before making these requests. Another cross-platform alternative to `curl` is `PostMan` or `PostWoman`.

## Installation for backend API
### Requirements for backend API
Python 3 and some other flask modules. Install requirements using `pip install -r requirements.txt`.

### How can I run the API on my own machine?
Just run `python3 ./main.py` (Use python3) after installing requirements.


## Why?
I really want to learn more about connecting the frontend to the backend.

Also, why not?

## The Code is bad
I'm trying my best. If you really hate it that bad, just create an Issue or Pull Request.

## License
[MIT License](./LICENSE)
