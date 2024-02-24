package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "booking_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BookingDetailsEntity extends BaseEntity { 

	private LocalDate bookDate;
	private LocalDate startDate;
	private LocalDate endDate;
	
	private Double amount;
	private Double extraCharge;
	
	private Double totalAmount;
	
	@Column(length = 20)
	private String status;
	
	@OneToOne
	@JoinColumn(name="vehical_id")
	private Vehicle vehicle;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private UserEntity users;
	
	@Column(length=300)
	private String bookingFeedback;

	private Integer rating;
}
