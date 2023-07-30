// JavaScript - Medium

const Library = require("../src/library");

describe("Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test("createBook", () => {
        const newBook = library.createBook("Title 2", "Author 2");
        expect(newBook.title).toBe("Title 2");
    });

    test("getBook", () => {
        library.createBook("Title 2", "Author 2");
        const book = library.getBook(1);
        expect(book.title).toBe("Title 2");
    });

    test("updateBook", () => {
        library.createBook("Title 1", "Author 1");
        const updatedBook = library.updateBook(1, "Title 3", "Author 3");
        expect(updatedBook.title).toBe("Title 3");
    });

    test("deleteBook", () => {
        const remainingBooks = library.deleteBook(2);
        expect(remainingBooks.length).toBe(0);
    });
});
