const express = require('express');

class Exprex {
	constructor(routeState, middlewareState = {}) {
        this.app = express();
        this.port = 3000;
		this.routeState = routeState;
		this.middlewareState = middlewareState;
		this.routeKeys = Object.keys(this.routeState);
	}

	initialise() {
		this.configureApp();
		this.configureRoutes();
		this.listen();
	}

	configureRoutes() {
		for (let i = 0; i < this.routeKeys.length; i++) {
            console.log(this.routeKeys[i])
			switch (this.routeKeys[i]) {
				case 'get':
                    this.initialiseGetRoutes(this.routeState['get']);
                    continue
				case 'post':
                    this.initialisePostRoutes(this.routeState['post'])
                    continue
                case 'put':
                    this.initialisePutRoutes(this.routeState['put'])
                    continue
                case 'delete':
                    this.initialiseDeleteRoutes(this.routeState['delete'])
                    continue
                default:
                    console.log(`Unrecognised method: ${this.routeKeys[i]}`)
                    continue
			}
		}
	}

	initialiseGetRoutes(getRoutes) {
		const getRouteKeys = this.routesURIFriendly(Object.keys(getRoutes));
		for (let i = 0; i < getRouteKeys.length; i++) {
			getRoutes[getRouteKeys[i]].middleware ? 
				this.app.get(getRouteKeys[i], ...getRoutes[getRouteKeys[i]].middleware, getRoutes[getRouteKeys[i]].method) :
				this.app.get(getRouteKeys[i], getRoutes[getRouteKeys[i]].method)
		}
	}

	initialisePostRoutes(postRoutes) {
		const postRouteKeys = this.routesURIFriendly(Object.keys(postRoutes));
		for (let i = 0; i < postRouteKeys.length; i++) {
			postRoutes[postRouteKeys[i]].middleware ? 
				this.app.post(postRouteKeys[i], ...postRoutes[postRouteKeys[i]].middleware, postRoutes[postRouteKeys[i]].method) :
				this.app.post(postRouteKeys[i], postRoutes[postRouteKeys[i]].method);
		}
    }
    
    initialisePutRoutes(putRoutes) {
        const putRouteKeys = this.routesURIFriendly(Object.keys(putRoutes));
        for (let i = 0; i < putRouteKeys.length; i++) {
            putRoutes[putRouteKeys[i]].middleware ? 
                this.app.put(putRouteKeys[i], ...putRoutes[putRouteKeys[i]].middleware, putRoutes[putRouteKeys[i]].method) : 
                this.app.put(putRouteKeys[i], putRoutes[putRouteKeys[i]].method)
        }
    }

    initialiseDeleteRoutes(deleteRoutes) {
        const deleteRouteKeys = this.routesURIFriendly(Object.keys(deleteRoutes));
        for (let i = 0; i < deleteRouteKeys.length; i++) {
            deleteRoutes[deleteRouteKeys[i]].middleware ? 
                this.app.put(deleteRouteKeys[i], ...deleteRoutes[deleteRouteKeys[i]].middleware, deleteRoutes[deleteRouteKeys[i]].method) : 
                this.app.put(deleteRouteKeys[i], deleteRoutes[deleteRouteKeys[i]].method)
        }
    }

	configureApp() {
		if (this.middlewareState.use.length > 0) {
			this.configureUseMiddleware(this.middlewareState.use);
		}
		if (this.middlewareState.set.length > 0) {
			this.configureSetMiddleware(this.middlewareState.set);
		}
	}

	configureUseMiddleware(useMiddleware) {
		for (let i = 0; i < useMiddleware.length; i++) {
			this.app.use(useMiddleware[i]);
		}
	}

	configureSetMiddleware(setMiddleware) {
		for (let i = 0; i < setMiddleware.length; i++) {
			this.app.set(setMiddleware[i][0], setMiddleware[i][1]);
		}
    }
    
    configureEngineMiddleware(engineMiddleware) {
        for (let i = 0; i < engineMiddleware.length; i++) {
            this.app.engine(engineMiddleware[i][0], engineMiddleware[i][1]);
        }
    }

	routesURIFriendly(routeArray) {
		return routeArray.map(route => encodeURI(route).toLowerCase())
	}

	listen() {
		this.app.listen(this.port, err => {
			if (err) {
				return console.log(err);
			}

			return console.log(`Server listening on port: ${this.port}`)
		})
	}
}

module.exports = (routeState, middlewareState) => {
    const exprex = new Exprex(routeState, middlewareState);
    exprex.initialise();
}