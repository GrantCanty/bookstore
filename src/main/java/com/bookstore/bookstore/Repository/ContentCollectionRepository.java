package com.bookstore.bookstore.Repository;

import com.bookstore.bookstore.Content.Content;
import com.bookstore.bookstore.DateRange.DateRange;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class ContentCollectionRepository {

    private final List<Content> contentList = new ArrayList<>();

    public ContentCollectionRepository() {}

    public List<Content> findAll() {
        return contentList;
    }

    /*public Optional<Content> findById(Integer id) {
        return contentList.stream().filter(c -> c.id().equals(id)).findFirst();
    }*/

    public List<Content> findAllAvailable() {
        return contentList.stream().filter(c -> c.inventoryCount() >= 1).collect(Collectors.toList());
    }

    public List<Content> findByAuthorOrBookName(String param) {
        //Searches by both author and book name. returns Content if either match. Search is case sensitive
        List<Content> l = new ArrayList<>();
        contentList.stream().filter(c -> c.authorName().toLowerCase().contains(param.toLowerCase()) || c.title().toLowerCase().contains(param.toLowerCase())).forEach(res -> l.add(res));
        
        
        
        return l;
    }

    public Integer findNextID() {
        Integer num = 0;
        for (Content c : contentList) {
                if (c.id() > num) {
                        num = c.id();
                } 
        }
        //contentList.stream().map(m -> m.id().intValue() > i );
        return num+1;
    }

    public void save(Content content) {
        contentList.removeIf(c -> c.id().equals(content.id()));
        contentList.add(content);
    }

    public List<Content> searchByDates(DateRange dateRange) {
        return contentList.stream().filter(c -> c.publishDate().isAfter(dateRange.from()) && c.publishDate().isBefore(dateRange.to())).collect(Collectors.toList());
    }

    public List<Content> findMostRecent() {
        return contentList.stream().filter(c -> c.publishDate().isAfter(LocalDate.now().minusDays(60))).collect(Collectors.toList());
    }

    @PostConstruct
    public void init() {
        Content c = new Content(
                0,
                "Harry Potter and the Sorcerer's Stone",
                "J.K. Rowling",
                2,
                LocalDate.of(1997,6,26),
                LocalDate.of(1997,6,26)
        );
        contentList.add(c);
        contentList.add(new Content(
                1,
                    "Leave the World Behind",
                "Rumaan Alam",
                5,
                LocalDate.of(2020,10,6),
                LocalDate.of(2020,10,6)
        ));
        contentList.add(new Content(
                2,
                "The Hunger Games",
                "Suzanne Collins",
                3,
                LocalDate.of(2008,9,14),
                LocalDate.of(2008,9,14)
        ));
        contentList.add(new Content(
                3,
                "A Game of Thrones",
                "R. R. Martin",
                1,
                LocalDate.of(1996,8,1),
                LocalDate.of(1996,8,1)
        ));
        contentList.add(new Content(
                4,
                "The Hobbit",
                "J. R. R. Tolkien",
                0,
                LocalDate.of(1937,9,21),
                LocalDate.of(1937,9,21)
        ));
        contentList.add(new Content(
                5,
                "The Da Vinci Code",
                "Dan Brown",
                4,
                LocalDate.of(2003,3,18),
                LocalDate.of(2003,3,18)
        ));
        contentList.add(new Content(
                6,
                "The Lost Symbol",
                "Dan Brown",
                7,
                LocalDate.of(2009,9,15),
                LocalDate.of(2009,9,15)
        ));
        contentList.add(new Content(
                7,
                "Fire & Blood",
                "R. R. Martin",
                0,
                LocalDate.of(2018,10,20),
                LocalDate.of(2018,10,20)
        ));
        contentList.add(new Content(
                8,
                "48 Laws of Power",
                "Robert Greene",
                2,
                LocalDate.of(2000,9,1),
                LocalDate.of(2000,9,1)
        ));
        contentList.add(new Content(
                9,
                "Atomic Habits",
                "James Clear",
                3,
                LocalDate.of(2018,10,16),
                LocalDate.of(2018,10,16)
        ));
        contentList.add(new Content(
                10,
                "Rich Dad Poor Dad",
                "Robert Kiyosaki",
                18,
                LocalDate.of(2000,4,1),
                LocalDate.of(2000,4,1)
        ));
        contentList.add(new Content(
                11,
                "To Kill a Mockingbird",
                "Harper Lee",
                1,
                LocalDate.of(1960,7,11),
                LocalDate.of(1960,7,11)
        ));
        contentList.add(new Content(
                12,
                "The Catcher in the Rye",
                "J. D. Salinger",
                8,
                LocalDate.of(1951,7,16),
                LocalDate.of(1951,7,16)
        ));
        contentList.add(new Content(
                13,
                "Mastery",
                "Robert Greene",
                16,
                LocalDate.of(2012,10,13),
                LocalDate.of(2012,10,13)
        ));
        contentList.add(new Content(
                14,
                "East of Eden",
                "John Steinbeck",
                4,
                LocalDate.of(1952,9,19),
                LocalDate.of(1952,9,19)
        ));
        contentList.add(new Content(
                15,
                "The Secret History",
                "Donna Tartt",
                5,
                LocalDate.of(1992,9,11),
                LocalDate.of(1992,9,11)
        ));
    }

    public boolean existsById(Integer id) {
        return contentList.stream().filter(c -> c.id().equals(id)).count() == 1;
    }

    public void delete(Integer id) {
        contentList.removeIf(c -> c.id().equals(id));
    }
}
