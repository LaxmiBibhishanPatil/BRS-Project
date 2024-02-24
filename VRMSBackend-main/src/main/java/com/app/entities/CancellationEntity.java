package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cancellation")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CancellationEntity extends BaseEntity{

	
	@Column(length=300)
	private String reason;
	
	private Double refundableAmount;
	
	private LocalDate timestamp;
	
	@OneToOne
	@JoinColumn(name="booking_id")
	private BookingDetailsEntity booking;
	
	@OneToOne
	@JoinColumn(name="transaction_id")
	private PaymentDetailsEntity transaction;

	
	
}