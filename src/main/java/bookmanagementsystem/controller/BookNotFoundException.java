package bookmanagementsystem.controller;

public class BookNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    BookNotFoundException(Long id) {
        super("Book " + id + " not found");
    }
}
