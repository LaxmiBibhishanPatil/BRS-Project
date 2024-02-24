package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddVehicalDto;
import com.app.dto.ApiResponse;
import com.app.dto.UpdateVehicleDto;
import com.app.dto.VehicleBrandDto;
import com.app.dto.VehicleResponseDto;
import com.app.dto.VehicleResponseToCustomerDto;
import com.app.dto.VehicleTypeDto;
import com.app.entities.Vehicle;
import com.app.service.ImageHandlingService;
import com.app.service.VehicleService;


@RestController
@RequestMapping("/vehicles")
public class VehicleController {

	@Autowired
	private VehicleService vehicleService;
	
	@Autowired
	private ImageHandlingService imgService;
	
	
	@PostMapping
	public ApiResponse addVehicleToExistingLocation(@RequestBody @Valid AddVehicalDto vehicleDto) {
		return vehicleService.addVehicle(vehicleDto);
	}
	
	
	@DeleteMapping("/{id}")
	public ApiResponse removeVehicle(@PathVariable Long id) {	
		return vehicleService.deleteVehicle(id);
	}
	
	@GetMapping("/all")
	public List<VehicleResponseDto> getAllVehicles()throws IOException{
		
		return vehicleService.getAllVehicles();
	}
	
	@GetMapping("/by_location/{id}")
	public List<VehicleResponseToCustomerDto> getAllVehiclesByLocation(@PathVariable Long id)throws IOException{
		
		return vehicleService.getAllVehiclesByServiceLocation(id);
	}
	
	@GetMapping("/available_vehicles")
	public List<VehicleResponseDto> getAvailableVehicle()throws IOException{
		
		return vehicleService.getAvailableVehicles();
	}
	
	@GetMapping("/reserved_vehicles")
	public List<VehicleResponseDto> getReservedVehicle()throws IOException{
		
		return vehicleService.getReservedVehicles();
	}
	
	
	@GetMapping("/{id}")
	public VehicleResponseToCustomerDto getVehicleById(@PathVariable Long id)throws IOException{
		
		return vehicleService.getVehicleById(id);
	}
	
	@PutMapping
	public ApiResponse updateVehicle(@RequestBody @Valid UpdateVehicleDto vehicleDto)throws IOException {
		
		return vehicleService.updateVehicle(vehicleDto);
	}
	
	
	@PostMapping(value = "/images/{vehicleId}", consumes = "multipart/form-data")
	public ApiResponse uploadImage(@PathVariable Long vehicleId, @RequestParam("imageFile") MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + vehicleId);
		return imgService.uploadImage(vehicleId, imageFile);
	}

	// 5 . serve(download image) of specific vehicle
	// http://host:port/vehicles/images/{vehicleId} , method=GET
	@GetMapping(value="/images/{vehicleId}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public byte[] serveVehicleImage(@PathVariable Long vehicleId) throws IOException {
		System.out.println("in download img " + vehicleId);
		return imgService.downloadImage(vehicleId);
	}
	
	
	@GetMapping("/vehicle_types")
	public List<VehicleTypeDto> getAllVehicleTypes()throws IOException{
		
		return vehicleService.getAllVehicleTypes();
	}
	
	
	@GetMapping("/vehicle_brands")
	public List<VehicleBrandDto> getAllVehicleBrands()throws IOException{
		
		return vehicleService.getAllVehicleBrands();
	}
}
