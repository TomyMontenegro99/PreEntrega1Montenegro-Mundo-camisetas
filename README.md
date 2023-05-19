# Presentación del proyecto

La idea del proyecto siempre fue hacer un ecommerce para la venta de distintos tipos de camisetas, esto incluye las categorías de camisetas casuales y deportivas.

## Estructura del proyecto
El proyecto cuenta con una página principal donde se puede ver el catálogo de camisetas, con tu navbar y la información de nombre, precio y stock de la camiseta. Al querer comprar una camiseta se cuenta con 2 botones uno para agregar más camisetas al carrito y otro para quitar.
Al confirmar la compra se muestra los productos a comprar y el carrito aumenta su número de items y luego nos muestra el número de orden de compra por pantalla. Todos estos productos se encuentran en una collection en una base de datos de firebase.

## Componentes

El proyecto cuenta con los siguientes componentes principales: 

- App
- Cart
- CartItem
- CartWidget
- Checkout
- CheckoutForm
- Footer
- Item
- ItemCount
- ItemDetail
- ItemDetailContainer
- ItemList
- ItemListContainer
- NavBar
- CartContext

Se tomo la decisión de tener tantos componentes para un menor acoplamiento y una mayor facilidad al momento de corregir errores.

## A tener en cuenta

Para ejecutar el proyecto es necesario pararse en la ruta: ProyectoFinalMontenegro-Mundo-camisetas/ecommercecamisetas y ejecutar el comando npm start.


