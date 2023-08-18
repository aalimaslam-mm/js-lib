
/*
    Author : Aalim aslam
*/

// fetch request with async/await
async function fetchAsync (url) {
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


console.log(allNodes)
