package com.ftn.thesisProject.products.api.v1;


import com.ftn.thesisProject.products.service.implementations.UpdateDatabaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final UpdateDatabaseService updateDatabaseService;

    @GetMapping("/update-database")
    public ResponseEntity<String> updateDatabase(){
        updateDatabaseService.updateDatabase();
        return ResponseEntity.ok("Database successfully updated!");
    }

    @GetMapping("/restart-database")
    public ResponseEntity<String> restartDatabase(){
        updateDatabaseService.updateDatabase();
        return ResponseEntity.ok("Database successfully updated!");
    }
}
