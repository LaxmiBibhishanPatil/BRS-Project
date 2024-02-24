package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "service_location")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "vehicleList")
public class ServiceLocationEntity extends BaseEntity{
	
	@Column(length=100)
	private String adrLine1;
	@Column(length=100)
	private String adrLine2;
	@Column(length=20)
	private String city;
	@Column(length=20)
	private String state;
	@Column(length=20)
	private String country;
	@Column(length=20,name="zip_code")
	private String zipCode;
	@OneToMany(mappedBy = "serviceLocation", cascade = CascadeType.ALL, orphanRemoval = true)
	Set<Vehicle> vehicleSet = new HashSet<>();
	
	
	public void addVehicle(Vehicle v) {
		vehicleSet.add(v);// dept --> emp
		v.setServiceLocation(this);// emp --> dept
	}
	public void removeVehicle(Vehicle v) {
		vehicleSet.remove(v);
		v.setServiceLocation(null);
	}

	
	
	
	
}