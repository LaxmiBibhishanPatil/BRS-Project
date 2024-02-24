package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.RegisterUserDto;
import com.app.dto.ValidateUserDto;
import com.app.dto.CredentialsRequestDto;
import com.app.dto.CredentialsResponseDto;
import com.app.dto.ProfileDto;
import com.app.service.UserService;



@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public ApiResponse registerUserDetails(@RequestBody @Valid RegisterUserDto userDto){
		return userService.addUser(userDto);
	}
	
	@PostMapping("/login")
	public CredentialsResponseDto signInUser(@RequestBody @Valid CredentialsRequestDto userDto){
		return userService.getValidUser(userDto);
	}
	
	@GetMapping("/getAllUsers")
	public List<ProfileDto> getAllUsers(){
		return userService.getUsers();
	}
	
	@PutMapping("/updateProfile")
	public ApiResponse updateUserProfile(@RequestBody @Valid ProfileDto profileDto){
		return userService.editUserProfile(profileDto);
	}
	
	@GetMapping("/{id}")
	public ProfileDto getValidUserById(@PathVariable Long id) {
		return userService.getUserById(id);
	}
	
	@PostMapping("/changePassword")
	public ApiResponse changePasswordOfUser(@RequestBody @Valid ChangePasswordDto passwordDto) {
		return userService.changePassword(passwordDto);
	}
	
	@PostMapping("/forgotPassword")
	public ApiResponse validateUserByEmail(@RequestBody @Valid ValidateUserDto validUser) {
		return userService.getValidUserByEmail(validUser);
	}
	
	@PutMapping("/updatePassword")
	public ApiResponse updateForgotPassword(@RequestBody @Valid CredentialsRequestDto userDto) {
		return userService.updateForgotPasswordOfUser(userDto);
	}

	
	
}
