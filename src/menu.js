import { mainContainer } from './index.js';
import bburritoImg from "../src/images/1.png"
import tburritoImg from "../src/images/2.png"
import nachosImg from "../src/images/3.png"
import bowlImg from "../src/images/4.png"
import tacosImg from "../src/images/5.png"
import horchataImg from "../src/images/horchata.png"
import smoothieImg from "../src/images/smoothie.png"
import juiceImg from "../src/images/juice.png"


export const menuPage = () => {

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid")
    mainContainer.appendChild(menuGrid);

    const foodBox = document.createElement("div");
    foodBox.classList.add("food-box")
    menuGrid.appendChild(foodBox);

    //food

    const foodTitleBox = document.createElement("div");
    foodTitleBox.classList.add("menu-title-box");
    foodBox.appendChild(foodTitleBox)

    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "BURRRRRRITOS & MORE"
    foodTitleBox.appendChild(foodTitle);

    //drink
    const drinkBox = document.createElement("div");
    drinkBox.classList.add("drink-box")
    menuGrid.appendChild(drinkBox);

    const drinkTitleBox = document.createElement("div");
    drinkTitleBox.classList.add("drink-title-box");
    drinkBox.appendChild(drinkTitleBox)

    const drinkTitle = document.createElement("h2");
    drinkTitle.textContent = "DRINKS"
    drinkTitleBox.appendChild(drinkTitle);

    
//food items

const menuItems = [
    {
    title: "Dee's Breakfast Burrito",
    image: bburritoImg,
    description: "Kickstart your day with scrambled tofu or eggs,crispy potatoes, sautéed peppers, onions, black beans, and a zesty vegan chipotle sauce all snugly wrapped in a warm tortilla.",
    kind: "food"
    },

    {
    title: "Hug in a Tortilla",
    image: tburritoImg,
    description: "Your choice of beyond beef, soyrizo, or unchicken meat wrapped with Spanish rice, black beans, fajita veggies, and a dollop of creamy guac (because you deserve it). 🥑",
    kind: "food"
    },

    {
    title: "Nacho Average Nachos",
    image: tburritoImg,
    description: "Layered perfection with crispy tortilla chips, melty vegan cheese, black beans, pico de gallo, jalapeños, and your choice of beyond beef, soyrizo, or unchicken meat.",
    kind: "food"
    },

    {
    title: "Bowled Over You",
    image: bowlImg,
    description: "No tortilla required! Choose beyond beef, soyrizo, or unchicken meat atop a bed of rice, black beans, fajita veggies, and pico de gallo. Finished with a drizzle of lime crema and a scoop of guac (if you’re feeling extra 🥑).",
    kind: "food"
    },

    {
    title: "Taco 'Bout Tasty",
    image: tacosImg,
    description: "Three soft tacos loaded with your choice of beyond beef, soyrizo, or unchicken meat, topped with shredded lettuce, fresh pico de gallo, and a drizzle of tangy lime crema. The taco party starts now!",
    kind: "food"
    },

    {
    title: "Horchata",
    image: horchataImg,
    description: "Pair your meal with our world famous Horchata! This drink will make you feel like you're in Mexico",
    kind: "drink"
    },

    {
    title: "Shmoochie Smoothie",
    image: smoothieImg,
    description: "Your choice of our tasty smoothie - mango, banana, strawberries, etc. Straight from our trees in the patio!",
    kind: "drink"
    },

    {
    title: "Juice for your Boost",
    image: juiceImg,
    description: "Your choice of our healthy juices - mango, banana, strawberries, etc. Straight from our trees in the patio!",
    kind: "drink"
    }
]

menuItems.forEach(item => {
    
    const imgElement = document.createElement("img")
    imgElement.src = item.image;

    const textBox = document.createElement("div")
    
    const titleElement = document.createElement("h3")
    titleElement.textContent = item.title;

    const pElement = document.createElement("p")
    pElement.textContent = item.description;

    if (item.kind === "food") {
        const foodItem = document.createElement("div")
        foodBox.appendChild(foodItem) 
        foodItem.appendChild(imgElement)
        foodItem.appendChild(textBox)
        textBox.appendChild(titleElement)
        textBox.appendChild(pElement)

       

    } else {
        const drinkItem = document.createElement("div")
       drinkBox.appendChild(drinkItem) 
        drinkItem.appendChild(imgElement)
        drinkItem.appendChild(textBox)
        textBox.appendChild(titleElement)
        textBox.appendChild(pElement)
    }

   

    
    
})

}
