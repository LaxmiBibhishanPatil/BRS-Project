package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddFeedbackToBookingDto {
    
	private Long bookingId;
	
	@NotBlank(message = "Should enter feedback")
	private String bookingFeedback;
	
    
	private Integer rating;
	
	
}
