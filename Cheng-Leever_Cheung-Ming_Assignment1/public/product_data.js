//Creating the array of products
//Took from SmartPhoneProducts3

var products = [
    {    
            //Products 1 
                "product" : "Obsidian",
                "price" : 12.00,
                "image": "./images/obsidian.png",
                "inventory": 10 
    },
    {
            //Products 2 
                "product" : "Pyrite",
                "price" : 15.00,
                "image" : "./images/pyrite.png",
                "inventory": 10 
    },
    {
            //Products 3 
                "product" : "Red Jasper",
                "price" : 13.00,
                "image" : "./images/red_jasper.png",
                "inventory": 10 
    }, 
    {
            //Products 4 
                "product" : "Rose Quartz",
                "price" : 14.00,
                "image" : "./images/rose_quartz.png",
                "inventory": 10 
    },
    {
        //Products 5 
            "product" : "Smokey Quartz",
            "price" : 12.00,
            "image" : "./images/smokey_quartz.png",
            "inventory": 10 
},
    
    ];
    
    //If the module is not undefined, have the module export the data from the product_data array
    if(typeof module != 'undefined') { //if the type of the module is defined
        exports.products = products; //export the product_data
      }

    