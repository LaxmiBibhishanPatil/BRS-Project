package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ServiceLocationDto;
import com.app.dto.ServiceLocationResponseDto;
import com.app.entities.ServiceLocationEntity;
import com.app.service.ServiceLocationService;


@RestController
@RequestMapping("/service_location")
public class ServiceLocationController {

	@Autowired
	private ServiceLocationService locationService;
	
	
	@PostMapping
	public ApiResponse addServiceLocation(@RequestBody @Valid ServiceLocationDto location) {
		
		return locationService.addServiceLocation(location);
		 
	}
	
	
	@DeleteMapping("/{id}")
	public ApiResponse deleteServiceLocation(@PathVariable Long id) {
		
		return locationService.deleteServiceLocation(id);
		
		
	}
	
	@GetMapping
	public List<ServiceLocationResponseDto> getAllLocations(){
		
		return locationService.getAllLocations();
		
		
	}
	
	
	
}
