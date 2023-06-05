## LLD: Demo (Redux State)

### Filename: `reducers.js`

##### Member Variables
* defaultState - main reducer object containing the module redux states
	* itemsList - array list that contains the table list
	* tableHeader - array that contains the table header names
	* tableColumn - array that contains the table column names


##### Methods
* reducer - handles state changes upon dispatched actions  
	**Return**	 
    * Redux State
    
    **Parameters**
    * state
    * action
    
    **Flow/Pseudocode**
    * Check dispatched action type 
	* IF action type === SET_LIST
		* return state with `itemsList` state updated with the received payload
	* ELSE
		* return state  