package com.example.backend;

import com.example.backend.model.Users;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class BackendApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;  // Used for serializing/deserializing JSON

    @Test
    public void testCreateUser() throws Exception {
        Users newUser = new Users("Uchenna", "Nwagbara", "chenna23", "hello102");


        mockMvc.perform(post("/users/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newUser)))
                .andExpect(status().isOk());
    }

    // @Test
    // public void testGetUser() throws Exception {
	// 	Users mockUser = new Users("John", "Doe", "john_doe", "password");
    // 	when(usersService.findUserbyUsername("john_doe")).thenReturn(mockUser);
    //     mockMvc.perform(get("/users/find/john_doe"))
    //             .andExpect(status().isOk())
    //             .andExpect(jsonPath("username").value("john_doe"));
    // }

    // @Test
    // public void testDeleteUser() throws Exception {
    //     mockMvc.perform(delete("/users/delete/john_doe"))
    //             .andExpect(status().isOk());
    // }
}
