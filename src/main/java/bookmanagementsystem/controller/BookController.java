package bookmanagementsystem.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import bookmanagementsystem.model.Book;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	private static final Logger LOG = LoggerFactory.getLogger(BookController.class);

	@Autowired
	private BookRepository bookRepository;

	@GetMapping("/books")
	public List<Book> getBooks() {
		LOG.trace("enter getBooks");
		return bookRepository.findAll();
	}

	@GetMapping("/books/{id}")
	public Book getBook(@PathVariable long id) {
		LOG.trace("enter getBook");
		return bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
	}

	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		LOG.trace("enter createBook");
		return bookRepository.save(book);
	}

	@PutMapping("/books/{id}")
	public Book updateBook2(@RequestBody Book newBook, @PathVariable long id) {
		return bookRepository.findById(id).map(book -> {
			book.setAuthor(newBook.getAuthor());
			book.setTitle(newBook.getTitle());
			book.setGenre(newBook.getGenre());
			book.setPages(newBook.getPages());
			book.setPrice(newBook.getPrice());
			return bookRepository.save(book);
			// se non esiste, mi crei il nuovo coder
		}).orElseGet(() -> {
			newBook.setId(id);
			return bookRepository.save(newBook);
		});
	}

	@PatchMapping("/books/{id}")
	public Book updateBook(@RequestBody Book newBook, @PathVariable long id) {
		LOG.trace(String.format("patch coder %d by %s", id, newBook));
		return bookRepository.findById(id).map(book -> {
			if (newBook.getAuthor() != null) {
				book.setAuthor(newBook.getAuthor());
			}
			if (newBook.getTitle() != null) {
				book.setTitle(newBook.getTitle());
			}
			if (newBook.getGenre() != null) {
				book.setGenre(newBook.getGenre());
			}
			if (newBook.getPages() != 0.0) {
				book.setPages(newBook.getPages());
			}
			if (newBook.getPrice() != 0.0) {
				book.setPrice(newBook.getPrice());
			}
			return bookRepository.save(book);
		}).orElseThrow(() -> new BookNotFoundException(id));
	}

	@DeleteMapping("/books/{id}")
	public void delete(@PathVariable Long id) {
		try {
			bookRepository.deleteById(id);
		} catch (EmptyResultDataAccessException ex) {
			LOG.warn("Can't delete book", ex);
			throw new BookNotFoundException(id);
		}
	}

}
