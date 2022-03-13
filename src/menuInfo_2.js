import Chilaquiles from './media/chilaquiles.jpeg'
import EggsBenedict from './media/EggsBenedict.jpeg'
import AvocadoChickenSandwich from './media/avocado_chicken_sandwich.jpeg'
import ChipotleChickenPanini from './media/chipotle_chicken_panini.jpeg'
import Crepes from './media/crepes.jpeg'
import Omlette from './media/omlette.jpeg'

const menuInfo = [
    {
        category:'EGGS BREAKFAST',
        items:[
            {
                Item:'Two Eggs w Choice of Meat',
                Price: 8.09,
                Choice:'Bacon, Sausage Links, Ham, Chorizo, OR Turkey Sausages',
                ServedWith:'Served with Hash Browns and Choice of Toast or Pancakes'
            },
            {
                Item:'Chilaquiles',
                Price: 10.29,
                Choice:'Choice of Salsa (Red or Green)',
                ServedWith:'Homemade Corn Tortilla Chips',
                Includes:'2 Eggs (Any Style), Beans, Lettuce, Tomatoes, and Sour Cream',
                Image: Chilaquiles
            },
            {
                Item:'Avocado Benedict',
                Price: 8.59,
                Includes:'Poached Eggs, Toasted English Muffin, Avocado, Tomatoes, Spinach, Hollandaise Sauce, and Hash Browns',
                Image:EggsBenedict
            },
            {
                Item:'Quesadilla Denver',
                Price: 5.79,
                Includes:'Scrambled Egs, Ham, Onions, Green Pepper, Jack and Cheddar Cheese'
            },
            {
                Item:'Huevos Rancheros',
                Price: 7.09,
                Includes:'2 Eggs (Any Style), Flour Tortilla, Queso Fresco, Salsa Ranchera, Beans'
            },
            {
                Item:'Huevos con Chorizo',
                Price: 7.49,
                Includes:'4 Corn Tortillas, Beans, Eggs (Scrambled), Chorizo'
            },
            {
                Item:'Scrambled Mexican',
                Price: 7.19,
                Includes:'Jalapenos, Onions, Tomatoes, Beans, Served w 3 Corn Tortillas'
            },
            {
                Item:'Breakfast Tacos',
                Price: 8.29,
                ServedWith:'(Corn Tortillas), Beans and Lettuce on the Side',
                Includes:'3 Scrambled Eggs, Tomatoes, Onions, Jalapenos',
                Choice:'Choice of Steak, Chorizo, Ham, Bacon'
            },
            {
                Item:'Waukegan Desayuno',
                Price: 15.99,
                Includes: '2 Eggs (Any Style), Avocado, Onion, Cecina, Salsa Ranchera, Beans, 4 Tortillas'
            }
        ]
    },
    {
        category:'SKILLET',
        items:[
            {
                Item:'Mushroom Skillet',
                Price: 10.19,
                Includes:'2 Eggs (Any Style), Hash Browns, Toast, Jack and Cheddar, Cheese, Onions, Spinach, Tomatoes',
                ServedWith:'Served w Toast'
            },
            {
                Item:'Quinoa Skillet',
                Price: 10.79,
                Includes:'Mushrooms, Corn Relish, Egg Whites, Spinach, Avocado, Jack and Cheddar Cheese, Roasted Red Peppers',
                ServedWith:'Served w Toast'
            },
            {
                Item:'Chorizo Skillet',
                Price: 10.79,
                Includes:' 2 Eggs (Any Style), Green Peppers, Onions, Hash Browns, Jack and Cheddar Cheese',
                ServedWith:'Served w Toast'
            },
            {
                Item:'Meat Lover Skillet',
                Price: 10.79,
                Includes:'2 Eggs (Any Style), Bacon, Sausage, Ham, Jack and Cheddar Cheese',
                ServedWith:'Served w Hash Browns and Toast'
            },
            {
                Item:'Habanero Skillet',
                Price: 10.79,
                Includes:'2 Eggs (Any Style), Chorizo, Peppers, Onions, Cilantro, Sour Cream',
                ServedWith:'Served w Toast'
            },
            
        ]
    },
    {
        category:'EGG WRAPS',
        items:[
            {
            
                Item:'Breakfast Wrap',
                Price: 6.39,
                Includes:'Scrambled Eggs, Bacon, Jack and Cheddar Cheese'
            },
            {
                Item:'Avocado Wrap',
                Price: 6.39,
                Includes:'Scrambled Eggs, Avocado, Sausage, Jack and Cheddar Cheese'
            },
            {
                Item:'Chorizo Wrap',
                Price: 6.39,
                Includes:'Scrambled Eggs, Chorizo, Tomatoes, Jalapenos, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Green Breakfast Wrap (Spinach Wrap)',
                Price: 6.39,
                Includes:'Scrambled Eggs, Ham, Avocado, Green Salsa, Jack and Cheddar Cheese'
            },
            {
                Item:'Veggie Breakfast Wrap (Spinach Wrap)',
                Price: 6.39,
                Includes:'Scrambled Eggs, Avocado, Spinach, Tomatoes, Mushrooms, Jack and Cheddar Cheese'
            },
            
        ]
    },
    {
        category:'TORTAS',
        choice:'(Choice of FRIES OR FRUIT)',
        items:[
            {
                Item:'Torta Cubana',
                Price: 9.19,
                Includes:'Pulled Pork, Ham, Hot Dog, Onions, Tomatoes, Mayo, Jalapeno, Mozarella Cheese, Avocado'
            },
            {
                Item:'Torta de Asada o Chroizo',
                Price: 8.99,
                Includes:'Beans, Lettuce, Tomatoes, Onions, Avocado, Queso Fresco, Jalapenos, Sour Cream.'
            },
            {
                Item:'Torta de Jamon',
                Price: 7.99,
                Includes:'Mayo, Tomatoes, Onions, Avocado, Lettuce, Mozarella Cheese, Jalapenos'
            },
            {
                Item:'Torta de Pollo',
                Price: 8.09,
                Includes:'Mayo, Tomatoes, Onions, Avocado, Mozarella Cheese, Jalapenos'
            }
            
        ]
    },
    {
        category:'SANDWICHES',
        choice:'(Choice of FRIES OR FRUIT)',
        items:[
            {
                Item:'Avocado Chicken Sandwich',
                Price: 7.59,
                Includes:'9-Grain Bread, Mozarella Cheese, Lettuce, Tomatoes, Chipotle Mayo (on the side)',
                Image:AvocadoChickenSandwich
            },
            {
                Item:'Turkey Avocado Bacon Club',
                Price: 7.59,
                Includes:'9-Grain Bread, Lettuce, Tomatoes, Mayo'
            },
            {
                Item:'Tuna Salad Sandwhich (Regular or Spicy)',
                Price: 6.99,
                Includes:'9-Grain Bread, Mayo, Onions, Celery, Lettuce, Tomatoes'
            },
            {
                Item:'Ham Swiss Sandwhich',
                Price: 7.09,
                Includes:'9-Grain Bread, Lettuce, Tomatoes, Mayo'
            },
            {
                Item:'Bacon Chicken Sandwhich',
                Price: 7.59,
                Includes:'Brioche Bun, Avocado, Bacon Strips, Mozarella Cheese, Lettuce, Onions, Tomatoes'
            },
            
        ]
    },
    {
        category:'PANINIS',
        choice:'(Choice of FRIES OR FRUIT)',
        items:[
            {
                Item:'Chipotle Chicken Panini',
                Price: 9.49,
                Includes:'Tomatoes, Spinach, Mozarella Cheese, Bacon, Chipotle Mayo',
                Image:ChipotleChickenPanini
            },
            {
                Item:'Avocado Veggie Panini',
                Price: 9.49,
                Includes:'Mushrooms, Spinach, Tomatoes, Mozarella Cheese, Pesto Sauce'
            },
            {
                Item:'Chicken Pesto Panini',
                Price: 9.49,
                Includes:'Tomatoes, Spinach, Mozarella Cheese, Pesto Sauce'
            },
            {
                Item:'Steak Panini',
                Price: 9.49,
                Includes:'Mushrooms, Tomatoes, Mozarella Cheese, Chipotle Mayo'
            },
            {
                Item:'Cuban Panini',
                Price: 9.49,
                Includes:'Pulled Pork, Hot Dog, Ham, Tomatoes, Jalapenos, Mozarella Cheese, Mayo'
            },
            {
                Item:"Avocado Turkey Club Panini",
                Price: 5.49,
                Includes:'Turkey, Bacon, Tomatoes, Mozarella Cheese, Mayo, Avocado'
            },
            {
                Item:"Yordi's Panini",
                Price: 5.49,
                Includes:'Scrambled Eggs, Bacon, Jack and Cheddar Cheese'
            }            
        ]
    },
    {
        category:'BURGERS',
        choice:'(Choice of FRIES OR FRUIT)',
        items:[
            {
                Item:'Jalapeno Burger',
                Price: 7.99,
                Includes:'Tomatoes, Lettuce, Mozarella Cheese, Onion'
            },
            {
                Item:'Avocado Burger',
                Price: 7.99,
                Includes:'Tomatoes, Lettuce, Onions, Cheddar Cheese'
            },
            {
                Item:'Veggie Burger',
                Price: 7.99,
                Includes:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Turkey Burger',
                Price: 7.99,
                Includes:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Cheeseburger',
                Price: 6.99,
                Includes:'Tomatoes, Lettuce, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Bacon Cheeseburger',
                Price: 8.59,
                Includes:'Bacon, Tomatoes, Jack and Cheddar Cheese, Lettuce, Onions'
            },
            {
                Item:"Good Morning Burger",
                Price: 8.99,
                Includes:'Bacon, American Cheese, Tomatoes, Lettuce, Onions,topped w Fried Egg'
            },
            {
                Item:"Chipotle Bacon Burger",
                Price: 8.69,
                Includes:'Diced Chipotle Pepper, Jack and Cheddar Cheese, Lettuce, Tomatoes, Onion'
            }            
        ]
    },
    {
        category:'WRAPS',
        choice:'(Choice of FRIES OR FRUIT)',
        items:[
            {
                Item:'Picoso Wrap',
                Price: 7.39,
                Includes:'Lettuce, Chicken, Avocado, Tomatoes, Jack and Cheddar Cheese, Chili Ranch'
            },
            {
                Item:'Quinoa Wrap',
                Price: 7.39,
                Includes:'Quinoa, Ranch, Lettuce, Tomatoes, Corn Relish, Avocado, Jack and Cheddar Cheese'
            },
            {
                Item:'Turkey Wrap',
                Price: 7.39,
                Includes:'Tomatoes, Lettuce, Onions, Swiss Cheese'
            },
            {
                Item:'Spinach Chicken Wrap',
                Price: 7.39,
                Includes:'Tomatoes, Corn Relish, Avocado, Spinach, Mango Habanero, Ranch, Jack and Cheddar Cheese'
            },
            {
                Item:'Spicy Bacon Chicken Wrap (Spinach Wrap)',
                Price: 7.49,
                Includes:'Tomatoes, Lettuce, Onions, Corn Relish, Jack and Cheddar Cheese, Spicy Lime Ranch'
            },
            {
                Item:'Caesar Chicken Wrap',
                Price: 7.29,
                Includes:'Lettuce, Caesar Dressing, Parmesan Cheese'
            }            
        ]
    },
    {
        category:'OMELETTES',
        items:[
            {
                Item:'Denver Omelette',
                Price: 9.19,
                Includes:'Ham, Green Peppers, Onions, Jack and Cheddar Cheese'
            },
            {
                Item:'Avocado Omelette',
                Price: 9.19,
                Includes:'Sausage, Jack and Cheddar Cheese'
            },
            {
                Item:'Chorizo Burger',
                Price: 10.79,
                Includes:'Jalapenos, Onions, Tomatoes, Jack and Cheddar Cheese'
            },
            {
                Item:'California Omelette',
                Price: 9.39,
                Includes:'Ham, Avocado, Mushrooms, Tomatoe, Scallions, Jack and Cheddar Cheese'
            },
            {
                Item:'Veggie Omelette',
                Price: 9.19,
                Includes:'Spinach, Mushrooms, Tomatoes, Jack and Cheddar Cheese'
            },
            {
                Item:'Protein Green Omelette',
                Price: 11.19,
                Includes:'Egg White, Chicken Breast, Broccoli, Spinach, Mozarella Cheese'
            },
            {
                Item:"Meat Lover Omelette",
                Price: 10.79,
                Includes:'Diced Ham, Bacon, Sausage, Jack and Cheddar Cheese',
                Image:Omlette
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
                Price: 6.99,
                Image:Crepes
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
                Includes:'Cilantro and Onion'
            },
            {
                Item:'Chicken Avocado Tacos (Order of 3)',
                Price: 8.89,
                Includes:'Flour Tortillas w Green Peppers, Cilantro, Onion, Avocado Sauce, Queso Fresco'
            },
            {
                Item:'Cecina Tacos (Order of 3)',
                Price: 8.89,
                Includes:'Onions, Avocado Sauce, Cilantro'
            }
        ]
    },
    {
        category: 'FLAUTAS',
        items:[
            {
                Item:'Chicken or Cheese or Potatoes (Order of 3)',
                Price: 7.09,
                Includes:'Lettuce, Tomatoes, Queso Fresco, Sour Cream, w Green Salsa on side'
            }
        ]
    },
    {
        category: 'ENCHILIDAS',
        items:[
            {
                Item:'Chicken or Cheese (Order of 3)',
                Price: 7.39,
                Choice:'Choice of GREEN or RED',
                Includes:'Lettuce, Tomatoes, Queso Fresco, Sour Cream'
            }
        ]
    },
    {
        category: 'QUESADILLAS',
        items:[
            {
                Item:'Steak',
                Price: 8.49,
                Choice:'Choice of FLOUR OR WHEAT',
                Includes:'Grilled Mushrooms, Onions, Jack and Cheddar Cheese, Lettuce, Sour Cream'
            },
            {
                Item:'Chicken',
                Price: 8.49,
                Choice:'Choice of FLOUR OR WHEAT',
                Includes:'Grilled Mushrooms, Onions, Jack and Cheddar Cheese, Lettuce, Sour Cream'
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
                Choice:'Flavors: Strawberry, Blueberry, Banana, Chocolate'
            }
        ]
    },
    {
        category: 'SALADS',
        items:[
            {
                Item:'Avocado Southwest Chicken Salad',
                Price: 8.69,
                Includes:'Corn Relish, Tomatoes, Red Onions, Pico de Gallo on side'
            },
            {
                Item:'Quinoa Chicken Salad',
                Price: 8.69,
                Includes:'Corn Relish, Jack and Cheddar Cheese Sour Cream and Pico de Gallo on side'
            },
            {
                Item:'Wonton Caesar Salad',
                Price: 6.99,
                Includes:'Chicken and Avocado'
            },
            {
                Item:"Alix's Salad",
                Price: 8.69,
                Includes:'Pecans, Cranberries, Goji Berries, Avocados, Apples, Wontons, Chicken'
            },
            {
                Item:"California Salad",
                Price: 8.89,
                Includes:'Tomatoes, Red Onion, Chicken, Avocados, Corn w Spicy Lime Rach Dressing'
            },
            {
                Item:"Avocado Greek Chicken Salad",
                Price: 8.89,
                Includes:'Kalamata Olives, Tomatoes, Red Onions, Green Peppers, Cucumbers, Feta'
            },
            {
                Item:'Dressing',
                Choice: 'Ranch, Citrus Dressing, Balsamic Vinegar, Lime Dressing, Caaesar, Spicy Lime Ranch, Greek Dressing'
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
                Choice:'Choice of BACON, HAM, OR SAUSAGE',
                Includes:'1 Egg (Any Style)'
            },
            {
                Item:'Kid French Toast',
                Choice:'Choice of BACON, HAM, OR SAUSAGE'
            },
            {
                Item:'Kid Waffle Combo',
                Choice:'Choice of BACON, HAM, OR SAUSAGE'
            },
            {
                Item:'Kid Hot Dog w Fries or Fruit'
            },
        ]
    }
]

export default menuInfo;