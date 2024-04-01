import restaurants from './Restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
// Maximum distance in km set to 10 km for this example
// This can be changed to any value depending on the user's preference
const maxDistance = 10;
let result : string;

const hour: number = new Date().getHours();


const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.priceBracket > priceBracket) {
        return false;
    }

    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }

    if (restaurant.distance > maxDistance) {
        return false;
    }

    // Check if the restaurant is currently open
    if (hour < restaurant.openHour || hour > restaurant.closeHour) {
        return false;
    }

    return restaurant;
});


if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
} else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Restaurants</h1>
                <p>{result}</p>
                {filteredRestaurants.map((restaurant, index) => (
                    <div key={index}>
                        <h2>{restaurant.name}</h2>
                        <p>Price Bracket: {restaurant.priceBracket}</p>
                        <p>Delivery Time: {restaurant.deliveryTimeMinutes} minutes</p>
                        <p>Distance: {restaurant.distance} km</p>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;