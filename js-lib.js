
/*
    Author : Aalim aslam
*/

// get request with async/await
async function getReq (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
window.fetchAsync = fetchAsync;

// Looping for an array 
Array.prototype.loop = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
}

//Object Looping
Object.prototype.loop = function (callback) {
    for (let key in this) {
        //checking wheather an Object is of HTML Type
        if(this.nodeName){
            //If Element if of Object type then we will check if it has a property and it is not a function
            if(this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                callback(this[key], key);
            }
        }
        //If Element is not of HTML Type then we will check if it has a property
        if(!this.nodeName && this.hasOwnProperty(key)) {
            callback(this[key], key);
        }
    }
}


// fetch every element inside document object and store it in an array
function getAllChildNodes(node) {
    const childNodes = [];
    
    function traverse(node) {
      if (node.childNodes) {
        childNodes.push(node);
        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
          traverse(children[i]);
        }
      }
    }
    traverse(node);
    return childNodes;
}

// Remove an item from an array
Array.prototype.remove = function (item){
    let index = this.indexOf(item);
    if(index > -1){
        this.splice(index, 1);
    }
}

// Get all the elements inside document object except text, comment, script, style, link, meta, title, head, html
function getElementNodesOnly(){
    let nodes = getAllChildNodes(document);
    nodes = nodes.filter(node => node.nodeName !== '#text')
    nodes = nodes.filter(node => node.nodeName !== '#comment')
    nodes = nodes.filter(node => node.nodeName !== 'SCRIPT')
    nodes = nodes.filter(node => node.nodeName !== 'STYLE')
    nodes = nodes.filter(node => node.nodeName !== 'LINK')
    nodes = nodes.filter(node => node.nodeName !== 'META')
    nodes = nodes.filter(node => node.nodeName !== 'TITLE')
    nodes = nodes.filter(node => node.nodeName !== 'HEAD')
    nodes = nodes.filter(node => node.nodeName !== 'HTML')
    return nodes;
}

let allNodes = getElementNodesOnly();
// Adding some methods to all the elements inside document object
allNodes.loop((node,index)=>{
    node.getByQuery = (query) => node.querySelector(query);
    node.getByQueryIndex = (query, idx=0) => node.querySelectorAll(query)[idx];
    node.getAllByQuery = (query) => node.querySelectorAll(query);
    node.getAllByTag = (tagName) => node.getElementsByTagName(tagName);
    node.getAllByClass = (className) => node.getElementsByClassName(className);
    node.getByClassIndex = (className, idx=0) => node.getElementsByClassName(className)[idx];
    node.getByTagIndex = (tagName, idx=0) => node.getElementsByTagName(tagName)[idx];
    node.getById = id => node.getElementById(id);
})

//post request
async function postReq(url, headers){
    const response = await fetch(url, {
        method: 'POST',
        headers : {
            method: 'POST',
            ...headers
        }
    });
    const resData = await response.json();
    return resData;
}
window.postReq = postReq;

//put request
async function putReq(url, headers){
    const response = await fetch(url, {
        method: 'PUT',
        headers
    });
    const resData = await response.json();
    return resData;
}
window.putReq = putReq;

//delete request
async function deleteReq(url){
    const response = await fetch(url, {method: 'DELETE'});
    const resData = await response.json();
    return resData;
}
window.deleteReq = deleteReq;


//Toggle Class
Object.prototype.classToggle = function (className) {
    if(!this.nodeName){
        console.error('Element is not of HTML type');
        return;
    }
    this.classList.toggle(className);
}

// Add Class
Object.prototype.classAdd = function (className) {
    if(!this.nodeName){
        console.error('Element is not of HTML type');
        return;
    }
    this.classList.add(className);
}

// Remove Class
Object.prototype.classRemove = function (className) {
    if(!this.nodeName){
        console.error('Element is not of HTML type');
        return;
    }
    this.classList.remove(className);
}

// Check if class exists
Object.prototype.classContains = function (className) {
    if(!this.nodeName){
        console.error('Element is not of HTML type');
        return;
    }
    return this.classList.contains(className);
}

// Replace Class
Object.prototype.classReplace = function (oldClass, newClass) {
    if(!this.nodeName){
        console.error('Element is not of HTML type');
        return;
    }
    this.classList.replace(oldClass, newClass);
}

// Binary Search on Array 
Array.prototype.binarySearch = function (item){
    let start = 0;
    let end = this.length - 1;
    let mid = Math.floor((start + end)/2);
    while(this[mid] !== item && start <= end){
        if(item < this[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }
    return this[mid] !== item ? -1 : mid;
}

// Get Even Elements of an Array 
Array.prototype.getEvenElements = function (){
    return this.filter((item) => item % 2 === 0);
}

// Get Odd Elements of an Array 
Array.prototype.getOddElements = function (){
    return this.filter((item) => item % 2 !== 0);
}

// Get Unique Elements of an Array
Array.prototype.getUniqueElements = function (){
    return [...new Set(this)];
}

// Get Sum of an Array
Array.prototype.getSum = function (){
    return this.reduce((acc, item) => acc + item, 0);
}

//Get Keys of an Object
Object.prototype.getKeys = function (){
    return Object.keys(this);
}

//Get Values of an Object
Object.prototype.getValues = function (){
    return Object.values(this);
}

//Get Entries of an Object
Object.prototype.getEntries = function (){
    return Object.entries(this);
}
