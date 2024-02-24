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
@Table(name = "payment_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentDetailsEntity extends BaseEntity {

	@Column(length=30)
	private String paymentStatus;
	private Double paymentAmount;
	private LocalDate timestamp;
	
	
	@OneToOne
	@MapsId
	@JoinColumn(name="booking_id")
	private BookingDetailsEntity booking;

	
}