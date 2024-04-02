import {restaurants, Restaurant} from "./restaurants";
import {orders, Order, PriceBracket} from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: number) {
    if (price < 10) {
        return PriceBracket.Low;
    } else if (price < 20) {
        return PriceBracket.Medium;
    } else {
        return PriceBracket.High;
    }
}

// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]) {
    const filteredOrders: Order[][] = [];
    orders.forEach(order => {
        const filteredOrder = order.filter(item => getMaxPrice(item.price) <= price);
        filteredOrders.push(filteredOrder);
    });
    return filteredOrders;
}

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
    orders.forEach((order, i) => {
        console.log(`\nRestaurant: ${restaurants[i].name}`);
        order.forEach(item => {
            console.log(`- ${item.name}: $${item.price.toFixed(2)}`);
        });
    });
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);


function App() {

    return (
        <>
            <h1>Restaurant Orders</h1>
            <div>
                <h2>Orders</h2>
                <ul>
                    {orders.map((order, i) => (
                        <li key={i}>
                            <h3>Restaurant {i + 1}</h3>
                            <ul>
                                {order.map((item, j) => (
                                    <li key={j}>
                                        <p>{item.name}: ${item.price.toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
