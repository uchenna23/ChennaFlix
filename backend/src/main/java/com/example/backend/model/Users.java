package com.example.backend.model;
import jakarta.persistence.*;

@Entity
@Table(name = "users", schema = "angular_resume")
public class Users {

   

    @Id
    private String username;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "password")
    private String password;




    public Users() {
    }


    public Users(String first_name, String last_name, String username, String password){
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;

    }

    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }



}
