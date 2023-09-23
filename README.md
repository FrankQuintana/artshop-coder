# ÄRT-SHÖP
#### Descripcion : 
Tienda virtual de cuadros de arte, realizada en curso de React JS de Coder House.

### Creación del proyecto:

El proyecto fue dividido en dos pre-entregas, y una tercera entrega, que es el proyecto terminado;

Las consignas fueron las siguientes:

### Pre-entrega 1:

#### Consigna.
    ✓   Crea una carpeta dentro de src llamada 
    components que contenga la 
    implementación del componente NavBar 
    dentro del archivo NavBar.js. Su funcionalidad 
    es la de renderizar una barra de menú 
    (Navbar).
#### Se debe entregar.
    ✓   Brand (título/nombre de la tienda) 
    ✓   Un listado de categorías clickeables 
    ✓   Incorpora alguna librería de estilos con 
    bootstrap/materialize u otro de tu 
    preferencia (opcional).

### Pre-entrega 2:

#### Consigna.
    Conﬁgura en App.js el routing usando un BrowserRouter. 
    de tu aplicación con react-router-dom.
#### Componentes:
    1.      Navbar con cart
    2.      Catálogo
    3.      Detalle de product

### Se debe entregar.
    ✓   Rutas a conﬁgurar
    ‘/’ navega a <ItemListContainer />
    ‘/category/:id’  <ItemListContainer />
    ‘/item/:id’ navega a <ItemDetailContainer /> 
    ✓   Links a conﬁgurar
    Clickear en el brand debe navegar a ‘/’
    Clickear un Item.js debe navegar a /item/:id
    Clickear en una categoría del navbar debe 
    navegar a /category/:categoryId

### Entrega del Proyeco finalizado:
#### Consigna
    ✓ Desarrollarás una app de un e-commerce 
    para poder vender productos de un rubro a 
    elección
    Componentes:
    1.     Navbar
    2.     Catálogo
    3.     Detalle de producto
    4.     CartContext
    5.     CartWidget
#### Se debe entregar
    ✓   NavBar
    ✓   CartWidget
    ✓   ItemListContainer
    ✓   ItemList
    ✓   ItemDetailContainer 
    ✓   ItemDetail
           ○     ItemQuantitySelector 
           ○     Description
           ○     AddItemButton 
    ✓   Checkout
           ○     Brief (detalle de compra)


# ___________________________________
#### dependenciea utilizadas: 
"dependencies": {
    "firebase": "^10.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.46.2",
    "react-router-dom": "^6.15.0"
  }

 ### Navegabilidad: 

    - NavBar:
        - 1 Inicio y Logo se Renderizan todos los productos.
            - 1.1 Click al boton "+info" de cada una de las tarjetas nos envia al detalle del producto.
        - 2 Botones de categoria 'Geometricos','Cartoon' y 'Abstractos', renderizara los productos de dicha categoria.
            - 2.1 Click al boton "+info" de cada una de las tarjetas nos envia al detalle del producto.
        - 3 Icono Carrito.
            - 3.1 Por defecto vacio.
            - 3.2 Carrito con productos cargados.
              - 3.2.1 Imagen del producto seleccionado.
              - 3.2.2 Descripción cantidades y precio unitario.
              - 3.2.3 Icono 'trash' elmina el producto del carrito.
              - 3.2.4 En la parte inferior aparece detallado el total de la compra
              - 3.2.5 Boton 'Finalizar compra' nos redirige a Checkout.
            -     
    - Detalle de producto:
        - 1 Accediendo a traves del boton "+info" de las tarjetas.
            - 1.1 Botones ( + y - ) : Agragaran o restaran unidades al producto a comprar.
            - 1.2 Boton Agregar al carrito: Para agregar el producto al carrito.
    - CheckOut:
        - 1 boton 'Comprar' despues de llenar el formulario envia los datos la compra a Firestore: Productos comprados (con su nombre, cantidad, precio y subtotal), la cantidad total de productos comprados, el monto total de la compra.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
