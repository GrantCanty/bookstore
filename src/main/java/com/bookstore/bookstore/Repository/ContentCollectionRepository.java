package com.bookstore.bookstore.Repository;

import com.bookstore.bookstore.Content.Content;
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

    public Optional<Content> findById(Integer id) {
        return contentList.stream().filter(c -> c.id().equals(id)).findFirst();
    }

    public List<Content> findAllAvailable() {
        return contentList.stream().filter(c -> c.inventoryCount() >= 1).collect(Collectors.toList());
    }

    public Optional<Content> findByAuthorOrBookName(String param) {
        //Searches by both author and book name. returns Content if either match. Search is case sensitive
        return contentList.stream().filter(c -> c.authorName().contains(param) || c.title().contains(param)).findFirst();
    }

    public void save(Content content) {
        contentList.removeIf(c -> c.id().equals(content.id()));
        contentList.add(content);
    }

    @PostConstruct
    public void init() {
        Content c = new Content(
                0,
                "Harry Potter",
                "J.K. Rowling",
                2,
                LocalDate.of(2012,5,15)
        );
        contentList.add(c);
        contentList.add(new Content(
                1,
                    "Leave the World Behind",
                "Mindy",
                5,
                LocalDate.of(2012,5,15)
        ));
        contentList.add(new Content(
                2,
                "The Hunger Games",
                "Author's name",
                0,
                LocalDate.of(2012,5,15)
        ));
        contentList.add(new Content(
                3,
                "Game of thrones",
                "Author's name",
                8,
                LocalDate.of(2012,5,15)
        ));
    }

    public boolean existsById(Integer id) {
        return contentList.stream().filter(c -> c.id().equals(id)).count() == 1;
    }

    public void delete(Integer id) {
        contentList.removeIf(c -> c.id().equals(id));
    }
}
