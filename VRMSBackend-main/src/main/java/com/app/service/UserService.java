package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ChangePasswordDto;
import com.app.dto.ProfileDto;
import com.app.dto.RegisterUserDto;
import com.app.dto.ValidateUserDto;
import com.app.dto.CredentialsRequestDto;
import com.app.dto.CredentialsResponseDto;



public interface UserService {
	public ApiResponse addUser(RegisterUserDto registerUserDto);
	public CredentialsResponseDto getValidUser(CredentialsRequestDto loginUserDto);
	public List<ProfileDto> getUsers();
	public ApiResponse editUserProfile(ProfileDto profile);
	public ProfileDto getUserById(Long id);
	public ApiResponse changePassword(ChangePasswordDto passDto);
	public ApiResponse getValidUserByEmail(ValidateUserDto validUser);
	public ApiResponse updateForgotPasswordOfUser(CredentialsRequestDto userDto);
}
