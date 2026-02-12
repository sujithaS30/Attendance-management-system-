package com.attendance.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*") // Frontend connect panna ithu mukkiyam
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @GetMapping
    public List<student> getAllStudents() {
        return repository.findAll();
    }

    @PostMapping
    public student addStudent(@RequestBody student student) {
        return repository.save(student);
    }
}
