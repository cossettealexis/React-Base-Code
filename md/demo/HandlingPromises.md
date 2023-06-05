## Handling Promises on API Calls from Components
### Objective  
* Manage promises of API calls from Component side
##### Desired flow:
* For example, you have a function in your component that calls an API to update a record from the database.
* If the update was `successful`, redirect to a different page
* If the update `failed`, alert an error message

##### Solution:
##### 1. In your module ducks `operations.js` file, add "return" to your API call.
EXAMPLE:
```javascript
const updateData = (values) => () =>{
    //Add "return" to the API call
    return ApiService.patch("http://backendURL/update/1", values)
       .then((response)=>{
            //This will be the data to be returned to your component
            return response.data
       })
};
```

##### 2. In your component file, call the props operations method and access promise.
```javascript

apiCallUpdate = (values) => {
    this.props.updateDate(values)
    .then((response)=>{        //response from operations.js method
        if(/*Response is success*/){
            //Redirect if successful
            this.props.history.push("/routeToRedirect");
        }else{
            /*Response is failed*/
            alert("Error: Please try again")
        }
    })
  }
  ```