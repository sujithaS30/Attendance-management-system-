package com.attendance.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Testcontroller {

    @GetMapping("/test")
    public String testApi() {
        return "Backend Working Successfully!";
    }
}
