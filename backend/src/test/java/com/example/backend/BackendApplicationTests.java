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
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@ActiveProfiles("test")
@AutoConfigureMockMvc
public class BackendApplicationTests {

	@MockBean
	UsersService usersService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testCreateUser() throws Exception {
        Users newUser = new Users("Test", "Test", "uchenna23", "Test123");
        mockMvc.perform(post("/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(newUser)))
                .andExpect(status().isCreated());
    }


    @Test
    public void testGetUser() throws Exception {
		String username = "uchenna23";
        String password = "Test123";
		Users mockUser = new Users("Test","Test", "uchenna23","Test123");
		given(usersService.findUserbyUsername(username)).willReturn(mockUser);

		MvcResult result = mockMvc.perform(get("/login/{username}/{password}", username, password))
			.andExpect(status().isOk())
			.andReturn();
		String content = result.getResponse().getContentAsString();
		System.out.println("Response content:" + content);
			
        mockMvc.perform(get("/login/{username}/{password}", username, password))
                .andExpect(status().isOk())
				.andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.username", is("uchenna23")));
    }

    


	@Test
    public void testUpdateUser() throws Exception {
    this.testGetUser();
    String username = "uchenna23";
    Users mockUser = new Users("Test","Test", "uchenna23","Test");
    given(usersService.findUserbyUsername(username)).willReturn(mockUser);

    mockUser.setPassword("hello");
    
    ObjectMapper objectMapper = new ObjectMapper();
    String userJson = objectMapper.writeValueAsString(mockUser);

    mockMvc.perform(put("/update/{username}", username)
            .contentType(MediaType.APPLICATION_JSON)
            .content(userJson))
            .andExpect(status().isOk());
}
}
