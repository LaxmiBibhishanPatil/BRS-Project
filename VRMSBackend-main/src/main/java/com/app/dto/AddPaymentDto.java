package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

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
public class AddPaymentDto {
  
	@NotBlank(message = "Should enter card number")
	private String cardNo;
	
	@NotBlank(message = "Should enter card holder name")
	private String cardHolderName;
	
	@Length(min = 3,max = 3,message = "cvv should be three digit number")
	private String cvv;
	
	@NotBlank(message = "Should enter expiry date")
	private String expiryDate;
	
	private Double paymentAmount;
	private Long bookingId;
}
