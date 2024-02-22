package com.bookstore.bookstore.Controller;

import com.bookstore.bookstore.Content.Content;
import com.bookstore.bookstore.DateRange.DateRange;
import com.bookstore.bookstore.Repository.ContentCollectionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/content")
public class ContentController {

    private final ContentCollectionRepository repository;

    public ContentController(ContentCollectionRepository contentCollectionRepository) {
        this.repository = contentCollectionRepository;
    }

    @GetMapping("")
    public List<Content> findAll() {
        return repository.findAll();
    }

    /*@GetMapping("/{id}")
    public Content findById(@PathVariable Integer id) {
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content could not be found"));
    }*/

    @GetMapping("/available")
    public List<Content> findAllAvailable() {
            return repository.findAllAvailable();
    }

    @GetMapping("/{param}")
    public Content findByAuthorOrBookName(@PathVariable String param) {
        return repository.findByAuthorOrBookName(param).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content could not be found"));
    }

    @GetMapping("/search")
    public List<Content> findBooksByDateRange(@RequestBody DateRange dateRange) {
        return repository.searchByDates(dateRange);
    }

    @GetMapping("/search/recent")
    public List<Content> findMostRecent() {
        return repository.findMostRecent();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@RequestBody Content content) {
        repository.save(content);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void update(@RequestBody Content content, @PathVariable Integer id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Content could not be found");
        }
        repository.save(content);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Content could not be found");
        }
        repository.delete(id);
    }

}
