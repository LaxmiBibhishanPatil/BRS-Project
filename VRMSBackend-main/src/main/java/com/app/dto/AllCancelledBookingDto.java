package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AllCancelledBookingDto {

	
	private String reason;
	
	private Double refundableAmount;
	
	private LocalDate timestamp;
	
	private BookingResponseDto bookingDto;

}
