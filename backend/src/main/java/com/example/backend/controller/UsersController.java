package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Users;
import com.example.backend.service.UsersService;


@RestController
@CrossOrigin(origins = "*")
public class UsersController {
    
    @Autowired
    private final UsersService usersService;

    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = usersService.findAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @GetMapping(value = "/login/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Users> findUserByUsername(@PathVariable String username){
        Users user = usersService.findUserbyUsername(username.toLowerCase());
        if (user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody Users users){
        Users existingUser = usersService.findUserbyUsername(users.getUsername());
        if(existingUser != null){
            return new ResponseEntity<>("Username already exists", HttpStatus.CONFLICT );
        }
        Users newUser = usersService.createUsers(users);
        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
    }

    @PutMapping("/update/{username}")
    public ResponseEntity<Users> updateUser(@PathVariable("username") String username, @RequestBody Users user){
        Users existingUser = usersService.findUserbyUsername(username);
        if(existingUser != null){
            existingUser.setFirst_name(user.getFirst_name());
            existingUser.setLast_name(user.getLast_name());
            existingUser.setPassword(user.getPassword());

            Users updatedUser = usersService.updateUsers(existingUser);

            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
            
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable("username") String username) {
        try {
            boolean isDeleted = usersService.deletUsers(username); 
            if (isDeleted) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
            }
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
