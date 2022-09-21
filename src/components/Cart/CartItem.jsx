import React from 'react'

const CartItem = () => {
  return (
    <div>
      <div class="templatecarrito">
        <hr />
        <div class="row mb-4 d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            {/* <!-- Imagen --> */}
            <img src="https://dummyimage.com/300x300/dee2e6/6c757d.jpg" class="img-fluid rounded-3" alt="" />
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            {/* <!-- Producto --> */}
            <h6 class="text-black mb-0">Burger</h6>
            <hr />
          </div>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          {/* <!-- Cantidad --> */}
          <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"> 
          <i class="fas fa-minus"></i>
          </button>
          <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control form-control-sm" />
          <button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
          <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          {/* <!-- Precio --> */}
          <h6 class="mb-0">$ 0 </h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </div>
  )
}

export default CartItem
