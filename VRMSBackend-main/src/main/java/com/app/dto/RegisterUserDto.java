package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class RegisterUserDto {
	
	@NotBlank(message = "Should enter first name")
	private String firstName;
	
	@NotBlank(message = "Should enter last name")
	private String lastName;
	
	@NotBlank(message = "Should enter email")
	@Email(message = "Invalid email format")
	private String email;
	
	@NotBlank
	@Length(min = 5,max=20,message = "Should enter strong password")
	private String password;
	
	@Range(min = 16, message = "Too young to drive a vehicle")
	private int age;
	
	
	private String mobileNo;
	
	@Length(min = 12, message = "Enter valid aadhar number")
	private String aadharNo;
	
	
	private String licenseNo;

}
