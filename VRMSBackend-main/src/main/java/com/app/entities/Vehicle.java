package com.app.entities;

import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "vehicle")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = {"type","brand","serviceLocation"})
public class Vehicle extends BaseEntity{
	
	@Column(length=30,unique=true)
	private String vehicleNo;
	@Column(length=30)
	private String fuelType;
	@Column(length=10)
	private String passingYear;
	@Column(length=30)
	private String status;
	
	private String imagePath;
	@ManyToOne
	@JoinColumn(name = "type_id")
	private VehicleType type;
	@ManyToOne
	@JoinColumn(name = "brand_id")
	private VehicleBrand brand; 
	
	@ManyToOne
	private ServiceLocationEntity serviceLocation;

	
	
	@Override
	public int hashCode() {
		return Objects.hash(vehicleNo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Vehicle other = (Vehicle) obj;
		return Objects.equals(vehicleNo, other.vehicleNo);
	}

}