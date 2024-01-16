const watchSection = document.getElementById('watch-section');
const phoneSection = document.getElementById('phone-section');
const laptoSection = document.getElementById('laptop-section');
const headphoneSection = document.getElementById('headphone-section');
const cratSection = document.getElementById('cart-section');
const wishlistProductList = document.getElementById('wishlist-product-list');
const cartParent = document.getElementById('cart-parent');
const topRankingSection = [watchSection, phoneSection, laptoSection, headphoneSection];
const newArrivalSection = document.getElementById('new-arrival-section');
const recomendedProductSection = document.getElementById('recomended-product-section');
const shopPageGridProductSection = document.getElementById('shop-page-grid-product-section');
const shopPageListProductSection = document.getElementById('shop-page-list-product-section');
const allSortngSection1 = ['sorting1', 'sorting2', 'sorting3'];
const allSortngSection2 = ['sorting4', 'sorting5', 'sorting6'];
const allLang = ['lang-1', 'lang-2', 'lang-3'];
const allCurrency = ['currency-1', 'currency-2', 'currency-3'];
const allCate = ['all-cate-1', 'all-cate-2', 'all-cate-3'];
const allDropDownSectionId = ['currency-list-section','language-list-section','sorting-list-section-1','sorting-list-section-2','all-cate-list-section'];
const allDropDownSectionArrow = ['currency-arrow','language-arrow','arrow','arrow-2','all-cate-arrow',];
const shopPagesNumSerioulId = ['grid-product-pages-number', 'list-product-pages-number']
const allPageId = ['home-page', 'cart-section', 'shop-page', 'login-page', 'register-page', 'forgot-password-page', 'contact-page', 'about-us-page', 'track-order-page', 'faq-page', 'not-found-page', 'checkout-page', 'payment-page', 'order-complete-page', 'terms-conditions-page', 'my-account-page', 'privacy-policy-page'];
const responsiveSideBarId = ['menu-sideBar','categorise-sideBar','cart-sideBar'];


const listProductAllPagesId =
    ['list-page-num-one', 'list-page-num-two', 'list-page-num-three'];
const gridProductAllPagesId =
    ['grid-page-num-one', 'grid-page-num-two', 'grid-page-num-three'];

if (localStorage.getItem('savedCartItems')) {
    var savedCartItems = [];
    allSavedCartData = localStorage.getItem('savedCartItems');
    JSON.parse(allSavedCartData).forEach(itemName => {
        savedCartItems.push(itemName);
    });
} else {
    var savedCartItems = ['SAMSUNG 27 Curved']
}

if (localStorage.getItem('savedWishlistItems')) {
    var savedWishlistItems = [];
    allSavedCartData = localStorage.getItem('savedWishlistItems');
    JSON.parse(allSavedCartData).forEach(itemName => {
        savedWishlistItems.push(itemName);
    });
} else {
    var savedWishlistItems = [];
}

document.getElementById('date').value = '2000-10-24';

function addToCart(name, img, price) {
    const cartParent = document.getElementById('cart-parent');
    const div = document.createElement('div');
    div.className = "border border-gray-300 flex flex-col md:flex-row p-10 lg:p-6 md:items-center rounded-md h-auto md:min-h-36 space-y-5 md:space-y-0";
    div.innerHTML = `
    <div class="w-full md:w-1/5">
        <img src="${img.src}" class="w-auto mx-auto md:mx-0 h-20">
    </div>

    <div class="w-full md:w-2/5 flex flex-col font-semibold md:ml-5 lg:ml-0 name-price-size">
        <p class="text-lg name">${name.innerText}</p>
        <p class="text-primary mt-3 price">$${price.innerText}</p>
        <p>Size:M</p>
    </div>

    <div class="w-full md:w-2/5 flex justify-between items-center price-delete">
        <div class="w-1/2 flex text-lg font-semibold">
            <button
                class="border border-gray-400 py-1 px-2 h-fit hover:bg-black/20 duration-200 decrease">-</button>
            <p class="border border-gray-400 border-x-0 py-1 px-2 h-fit">1</p>
            <button
                class="border border-gray-400 py-1 px-2 h-fit hover:bg-black/20 duration-200 increase">+</button>
        </div>

        <div class="w-1/2 font-semibold flex justify-between items-center total-price">
            <p class=" text-primary text-lg">$<span>${price.innerText}</span></p>
            <i class="fa-solid fa-trash hover:text-primary text-base cursor-pointer delete"></i>
        </div>
    </div>`;
    cartParent.appendChild(div);
}

function savedAddToCartAndWishlistAllData() {
    localStorage.setItem('addToCartAllData', cartParent.innerHTML);
    localStorage.setItem('wishlistAllData', wishlistProductList.innerHTML);
}

cartParent.innerHTML = localStorage.getItem('addToCartAllData');
wishlistProductList.innerHTML = localStorage.getItem('wishlistAllData');

function addToCartAndWishlistBtnHandle(button) {
    const mainParent = button.parentNode.parentNode.parentNode;
    const img = mainParent.querySelector('div img');
    const name = mainParent.querySelector('div p');
    const price = mainParent.querySelector('div span span');
    if (button.innerText === 'Add To Cart') {
        if (savedCartItems.indexOf(name.innerText) === -1) {

            addToCart(name, img, price);
            savedCartItems.push(name.innerText);
            localStorage.setItem('savedCartItems', JSON.stringify(savedCartItems));
        }
    } else {
        if (savedWishlistItems.indexOf(name.innerText) === -1) {
            savedWishlistItems.push(name.innerText);
            localStorage.setItem('savedWishlistItems', JSON.stringify(savedWishlistItems));
            wishlistProductCart(img.src, name.innerText, price.innerText)
        }
    }

    savedAddToCartAndWishlistAllData();

}


