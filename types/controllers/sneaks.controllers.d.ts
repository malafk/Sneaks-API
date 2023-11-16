export = Sneaks;
declare class Sneaks {
    getProducts(keyword: any, count: number, callback: any): Promise<void>;
    getProductPrices(shoeID: any, callback: any): void;
    getMostPopular(count: any, callback: any): void;
}
