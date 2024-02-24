package com.app.dto;

import java.util.Set;

import com.app.entities.VehicleBrand;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleTypeDto {

	private Long id;
	private String type;
}
