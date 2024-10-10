export interface Product {
    id: number;
    title: string;
    description: string;
    category: Category;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: any[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

export enum Category {
    Beauty = "beauty",
    Fragrances = "fragrances",
    Furniture = "furniture",
    Groceries = "groceries",
    HomeDecoration = "home-decoration",
    KitchenAccessories = "kitchen-accessories",
    Laptops = "laptops",
    MensShirts = "mens-shirts",
    MensShoes = "mens-shoes",
    MensWatches = "mens-watches",
    MobileAccessories = "mobile-accessories",
    Motorcycle = "motorcycle",
    SkinCare = "skin-care",
    Smartphones = "smartphones",
    SportsAccessories = "sports-accessories",
    Sunglasses = "sunglasses",
    Tablets = "tablets",
    Tops = "tops",
    Vehicle = "vehicle",
    WomensBags = "womens-bags",
    WomensDresses = "womens-dresses",
    WomensJewellery = "womens-jewellery",
    WomensShoes = "womens-shoes",
    WomensWatches = "womens-watches"
}

export enum TabValue {
    ProductsStock = "products_stock",
    ProductsPrices = "products_prices",
    ProductsCodes = "products_codes"
}