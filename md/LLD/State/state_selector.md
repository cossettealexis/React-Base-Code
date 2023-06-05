## LLD: Demo (Redux State)

### Filename: `selectors.js`


##### Methods

*  #### **`validateText`** - validate text if it is a number
	**Return**	 
    * errors array
    
    **Parameters**
    * values
    
    **Flow/Pseudocode**
    * Initialize `errors` variable as []
    * IF isNaN(state.DemoForm.value) is true
        * Push "Value is not a number" error message to `errors` array     