package com.app.service;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import com.app.dto.AddVehicalDto;
import com.app.dto.ApiResponse;
import com.app.dto.ServiceLocationDto;
import com.app.dto.UpdateVehicleDto;
import com.app.dto.VehicleBrandDto;
import com.app.dto.VehicleResponseDto;
import com.app.dto.VehicleResponseToCustomerDto;
import com.app.dto.VehicleTypeDto;
import com.app.entities.Vehicle;

public interface VehicleService {
	public ApiResponse addVehicle(AddVehicalDto vehicle);
	
	public ApiResponse deleteVehicle(Long id);
	
	public List<VehicleResponseDto> getAllVehicles()throws IOException;
	
	public List<VehicleResponseDto> getAvailableVehicles()throws IOException;
	
	public List<VehicleResponseDto> getReservedVehicles()throws IOException;
	
	public List<VehicleResponseToCustomerDto> getAllVehiclesByServiceLocation(Long id)throws IOException;

	
	public VehicleResponseToCustomerDto getVehicleById(Long vehicleId)throws IOException;
	
	public ApiResponse updateVehicle(UpdateVehicleDto vehicleDto);
	
	public List<VehicleBrandDto> getAllVehicleBrands();
	
	public List<VehicleTypeDto> getAllVehicleTypes();
	
}
