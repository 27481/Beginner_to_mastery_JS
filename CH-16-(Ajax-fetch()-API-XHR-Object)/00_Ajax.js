//Basic Theory 

// Ajax : `asynchronous JavaScript and XML`

// HTTP request 

// is a set of "web development technique"
// using many web technologies on the "client-side"
// to create asynchrnous web applications. 

// With Ajax, web applications can send and retrieve data from a
// server asynchronously (in the background), without interfering 
// with the display and behavour of the existing page. 

// We don't use data in XML format anymore. 
// We use JSON now 

// we have 3 most common ways to create and send request to server

// 1-> XmlHTTPRequest (old of doing)
// 2-> fetch API (new way of doing)
// 3-> axios (this is 3rd party libary)

const XMLHttpRequest = require("xhr2");

const URL = "htttps://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET",URL);
xhr.onreadstatechange=function(){
    console.log(xhr);
}

xhr.send();