# js-lib
##### Lightweight JavaScript Library for Faster 

this library is build with Pure Vanilla JavaScript

# Usage

```html 
<script src="path/fetching.js" ></script>
```

# Examples

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

``` javascript
async function getData (url){ 
    let data = await fetchAsync(url) 
    return data;
} 
```
