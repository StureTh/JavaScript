var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function () {
    function Product(_name, _category, _price, _artNumber) {
        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.articlenumber = _artNumber;
    }
    return Product;
}());
var Books = (function (_super) {
    __extends(Books, _super);
    function Books(_name, _category, _price, _artNumber, _writer, _release) {
        _super.call(this, _name, _category, _price, _artNumber);
        this.writer = _writer;
        this.releasedate = _release;
    }
    Books.prototype.get = function () {
        return this;
    };
    return Books;
}(Product));
var Dvd = (function (_super) {
    __extends(Dvd, _super);
    function Dvd(_name, _category, _price, _artNumber) {
        _super.call(this, _name, _category, _price, _artNumber);
    }
    Dvd.prototype.get = function () {
        return this;
    };
    return Dvd;
}(Product));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(_name, _category, _price, _artNumber) {
        _super.call(this, _name, _category, _price, _artNumber);
    }
    Game.prototype.get = function () {
        return this;
    };
    return Game;
}(Product));
var Media = (function () {
    function Media() {
        this.books = [];
        this.dvds = [];
        this.games = [];
        this.books = [];
        this.dvds = [];
        this.games = [];
        this.AddBooks(new Books("LordOfTheRings", "Fantasy", "250", "asdf19384", "Tolkien", "1950"));
        this.AddBooks(new Books("IT", "Horror", "350", "qwerty001", "Stephen King", "1960"));
        this.AddBooks(new Books("Harry Potter", "Fantasy", "150", "qwerty90000", "JK Rollin", "2000"));
        this.AddBooks(new Books("Nils Holgersson", "Children Storys", "50", "asdfg003421", "Selma Lagerlöf", "1906"));
        //---------------------------------------------------------------------------------------------------------------
        this.AddDvds(new Dvd("Dvd1", "Cat1", "199", "sadg343242"));
        this.AddDvds(new Dvd("Dvd2", "Cat2", "99", "sadg6643242"));
        this.AddDvds(new Dvd("Dvd3", "Cat3", "199", "sadg34324299"));
        this.AddDvds(new Dvd("Dvd4", "Cat4", "299", "110sadg343242"));
        //----------------------------------------------------------------------------------------------------------------
        this.AddGames(new Game("Game1", "Cat1", "499", "qwerty4535"));
        this.AddGames(new Game("Game2", "Cat2", "599", "qwerty66635"));
        this.AddGames(new Game("Game3", "Cat3", "299", "awerty453599"));
        this.AddGames(new Game("Game4", "Cat4", "199", "qwerty45350001"));
    }
    Media.prototype.AddBooks = function (book) {
        this.books.push(book);
    };
    Media.prototype.AddDvds = function (dvd) {
        this.dvds.push(dvd);
    };
    Media.prototype.AddGames = function (game) {
        this.games.push(game);
    };
    Media.prototype.ReturnBooks = function () {
        return this.books;
    };
    Media.prototype.ReturnDvds = function () {
        return this.dvds;
    };
    Media.prototype.ReturnGames = function () {
        return this.games;
    };
    return Media;
}());
//# sourceMappingURL=Media.js.map