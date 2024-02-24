package com.app.dto;

import java.util.Set;

import javax.persistence.Column;

import com.app.entities.Vehicle;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceLocationResponseDto {
	private Long id;
	private String adrLine1;
	private String adrLine2;
	private String city;
	private String state;
	private String country;
	private String zipCode;
}
