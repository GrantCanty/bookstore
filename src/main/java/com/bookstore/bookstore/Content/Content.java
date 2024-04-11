package com.bookstore.bookstore.Content;

import java.time.LocalDate;

public record Content(
        Integer id,
        String title,
        String authorName,
        Integer inventoryCount,
        LocalDate publishDate,
        LocalDate lastEditDate
) {

}
