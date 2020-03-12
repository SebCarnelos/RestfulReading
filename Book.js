export class Book {
    constructor(title, author, description, pages, currentPage, read) {
            this.title = title;
            this.author = author;
            this.description = description;
            this.pages = pages;
            this.currentPage = currentPage;
            read = false;
    }

    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

let silentFlower = new Book("Silent Flower",
    "Random Book – Generator",
    "This book is leafed through, but otherwise good condition. It is written in Common Speech. It is a very thick book.",
    203,
    0);

let enticingSoups = new Book("Enticing Soups: The Garnet Guide",
    "Random Book – Generator",
    "This book is torn/stained pretty badly. Some of the pages are missing. It is written in Common Speech. It is bound in ornate leather.",
    637,
    108);

let collectedWisdom = new Book("Collected Wisdom of Opening Locks",
    "Random Book – Generator",
    "This book is in mint condition. It is written in Common Speech. It is hollowed out in the middle and it contains a small item.",
    619,
    23);

export const books = [silentFlower, enticingSoups, collectedWisdom];
