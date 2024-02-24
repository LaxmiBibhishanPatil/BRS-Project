package com.app.dto;

import javax.validation.constraints.NotBlank;

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
public class UpdateVehicleDto {

	private Long id;
	
	@NotBlank(message = "Should enter fuel type")
	private String fuelType;
	
	private Long serviceLocationId;
}
