package com.app.dto;

import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.app.entities.Vehicle;

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
public class ServiceLocationDto {
	
	@NotBlank(message = "Should enter address")
	private String adrLine1;
	
	private String adrLine2;
	
	@NotBlank(message = "Should enter city name")
	private String city;
	
	@NotBlank(message = "Should enter state name")
	private String state;
	
	@NotBlank(message = "Should enter country name")
	private String country;
	
	@Length(min=6,max=6,message = "Zip code should be of 6 digit")
	private String zipCode;
}
