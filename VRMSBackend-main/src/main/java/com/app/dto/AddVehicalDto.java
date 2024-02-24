package com.app.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import com.app.entities.ServiceLocationEntity;
import com.app.entities.VehicleBrand;
import com.app.entities.VehicleType;

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
public class AddVehicalDto {
	
	@NotBlank(message = "Should enter vehicle number")
	private String vehicleNo;
	
	@NotBlank(message = "Should enter fuel type")
	private String fuelType;
	
	@NotBlank(message = "Should enter passing year")
	private String passingYear;
	
	private Long typeId;
	
	private Long brandId;
	
	private Long serviceLocationId;
}
