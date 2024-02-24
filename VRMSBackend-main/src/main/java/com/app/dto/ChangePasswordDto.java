package com.app.dto;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ChangePasswordDto {

	private Long id;
	
	@NotBlank(message = "Should enter old password")
	private String oldPassword;
	
	@NotBlank(message = "Should enter new password")
	@Length(min=5,max=10,message = "Enter strong password")
	private String newPassword;
}
