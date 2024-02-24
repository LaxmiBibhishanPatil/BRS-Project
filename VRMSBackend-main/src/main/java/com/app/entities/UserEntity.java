package com.app.entities; 

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password") // toString excluding password
public class UserEntity extends BaseEntity {
	@Column(name="first_name",length = 20)
	private String firstName;
	@Column(name="last_name",length = 20)
	private String lastName;
	@Column(length = 30, unique = true)
	private String email;
	@Column(length = 300, nullable = false)
	private String password;
	

	private int age;
	@Column(name="mobile_no",length = 15)	
	private String mobileNo;
	@Column(name="aadhar_no",length = 12, unique = true)	
	private String aadharNo;
	@Column(name="license_no",length = 30, unique = true)	
	private String licenseNo;
	
	@OneToMany(mappedBy = "users", cascade = CascadeType.ALL
			, orphanRemoval = true)
	private List<BookingDetailsEntity> bookings = new ArrayList<>();
	
	
	
	
}
