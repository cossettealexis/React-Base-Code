# JSON-SERVER

### What is json-server?
**`json-server`** is an npm package that allow developers to create a full fake REST API that can be used for prototyping and mocking. This `json-server` was used in this codebase to have a running server with the dummy data saved in a `.json` file.

### Getting started
Make sure you have `node` installed in your computer.  
Download Node: https://nodejs.org/en/download/   

##### **Install JSON Server**  
Download it globally so you can use it anywhere.
```
npm install -g json-server
```

##### **Create your json-server file**
1. Create a `json` file in any directory.
2. Populate the file with dummy data
    ```
    {
        "entries": [
            {
              "id": "1",
              "app": "Jinjaguars",
              "company": "Jenga Inc.",
              "description": "Mobile application game"
            },
            {
              "id": "2",
              "app": "TigerMania",
              "company": "Jungle Corp.",
              "description": "Web application game"
            },
            {
              "id": "3",
              "app": "123",
              "company": "123",
              "description": "123"
            }
        ]
    }
    ```
3. Open a `terminal` on the created file's directory. *(Use `bash` command line)*
4. Start json-server with the following code:
    ```
    json-server --watch FILENAME.json --port PORT_NUMBER
    ```
    
    #### Sample Code: 
    ```
    json-server --watch db.json --port 3030
    ```

5.  You can now do API calls on `http://localhost:3030/`  

    Examples  
    GET    `/entries`  
    GET    `/entries/1`  
    POST   `/entries`  
    PUT    `/entries/1`  
    PATCH  `/entries/1`  
    DELETE `/entries/1`  
    
    ##### Click [here](https://github.com/typicode/json-server) to learn more about json-server