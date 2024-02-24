package com.app.service;

import com.app.dto.AdminResponseDto;
import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.CredentialsRequestDto;
import com.app.dto.CredentialsResponseDto;

public interface AdminService {
	
	public CredentialsResponseDto getValidAdmin(CredentialsRequestDto loginAdminDto);
	public ApiResponse getValidAdminByEmail(String email);
	public ApiResponse changePasswordOfAdmin(ChangePasswordDto passwordDto);
	public AdminResponseDto getValidAdminById(Long id);
}