function productCart(parentSection, productDetails) {

    const div = document.createElement('div');

    div.className = "flex flex-col border border-gray-300 pb-5 rounded-md group h-80 space-y-5";
    div.innerHTML = `
    <div class="w-full h-3/5 p-5 relative img" style="background:#e5e5e58c;">
        <img src="${productDetails.img}" class=" w-auto mx-auto h-[120px]">

        <div class="absolute top-0 left-0 p-5 w-full h-full flex space-x-5 bg-black/30 justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
            <i class="fa-solid fa-magnifying-glass bg-primary p-2 rounded-full hover:bg-secondary text-white transition"></i>
            <i class="fa-regular fa-heart bg-primary p-2 rounded-full hover:bg-secondary text-white transition" onclick="addToWishlist(this)"></i>
        </div>
    </div>

    <div class="relative h-2/5 w-full flex flex-col px-5 overflow-hidden name-and-price">
        <p class="text-lg font-medium hover:text-primary w-fit lg:text-base cursor-pointer">${productDetails.name}</p>
        <div class="flex items-center space-x-3 group-hover:hidden py-1">
            <span class="text-primary font-semibold text-md">$<span>${productDetails.Dprice}</span></span> <del class="text-sm text-gray-500">${productDetails.price}</del>
        </div>

        <div class="flex items-center space-x-1 group-hover:hidden">
            <i class="text-yellow-500 fa-solid fa-star text-sm"></i>
            <i class="text-yellow-500 fa-solid fa-star text-sm"></i>
            <i class="text-yellow-500 fa-solid fa-star text-sm"></i>
            <i class="text-yellow-500 fa-solid fa-star text-sm"></i>
            <i class="text-yellow-500 fa-solid fa-star text-sm"></i>
            <p class="pl-3">(${productDetails.review})</p>
        </div>
        <div>
                <Button
                class="bg-primary text-white hover:bg-transparent hover:text-primary duration-300 rounded-md px-5 py-2 font-semibold absolute -bottom-20 left-3 opacity-0 group-hover:opacity-100 group-hover:bottom-5 border border-primary" onclick="addToCartAndWishlistBtnHandle(this)">Add
                To Cart</Button>
        </div>
    </div>
    `;
    parentSection.appendChild(div);

}


function listProductCart(parentSection, productDetails) {

    const div = document.createElement('div');

    div.className = "flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 border border-gray-300 md:h-64 mt-5 rounded-md pb-5 md:pb-0";
    div.innerHTML = `
    <div class="w-full md:w-1/3 h-full flex justify-center items-center py-10 md:py-0"
        style="background: aliceblue;">
        <img src="${productDetails.img}" class="w-40">
    </div>

    <div
        class="w-full md:w-2/3 h-full flex flex-col space-y-1 justify-center pr-14 px-5 md:px-0">
        <p class="text-2xl font-medium">${productDetails.name}</p>

        <div class="flex items-center space-x-3 group-hover:hidden py-1">
            <span class="text-primary font-semibold text-lg">$<span>${productDetails.Dprice}</span></span> <del
                class="text-base text-gray-500 font-medium">${productDetails.price}</del>
        </div>

        <div class="flex items-center space-x-1 group-hover:hidden">
            <i class="text-yellow-500 fa-solid fa-star text-xs"></i>
            <i class="text-yellow-500 fa-solid fa-star text-xs"></i>
            <i class="text-yellow-500 fa-solid fa-star text-xs"></i>
            <i class="text-yellow-500 fa-solid fa-star text-xs"></i>
            <i class="text-yellow-500 fa-solid fa-star text-xs"></i>
            <p class="pl-3">(${productDetails.review})</p>
        </div>

        <p class="text-base mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus blandit massa enim.</p>


        <div class=" flex space-x-5 pt-5">
            <div
                class="flex justify-center items-center space-x-1 text-white hover:text-primary w-32 font-semibold text-base rounded-md bg-primary border border-primary hover:bg-transparent text-center p-1.5 duration-300 cursor-pointer" onclick="addToCartAndWishlistBtnHandle(this)">
                <i class="fa-solid fa-cart-shopping text-xs mt-1"></i>
                <button>Add To Cart</button>
            </div>
            <div
                class="flex justify-center space-x-1 items-center w-32 font-semibold text-base rounded-md bg-transparent text-primary border border-primary hover:bg-primary hover:text-white text-center p-1.5 duration-300 cursor-pointer" onclick="addToCartAndWishlistBtnHandle(this)">
                <i class="fa-regular fa-heart text-xs mt-1"></i>
                <button>Wishlist</button>
            </div>
        </div>
    </div>`;
    parentSection.appendChild(div);

}


function productOrderCart(parentSection, orderProduct) {

    const div = document.createElement('div');
    const imgesDiv = document.createElement('div');
    div.className = "p-5 border border-gray-300 rounded-sm relative flex flex-col space-y-5";
    imgesDiv.className = "flex space-x-5";
    for (let i = 0; i < orderProduct.quantity; i++) {
        const img = document.createElement('img');
        img.className = 'h-10 sm:h-12';
        img.src = orderProduct.img;
        imgesDiv.appendChild(img);
    }
    div.innerHTML = `
    <div class="absolute bottom-0 right-0 md:top-0 md:bottom-auto px-5 py-5 md:py-0">
        <button
            class="py-2 px-4 text-primary rounded font-semibold duration-500 hover:bg-primary hover:text-white border border-primary" onclick="changeAccountPageSection('order-details-section',undefined,'Order Details')">View
            Order</button>
    </div>

    <div class="flex flex-col space-y-2">

        <div class="flex justify-between">
            <p class="font-semibold w-1/2 sm:h-1/3 md:w-1/5">Order Number</p>
            <p class="font-semibold w-1/2 sm:h-1/3 md:w-1/5">Purchased</p>
            <p class="hidden sm:block font-semibold w-1/3 md:w-1/5">Quantity</p>
            <p class="hidden md:block font-semibold md:w-1/5">Total</p>
            <p class="hidden md:block font-semibold md:w-1/5">Status</p>
        </div>

        <div class="flex justify-between">
            <p class="w-1/2 sm:h-1/3 md:w-1/5">${orderProduct.orderNumber}</p>
            <p class="w-1/2 sm:h-1/3 md:w-1/5">${orderProduct.date}</p>
            <p class="hidden sm:block w-1/3 md:w-1/5">x${orderProduct.quantity}</p>
            <p class="hidden md:block md:w-1/5">${orderProduct.totalPrice}</p>
            <p class="hidden md:block md:w-1/5 ${orderProduct.color} font-medium">${orderProduct.status}</p>
        </div>

    </div>


    <div class="md:hidden flex flex-col space-y-1">
        <div class="flex space-x-2 sm:space-x-0">
            <p class="sm:hidden">x${orderProduct.quantity}</p>
            <p class="font-semibold">${orderProduct.totalPrice}</p>
        </div>
        <p class="text-primary font-medium">${orderProduct.status}</p>
    </div>
        `;
    div.insertBefore(imgesDiv, div.firstChild);
    parentSection.appendChild(div);
}

