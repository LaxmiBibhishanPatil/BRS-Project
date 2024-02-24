package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ServiceLocationDto;
import com.app.dto.ServiceLocationResponseDto;
import com.app.entities.ServiceLocationEntity;

public interface ServiceLocationService {
	public ApiResponse addServiceLocation(ServiceLocationDto location);
	
	public ApiResponse deleteServiceLocation(Long id);
	
	public List<ServiceLocationResponseDto> getAllLocations();
}
