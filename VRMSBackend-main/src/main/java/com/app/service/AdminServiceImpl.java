package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.dto.AdminResponseDto;
import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.CredentialsRequestDto;
import com.app.dto.CredentialsResponseDto;
import com.app.entities.AdminEntity;
import com.app.jwt_utils.JwtUtils;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public CredentialsResponseDto getValidAdmin(CredentialsRequestDto loginAdminDto) {
		String email = loginAdminDto.getEmail();
		String password = loginAdminDto.getPassword();
		AdminEntity admin = adminRepo.findByEmailAndPassword(email, password)
										.orElseThrow(()-> new RuntimeException("Invalid Admin Email or Password"));
		
		return admin != null ? new CredentialsResponseDto(admin.getId(),utils.generateJwtToken(loginAdminDto),"Sign In Successfull",admin.getId(),admin.getFirstName()) : 
			new CredentialsResponseDto(null,null,"Sign In Unsuccessfull",null,null);
		
	}
	
	@Override
	public ApiResponse getValidAdminByEmail(String email) {
		System.out.println(email);
		AdminEntity admin = adminRepo.findByEmail(email)
							.orElseThrow(() -> new RuntimeException("Invalid Admin Email"));
				
		System.out.println(admin);
	   return admin != null ? new ApiResponse("Valid Admin") : new ApiResponse("Invalid Admin");
	}
	
	
	@Override
	public ApiResponse changePasswordOfAdmin(ChangePasswordDto passwordDto) {
		AdminEntity admin = adminRepo.findById(passwordDto.getId())
				.orElseThrow(() -> new RuntimeException("Invalid admin Id"));
		
		if(admin.getPassword().equals(passwordDto.getOldPassword())) {
			admin.setPassword(passwordDto.getNewPassword());
			return new ApiResponse("Password Changed Successfully");
		}
		return new ApiResponse("Your Old Password is not Matched");
	}
	
	@Override
	public AdminResponseDto getValidAdminById(Long id) {
		AdminEntity admin = adminRepo.findById(id).orElseThrow(()-> new RuntimeException("Not a valid admin Id"));
		if(admin != null) {
			return mapper.map(admin, AdminResponseDto.class);
		}
		return null;
	}
	
	
}
