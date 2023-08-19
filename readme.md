# js-lib
##### Lightweight JavaScript Library for Faster Development Experience

this library is build with Pure Vanilla JavaScript

# Usage

```html 
<script src="path/fetching.js" ></script>
```

# Examples

use ``` allNodes ``` to fetch all Element nodes in the DOM

```javascript
let allNodes = document.allNodes
```

Fetch All Elements by ClassName

```javascript 
let elements = document.getAllByClass("className")
```

Fetch Specific Element By ClassName

```javascript
let element = document.getByClassIndex("className", index)
```

Fetch Element By Id

```javascript
let element = document.getById("id")
```

Fetch Element by Query Selector

```javascript
let element = document.getByQuery("query")
```

Fetch All Elements by Query Selector All

```javascript
let elements = document.getByQueryAll("query")
```

Fetch Specific Element by Query Selector All

```javascript
let element = document.getByQueryIndex("query", index)
```

**There are more Methods added to DOM for Fetching Elements**

Loops for Array and Object 

``` javascript
Array.loop((element,index)=>{
    // body
})
```

``` javascript
Object.loop((value,key)=>{
    //body
})
```

Fetch API Made Simpler and Easier

Get Request

``` javascript
async function getData (url){ 
    let data = await getReq(url) 
    return data;
} 
```

Post Request
method : "post" is already set as default
``` javascript
async function postData (url, headers){ 
    let data = await postReq(url,headers) 
    return data;
} 
```

Put Request
method : "put" is already set as default
``` javascript
async function postData (url, headers){ 
    let data = await putReq(url,headers) 
    return data;
} 
```

Delete Request

``` javascript
async function postData (url){ 
    let data = await deleteReq(url) 
    return data;
} 
```



## Some Other Features 

#### Methods on DOM Elements

```javascript
element.classToggle(className) 
```
```javascript
element.classAdd(className) 
```
```javascript
element.classRemove(className) 
```
```javascript
element.classContains(className) 
```
```javascript
element.classReplace(oldClass, newClass) 
```

#### Methods on Array 

```javascript
array.binarySearch(itemToSearch)
```
```javascript
array.getEvenElements() 
```
```javascript
array.getOddElements() 
```
```javascript
array.getUniqueElements() 
```
```javascript
array.getSum() 
```

#### Methods on Object

```javascript
object.getKeys() 
```
```javascript
object.getValues() 
```
```javascript
object.getEntries() 
```