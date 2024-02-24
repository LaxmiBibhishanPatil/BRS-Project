package com.app.controller; 

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddPaymentDto;
import com.app.dto.ApiResponse;
import com.app.service.PaymentService;

@RestController 
@RequestMapping("/payment")
public class PaymentController {
  
	@Autowired
	private PaymentService paymentService;
	
	@PostMapping
	public ApiResponse addPayment(@RequestBody @Valid AddPaymentDto paymentDto) {
		
		return paymentService.addPayment(paymentDto);
	}
	
	 
}
