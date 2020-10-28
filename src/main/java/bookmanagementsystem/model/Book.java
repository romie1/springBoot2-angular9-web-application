package bookmanagementsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="BOOKS")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CodGen")
    @SequenceGenerator(sequenceName = "BOOK_SEQ", allocationSize = 1, name = "CodGen")
	@Column(name = "BOOK_ID")
	private long id;
	private String author;
	private String title;
	private String genre;
	private long pages;
	private double price;
	
	public Book() {}
	
	public Book(long id, String author, String title, String genre, long pages, double price) {
		super();
		this.id = id;
		this.author = author;
		this.title = title;
		this.genre = genre;
		this.pages = pages;
		this.price = price;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public long getPages() {
		return pages;
	}
	public void setPages(long pages) {
		this.pages = pages;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return String.format("Book [id=%s, author=%s, title=%s, genre=%s, pages=%s, price=%s]", id, author, title,
				genre, pages, price);
	}
	
	
	
}