function wishlistProductCart(img, name, price) {
    const div = document.createElement('div');
    div.className = 'flex md:items-center md:space-x-5 flex-col md:flex-row items-start space-x-0 space-y-5 md:space-y-0 px-5 py-8 border border-gray-300 rounded';
    div.innerHTML = `
<div class="w-20">
    <img src="${img}" class="w-full">
</div>

<div class="w-full md:w-2/3 flex flex-col md:flex-row justify-between md:items-center md:space-x-5 space-x-0 space-y-2 md:space-y-0">
    <div class="flex flex-col space-y-1">
        <p class="text-base md:text-lg font-medium">${name}</p>
        <h2 class="text-base">Availability: <a class="text-primary">In Stock</a></h2>
    </div>

    <div>
        <span class="text-primary font-bold text-lg">
            $<span>${price}</span>
        </span>
    </div>
</div>
<div class="w-full md:w-fit">
    <div class="w-full md:w-fit flex justify-between md:space-x-5 items-center">
            <div
                class="flex justify-center items-center space-x-1 text-white hover:text-primary w-32 font-semibold text-sm md:text-base rounded-md bg-primary border border-primary hover:bg-transparent text-center p-1.5 duration-300 cursor-pointer h-fit" onclick="addToCartAndWishlistBtnHandle(this)">
                <i class="fa-solid fa-cart-shopping text-xs mt-1"></i>
                <button>Add To Cart</button>
            </div> 
            <i class="fa-solid fa-trash hover:text-primary text-base cursor-pointer delete" onclick="deleteWishlistItem(this)"></i>
    </div>
</div>
    `;
    wishlistProductList.appendChild(div);
}


function deleteWishlistItem(button) {
    const cartParent = button.parentNode.parentNode.parentNode;
    const name = cartParent.querySelector('div p').innerText;
    savedWishlistItems.splice(savedWishlistItems.indexOf(name), 1);
    localStorage.setItem("savedWishlistItems", JSON.stringify(savedWishlistItems));
    wishlistProductList.removeChild(cartParent);
    savedAddToCartAndWishlistAllData();
}

function addToWishlist(button) {
    const mainParent = button.parentNode.parentNode.parentNode;
    const img = mainParent.querySelector('.img img');
    const name = mainParent.querySelector('.name-and-price p');
    const price = mainParent.querySelector('.name-and-price div span span');

    if (savedWishlistItems.indexOf(name.innerText) === -1) {
        savedWishlistItems.push(name.innerText);
        localStorage.setItem('savedWishlistItems', JSON.stringify(savedWishlistItems));
        wishlistProductCart(img.src, name.innerText, price.innerText)
    };
    savedAddToCartAndWishlistAllData();
}

const recentOrderSection = document.getElementById('recent-order-section');

for (let i = 0; i < 2; i++) {
    productOrderCart(recentOrderSection, recentOrderProduct[i])

}


function productReturnCart(parentSection, returnProduct) {
    const div = document.createElement('div');
    div.className = "flex md:space-x-5 shadow-md p-5 relative flex-col md:flex-row space-y-10 md:space-y-0 items-start";
    div.innerHTML = `
    <div class="flex space-x-5 items-center md:w-1/3">
        <div class="w-14">
            <img src="${returnProduct.img}" class="h-12 mx-auto">
        </div>

        <div class="flex flex-col space-y-1">
            <p class="text-base font-medium">${returnProduct.name}</p>
            <p class="font-medium text-gray-500">${returnProduct.price}</p>
        </div>
    </div>

    <div
        class="flex items-center space-x-5 sm:space-x-10 lg:space-x-5 justify-between xs:justify-normal pb-14 xs:pb-0 w-full xs:w-fit">
        <div class="flex flex-col space-y-1">
            <p class="text-base font-semibold">Order Number</p>
            <p>${returnProduct.orderNumber}</p>
        </div>

        <div class="flex flex-col space-y-1">
            <p class="text-base font-semibold">Return status</p>
            <p class="${returnProduct.color} font-medium">${returnProduct.status}</p>
        </div>
    </div>

    <div class="absolute right-0 top-auto bottom-0 md:bottom-auto px-5 py-5 md:py-5">
        <button
            class="py-2 px-4 text-primary rounded font-semibold duration-500 hover:bg-primary hover:text-white border border-primary" onclick="changeAccountPageSection('return-request-section',undefined,'Return Order details')">View
            Order</button>
    </div>
    `;
    parentSection.appendChild(div);

}

const myReturnSection = document.getElementById('my-return-section');
for (let i = 0; i < 3; i++) {
    productReturnCart(myReturnSection, myReturnProduct[i]);
}

const myOrderSection = document.getElementById('my-order-section');

for (let i = 0; i < 3; i++) {
    productOrderCart(myOrderSection, myOrderProduct[i])

}


const myCancellationsSection = document.getElementById('my-cancellations-section');

for (let i = 0; i < 3; i++) {
    productOrderCart(myCancellationsSection, myCancelledProduct[i])

}


function productReviewCart(parentSection, reviewProduct) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    div.className = "flex md:space-x-5 shadow-md p-5 relative flex-col md:flex-row space-y-10 md:space-y-0 items-start";
    div2.className = 'flex space-x-1';
    div2.innerHTML = `
    <svg class="w-5 h-5 text-yellow-500 fill-current star" data-value="2" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7h7.6l-6 4.8 2.4 7-6-4.8-6 4.8 2.4-7-6-4.8h7.6z" />
    </svg>
    
    <svg class="w-5 h-5 text-yellow-500 fill-current star" data-value="2" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7h7.6l-6 4.8 2.4 7-6-4.8-6 4.8 2.4-7-6-4.8h7.6z" />
    </svg>
    <svg class="w-5 h-5 text-yellow-500 fill-current star" data-value="2" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7h7.6l-6 4.8 2.4 7-6-4.8-6 4.8 2.4-7-6-4.8h7.6z" />
    </svg>
    <svg class="w-5 h-5 text-yellow-500 fill-current star" data-value="2" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7h7.6l-6 4.8 2.4 7-6-4.8-6 4.8 2.4-7-6-4.8h7.6z" />
    </svg>
    <svg class="w-5 h-5 text-yellow-500 fill-current star" data-value="2" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7h7.6l-6 4.8 2.4 7-6-4.8-6 4.8 2.4-7-6-4.8h7.6z" />
    </svg>

    `
    div.innerHTML = `
    <div class="flex space-x-5 items-center md:w-1/3">
        <div class="w-14">
        <img src="${reviewProduct.img}" class="mx-auto h-12">
        </div>
        <div class="flex flex-col space-y-1">           
            <p class="text-base font-medium">${reviewProduct.name}</p>
            <p class="font-medium text-gray-500">${reviewProduct.price}</p>
        </div>
    </div>
    <div
        class="flex items-center space-x-5 sm:space-x-10 lg:space-x-5 justify-between xs:justify-normal pb-14 xs:pb-0 w-full xs:w-fit">
        <div class="flex flex-col space-y-1">
            <p class="text-base font-semibold">Order Number</p>
            <p>${reviewProduct.orderNumber}</p>
        </div>

        <div class="flex flex-col space-y-1">
            <p class="text-base font-semibold">Purchased</p>
            <p>${reviewProduct.date}</p>
        </div>
    </div>

    <div class="absolute right-0 top-auto bottom-0 md:bottom-auto px-5 py-5 md:py-5">
        <button
            class="py-2 px-4 text-primary rounded font-semibold duration-300 hover:bg-primary hover:text-white border border-primary" onclick="changeAccountPageSection('write-review-section',undefined,'Write Review')">${reviewProduct.buttonText}</button>
    </div>
    `;
    parentSection.appendChild(div);
    const namePriceReviewParent = div.childNodes[1].childNodes[3];
    if (reviewProduct.review === 'yes') {
        namePriceReviewParent.appendChild(div2);
    }
}

const myReviewSection = document.getElementById('my-review-section');
for (let i = 0; i < 3; i++) {
    productReviewCart(myReviewSection, myReviewProduct[i])

}


for (let j = 0; j < 4; j++) {


    for (let i = 0; i < 3; i++) {
        const product = topRankingProduct[j][`${i}`];
        const div = document.createElement('div');
        div.className = "flex flex-col sm:flex-row sm:space-x-3 sm:items-center space-y-5 sm:space-y-0";

        div.innerHTML = `

        <div class="w-full md:w-2/5 bg-[#f2f0f0] px-3 py-5 rounded-md relative sm:w-2/3">
        <img class="w-auto h-20 mx-auto" src="${product.img}">
        <p
            class="absolute top-0 right-0 bg-primary px-2 font-semibold rounded-tr-md text-white rounded-bl-md text-xs">
            ${i + 1}
        </p>
    </div>
    <div class=" flex flex-col">
        <p class="text-base font-medium hover:text-primary cursor-pointer"> ${product.name}</p>
        <div class="flex space-x-5 items-center">
            <p class="text-primary text-base font-medium ">$${product.Dprice}</p>
            <p class="line-through text-sm text-gray-500 font-semibold">${product.price}</p>
        </div>
        <div class="flex items-center space-x-1">
            <i class="text-yellow-500 fa-solid fa-star text-[10px]"></i>
            <i class="text-yellow-500 fa-solid fa-star text-[10px]"></i>
            <i class="text-yellow-500 fa-solid fa-star text-[10px]"></i>
            <i class="text-yellow-500 fa-solid fa-star text-[10px]"></i>
            <i class="text-yellow-500 fa-solid fa-star text-[10px]"></i>
            <p class="">(${product.review})</p>
        </div>
    </div>`;
        topRankingSection[j].appendChild(div)
    }
}


for (let i = 0; i < 4; i++) {
    const productDetails = newArrivalsProduct[i][0];
    productCart(newArrivalSection, productDetails);

}

function lodedShopPageGridProduct1(gridProductPageNum, pageNumDiv) {
    shopPageGridProductSection.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const productDetails = gridProductPageNum[i];
        productCart(shopPageGridProductSection, productDetails)
    }

    gridProductAllPagesId.forEach(page => {
        const pageParent = document.getElementById(page);
        if (pageNumDiv === page) {
            pageParent.classList.add('bg-primary');
            pageParent.classList.add('text-white');
        } else {
            pageParent.classList.remove('bg-primary');
            pageParent.classList.remove('text-white');
        }
    })
}

lodedShopPageGridProduct1(shopPageGridProduct1, 'grid-page-num-one')
// for (let i = 0; i < 9; i++) {
//     const productDetails = shopPageGridProduct[i];
//     productCart(shopPageGridProductSection, productDetails);

// }

function lodedShopPageListProduct1(listProductPageNum, pageNumDiv) {
    shopPageListProductSection.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const productDetails = listProductPageNum[i];
        listProductCart(shopPageListProductSection, productDetails)
    }

    listProductAllPagesId.forEach(page => {
        const pageParent = document.getElementById(page);
        if (pageNumDiv === page) {
            pageParent.classList.add('bg-primary');
            pageParent.classList.add('text-white');
        } else {
            pageParent.classList.remove('bg-primary');
            pageParent.classList.remove('text-white');
        }
    })
}

lodedShopPageListProduct1(shopPageListProduct1, 'list-page-num-one')

for (let i = 0; i < 8; i++) {
    const productDetails = recomendedProduct[i];

    productCart(recomendedProductSection, productDetails);
}



const searchInputForm = document.getElementById('search-input-form');
const searchList = document.getElementById('search-list');
const searchInput = document.getElementById('search-input');
let opendSideBar;
const resMenuBgClick = document.getElementById('res-section-bg');
function showSideBar(id) {
    const sideBar = document.getElementById(id);
    if (id === 'searchBar') {
        sideBar.classList.remove('-top-full');
        sideBar.classList.add('top-0');
        opendSideBar = id;
    } else {
        sideBar.classList.remove('-left-full');
        sideBar.classList.add('left-0');
        resMenuBgClick.classList.add('bg-black/30');
        resMenuBgClick.classList.add('h-screen');
        opendSideBar = id;

    }
}

function hideSideBar(id) {
    const sideBar = document.getElementById(id);
    if (id === 'searchBar') {
        sideBar.classList.add('-top-full');
        sideBar.classList.remove('top-0');
    } else {
        sideBar.classList.add('-left-full');
        sideBar.classList.remove('left-0');
        resMenuBgClick.classList.remove('bg-black/30');
        resMenuBgClick.classList.remove('h-screen');

    }
}

function savedSearchData() {
    localStorage.setItem('searchData', searchList.innerHTML);
}

searchInputForm.addEventListener('submit', searchItem);

function searchItem(event) {
    event.preventDefault();
    if (searchInput.value != '') {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center mt-5 px-5 hover:bg-black/30 rounded-md";
        div.innerHTML = `<span>${searchInput.value}</span> <i class="fa-solid fa-xmark cursor-pointer"></i>`;
        searchList.appendChild(div);
        savedSearchData();
        searchInput.value = '';
    }
}

searchList.onclick = removeSearchItem;

function removeSearchItem(e) {
    if (e.target.tagName === 'I') {
        searchList.removeChild(e.target.parentNode)
    }
    savedSearchData();
}

function setSearchList() {
    const searchData = localStorage.getItem('searchData');
    searchList.innerHTML = searchData;
}
window.onload = setSearchList;
resMenuBgClick.addEventListener('click', () => {
    hideSideBar(opendSideBar);
})

// window.addEventListener('resize', () => {
//     const menuside = document.getElementById('menu-sideBar');
//     const categoriseuside = document.getElementById('categorise-sideBar');
//     if (window.innerWidth === '992px') {
//         menuside.classList.add('-left-full');
//         menuside.classList.remove('left-0');
//         categoriseuside.classList.add('-left-full');
//         categoriseuside.classList.remove('left-0');
//     }
// })

cratSection.addEventListener('click', (e) => {
    const parent = e.target.parentNode.parentNode.parentNode;
    const quantity = e.target.parentNode.querySelector('p');
    const totalPrice = parent.querySelector('.price-delete .total-price span');
    const price = parent.querySelector('.name-price-size .price').innerText;
    const name = parent.querySelector('.name-price-size .name').innerText;
    const priceNumber = parseInt(price.slice(1, price.length));
    let quantityNumber = parseInt(quantity.innerText);
    if (e.target.className.indexOf('increase') != -1) {
        quantityNumber++;
        quantity.innerText = quantityNumber;
        totalPrice.innerText = `${priceNumber * quantityNumber}.00`;
        ;
    }
    else if (e.target.className.indexOf('decrease') != -1) {
        if (quantityNumber > 1) {
            quantityNumber--;
            quantity.innerText = quantityNumber;
            totalPrice.innerText = `${priceNumber * quantityNumber}.00`;
        }
    }
    if (e.target.className.indexOf('delete') != -1) {
        parent.parentNode.removeChild(parent);
        savedCartItems.splice(savedCartItems.indexOf(name), 1);
        localStorage.setItem('savedCartItems', JSON.stringify(savedCartItems));
    }
    savedAddToCartAndWishlistAllData();
})


// when we change the price range increase or dicrease the max value
function priceRangeChange(priceRange) {
    const highPrice = priceRange.parentNode.querySelector('div .high-price span');
    highPrice.innerText = priceRange.value;
}


// this function handle the how to look product view . when we click the flex or gird button product view change like this.
function changeProductView(showSectionId, hideSectionId, icon1, icon2, pagesSerioulId) {
    const showSection = document.getElementById(showSectionId);
    const hideSection = document.getElementById(hideSectionId);
    const gridIcon = document.getElementById(icon1);
    const listIcon = document.getElementById(icon2);
    gridIcon.classList.add('bg-primary');
    gridIcon.classList.add('text-white');
    listIcon.classList.remove('bg-primary');
    listIcon.classList.remove('text-white');
    hideSection.classList.add('hidden');
    showSection.classList.remove('hidden');
    shopPagesNumSerioulId.forEach(id => {
        const serioulSection = document.getElementById(id);
        if (id == pagesSerioulId) {
            serioulSection.classList.remove('hidden');
        } else {
            serioulSection.classList.add('hidden')
        }
    })
}


// this function handle when we click the default sorting open the sorting list
function openSortingList(parentId, arrowId) {
    closeAllDropDownSection(parentId);
    const sortingListSection = document.getElementById(parentId);
    const arrow = document.getElementById(arrowId);
    if (arrow.className.indexOf('rotate-180') === -1) {
        sortingListSection.classList.remove('scale-0');
        sortingListSection.classList.add('h-auto');
        arrow.classList.add('rotate-180');
    } else {
        sortingListSection.classList.add('scale-0');
        sortingListSection.classList.remove('h-auto');
        arrow.classList.remove('rotate-180');
    }
}


// when we chose a sorting this function display this 
function choseingSort(selectSortingId, displaySortingId, arr) {
    const displaySorting = document.getElementById(displaySortingId);
    arr.forEach(value => {
        const selectSortingDiv = document.getElementById(value);
        if (value === selectSortingId) {
            selectSortingDiv.classList.add('font-semibold');
            displaySorting.innerText = selectSortingDiv.innerText;
        } else {
            selectSortingDiv.classList.remove('font-semibold');
        }
    })
}


// when we click filter button if the filter section is close it open if open it close
function showAndHideFilterSection() {

    const filterSecton = document.getElementById('shop-page-filter-section');
    if (filterSecton.className.indexOf('hide') === -1) {
        filterSecton.classList.add('hidden');
        filterSecton.classList.add('flex');
        filterSecton.classList.add('hide');
    } else {
        filterSecton.classList.remove('hidden');
        filterSecton.classList.remove('flex');
        filterSecton.classList.remove('hide');
    }
}



const twoFilterSection = document.querySelectorAll('.filter-section');
for (let i = 0; i < 2; i++) {
    const value = twoFilterSection[i];
    const div = document.createElement('div');
    div.classList.className = 'flex flex-col space-y-5';
    div.innerHTML = `

    
    
    <div class="flex flex-col space-y-3 border-b border-gray-300 pb-5">
    <p class="text-lg uppercase font-semibold">Categorise</p>

    <div class="flex justify-between items-center">
        <div class="flex space-x-3 items-center">
            <input type="checkbox" class="text-primary focus:ring-0 rounded-sm" id="cate-${i}-1">
            <label for="cate-${i}-1">Women</label>
        </div>
        <p>(16)</p>
    </div>

    <div class="flex justify-between items-center">
        <div class="flex space-x-3 items-center">
            <input type="checkbox" class="text-primary focus:ring-0 rounded-sm" id="cate-${i}-2">
            <label for="cate-${i}-2">Men</label>
        </div>
        <p>(9)</p>
    </div>

    <div class="flex justify-between items-center">
        <div class="flex space-x-3 items-center">
            <input type="checkbox" class="text-primary focus:ring-0 rounded-sm" id="cate-${i}-3">
            <label for="cate-${i}-3">Shoes</label>
        </div>
        <p>(19)</p>
    </div>

    <div class="flex justify-between items-center">
        <div class="flex space-x-3 items-center">
            <input type="checkbox" class="text-primary focus:ring-0 rounded-sm" id="cate-${i}-4">
            <label for="cate-${i}-4">Computer</label>
        </div>
        <p>(35)</p>
    </div>

</div>

<div class="flex flex-col space-y-3 border-b border-gray-300 pb-5">

    <p class="text-lg uppercase font-semibold">Brands</p>

    <div class="flex space-x-3 items-center">
        <input type="checkbox" class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            id="brand-${i}-1">
        <label class="cursor-pointer" for="brand-${i}-1">Nike</label>
    </div>
    <div class="flex space-x-3 items-center">
        <input type="checkbox" class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            id="brand-${i}-2">
        <label class="cursor-pointer" for="brand-${i}-2">Adidus</label>
    </div>
    <div class="flex space-x-3 items-center">
        <input type="checkbox" class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            id="brand-${i}-3">
        <label class="cursor-pointer" for="brand-${i}-3">Easy</label>
    </div>
    <div class="flex space-x-3 items-center">
        <input type="checkbox" class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            id="brand-${i}-4">
        <label class="cursor-pointer" for="brand-${i}-4">Arong</label>
    </div>

</div>

<div class="border-b border-gray-300 pb-5 flex flex-col space-y-3">
    <p class="text-lg uppercase font-semibold">Price</p>
    <input type="range" min="1" max="1000" value="320"
        class="appearance-none w-full bg-primary rounded h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:ring-1 [&::-webkit-slider-thumb]:ring-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer" onchange="priceRangeChange(this)">

    <div class="flex space-x-1 text-base font-semibold">
        <p>$1</p>
        <p>-</p>
        <div class="flex high-price">$
            <span>320</span>
        </div>
    </div>

</div>

<div class="border-b border-gray-300 pb-5 flex flex-col space-y-3">
    <p class="text-lg uppercase font-semibold">Price</p>
    <div class="flex space-x-3">
        <input type="text" readonly placeholder="XS"
            class="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ring-0 focus:border-none text-sm font-medium rounded cursor-pointer">
        <input type="text" readonly placeholder="S"
            class="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ring-0 focus:border-none text-sm font-medium rounded cursor-pointer">
        <input type="text" readonly placeholder="M"
            class="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ring-0 focus:border-none text-sm font-medium rounded cursor-pointer">
        <input type="text" readonly placeholder="L"
            class="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ring-0 focus:border-none text-sm font-medium rounded cursor-pointer">
        <input type="text" readonly placeholder="XL"
            class="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ring-0 focus:border-none text-sm font-medium rounded cursor-pointer">
    </div>
</div>

<div class="pb-5 flex flex-col space-y-3">
    <p class="text-lg uppercase font-semibold">Color</p>
    <div class="flex space-x-3">
        <input type="text"
            class="h-7 w-7 bg-primary focus:ring-2 border-none focus:ring-primary focus:border-none rounded focus:ring-offset-2 cursor-pointer"
            readonly>
        <input type="text"
            class="h-7 w-7 bg-blue-600 focus:ring-2 border-none focus:ring-blue-600 focus:border-none rounded focus:ring-offset-2 cursor-pointer"
            readonly>
        <input type="text"
            class="h-7 w-7 bg-black focus:ring-2 border-none focus:ring-black focus:border-none rounded focus:ring-offset-2 cursor-pointer"
            readonly>
    </div>
</div>
    `;
    value.appendChild(div)
}

const twoAccountPageButtonSection = document.querySelectorAll('.account-page-button-section');
twoAccountPageButtonSection.forEach(value => {
    value.innerHTML = `
    <div class="flex border-b items-start border-gray-300 pb-5">
    <div class="flex flex-col space-y-2">
        <div class="flex space-x-2 text-primary text-lg font-semibold cursor-pointer hover:text-primary duration-300 items-center btn-1"
            onclick="changeAccountPageSection('my-account-section','btn-1','Manage My Account')">

            <i class="fa-regular fa-address-card cursor-pointer w-5"></i>
            <p>Manage My Account</p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-2"
            onclick="changeAccountPageSection('profile-information-section','btn-2','Profile Information')">
            <p class="w-5"></p>
            <p>Profile Information</p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-3"
            onclick="changeAccountPageSection('manage-address-section','btn-3','Manage Address')">
            <p class="w-5"></p>
            <p>Manage Address</p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-4"
            onclick="changeAccountPageSection('change-password-section','btn-4','Change Password')">
            <p class="w-5"></p>
            <p>Change Password</p>
        </div>
    </div>
</div>

<div class="flex border-b items-start border-gray-300 pb-5">
    <div class="flex flex-col space-y-2">
        <div class="flex space-x-3 text-lg font-semibold cursor-pointer hover:text-primary duration-300 items-center btn-5"
            onclick="changeAccountPageSection('my-order-history-section','btn-5','Order History')">
            <i class="fa-solid fa-gift cursor-pointer w-5"></i>
            <p>My Order History </p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-6"
            onclick="changeAccountPageSection('my-return-history-section','btn-6','Return Order')">
            <p class="w-5"></p>
            <p>My Returns </p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-7"
            onclick="changeAccountPageSection('my-cancellations-history-section','btn-7','Order Cancel')">
            <p class="w-5"></p>
            <p>My Cancellations </p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200 btn-8"
            onclick="changeAccountPageSection('my-review-history-section','btn-8','My Reviews')">
            <p class="w-5"></p>
            <p>My Reviews </p>
        </div>
    </div>
</div>

<div class="flex border-b items-start border-gray-300 pb-5">
    <div class="flex flex-col space-y-2">
        <div class="flex space-x-3 text-lg font-semibold cursor-pointer hover:text-primary duration-300 items-center btn-9"
            onclick="changeAccountPageSection('payment-method-section','btn-9','Payments Methods')">
            <i class="fa-regular fa-credit-card cursor-pointer w-5"></i>
            <p>Payments Methods</p>
        </div>
        <div class="flex space-x-3 cursor-pointer hover:text-primary duration-200">
            <p class="w-5"></p>
            <p class="btn-10" onclick="changeAccountPageSection('voucher-section','btn-10','Voucher')">Voucher </p>
        </div>
    </div>
</div>


<div class="flex space-x-2 border-b items-center border-gray-300 pb-5">
    <div
        class="flex space-x-3 text-lg font-semibold cursor-pointer hover:text-primary duration-300 items-center btn-11" onclick="changeAccountPageSection('my-wishlist-section','btn-11','Wishlist')">
        <i class="fa-regular fa-heart cursor-pointer w-5"></i>

        <p>My Wishlist</p>
    </div>
</div>

<div class="flex space-x-2 items-center">
    <div
        class="flex space-x-3 text-lg font-semibold cursor-pointer hover:text-primary duration-300 items-center">
        <i class="fa-solid fa-power-off cursor-pointer w-5"></i>
        <p class="btn-12" onclick="changePage('login-section')">Log Out</p>
    </div>
</div>
    `
})


function accountPageResMenuBtnHandle() {
    if (twoAccountPageButtonSection[0].className.indexOf('top-32') == -1) {
        twoAccountPageButtonSection[0].classList.remove('hidden');
        setTimeout(() => {
            twoAccountPageButtonSection[0].classList.add('opacity-100');
            twoAccountPageButtonSection[0].classList.remove('opacity-0');
        }, 350)
        twoAccountPageButtonSection[0].classList.remove('-top-[1000px]');
        twoAccountPageButtonSection[0].classList.add('top-32');
    } else {
        twoAccountPageButtonSection[0].classList.add('hidden');
        twoAccountPageButtonSection[0].classList.add('opacity-0');
        twoAccountPageButtonSection[0].classList.remove('opacity-100');
        twoAccountPageButtonSection[0].classList.add('-top-[1000px]');
        twoAccountPageButtonSection[0].classList.remove('top-32');
    };
}


// when hover on review star highlight and when mouseout out removehighlight

const productStars = document.querySelectorAll('.product-star');
const sellerStars = document.querySelectorAll('.seller-star');
const riderStars = document.querySelectorAll('.rider-star');


const productReview = {
    name: productStars,
    attributeName: 'product-review'
}

const sellerReview = {
    name: sellerStars,
    attributeName: 'seller-review'
}


const riderReview = {
    name: riderStars,
    attributeName: 'rider-review'
}

const allReview = [productReview, sellerReview, riderReview];

allReview.forEach(review => {
    review.name.forEach((star) => {
        star.addEventListener('mouseover', function () {
            const value = this.getAttribute(review.attributeName);
            highlightStars(review.name, value);
        });


        star.addEventListener('click', function () {
            const value = this.getAttribute(review.attributeName);
            markStars(review.name, value);
        });


        star.addEventListener('mouseout', function () {
            removeHighlight(review.name);
        })

    });
})

function markStars(stars, value) {
    for (let i = 0; i < value; i++) {
        console.log(value);
        stars[i].classList.add('text-yellow-500');
        stars[i].classList.add('clicked');
    }
    for (let i = 4; i >= value; i--) {
        stars[i].classList.remove('text-yellow-500');
        stars[i].classList.remove('clicked');
    }
}


function highlightStars(stars, value) {

    for (let i = 4; i >= value; i--) {
        const starClass = stars[i].className.baseVal;
        if (stars[i].className.baseVal.indexOf('clicked') !== -1) {
            stars[i].classList.remove('text-yellow-500');
        }

    }
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('text-yellow-500');

    }
}

function removeHighlight(stars) {
    // if (isClicked === false) {
    stars.forEach((star) => {
        const starClass = star.className.baseVal;
        if (starClass.indexOf('clicked') == -1) {
            star.classList.remove('text-yellow-500');
        } else {
            star.classList.add('text-yellow-500')
        }
    });
    // }
}
// when hover on review star highlight and when mouseout out removehighlight


const accountPageAllSectionId = ['my-account-section', 'profile-information-section', 'manage-address-section', 'change-password-section', 'my-order-history-section', 'my-return-history-section', 'my-cancellations-history-section', 'my-review-history-section', 'write-review-section', 'order-details-section', 'return-request-section', 'payment-method-section', 'voucher-section', 'edit-payment-method-section', 'my-wishlist-section'];

const accountPageAllBtnParent = document.getElementById('account-page-all-btn-parent');
const accountPageAllBtnButtons = ['.btn-1', '.btn-2', '.btn-3', '.btn-4', '.btn-5', '.btn-6', '.btn-7', '.btn-8', '.btn-9', '.btn-10', '.btn-11'];

function changeAccountPageSection(id, button, pageNameText) {
    if (button !== undefined) {

        accountPageAllBtnButtons.forEach(value => {
            const buttons = document.querySelectorAll(value);
            buttons.forEach(btn => {
                btn.classList.remove('text-primary')
            })
        });
        const btns = document.querySelectorAll('.' + button);
        btns.forEach(btn => {

            btn.classList.add('text-primary');
        })
        accountPageResMenuBtnHandle()
    }
    accountPageAllSectionId.forEach(value => {
        const section = document.getElementById(value);
        if (id === value) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    })
    animation();
    window.scrollTo(0, 0);
    const accountPageRoutingPageName = document.getElementById('account-page-routing-page-name');
    const myAccountPageRoutingPageName = document.getElementById('my-account-page-routing-page-name');
    const pageName = accountPageRoutingPageName.querySelector('p');
    if (pageNameText != 'Manage My Account') {
        accountPageRoutingPageName.classList.remove('hidden');
        pageName.innerText = pageNameText;
        myAccountPageRoutingPageName.classList.add('text-primary')
    } else {
        accountPageRoutingPageName.classList.add('hidden');
        myAccountPageRoutingPageName.classList.remove('text-primary')
    }
}

const ourTeamAndPartners = ['our-team-member', 'our-brand-partners'];
ourTeamAndPartners.forEach(id => {


    const parentDivOfOueTeamMemberSection = document.getElementById(id);
    parentDivOfOueTeamMemberSection.addEventListener('wheel', e => {
        e.preventDefault();
        parentDivOfOueTeamMemberSection.scrollLeft += e.deltaY;
    })
})




function openQuestionAns(question, id) {
    const QAndAParent = question.parentNode;
    const icon = QAndAParent.querySelector('div i');
    const questionDiv = QAndAParent.querySelector('div');

    for (let i = 1; i < 5; i++) {
        const QAndAParent2 = document.getElementById(id + i);
        const icon2 = QAndAParent2.querySelector('div i');
        const questionDiv2 = QAndAParent2.querySelector('div');
        if (questionDiv != questionDiv2) {
            console.log(QAndAParent2.className);
            QAndAParent2.classList.add('h-16');
            QAndAParent2.classList.remove('h-40');
            icon2.classList.remove('fa-minus');
            icon2.classList.add('fa-plus');
            QAndAParent2.classList.add('bg-slate-100');
            QAndAParent2.classList.remove('bg-white');
            questionDiv2.classList.add('text-black');
            questionDiv2.classList.remove('text-primary');
        }
    }
    console.log(4);
    if (QAndAParent.className.indexOf('h-16') == -1) {
        QAndAParent.classList.add('h-16');
        QAndAParent.classList.remove('h-40');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        QAndAParent.classList.add('bg-slate-100');
        QAndAParent.classList.remove('bg-white');
        questionDiv.classList.add('text-black');
        questionDiv.classList.remove('text-primary');
    } else {
        QAndAParent.classList.remove('h-16');
        QAndAParent.classList.add('h-40');
        icon.classList.add('fa-minus');
        icon.classList.remove('fa-plus');
        QAndAParent.classList.remove('bg-slate-100');
        QAndAParent.classList.add('bg-white');
        questionDiv.classList.remove('text-black');
        questionDiv.classList.add('text-primary');
    }
}

const allPaymentMethods = ['credit-payment-section', 'paypal-payment-section', 'cash-payment-section'];

const allPaymentSectionButton = ['credit-button', 'paypal-button', 'cash-button'];
function selectPaymentMethod(clickedbutton, paymentSectionId) {
    allPaymentMethods.forEach(pMethodId => {
        const methodSection = document.getElementById(pMethodId);
        if (pMethodId === paymentSectionId) {
            methodSection.classList.add('flex');
            methodSection.classList.remove('hidden');
        } else {
            methodSection.classList.remove('flex');
            methodSection.classList.add('hidden');
        }
    })
    allPaymentSectionButton.forEach(btn => {
        const button = document.getElementById(btn);
        const checkIcon = button.querySelector('div ')
        if (btn === clickedbutton.id) {
            button.classList.add('border-primary');
            button.classList.remove('border-gray-300');
            checkIcon.classList.add('flex');
            checkIcon.classList.remove('hidden');
        } else {
            button.classList.remove('border-primary');
            button.classList.add('border-gray-300');
            checkIcon.classList.remove('flex');
            checkIcon.classList.add('hidden');
        }
    })
}

const animationSection = document.getElementById('animationSection');




function animation() {
    closeAllDropDownSection();
    animationSection.classList.remove('hidden');

    setTimeout(() => {
        animationSection.classList.add('opacity-80');
    }, 100);
    setTimeout(() => {
        animationSection.classList.remove('opacity-80');
        animationSection.classList.add('opacity-60');
    }, 200);
    setTimeout(() => {
        animationSection.classList.remove('opacity-60');
        animationSection.classList.add('opacity-40');
    }, 300);
    setTimeout(() => {
        animationSection.classList.remove('opacity-40');
        animationSection.classList.add('opacity-20');
    }, 400);
    setTimeout(() => {
        animationSection.classList.remove('opacity-20');
        animationSection.classList.add('opacity-0');
    }, 500);
    setTimeout(() => {
        animationSection.classList.remove('opacity-0');
        animationSection.classList.add('opacity-100');
        animationSection.classList.add('hidden');
    }, 600);


}

function changePage(pageId) {
    responsiveSideBarId.forEach(id => {
        const sideBar = document.getElementById(id);
        if(!sideBar.className.includes('-left-full')){
            hideSideBar(id)
        }
    })
    window.scrollTo(0, 0);
    animation();
    allPageId.forEach(id => {
        const page = document.getElementById(id);
        if (id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    })
}

function changePageAndSection(pageId, sectionId, btnNum, sectionName) {
    responsiveSideBarId.forEach(id => {
        const sideBar = document.getElementById(id);
        if(!sideBar.className.includes('-left-full')){
            hideSideBar(id)
        }
    })
    changePage(pageId);
    changeAccountPageSection(sectionId, btnNum, sectionName)
}

// all categories button handle

const allCategoriesBtnparent = document.getElementById('all-categories-btn-parent');
const homePage = document.getElementById('home-page');
const allCategoriesName = document.getElementById('all-categories-name');
allCategoriesBtnparent.addEventListener('mouseover', allCategoriesBtnHover);
allCategoriesBtnparent.addEventListener('mouseout', allCategoriesBtnHoverout);

function allCategoriesBtnHover() {
    if (homePage.className.indexOf('hidden') !== -1) {
        allCategoriesName.classList.remove('hidden');
    }
}
function allCategoriesBtnHoverout() {
    allCategoriesName.classList.add('hidden');
}


function closeAllDropDownSection(sectionId){
    for(let i = 0; i< allDropDownSectionId.length;i++){
        const dropDownSection = document.getElementById(allDropDownSectionId[i]);
        const dropDownSectionArrow = document.getElementById(allDropDownSectionArrow[i]);
        if(sectionId !== allDropDownSectionId[i]){
            if (dropDownSectionArrow.className.indexOf('rotate-180') !== -1) {
                dropDownSection.classList.add('scale-0');
                dropDownSection.classList.remove('h-auto');
                dropDownSectionArrow.classList.remove('rotate-180');
            }
        }
    }
}


function extendBtnSection(clickdeSection,extendedSectionId,height){
    const arrow = clickdeSection.querySelector('i');
    const extendBtnSection = document.getElementById(extendedSectionId);
    if(!arrow.className.includes('rotate-180')){
        arrow.classList.add('rotate-180');
        extendBtnSection.classList.add('opacity-100');
        extendBtnSection.classList.add(height);
        extendBtnSection.classList.remove('h-0');
        extendBtnSection.classList.remove('opacity-0');
    } else{
        arrow.classList.remove('rotate-180');
        extendBtnSection.classList.remove('opacity-100');
        extendBtnSection.classList.remove(height);
        extendBtnSection.classList.add('h-0');
        extendBtnSection.classList.add('opacity-0');
    }
}
