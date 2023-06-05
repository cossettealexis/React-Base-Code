## API Requests (Axios)
The codebase has an API call interceptor and wrapper located at `src/utils/apiService.js`.  

#### I. Config Defaults
In axios, you can specify headers config that will be applied to every request in the request interceptors.
```javascript
    service.interceptors.request.use(function (config) {
    // Do something before request is sent
      try{
        let token = configureStore().getState().auth.credentials.authToken;
        //Change depending on your authorization token variable
        config.headers.common['Authorization'] = 'Bearer ' + token;
        config.headers.common['Content-Type'] = 'application/json';
      }catch{
        console.log("Unauthorized");
      }
      
      return config;
    }
    ................
```
`config.headers.common['Authorization']` - defines the default authentication scheme  
`config.headers.common['Content-Type']` - defines the default media type of the resource

#### II. Axios Interceptor and Wrapper

The purpose of the interceptor is to have a uniform custom actions before and after sending API requests.

##### Request Interceptor
```javascript
	service.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
```

##### Response Interceptor
Inside the constructor:
```javascript
	//Response Interceptor
    service.interceptors.response.use(this.handleSuccess, this.handleError);
```
Outside the constructor:

```javascript
  handleSuccess(response) {
    return response;
  }

  //Update actions for error handling
  handleError = (error) => {
    const status = error.response ? error.response.status : null;
    switch (status) {
      case 401:
        //Your actions for 401 error code
        console.error(error);
        break;
      case 404:
      	//Your actions for 404 error code
        alert(error);
        break;
      default:
      	//Your actions for other error codes
        console.error(error);
        break;
    }
    return Promise.reject(error);
  }
```

##### Wrapper
The `apiService.js` file contains a wrapper functions for token, get, patch, post, and delete requests.  
The purpose of the wrapper is to have a uniform api calls throughout the app.  

```javascript
  //Retrieving data from api
  get(path) {
    return this.service.get(path);
  }
  
  //OAUTH2 Token Request
  token(payload) {
    let params = new URLSearchParams();
    params.append('username', payload.username);
    params.append('password', payload.password);
    params.append('grant_type', "password");
    
    return this.service.request({
      method: 'POST',
      url: REST_SERVICE_URL_ROOT+"/oauth/token",
      responseType: 'json',
      params: params,
      headers: {
        "Authorization": "Basic "+btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => { return response});
  }
  
  //Update record
  patch(path, payload) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => {return response});
  }

  //Add record
  post(path, payload) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => {return response});
  }

  //Delete record
  delete(path, payload) {
    return this.service.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => {return response});
  }
```

#### II. Usage
In the codebase, the API calls are usually defined under the module's [ducks](./DucksPattern.md) folder in `operations.js` file.


1. Import the `ApiService` util into the file
```javascript
	import ApiService from "../../../../utils/apiService";
``` 

2. Use the `ApiService` for API call like the following:
##### TOKEN
```javascript
    ApiService.token({username, password})
    .then((response)=>{
        //do something
    })
``` 
##### GET
```javascript
    ApiService.get("/testpath")
    .then((response)=>{
        //do something
    })
``` 
##### PATCH
```javascript
    ApiService.patch("/testpath/posts/3", payload)
    .then((response)=>{
        //do something
    })
``` 
##### POST
```javascript
    ApiService.post("/testpath/posts", payload)
    .then((response)=>{
        //do something
    })
``` 
##### DELETE
```javascript
    ApiService.delete("/testpath/posts/3", payload)
    .then((response)=>{
        //do something
    })
``` 

#### III. Official Documentation
To learn more about axios, refer [here](https://github.com/axios/axios) for the official documentation.