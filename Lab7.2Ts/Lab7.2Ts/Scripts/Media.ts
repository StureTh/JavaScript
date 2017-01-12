class Product {
    name: string
    category: string
    price: string
    articlenumber: string

    constructor(_name: string, _category: string, _price: string, _artNumber: string) {

        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.articlenumber = _artNumber;

    }
}

class Books extends Product {
    writer: string
    releasedate: string

    constructor(_name: string, _category: string, _price: string, _artNumber: string, _writer: string, _release: string) {

        super(_name, _category, _price, _artNumber);
        this.writer = _writer;
        this.releasedate = _release;

    }

    get(): Books {
        return this;
    }

}

class Dvd extends Product {
    constructor(_name: string, _category: string, _price: string, _artNumber: string) {
        super(_name, _category, _price, _artNumber)

    }

    get(): Dvd {
        return this;
    }
}

class Game extends Product {
    constructor(_name: string, _category: string, _price: string, _artNumber: string) {
        super(_name, _category, _price, _artNumber)

    }
    get(): Game {
        return this;
    }
}

class Media {
    books = [];
    dvds = [];
    games = [];
    constructor() {

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
    AddBooks(book: Books) {
        this.books.push(book);


    }

    AddDvds(dvd: Dvd) {
        this.dvds.push(dvd);

    }

    AddGames(game: Game) {

        this.games.push(game);
    }

    ReturnBooks(): Books[] {
        return this.books;
    }

    ReturnDvds(): Dvd[] {
        return this.dvds;
    }

    ReturnGames(): Game[] {
        return this.games;
    }
}
