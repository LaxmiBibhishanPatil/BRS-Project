package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BankDetailsEntity;

public interface BankDetailsRepository extends JpaRepository<BankDetailsEntity, Long> {

	
	BankDetailsEntity findByCardNoAndCvv(String cardNo,String cvv);
}
