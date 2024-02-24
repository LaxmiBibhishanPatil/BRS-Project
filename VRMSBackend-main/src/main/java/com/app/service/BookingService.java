package com.app.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.app.dto.AddBookingDto;
import com.app.dto.AddFeedbackToBookingDto;
import com.app.dto.ApiResponse;
import com.app.dto.BookingDto;
import com.app.dto.BookingResponseDto;
import com.app.dto.BookingWithFeedbackDto;
import com.app.dto.CancelBookingDto;

public interface BookingService {

	public BookingResponseDto addBookingDetails(AddBookingDto bookingDto, Long userId);
	public List<BookingDto> getMyBookings(Long userId);
	public List<BookingResponseDto> getAllBookings();
	public ApiResponse cancelBooking(CancelBookingDto cancelDto);
	public List<BookingWithFeedbackDto> getAllBookingsWithFeedback();
	
	public ApiResponse addFeedbackToBooking(AddFeedbackToBookingDto addFeedbackToBookingDto);
	
	public Double getYearlyRevenue(String year) throws SQLException;
}
