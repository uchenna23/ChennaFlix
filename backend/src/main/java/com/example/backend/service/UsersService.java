package com.example.backend.service;

import com.example.backend.model.Users;
import com.example.backend.repo.UsersRepo;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.*;;

@Service
public class UsersService {
    private final UsersRepo usersRepo;

    
    public UsersService(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
}

    public Users addUsers(Users users){
        users.setFirst_name(UUID.randomUUID().toString());
        return usersRepo.save(users);

    }

    public List<Users> findAllUsers(){
        return usersRepo.findAll();
        
    }

    public Users findUserbyUsername(String username){
        return usersRepo.findUserbyUsername(username);
    }

    public Users updateUsers(Users users){
        return usersRepo.save(users);
    }

    public Users deletUsers(String username){
        return usersRepo.deleteUserByUsername(username);
    }


}
