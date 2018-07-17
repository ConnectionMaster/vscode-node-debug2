var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(name) {
        this._name = name;
    }
    Foo.prototype.getName = function () {
        return this._name;
    };
    return Foo;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.getName = function () {
        return _super.prototype.getName.call(this) + ' Doe';
    };
    return Bar;
}(Foo));
var bar = new Bar('John2');
console.log(bar.getName()); // John Doe
//# sourceMappingURL=/Users/roblou/code/vscode-node-debug2/testdata/sourcemaps-local-paths/out/classes.js.map