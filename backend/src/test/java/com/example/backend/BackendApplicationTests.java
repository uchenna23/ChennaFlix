package com.example.backend;

import com.example.backend.model.Users;
import com.example.backend.service.UsersService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class BackendApplicationTests {

	@MockBean
	UsersService usersService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;  // Used for serializing/deserializing JSON

    @Test
    public void testCreateUser() throws Exception {
        Users newUser = new Users("Test", "Test", "Test", "Test");
        mockMvc.perform(post("/users/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newUser)))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetUser() throws Exception {
		String username = "chenna23";
		Users mockUser = new Users("Test","Test", "Test","Test");
		given(usersService.findUserbyUsername(username)).willReturn(mockUser);

		MvcResult result = mockMvc.perform(get("/users/find/{username}", username))
			.andExpect(status().isOk())
			.andReturn();
		String content = result.getResponse().getContentAsString();
		System.out.println("Response content:" + content);
			
        mockMvc.perform(get("/users/find/{username}", username))
                .andExpect(status().isOk())
				.andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.username", is("Test")));
    }

    @Test
    public void testDeleteUser() throws Exception {
        mockMvc.perform(delete("/users/delete/test"))
                .andExpect(status().isOk());
    }
}
