const menuInfo = [
    {
        category:'EGGS BREAKFAST',
        items:[
            {
                Item:'Two Eggs w Choice of Meat',
                Price: 8.09,
                Addition_1:'Bacon, Sausage Links, Ham, Chorizo, OR Turkey Sausages',
                Choice:'Bacon, Sausage Links, Ham, Chorizo, OR Turkey Sausages',
                Addition_2:'Served with Hash Browns and Choice of Toast or Pancakes',
                ServedWith:'Served with Hash Browns and Choice of Toast or Pancakes'
            },
            {
                Item:'Chilaquiles',
                Price: 10.29,
                Choice:'Choice of Salsa (Red or Green)',
                Addition_1:'Homemade Corn Tortilla Chips',
                ServedWith:'Homemade Corn Tortilla Chips',
                Addition_2:'2 Eggs (Any Style), Beans, Lettuce, Tomatoes, and Sour Cream',
                Includes:'2 Eggs (Any Style), Beans, Lettuce, Tomatoes, and Sour Cream',
            },
            {
                Item:'Avocado Benedict',
                Price: 8.59,
                Addition_1:'Poached Eggs, Toasted English Muffin, Avocado, Tomatoes',
                Includes:'Poached Eggs, Toasted English Muffin, Avocado, Tomatoes',
                Addition_2:'Spinach, Hollandaise Sauce, and Hash Browns'
            },
            {
                Item:'Quesadilla Denver',
                Price: 5.79,
                Addition_1:'Scrambled Egs, Ham, Onions, Green Pepper, Jack and Cheddar Cheese'
            },
            {
                Item:'Huevos Rancheros',
                Price: 7.09,
                Addition_1:'2 Eggs (Any Style), Flour Tortilla, Queso Fresco, Salsa Ranchera, Beans'
            },
            {
                Item:'Huevos con Chorizo',
                Price: 7.49,
                Addition_1:'4 Corn Tortillas, Beans, Eggs (Scrambled), Chorizo'
            },
            {
                Item:'Scrambled Mexican',
                Price: 7.19,
                Addition_1:'Jalapenos, Onions, Tomatoes, Beans, Served w 3 Corn Tortillas'
            },
            {
                Item:'Breakfast Tacos',
                Price: 8.29,
                Condition:'(Corn Tortillas), Beand and Lettuce on the Side',
                Addition_1:'3 Scrambled Eggs, Tomatoes, Onions, Jalapenos',
                Addition_2:'-Choice of- Steak, Chorizo, Ham, Bacon'
            },
            {
                Item:'Waukegan Desayuno',
                Price: 15.99,
                Addition_1: '2 Eggs (Any Style), Avocado, Onion, Cecina, Salsa Ranchera, Beans, 4 Tortillas'
            }
        ]
    },
    {
        category:'SKILLET',
        items:[
            {
                Item:'Mushroom Skillet',
                Price: 10.19,
                Addition_1:'2 Eggs (Any Style), Hash Browns, Toast, Jack and Cheddar, Cheese, Onions, Spinach, Tomatoes',
                Addition_2:'Served w Toast'
            },
            {
                Item:'Quinoa Skillet',
                Price: 10.79,
                Addition_1:'Mushrooms, Corn Relish, Egg Whites, Spinach, Avocado, Jack and Cheddar Cheese, Roasted Red Peppers',
                Addition_2:'Served w Toast'
            },
            {
                Item:'Chorizo Skillet',
                Price: 10.79,
                Addition_1:' 2 Eggs (Any Style), Green Peppers, Onions, Hash Browns, Jack and Cheddar Cheese',
                Addition_2:'Served w Toast'
            },
            {
                Item:'Meat Lover Skillet',
                Price: 10.79,
                Addition_1:'2 Eggs (Any Style), Bacon, Sausage, Ham, Jack and Cheddar Cheese',
                Addition_2:'Served w Hash Browns and Toast'
            },
            {
                Item:'Habanero Skillet',
                Price: 10.79,
                Addition_1:'2 Eggs (Any Style), Chorizo, Peppers, Onions, Cilantro, Sour Cream',
                Addition_2:'Served w Toast'
            },
            
        ]
    },
    {
        category:'EGG WRAPS',
        choice:'(-Choice of- Flour or Wheat)',
        items:[
            {
            
                Item:'Breakfast Wrap',
                Price: 6.39,
                Addition_1:'Scrambled Eggs, Bacon, Jack and Cheddar Cheese'
            },
            {
                Item:'Avocado Wrap',
                Price: 6.39,
                Addition_1:'Scrambled Eggs, Avocado, Sausage, Jack and Cheddar Cheese'
            },
            {
                Item:'Chorizo Wrap',
                Price: 6.39,
                Addition_1:'Scrambled Eggs, Chorizo, Tomatoes, Jalapenos, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Green Breakfast Wrap (Spinach Wrap)',
                Price: 6.39,
                Addition_1:'Scrambled Eggs, Ham, Avocado, Green Salsa, Jack and Cheddar Cheese'
            },
            {
                Item:'Veggie Breakfast Wrap (Spinach Wrap)',
                Price: 6.39,
                Addition_1:'Scrambled Eggs, Avocado, Spinach, Tomatoes, Mushrooms, Jack and Cheddar Cheese'
            },
            
        ]
    },
    {
        category:'TORTAS',
        choice:'(-Choice of- Fries or Fruit)',
        items:[
            {
                Item:'Torta Cubana',
                Price: 9.19,
                Addition_1:'Pulled Pork, Ham, Hot Dog, Onions, Tomatoes, Mayo, Jalapeno, Mozarella Cheese, Avocado'
            },
            {
                Item:'Torta de Asada o Chroizo',
                Price: 8.99,
                Addition_1:'Beans, Lettuce, Tomatoes, Onions, Avocado, Queso Fresco, Jalapenos, Sour Cream.'
            },
            {
                Item:'Torta de Jamon',
                Price: 7.99,
                Addition_1:'Mayo, Tomatoes, Onions, Avocado, Lettuce, Mozarella Cheese, Jalapneos'
            },
            {
                Item:'Torta de Pollo',
                Price: 8.09,
                Addition_1:'Mayo, Tomatoes, Onions, Avocado, Mozarella Cheese, Jalapenos'
            }
            
        ]
    },
    {
        category:'SANDWICHES',
        choice:'(-Choice of- Fries or Fruit)',
        items:[
            {
                Item:'Avocado Chicken Sandwhich',
                Price: 7.59,
                Addition_1:'9-Grain Bread, Mozarella Cheese, Lettuce, Tomatoes, Chipotle Mayo (on the side)'
            },
            {
                Item:'Turkey Avocado Bacon Club',
                Price: 7.59,
                Addition_1:'9-Grain Bread, Lettuce, Tomatoes, Mayo'
            },
            {
                Item:'Tuna Salad Sandwhich (Regular or Spicy)',
                Price: 6.99,
                Addition_1:'9-Grain Bread, Mayo, Onions, Celery, Lettuce, Tomatoes'
            },
            {
                Item:'Ham Swiss Sandwhich',
                Price: 7.09,
                Addition_1:'9-Grain Bread, Lettuce, Tomatoes, Mayo'
            },
            {
                Item:'Bacon Chicken Sandwhich',
                Price: 7.59,
                Addition_1:'Brioche Bun, Avocado, Bacon Strips, Mozarella Cheese, Lettuce, Onions, Tomatoes'
            },
            
        ]
    },
    {
        category:'PANINIS',
        choice:'(-Choice of- Fries or Fruit)',
        items:[
            {
                Item:'Chicken Chipotle Panini',
                Price: 9.49,
                Addition_1:'Tomatoes, Spinach, Mozarella Cheese, Bacon, Chipotle Mayo'
            },
            {
                Item:'Avocado Veggie Panini',
                Price: 9.49,
                Addition_1:'Mushrooms, Spinach, Tomatoes, Mozarella Cheese, Pesto Sauce'
            },
            {
                Item:'Chicken Pesto Panini',
                Price: 9.49,
                Addition_1:'Tomatoes, Spinach, Mozarella Cheese, Pesto Sauce'
            },
            {
                Item:'Steak Panini',
                Price: 9.49,
                Addition_1:'Mushrooms, Tomatoes, Mozarella Cheese, Chipotle Mayo'
            },
            {
                Item:'Cuban Panini',
                Price: 9.49,
                Addition_1:'Pulled Pork, Hot Dog, Ham, Tomatoes, Jalapenos, Mozarella Cheese, Mayo'
            },
            {
                Item:"Avocado Turkey Club Panini",
                Price: 5.49,
                Addition_1:'Turkey, Bacon, Tomatoes, Mozarella Cheese, Mayo, Avocado'
            },
            {
                Item:"Yordi's Panini",
                Price: 5.49,
                Addition_1:'Scrambled Eggs, Bacon, Jack and Cheddar Cheese'
            }            
        ]
    },
    {
        category:'BURGERS',
        choice:'(-Choice of- Fries or Fruit)',
        items:[
            {
                Item:'Jalapeno Burger',
                Price: 7.99,
                Addition_1:'Tomatoes, Lettuce, Mozarella Cheese, Onion'
            },
            {
                Item:'Avocado Burger',
                Price: 7.99,
                Addition_1:'Tomatoes, Lettuce, Onions, Cheddar Cheese'
            },
            {
                Item:'Veggie Burger',
                Price: 7.99,
                Addition_1:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Turkey Burger',
                Price: 7.99,
                Addition_1:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Cheeseburger',
                Price: 6.99,
                Addition_1:'Tomatoes, Lettuce, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Bacon Cheeseburger',
                Price: 8.59,
                Addition_1:'Bacon, Tomatoes, Jack and Cheddar Cheese, Lettuce, Onions'
            },
            {
                Item:"Good Morning Burger",
                Price: 8.99,
                Addition_1:'Bacon, American Cheese, Tomatoes, Lettuce, Onions,topped w Fried Egg'
            },
            {
                Item:"Chipotle Bacon Burger",
                Price: 8.69,
                Addition_1:'Diced Chipotle Pepper, Jack and Cheddar Cheese, Lettuce, Tomatoes, Onion'
            }            
        ]
    },
    {
        category:'WRAPS',
        choice:'(-Choice of- Fries or Fruit)',
        items:[
            {
                Item:'Picoso Wrap',
                Price: 7.39,
                Addition_1:'Lettuce, Chicaken, Avocado, Tomatoes, Jack and Cheddar Cheese, Chili Ranch'
            },
            {
                Item:'Quinoa Wrap',
                Price: 7.39,
                Addition_1:'Quinoa, Ranch, Lettuce, Tomatoes, Corn Relish, Avocado, Jack and Cheddar Cheese'
            },
            {
                Item:'Turkey Wrap',
                Price: 7.39,
                Addition_1:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Spinach Chicken Wrap',
                Price: 7.39,
                Addition_1:'Tomatoes, Corn Relish, Avocado, Spinach, Mango Habanero, Ranch, Jack and Cheddar Cheese'
            },
            {
                Item:'Spicy Bacon Chicken Wrap (Spinach Wrap)',
                Price: 7.49,
                Addition_1:'Tomatoes, Lettuce, Onions, Corn Relish, Jack and Cheddar Cheese, Spicy Lime Ranch'
            },
            {
                Item:'Caesar Chicken Wrap',
                Price: 7.29,
                Addition_1:'Lettuce, Caesar Dressing, Parmesan Cheese'
            }            
        ]
    },
    {
        category:'OMELETTES',
        items:[
            {
                Item:'Denver Omelette',
                Price: 9.19,
                Addition_1:'Ham, Green Peppers, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Avocado Omelette',
                Price: 9.19,
                Addition_1:'Sausage, Jack and Cheddar Cheese'
            },
            {
                Item:'Chorizo Burger',
                Price: 10.79,
                Addition_1:'Jalapenos, Onions, Tomatoes, Jack and Cheddar Cheese'
            },
            {
                Item:'California Omelette',
                Price: 9.39,
                Addition_1:'Ham, Avocado, Mushrooms, Tomatoe, Scallions, Jack and Cheddar Cheese'
            },
            {
                Item:'Veggie Omelette',
                Price: 9.19,
                Addition_1:'Spinach, Mushrooms, Tomatoes, Jack and Cheddar Cheese'
            },
            {
                Item:'Protein Green Omelette',
                Price: 11.19,
                Addition_1:'Egg White, Chicken Breast, Broccoli, Spinach, Mozarella Cheese'
            },
            {
                Item:"Meat Lover Omelette",
                Price: 10.79,
                Addition_1:'Diced Ham, Bacon, Sausage, Jack and Cheddar Cheese'
            }
        ]
    },
    {
        category:'PANCAKES',
        items:[
            {
                Item:'Waffle',
                Price: 6.39
            },
            {
                Item:'Pancakes (Order of 3)',
                Price: 6.39
            },
            {
                Item:'Chocolocate Chip Pancakes (Order of 3)',
                Price: 7.29
            },
            {
                Item:'French Toast',
                Price: 6.39
            },
            {
                Item:'Crepes Plain',
                Price: 6.99
            }
        ]
    },
    {
        category:'STEEL CUT OATS',
        items:[
            {
                Item:'Old Fashinoed',
                Price: 3.99
            },
            {
                Item:'Berry Oatmeal',
                Price: 5.19
            },
            {
                Item:'Banana Pecan Oatmeal',
                Price: 5.19
            }
        ]
    },
    {
        category:'GREEK YOGURT',
        items:[
            {
                Item:'Honey Granola Yogurt',
                Price: 4.49
            },
            {
                Item:'Berry Yogurt',
                Price: 4.89
            }
        ]
    },
    {
        category:'TACOS',
        items:[
            {
                Item:'Carne Asada o Chorizo w Cactus',
                Price: 2.19,
                Addition_1:'Cilantro and Onion'
            },
            {
                Item:'Chicken Avocado Tacos (Order of 3)',
                Price: 8.89,
                Addition_1:'Flour Tortillas w Green Peppers, Cilantro, Onion',
                Addition_2:'Avocado Sauce, Queso Fresco'
            },
            {
                Item:'Cecina Tacos (Order of 3)',
                Price: 8.89,
                Addition_1:'Onions, Avocado Sauce, Cilantro, Onion'
            }
        ]
    },
    {
        category: 'FLAUTAS',
        items:[
            {
                Item:'Chicken or Cheese or Potatoes (Order of 3)',
                Price: 7.09,
                Addition_1:'Lettuce, Tomatoes, Queso Fresco, Sour Cream, w Green Salsa on side'
            }
        ]
    },
    {
        category: 'ENCHILIDAS',
        items:[
            {
                Item:'Chicken or Cheese (Order of 3)',
                Price: 7.39,
                Addition_1:'-Choice of- Green or Red Salsa',
                Addition_2:'Lettuce, Tomatoes, Queso Fresco, Sour Cream'
            }
        ]
    },
    {
        category: 'QUESADILLAS',
        items:[
            {
                Item:'Steak',
                Price: 8.49,
                Addition_1:'-Choice of- Flour or Wheat',
                Addition_2:'Grilled Mushrooms, Onions, Jack and Cheddar Cheese, Lettuce, Sour Cream'
            },
            {
                Item:'Chicken',
                Price: 8.49,
                Addition_1:'-Choice of- Flour or Wheat',
                Addition_2:'Grilled Mushrooms, Onions, Jack and Cheddar Cheese, Lettuce, Sour Cream'
            }
        ]
    },
    {
        category: 'SIDES',
        items:[
            {
                Item:'Ham',
                Price: 4.00
            },
            {
                Item:'Bacon',
                Price: 4.00
            },
            {
                Item:'Chorizo',
                Price: 4.00
            },
            {
                Item:'One Egg',
                Price:1.00
            },
            {
                Item:'Asada',
                Price: 4.00
            },
            {
                Item:'Chips',
                Price: 2.49
            },
            {
                Item:'Hash Brown',
                Price: 1.79
            },
            {
                Item:'Chicken',
                Price: 4.19
            },
            {
                Item:'Sausage Links',
                Price: 4.00
            },
            {
                Item:'Fruit Cup',
                Price: 2.79
            },
            {
                Item:'Guacamole',
                Price: 'Market Price'
            },
            {
                Item:'Turkey Sausasge',
                Price: 4.00
            },
            {
                Item:'Toast',
                Price: 2.29
            },
        ]
    },
    {
        category: 'BEVERAGES',
        items:[
            {
                Item:'Coffee (Free Refill)',
                Price: 2.49
            },
            {
                Item:'Colombian Coffee (Free Refill)',
                Price: 2.79
            },
            {
                Item:'Cafe de Olla (Free Refill)',
                Price: 2.79
            },
            {
                Item:'Hot Tea',
                Price:1.59
            },
            {
                Item:'Abuelita Hot Chocolate (No Refill)',
                Price: 3.09
            },
            {
                Item:'Soft Drinks (Free Refill)',
                Price: 2.49
            },
            {
                Item:'Fresh Squeezed Orange Juice (No Refill)',
                Price: 4.29
            },
            {
                Item:'Horchata or Jamaica (No Refill)',
                Price: 3.59
            },
            {
                Item:'Licuados (Mexican Smoothie) (No Refill)',
                Price: 4.19,
                Addition_1:'Flavors: Strawberry, Blueberry, Banana, Chocolate'
            }
        ]
    },
    {
        category: 'SALADS',
        items:[
            {
                Item:'Avocado Southwest Chicken Salad',
                Price: 8.69,
                "Addition 1":'Corn Relish, Tomatoes, Red Onions, Pico de Gallo on side'
            },
            {
                Item:'Quinoa Chicken Salad',
                Price: 8.69,
                "Addition 1":'Corn Relish, Jack and Cheddar Cheese SOur Cream and Pico de Gallo on side'
            },
            {
                Item:'Wonton Caesar Salad',
                Price: 6.99,
                "Addition 1":'w Chicken and Avocado'
            },
            {
                Item:"Alix's Salad",
                Price: 8.69,
                "Addition 1":'Pecans, Cranberries, Goji Berries, Avocados, Apples, Wontons, Chicken'
            },
            {
                Item:"California Salad",
                Price: 8.89,
                "Addition 1":'Tomatoes, Red Onion, Chicken, Avocados, Corn w Spicy Lime Rach Dressing'
            },
            {
                Item:"Avocado Greek Chicken Salad",
                Price: 8.89,
                "Addition 1":'Kalamata Olives, Tomatoes, Red Onions, Green Peppers, Cucumbers, Feta'
            },
            {
                Item:'Dressing',
                'Additin 1': 'Ranch, Citrus Dressing, Balsamic Vinegar, Lime Dressing, Caaesar, Spicy Lime Ranch, Greek Dressing'
            }
        ]
    },
    {
        category: 'KIDS MENU',
        items:[
            {
                Item:'Grilled Cheese w fries or fruit'
            },
            {
                Item:'Cheeseburger w fries or fruit'
            },
            {
                Item:'Chicken Tenders w fries or fruit'
            },
            {
                Item:'Kid Quesadilla w fries or fruit'
            },
            {
                Item:'Silver Pancakes(Order of 4)'
            },
            {
                Item:'Kid Pancake Combo',
                Addition_1:'-Choice of- Bacon, Ham, or Sausage',
                Addition_2:'1 Egg (Any Style)'
            },
            {
                Item:'Kid French Toast',
                Addition_1:'-Choice of- Bacon, Ham, or Sausage'
            },
            {
                Item:'Kid Waffle Combo',
                Addition_1:'-Choice of- Bacon, Ham, or Sausage'
            },
            {
                Item:'Kid Hot Dog w Fries or Fruit'
            },
        ]
    }
]

export default menuInfo;