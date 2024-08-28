package com.example.backend;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Users;
import com.example.backend.service.UsersService;

@RestController
@RequestMapping("/users")
public class UsersResource {
    private final UsersService usersService;

    public UsersResource(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllUsers(){
        List<Users> users = usersService.findAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }

    @GetMapping("/find/{username}")
    public ResponseEntity<Users> getUserbyUsername(@PathVariable("username") String username){
        Users user = usersService.findUserbyUsername(username);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Users> addUser(@RequestBody Users users){
        Users newUser = usersService.addUsers(users);
        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Users> updateUser(@RequestBody Users users){
        Users updateUser = usersService.updateUsers(users);
        return new ResponseEntity<>(updateUser,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable("username") String username){
        usersService.deletUsers(username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
