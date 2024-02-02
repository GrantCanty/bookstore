package com.bookstore.bookstore.Content;

import java.time.LocalDate;
import java.util.Date;

public record Content(
        Integer id,
        String title,
        String authorName,
        Integer inventoryCount,
        LocalDate lastEditDate
) {

}
