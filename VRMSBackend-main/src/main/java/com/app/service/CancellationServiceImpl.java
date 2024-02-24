package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingRepository;
import com.app.dao.CancelBookingRepository;
import com.app.dto.BookingResponseDto;
import com.app.dto.ProfileDto;
import com.app.dto.AllCancelledBookingDto;
import com.app.entities.CancellationEntity;


@Service
@Transactional
public class CancellationServiceImpl implements CancellationService {

	@Autowired
	private CancelBookingRepository cancelBookingRepo;
	
	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<AllCancelledBookingDto> getAllCancelledBookings() {
		
		List<CancellationEntity> cancelledBookings = cancelBookingRepo.findAll();
		
		List<AllCancelledBookingDto> cancelledBookingResponse =cancelledBookings.stream().map(cancelBooking-> mapper.map(cancelBooking, AllCancelledBookingDto.class)).collect(Collectors.toList());
		
		for(int i=0;i<cancelledBookings.size();i++) {
		
			cancelledBookingResponse.get(i).setBookingDto(mapper.map(cancelledBookings.get(i).getBooking(), BookingResponseDto.class));
			cancelledBookingResponse.get(i).getBookingDto().setUser(mapper.map(cancelledBookings.get(i).getBooking().getUsers(), ProfileDto.class));
		}
		
		return cancelledBookingResponse;
	}
}
