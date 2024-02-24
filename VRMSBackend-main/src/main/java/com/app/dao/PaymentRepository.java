package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.PaymentDetailsEntity;

public interface PaymentRepository extends JpaRepository<PaymentDetailsEntity, Long> {
 
}
