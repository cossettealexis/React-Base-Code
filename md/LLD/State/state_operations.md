## LLD: Demo (Redux State)

### Filename: `operations.js`


##### Methods

*  #### **`getList`** - method to retrieve list from server 

    **Parameters**
    * dispatch
    
    **Flow/Pseudocode**
    * Call API get method to "/items"
	* Get API response
	* dispatch `setList` action creator with the response.data as parameter


*  #### **`addItem`** - method to add record to server 

    **Parameters**
    * payload
    * dispatch
    
    **Flow/Pseudocode**
    * Call API post method to "/items" with payload as additional parameter
	* dispatch `getList` method from the same file


*  #### **`removeItem`** - method to update record to server 

    **Parameters**
    * payload
    * dispatch
    
    **Flow/Pseudocode**
    * Call API patch method to "/items/:id" with payload as additional parameter
	* dispatch `getList` method from the same file

