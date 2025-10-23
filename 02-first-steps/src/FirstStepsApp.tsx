import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Xbox Series X', quantity: 1},
    { productName: 'Control Xbox Series', quantity: 2},
    { productName: 'Hollow Knight: Silksong', quantity: 5},
]
export function FirstStepsApp() {
    return (
        <div data-testid="FSA-div">
            <h1>Carrito de compras</h1>

            {
                itemsInCart.map( ({productName, quantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity}/>
                ))
            }
            {/* <ItemCounter name="PlayStation 5" quantity={2}/>
            <ItemCounter name="Xbox Series X" quantity={3}/>
            <ItemCounter name="Hollow Knight: Silksong" quantity={8}/> */}

        </div>
    )
};