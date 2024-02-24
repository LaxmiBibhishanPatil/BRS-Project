package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class VehicleResponseDto {
	private Long id;
	private String vehicleNo;
	private String fuelType;
	private String passingYear;
	private String status;
	private VehicleTypeDto type;

	
	private VehicleBrandDto brand;
	
	private ServiceLocationResponseDto location;

}
