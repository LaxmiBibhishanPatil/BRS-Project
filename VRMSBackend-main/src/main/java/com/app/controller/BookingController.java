package com.app.controller;

import java.sql.SQLException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddBookingDto;
import com.app.dto.AddFeedbackToBookingDto;
import com.app.dto.ApiResponse;
import com.app.dto.BookingDto;
import com.app.dto.BookingResponseDto;
import com.app.dto.BookingWithFeedbackDto;
import com.app.dto.CancelBookingDto;
import com.app.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	

	@PostMapping("/addbooking/{userId}")
	public BookingResponseDto addBookingDetails(@RequestBody @Valid AddBookingDto booking, @PathVariable Long userId) {
		
		
		return bookingService.addBookingDetails(booking,userId);
		
	}
	
	@GetMapping("/{userId}")
	public List<BookingDto> getMyBookings(@PathVariable Long userId) {
		
		return bookingService.getMyBookings(userId);
	}
	
	@GetMapping("/allbookings")
	public List<BookingResponseDto> getAllBookings(){
		
		return bookingService.getAllBookings();
	}
	
	@GetMapping("/allbookingswithfeedback")
	public List<BookingWithFeedbackDto> getAllBookingsWithFeedback(){
		
		return bookingService.getAllBookingsWithFeedback();
	}
	
	@PutMapping("/addfeedbacktobooking")
	public ApiResponse addFeedbackToBooking(@RequestBody @Valid AddFeedbackToBookingDto addFeedbackToBookingDto ) {
		return bookingService.addFeedbackToBooking(addFeedbackToBookingDto);
	}
	
	@DeleteMapping("/cancel_booking")
	public ApiResponse cancelBooking(@RequestBody @Valid CancelBookingDto cancelBookingDto) {
		return bookingService.cancelBooking(cancelBookingDto);
	}
	
	@GetMapping("/yearly_revenue/{year}")
	public Double getYearlyRevenue(@PathVariable String year) throws SQLException {
		//This is for getting revenue
		
		return bookingService.getYearlyRevenue(year);
	}
	
	
}
