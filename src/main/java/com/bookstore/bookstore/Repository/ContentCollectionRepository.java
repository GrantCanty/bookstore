package com.bookstore.bookstore.Repository;

import com.bookstore.bookstore.Content.Content;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public void save(Content content) {
        contentList.add(content);
    }

    @PostConstruct
    public void init() {
        Content c = new Content(
                0,
                "Harry Potter",
                "J.k. Rowling"
        );
        contentList.add(c);
    }
}
