# Exprex

Exprex is a small set of functions built on express meant for centralising routes & controllers, install by entering:

```bash
npm install exprex
```

## How to use

### Routes & Controllers

Routes & controllers are all in one JS object e.g:

```javascript
    const routeState = {
        get: {
            '/': {
                method: (req, res) => {
                    return res.send('This is a test controller for the / route.')
                }),
                middleware: [
                    (req, res, next) => {
                        console.log('Hi! I am a test middleware.');
                        next()
                    }
                ]
            },
        },
    }
```

The middleware key should contain an array of functions which is the same as inserting middleware in an 'app.get()' for example.

### Middleware

Middleware in exprex is in another object e.g:

```javascript
const middlewareState = {
    use: [
        (req, res, next) => {console.log('testUse');next()},
    ],
    set: [
        ['view engine', 'ejs']
    ],
    engine: [
        ['html', 'haml']
    ]
}
```

The 'use' key will put the middleware into an 'app.use' function.

The 'set' key will put the middleware into an 'app.set' function.

The 'engine' key will put the middleware into an 'app.engine' function

## How to use

```javascript
const exprex = require('exprex');

const GetIndex = (req, res) => {
    return res.send('Index');
}

const PostIndex = (req, res) => {
    return res.send('PostIndex');
}

const PutIndex = (req, res) => {
    return res.send('PutIndex');
}

const DeleteIndex = (req, res) => {
    return res.send('DeleteIndex')
}

const routeState = {
    get: {
        '/': {
            method: GetIndex,
            middleware: []
        },
    },
    post: {
        '/': {
            method: PostIndex,
            middleware: []
        }
    },
    put: {
        '/': {
            method: PutIndex,
            middleware: []
        }
    },
    delete: {
        '/': {
            method: DeleteIndex,
            middleware: []
        }
    },
}

const middlewareState = {
    use: [
        (req, res, next) => {console.log('testUse');next()},
    ],
    set: [
        ['view engine', 'ejs']
    ],
    engine: [
        ['html', 'haml']
    ]
}

exprex(routeState, middlewareState)
```

## License
[MIT](https://choosealicense.com/licenses/mit/)