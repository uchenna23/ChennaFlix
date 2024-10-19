package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.model.Users;

public interface UsersRepo extends JpaRepository<Users, String> {

    Users deleteUserByUsername(String username);
    
    @Query("SELECT u FROM Users u WHERE LOWER(u.username) = LOWER(:username)")
    Users findUserByUsername(@Param("username") String username);
}
