## LLD: Demo (Container Components)

### Filename: `DemoLLD.js`

**Class name: DemoLLD**

* #### `componentDidMount` - call  after the component mounted  

	**Flow/Pseudocode**  
	* Call renderList method

* #### `renderList` - call  after the component mounted  

	**Flow/Pseudocode**  
	* Call `getList` method from props
	
* #### `toggleAdd` - show/hide form input
    **Flow/Pseudocode**  
    * Set `showAddUser` state to NOT `showAddUser` state


* #### `handleSubmit` - show/hide form input
   **Parameters**
    * values
    
    **Flow/Pseudocode**  
    * Call `addItem` method from props
    * Callback: `renderList` method


* #### `removeItem` - removes row from list
    **Parameters**
    * id

    **Flow/Pseudocode**  
    * Call method "removeFromList" from props
    * Call renderList method
    
*  #### **`mapStateToProps`** - returns redux states
	**Parameters**
    * Redux State
    
    **Return**  
    * items reducer state
    * tableHeader reducer state
    * tableList reducer state
    * tableColumn reducer state
    
    
*  #### *`mapDispatchToProps`* - returns module dispatch actions
     **Parameters**
    * dispatch 
    **Return**  
    * module state functions binded with `bindActionCreators`