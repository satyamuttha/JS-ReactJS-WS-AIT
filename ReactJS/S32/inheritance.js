var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(category, companyName) {
        this.category = category;
        this.companyName = companyName;
    }
    Product.prototype.changeCategory = function (newCategory) {
        this.category = newCategory;
        this.displayDetails();
    };
    Product.prototype.displayDetails = function () {
        console.log(this.category, this.companyName);
    };
    return Product;
}());
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone(model) {
        var _this = _super.call(this, "electronics", "Apple") || this;
        _this.model = model;
        return _this;
    }
    Iphone.prototype.display = function () {
        console.log(this.model, this.category, this.companyName);
    };
    return Iphone;
}(Product));
var child_1 = new Iphone("Iphone 16");
child_1.displayDetails();
child_1.display();
child_1.changeCategory("Elec");
