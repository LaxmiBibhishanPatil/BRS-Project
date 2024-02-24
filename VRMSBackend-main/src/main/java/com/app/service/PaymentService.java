package com.app.service;
 
import com.app.dto.AddPaymentDto;
import com.app.dto.ApiResponse;

public interface PaymentService { 
   public ApiResponse addPayment(AddPaymentDto paymentDto);
}
