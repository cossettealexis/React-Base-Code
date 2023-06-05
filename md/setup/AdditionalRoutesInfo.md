## Adding Routes inside a Module 
## (Additional info)
Other than the [Adding of Routes to Codebase](./AddRoutes_Manual.md), you may also define a `Route` object within your module to render components based on the current route path.  

Example:  
`/movies`  
`/movies/action`  
`/movies/horror`   

Each of these path will render components based on the current path. `/movies` will show all movies while `movies/action` and `movies/horror` will show action movies and horror movies respectively.

##### Here are the two ways to define routes inside a module.  

###### `NOTE`: If you want to have subroutes rendered based on the current path, do not include `exact` on the `<Route>` tag or set exact to false.

##### Option 1: (Static) Inline Routes 
* Import `Link`, `Switch`, and `Route` from react-router-dom  

```javascript
	--- current path : "app/module/"
	
	<Link to="/app/module/pathOne">Render Path One</Link><br/>   
  	<Link to="/app/module/pathTwo">Render Path Two</Link><br/>    
    <Link to="/app/module/pathThree">Render Path Three</Link><br/>    

  	<Switch>
    	<Route exact path="/app/module/pathOne" render={()=><h1>Path One</h1>}/>
      	<Route exact path="/app/module/pathTwo" render={()=><h1>Path Two</h1>}/>
      	<Route exact path="/app/module/pathThree" render={()=><h1>Path Three</h1>}/>
  	</Switch>
```

* You can use this code to get the current path of the Router:  
	***<Route path={ \`${this.props.match.path}/pathOne\` } render={()=><h1>Path One</h1>}/>***

* `render={()=><h1>Path One </h1>}` is a basic way to render something if a path is matched.   

* Use `component={Component}` if you want to render an imported component.  

  Example:  
  ```javascript
    <Route path="/app/module/pathOne" component={PathOneComponent}}/>
  ```
  
##### Option 2: (Dynamic) Create a route file, import and render it on your container  
ModuleRoutes.js

```javascript  
    ..import components...
    
    const ModuleRoutes = [
      {
          label: "Path One",
          path: "/app/module/pathOne",
          component: PathOneComponent,
          exact: false
      },
      {
          label: "Path Two",
          path: "/app/module/pathOne",
          component: PathTwoComponent,
          exact: true
      },
      {
          label: "Path Three",
          path: "/app/module/pathOne",
          component: PathThreeComponent,
          exact: true
      },
      {
          //Defines what component to render if the accessed path does match. Usually error pages are rendered here.
          component: ErrorComponent      
      }
    ];
    export default ModuleRoutes;
```

`NOTE`: Set `exact` to **false** if the component still have subroutes.   

Then in your container component file:
* Import the PageRoutes file you created
* Import the CustomRoute component found at `src/views/components/CustomRoutes.js`
* Loop through the array defined in your PageRoutes file to render a CustomRoute component.
* (Optional) Loop through the array defined in your PageRoutes to render Links dynamically
```javascript
	... other imports ...
    import ModuleRoutes from './ModuleRoutes';
    import CustomRoute from '../../components/CustomRoute';
    
    ...class definition...
    ...constructor...
    
    render(){
        return(
            <div>
                ...other codes...
                {ModuleRoutes.map((route, i)=>{
                    return(
                        <Link to={route.path}>{route.label}</Link>
                    );
                 })
                }
                
                <Switch>
                    {ModuleRoutes.map((route, i)=><CustomRoute key={i} {...route}/>)}
                </Switch>
                
                . . . . .
            </div>
        );
    }
}
    
```


##### Other reminders:
* The `<Switch>` makes the router to render only one Route Component at a time.   
* Without the `<Switch>` tag:  
  ```javascript
    <Route path="/path" render={()=><h1>Main Path</h1>}/>
    <Route path="/path/one" render={()=><h1>Path One</h1>}/>
  ```
  * If the user access `/path`, `Main Path` text will be rendered.  
  * But if the user will access `/path/one`, `Main Path` and `Path One` text will be rendered becuse the path `/path` also exist in `/path/one`.
* The order to which the Routes are defined also affects the behavior of the component rendering


##### To know more about react-router-dom, check the [official documentation](https://reacttraining.com/react-router/).