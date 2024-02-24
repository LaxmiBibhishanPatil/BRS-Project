package com.app.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingRepository;
import com.app.dao.CancelBookingRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dao.VehicleRepository;
import com.app.dto.AddBookingDto;
import com.app.dto.AddFeedbackToBookingDto;
import com.app.dto.ApiResponse;
import com.app.dto.BookingDto;
import com.app.dto.BookingResponseDto;
import com.app.dto.BookingWithFeedbackDto;
import com.app.dto.CancelBookingDto;
import com.app.dto.ProfileDto;
import com.app.entities.BookingDetailsEntity;
import com.app.entities.CancellationEntity;
import com.app.entities.PaymentDetailsEntity;
import com.app.entities.UserEntity;
import com.app.entities.Vehicle;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private VehicleRepository vehicleRepo;
	
	@Autowired
	private CancelBookingRepository cancelBookingRepo;
	
	@Autowired
	private PaymentRepository paymentRepo;
	
	@Override
	public BookingResponseDto addBookingDetails(AddBookingDto bookingDto, Long userId) {
		
		
		
		UserEntity users= userRepo.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
		Vehicle vehicle = vehicleRepo.findById(bookingDto.getVehicleId()).orElseThrow(()-> new RuntimeException("vehicle not found"));
		BookingDetailsEntity booking= mapper.map(bookingDto, BookingDetailsEntity.class);
		//vehicle.setStatus("NotAvailable");
		booking.setVehicle(vehicle);
		booking.setUsers(users);
		booking.setBookDate(LocalDate.now());
		booking.setStatus("Pending");
		
		
		BookingDetailsEntity bookingEntity= bookingRepo.save(booking);
		
		BookingResponseDto bookingResponse =  mapper.map(bookingEntity, BookingResponseDto.class);
		
		return bookingResponse;
	}
	
	
  @Override
	public List<BookingDto> getMyBookings(Long userId) {
		// TODO Auto-generated method stub
	  UserEntity users= userRepo.findById(userId).orElseThrow(()-> new RuntimeException("user not found"));
		List<BookingDetailsEntity> bookingEntity=users.getBookings();
		
		
		List<BookingDto> bookingDto=bookingEntity.stream().filter(booking-> booking.getStatus().equals("Pending") || booking.getStatus().equals("Successful")).map(booking-> mapper.map(booking, BookingDto.class)).collect(Collectors.toList());
		
		return bookingDto;
	}
	  
	  @Override
	public List<BookingResponseDto> getAllBookings() {
		 
		List<BookingDetailsEntity> bookingEntities=bookingRepo.findAll();
		List<BookingResponseDto> bookingDto=bookingEntities.stream().map(booking-> mapper.map(booking, BookingResponseDto.class)).collect(Collectors.toList());
		
		for(int i=0;i<bookingEntities.size();i++) {
			bookingDto.get(i).setUser(mapper.map(bookingEntities.get(i).getUsers(), ProfileDto.class));
		}
		
		return bookingDto;
	}
	  
	@Override
	public ApiResponse cancelBooking(CancelBookingDto cancelDto) {
	
		
		BookingDetailsEntity booking = bookingRepo.findById(cancelDto.getBookingId())
										.orElseThrow(()->new RuntimeException("booking details not found"));
		
		
		PaymentDetailsEntity payment = paymentRepo.findById(cancelDto.getBookingId())
				.orElseThrow(()->new RuntimeException("payment details not found"));
		
		
		Vehicle vehicle = vehicleRepo.findById(booking.getVehicle().getId())
				.orElseThrow(()->new RuntimeException("vehicle not found"));
		
		
		CancellationEntity cancellationEntry = mapper.map(cancelDto, CancellationEntity.class);
		
		booking.setStatus("Cancelled");
		vehicle.setStatus("Available");
		cancellationEntry.setBooking(booking);
		cancellationEntry.setTransaction(payment);
		cancellationEntry.setRefundableAmount(booking.getAmount()*0.90);
		cancellationEntry.setTimestamp(LocalDate.now());
		
		
		cancelBookingRepo.save(cancellationEntry);
		
		return new ApiResponse("Booking cancelled succesfully");
	}
		
	@Override
	public List<BookingWithFeedbackDto> getAllBookingsWithFeedback() {
		// TODO Auto-generated method stub
		List<BookingDetailsEntity> bookingEntities=bookingRepo.findAll();
		List<BookingWithFeedbackDto> bookingDto=bookingEntities.
				stream()
				.map(booking-> mapper.map(booking, BookingWithFeedbackDto.class)).collect(Collectors.toList());
		
		for(int i=0;i<bookingEntities.size();i++) {
			bookingDto.get(i).setUser(mapper.map(bookingEntities.get(i).getUsers(), ProfileDto.class));
		}
		
		return bookingDto.stream().filter(booking-> booking.getBookingFeedback() !=null).collect(Collectors.toList());
	}
	
	@Override
	public ApiResponse addFeedbackToBooking(AddFeedbackToBookingDto addFeedbackToBookingDto) {
		// TODO Auto-generated method stub
		BookingDetailsEntity booking = bookingRepo.findById(addFeedbackToBookingDto.getBookingId()).orElseThrow(()-> new RuntimeException("No such Booking"));
		
		booking.setBookingFeedback(addFeedbackToBookingDto.getBookingFeedback());
		booking.setRating(addFeedbackToBookingDto.getRating());
		
		bookingRepo.save(booking);
		
		return new ApiResponse("Feedback added!!");
	}
	
	@Override
	public Double getYearlyRevenue(String year) throws SQLException {
		// TODO Auto-generated method stub
		

		Integer yr=Integer.valueOf(year);
		
		return bookingRepo.findRevenueByYear(yr);
}
}