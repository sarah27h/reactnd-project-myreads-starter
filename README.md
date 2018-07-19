MyReads: A Book Lending App (frontend-nanodegree)
===============================

## Table of Contents

* [About the Project](#about-the-project)
* [Installing Instructions](#installing-instructions)
* [Backend Server](#backend-server)
* [Credits](#credits)
* [License](#license)

## About the Project

This project is part of the FEND Nanodegree and it is a book lending app enable users to have their own library (MyReads) and move books within 3 types of shelves (currently reading, want to read and read) and allow them also to search for more books in the main library and give them options to select more books and add them to their own library (MyReads).
Note: use search terms provided in the SEARCH_TERMS.md file to search for books because the search from BooksAPI is limited to a those particular set of search terms.
This project built using React.

## Installing Instructions 

- download zip folder or clone project > https://github.com/sarah27h/reactnd-project-myreads-starter.git
- cd to your project directory then:
    install all project dependencies with `npm install`
    open project in browser and start the development server with `npm start`


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Credits

- React Docs https://reactjs.org/docs/getting-started.html
- https://developer.mozilla.org/en-US/
- w3schools.com
- stackoverflow
- https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e

## License

This project is licensed under the terms of the <a href="https://choosealicense.com/licenses/mit/" rel="nofollow">MIT</a> license.
