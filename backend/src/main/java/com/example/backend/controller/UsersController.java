package com.example.backend.controller;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/login/{username}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Users> userLogin(@PathVariable String username, @PathVariable String password){
        Users user = usersService.findUserbyUsername(username.toLowerCase());
        if(user == null || !user.getPassword().equals(password)){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }    
        return ResponseEntity.ok(user);
        
    }

    @GetMapping(value = "/getUserAvatar/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity<Map<String, String>> getAvatar(@PathVariable String username) {
            Users user = usersService.findUserbyUsername(username.toLowerCase());
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            } else {
                 Map<String, String> response = new HashMap<>();
                 response.put("avatarUrl", user.getAvatar());
                 return ResponseEntity.ok(response);
    }
}




    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody Users users){
        Users existingUser = usersService.findUserbyUsername(users.getUsername().toLowerCase());
        if(existingUser != null){
            return new ResponseEntity<>("Username already exists.", HttpStatus.CONFLICT );
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
