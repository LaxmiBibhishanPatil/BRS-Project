package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AllCancelledBookingDto;
import com.app.service.CancellationService;

@RestController
@RequestMapping("/cancelBooking")
public class CancellationController {

	@Autowired
	private CancellationService cancellationService;
	
	@GetMapping
	public List<AllCancelledBookingDto> getAllCancelledBookings(){
		
		
		return cancellationService.getAllCancelledBookings();
	}
}
