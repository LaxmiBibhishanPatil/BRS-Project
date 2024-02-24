package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Vehicle;

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
public class BookingDto {
	private Long id;

	
	private LocalDate bookDate;
	private LocalDate startDate;
	private LocalDate endDate;
	
	private Double amount;
	private Double extraCharge;
	
	private Double totalAmount;
	
	
	private String status;
	
	private VehicleResponseDto vehicle;
	
}
