package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Users;

public interface UsersRepo extends JpaRepository<Users, String> {

    Users deleteUserByUsername(String username);
    
    Users findUserByUsername(String username);
}
