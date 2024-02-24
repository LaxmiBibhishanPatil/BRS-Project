package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminResponseDto;
import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.CredentialsRequestDto;
import com.app.dto.CredentialsResponseDto;
import com.app.service.AdminService;


@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/signIn")
	public CredentialsResponseDto validateAdmin(@RequestBody @Valid CredentialsRequestDto adminDto) {
		return adminService.getValidAdmin(adminDto);
	}
	
	@PostMapping("/forgotPassword")
	public ApiResponse validateAdminByEmail(@RequestBody String email) {
		return adminService.getValidAdminByEmail(email);
	}
	
	
	
	@PostMapping("/updatePassword")
	public ApiResponse updateForgotPassword(@RequestBody @Valid ChangePasswordDto passwordDto) {
		return adminService.changePasswordOfAdmin(passwordDto);
	}
	
	@GetMapping("/{id}")
	public AdminResponseDto getValidAdmin(@PathVariable Long id) {
        
		return adminService.getValidAdminById(id);
	}
	// Get Valid Admin
	
	
}
