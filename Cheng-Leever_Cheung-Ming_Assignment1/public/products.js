var products = 
{     
        "product" : "Obsidian",
        "price" : 12.00,
        "image": "./images/obsidian.png",
        "inventory": 10 
},
{ 
        "product" : "Pyrite",
        "price" : 15.00,
        "image" : "./images/pyrite.png",
        "inventory": 10 
},
{
        "product" : "Red Jasper",
        "price" : 13.00,
        "image" : "./images/red_jasper.png",
        "inventory": 10 
}, 
{
        "product" : "Rose Quartz",
        "price" : 14.00,
        "image" : "./images/rose_quartz.png",
        "inventory": 10 
},
{
    "product" : "Smokey Quartz",
    "price" : 12.00,
    "image" : "./images/smokey_quartz.png",
    "inventory": 10 
},

];

if(typeof exports != 'undefined') { // Export products to server.js.
    exports.products = products;
}