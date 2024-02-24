package com.app.entities; 

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="vehicle_brand")
@Getter
@Setter
@NoArgsConstructor 
@AllArgsConstructor
public class VehicleBrand extends BaseEntity {
  
	@Column (length = 20)
	private String brandName;
	
	
	
	private Long pricingPerKm;
	
	@OneToMany(mappedBy = "brand", cascade = CascadeType.ALL,orphanRemoval = true)
	private Set<Vehicle> vehicleList = new HashSet<>();

	
	@ManyToOne
	@JoinColumn(name="type_id")
	private VehicleType type;
	
	@Override
	public int hashCode() {
		return Objects.hash(brandName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		VehicleBrand other = (VehicleBrand) obj;
		return Objects.equals(brandName, other.brandName);
	}
	
	
	
	 
}