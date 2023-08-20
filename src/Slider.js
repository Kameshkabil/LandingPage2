function Slider() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner" style={{height:'80vh'}}>
        <div class="carousel-item active bg-primary">
          <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:1600)/clarks-banner/1692424357Rakshabandhan_sale_web_banner.webp?compress=true&q=70" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:1600)/clarks-banner/1692264488Clarks_eComm_Creative_WB-1440x480-R040823.webp?compress=true&q=70" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw98b949bc/Home-Page/Desktop/INTL58573_IN_Rolling_Stones_1920-x-603%20-%20Homepage-desktop.jpg?sw=1600" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-navigation-skechers-india/default/dw7207d5f1/UNISEX-PLP/Collection%20page_Slip%20in_unisex.jpg?sw=1600" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider;