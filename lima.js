class Mkulima {
    constructor() {
        this.farms = new Array();
        this.orders = new Array();
        this.products = new Array();
    }
    addFarms = function (farmId, farmName, farmer, phoneNumber, address) {
        return `${this.farms.push({ farmId: farmId, farmName: farmName, farmer: farmer, phoneNumber: phoneNumber, address: address })}`
    };

    removeFarm(farmId) {

        for (let i = 0; i < this.farms.length; i++) {
            if (this.farms[i].farmId === farmId) {
                return this.farms.splice(i, 1);
            }
        }
    }

    updateFarms(farmId, farmName, farmer, phoneNumber, address) {
        return `${this.farms.push({
            farmId: farmId,
            farmName: farmName,
            farmer: farmer,
            phoneNumber: phoneNumber,
            address: address,
        })} `;
    }

    getFarms(farmId) {
        var locatedFarm = this.farms.find(f => f.farmId === farmId);
        return locatedFarm

    }

    //PRODUCTS
    addProducts(prodId, prodName, prodPrice) {
        return `${this.products.push({
            prodId: prodId,
            prodName: prodName,
            prodPrice: prodPrice
        })}`

    }

    removeProducts(prodId) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].prodId === prodId) {
                return this.products.splice(i, 1);
            }
        }

    }

    updateProducts(prodId, prodName, prodPrice) {
        return `${this.products.push({
            prodId: prodId,
            prodName: prodName,
            prodPrice: prodPrice,
        })} `;

    }

    getProducts(prodId) {
        let locateProducts = this.products.find(p => p.prodId === prodId);
        return locateProducts
    }

    printProducts(){
       console.log(this.products);
        
    }

    calculateOrder(productId, quantity){
        let selectedProduct = this.products.find(p => p.prodId === productId);
        return `${selectedProduct}, ${quantity * this.prodPrice}`

    }
}

//Adding items to the farms array
let one = new Mkulima();
one.addFarms('0', "Riruta", "Njoki", '075269802', 'Ngong, Kibiku');
one.addFarms('1', "Ngong", "Kamau", '075269802', 'AthiRiver');
one.addFarms('2', "Kikuyu", "Otiende", '075269802', 'AthiRiver');
console.log(one.farms)

//Remove items from the array using the id
one.removeFarm('1');
console.log(one.farms)

// Updating the array
one.updateFarms('5', "Kiambu", "Owiti", "0707526980", "606, Karura");
// console.log(one.farms);

// Getting an element by its id
// one.getFarms(5);
console.log(one.getFarms('5'));


//PRODUCTS
//adding products
let product = new Mkulima()
product.addProducts('0', 'Blended Juice', 50);
product.addProducts('1', 'Cheese', 500);
product.addProducts('2', 'Yoghurt', 100);
// console.log(product.products);

//removing products
product.removeProducts('0');
// console.log(product.products);

//Update products to the array
product.updateProducts('5', 'Milk', 100);
// console.log(product.products);

//locating products in the array
product.getProducts('5');
// console.log(product.getProducts('5'));

//Printing the array of products
product.printProducts();

//calulating order made
let order = new Mkulima()
console.log(order.calculateOrder('5', 5));