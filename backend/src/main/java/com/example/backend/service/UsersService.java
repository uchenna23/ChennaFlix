package com.example.backend.service;

import com.example.backend.model.Users;
import com.example.backend.repo.UsersRepo;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;;

@Service
public class UsersService {

    @Autowired
    private final UsersRepo usersRepo;

    
    public UsersService(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
}

    public Users createUsers(Users users){
        return usersRepo.save(users);

    }

    public List<Users> findAllUsers(){
        return usersRepo.findAll();
        
    }

    public Users findUserbyUsername(String username){
        return usersRepo.findUserByUsername(username);
    }

    public Users updateUsers(Users user){
       return usersRepo.save(user);
    }

    public boolean deletUsers(String username){
        Optional<Users> user = Optional.ofNullable(usersRepo.findUserByUsername(username));
        if(user.isPresent()){
            usersRepo.delete(user.get());
            return true;
        }else{
            return false;
        }
    }

}
