package com.app.service;

import java.util.List;

import com.app.dto.AllCancelledBookingDto;

public interface CancellationService {

	public List<AllCancelledBookingDto> getAllCancelledBookings();
}
