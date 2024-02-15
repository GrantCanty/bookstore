package com.bookstore.bookstore.DateRange;

import java.time.LocalDate;

public record DateRange (
        LocalDate to,
        LocalDate from
) {

}