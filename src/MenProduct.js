function MenProduct() {

    const productCard = [{
        productCardImg : "https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:300)/clarks-product/5059680313684/300/5059680313684_1.jpeg?compress=true&q=70",
        productName : 'Davis Low Navy Combi',
        productPrice : 1499
    },
    {
        productCardImg : 'https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:300)/clarks-product/5059680381102/300/5059680381102_1.jpeg?compress=true&q=70',
        productName : 'Donaway Knit Navy Knit',
        productPrice : 2499
    },
    {
        productCardImg : 'https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:300)/clarks-product/5050410425196/300/5050410425196_1.jpeg?compress=true&q=70',
        productName : 'Tri Cove Sky Navy Leather',
        productPrice : 2699
    },
    {
        productCardImg : "https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:300)/clarks-product/5059680995613/300/5059680995613_1_5493.webp?compress=true&q=70",
        productName : 'Wesley Post Desert',
        productPrice : 1999
    }
]

    
    return (
        <div class="container-fluid bg-trasparent my-0 p-3" style={{ position: 'relative' }}>
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {
                    productCard.map(function(products){
                        return(
                            <div class="col hp">
                    <div class="card h-100 shadow-sm">
                        <a>
                            <img src={products.productCardImg} class=""  />
                        </a>
                        <div class="card-body">
                            <div class="clearfix mb-3">
                                <span class="float-start badge rounded-pill bg-danger">₹{products.productPrice}</span>

                                <span class="float-end"><del  class="">₹3499</del></span>
                            </div>
                            <h5 class="card-title">
                                <a target="_blank" href="#">{products.productName}</a>
                            </h5>

                            <div class="d-grid gap-2 my-4">

                                <a href="#" class="btn btn-danger bold-btn rounded-pill">add to cart</a>

                            </div>
                            <div class="clearfix mb-1">

                                <span class="float-start"><a href="#"><i class="fas fa-question-circle"></i></a></span>

                                <span class="float-end">
                                    <i class="far fa-heart" style={{ cursor: 'pointer' }}></i>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenProduct;