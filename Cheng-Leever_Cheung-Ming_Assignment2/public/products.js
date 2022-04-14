// This is the javascript file that contains the JSON object for the variable called products. All product information,
// including the model, price, image location, and inventory is contained in this file.

var products = 
[
    {
        "model":"Obsidian",
        "price":12.00,
        "image":"./images/obsidian.png",
        "inventory":10
    },
    {
        "model":"Pyrite",
        "price":15.00,
        "image":"./images/pyrite.png",
        "inventory":10
    },
    {
        "model":"Red Jasper",
        "price":13.00,
        "image":"./images/red_jasper.png",
        "inventory":10
    },
    {
        "model":"Rose Quartz",
        "price":14.00,
        "image":"./images/rose_quartz.png",
        "inventory":10
    },
    {
        "model":"Smokey Quartz",
        "price":12.00,
        "image":"./images/smokey_quartz.png",
        "inventory":10
    }
];

// Export products to server.js.
if(typeof exports != 'undefined') { 
    exports.products = products;
}