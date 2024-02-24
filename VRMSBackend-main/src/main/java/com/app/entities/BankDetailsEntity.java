package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "bank_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BankDetailsEntity extends BaseEntity{

	@Column(length= 15, unique = true)
	private String cardNo;
	@Column(length= 30, unique = true)
	private String cardHolderName;
	@Column(length= 3, unique = true)
	private String cvv;
	@Column(length= 15, unique = true)
	private String expiryDate;
}