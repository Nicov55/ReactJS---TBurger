[1mdiff --git a/src/assets/images/cheeseburgersimple.jpg b/src/assets/images/cheeseburgersimple.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..6b6056e[m
Binary files /dev/null and b/src/assets/images/cheeseburgersimple.jpg differ
[1mdiff --git a/src/assets/images/chickennuggets.jpg b/src/assets/images/chickennuggets.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..689fd35[m
Binary files /dev/null and b/src/assets/images/chickennuggets.jpg differ
[1mdiff --git a/src/assets/images/notcodoble.jpg b/src/assets/images/notcodoble.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..93c06d6[m
Binary files /dev/null and b/src/assets/images/notcodoble.jpg differ
[1mdiff --git a/src/assets/images/tiger.jpeg b/src/assets/images/tiger.jpeg[m
[1mdeleted file mode 100644[m
[1mindex 29ecba9..0000000[m
Binary files a/src/assets/images/tiger.jpeg and /dev/null differ
[1mdiff --git a/src/assets/images/tigerwhite.png b/src/assets/images/tigerwhite.png[m
[1mdeleted file mode 100644[m
[1mindex 214a348..0000000[m
Binary files a/src/assets/images/tigerwhite.png and /dev/null differ
[1mdiff --git a/src/assets/images/triplebacon.jpg b/src/assets/images/triplebacon.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..66e32e0[m
Binary files /dev/null and b/src/assets/images/triplebacon.jpg differ
[1mdiff --git a/src/assets/images/triplecheese.jpg b/src/assets/images/triplecheese.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..ffc823d[m
Binary files /dev/null and b/src/assets/images/triplecheese.jpg differ
[1mdiff --git a/src/components/Cart/Cart.jsx b/src/components/Cart/Cart.jsx[m
[1mindex a8ca0ab..ffb350d 100644[m
[1m--- a/src/components/Cart/Cart.jsx[m
[1m+++ b/src/components/Cart/Cart.jsx[m
[36m@@ -6,7 +6,7 @@[m [mimport { useCartContext } from '../../context/CartContext';[m
 [m
 const Cart = () => {[m
 [m
[31m-  const {cart,totalPrice} = useCartContext ();[m
[32m+[m[32m  const {cart,totalPrice,clearCart} = useCartContext ();[m
 [m
   if (cart.length === 0) {[m
     return ([m
[36m@@ -25,7 +25,7 @@[m [mconst Cart = () => {[m
                     <p>No hay productos en el carrito</p>[m
                     <hr className="my-4" />[m
                      <Link className="btn btn-secondary" to='/' role="button">Volver a la Tienda</Link>[m
[31m-                     <button type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>[m
[32m+[m[32m                     <button onClick={clearCart()} type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>[m
                    </div>[m
                 </div>[m
                 <div className="col-lg-4 bg-grey">[m
[36m@@ -55,7 +55,7 @@[m [mconst Cart = () => {[m
                     <hr />[m
                     <p className='text-end fs-5 fw-semibold'>Precio Total: ${totalPrice()}</p>[m
                     <Link className="btn btn-secondary" to='/' role="button">Volver a la Tienda</Link>[m
[31m-                    <button type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>[m
[32m+[m[32m                    <button onClick={clearCart()} type="button" className="btn btn-warning vaciarcart">Vaciar Pedido</button>[m
                   </div>[m
                 </div>[m
                 <div className="col-lg-4 bg-grey">[m
[1mdiff --git a/src/components/Product/products.json b/src/components/Product/products.json[m
[1mindex f6822f5..800ea62 100644[m
[1m--- a/src/components/Product/products.json[m
[1m+++ b/src/components/Product/products.json[m
[36m@@ -2,17 +2,17 @@[m
 {[m
     "id": 0,[m
     "name": "CHEESE BURGER",[m
[31m-    "price":  900,[m
[32m+[m[32m    "price":  1100,[m
     "image": "https://i.ibb.co/k4cnwg5/cheeseburger.jpg",[m
     "description": "Hamburguesa en pan de queso, con dos medallones de 120 gr y 4 fetas de queso cheddar con papas fritas",[m
     "extras": [],[m
[31m-    "stock": 10  [m
[32m+[m[32m    "stock": 12[m[41m  [m
 },[m
 [m
 {[m
     "id": 1,[m
     "name": "BACON BURGER",[m
[31m-    "price":  1000,[m
[32m+[m[32m    "price":  1300,[m
     "image": "https://i.ibb.co/wSgRbLD/cheesebaconburger.jpg",[m
     "description": "Hamburguesa en pan de papa, con dos medallones de 120 gr, 4 fetas de queso cheddar, doble panceta ahumada y salsa BK con papas fritas",[m
     "extras": [],[m
[36m@@ -22,7 +22,7 @@[m
 {[m
     "id": 2,[m
     "name": "CRISPY BURGER",[m
[31m-    "price":  1100,[m
[32m+[m[32m    "price":  1400,[m
     "image": "https://i.ibb.co/BLdw9kP/crispyburger.jpg",[m
     "description": "Hamburguesa en pan de papa, con dos medallones de 120gr, 4 fetas de queso cheddar, doble panceta ahumada, cebolla crispy y salsa thousand island con papas fritas",[m
     "extras": [],[m
[36m@@ -32,7 +32,7 @@[m
 {[m
     "id": 3,[m
     "name": "AMERICAN BURGER",[m
[31m-    "price":  1100,[m
[32m+[m[32m    "price":  1300,[m
     "image": "https://i.ibb.co/VD009w7/americanburger.jpg",[m
     "description": "Hamburguesa en pan de papa, con dos medallones de 120gr, 4 fetas de queso cheddar , lechuga, tomate, pepino, cebolla y salsa BM con papas fritas",[m
     "extras": [],[m
[36m@@ -42,23 +42,74 @@[m
 {[m
     "id": 4,[m
     "name": "ONION BURGER",[m
[31m-    "price":  1100,[m
[32m+[m[32m    "price":  1300,[m
     "image": "https://i.ibb.co/yspdxS9/onionburger.jpg",[m
     "description": "Hamburguesa en pan de papa, con doble carne de 120gr smasheada con cebolla a la plancha y 4 fetas de queso cheddar con papas fritas",[m
     "extras": [],[m
[31m-    "stock": 8    [m
[32m+[m[32m    "stock": 10[m[41m    [m
 },[m
 [m
 {[m
     "id": 5,[m
[32m+[m[32m    "name": "TRIPLE BACON",[m
[32m+[m[32m    "price":  1500,[m
[32m+[m[32m    "image": "https://i.ibb.co/9qjqfVJ/triplebacon.jpg",[m
[32m+[m[32m    "description": "Hamburguesa en pan de papa, con triple carne de 100gr, 6 fetas de queso cheddar, triple panceta ahumada y salsa BK con papas fritas",[m
[32m+[m[32m    "extras": [],[m
[32m+[m[32m    "stock": 8[m[41m    [m
[32m+[m[32m},[m
[32m+[m
[32m+[m[32m{[m
[32m+[m[32m    "id": 6,[m
[32m+[m[32m    "name": "TRIPLEQUÉ",[m
[32m+[m[32m    "price":  1500,[m
[32m+[m[32m    "image": "https://i.ibb.co/6nBhNYs/triplecheese.jpg",[m
[32m+[m[32m    "description": "Hamburguesa en pan de queso, con triple carne de 100gr, 6 fetas de queso cheddar con papas fritas",[m
[32m+[m[32m    "extras": [],[m
[32m+[m[32m    "stock": 8[m[41m   [m
[32m+[m[32m},[m
[32m+[m
[32m+[m[32m{[m
[32m+[m[32m    "id": 7,[m
     "name": "VEGGIE BURGER",[m
[31m-    "price":  1000,[m
[32m+[m[32m    "price":  1200,[m
     "image": "https://i.ibb.co/d56nj5y/veggieburger.jpg",[m
     "description": "Hamburguesa en pan de papa, medallon de lentejas, rucula, parmesano, tomate y salsa de albahaca con papas fritas",[m
     "extras": [], [m
[31m-    "stock": 8   [m
[32m+[m[32m    "stock": 10[m[41m   [m
[32m+[m[32m},[m
[32m+[m
[32m+[m[32m{[m
[32m+[m[32m    "id": 8,[m
[32m+[m[32m    "name": "NOT T BURGER",[m
[32m+[m[32m    "price":  1200,[m
[32m+[m[32m    "image": "https://i.ibb.co/MZ6dbrg/notcodoble.jpg",[m
[32m+[m[32m    "description": "Hamburguesa en pan de papa, medallon NotCo, 4 fetas de queso cheddar, lechuga, tomate, pepino, cebolla y salsa relish con papas fritas",[m
[32m+[m[32m    "extras": [],[m[41m [m
[32m+[m[32m    "stock": 10[m[41m   [m
[32m+[m[32m},[m
[32m+[m
[32m+[m[32m{[m
[32m+[m[32m    "id": 9,[m
[32m+[m[32m    "name": "KID BURGER",[m
[32m+[m[32m    "price":  800,[m
[32m+[m[32m    "image": "https://i.ibb.co/1Lx9vP2/cheeseburgersimple.jpg",[m
[32m+[m[32m    "description": "Hamburguesa en pan de queso, un medallon de 100gr y 2 fetas de queso cheddar con papas fritas pequeñas",[m
[32m+[m[32m    "extras": [],[m[41m [m
[32m+[m[32m    "stock": 11[m[41m   [m
[32m+[m[32m},[m
[32m+[m
[32m+[m[32m{[m
[32m+[m[32m    "id": 10,[m
[32m+[m[32m    "name": "CHICKEN NUGGETS",[m
[32m+[m[32m    "price":  800,[m
[32m+[m[32m    "image": "https://i.ibb.co/Sr0qzpw/chickennuggets.jpg",[m
[32m+[m[32m    "description": "6 Nuggets de pollo rebozados fritos, acompañados con papas fritas pequeñas",[m
[32m+[m[32m    "extras": [],[m[41m [m
[32m+[m[32m    "stock": 11[m[41m   [m
 }[m
 [m
 [m
[32m+[m
 ][m
 [m
