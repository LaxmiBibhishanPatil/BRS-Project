package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VehicleType;

public interface VehicleTypeRepository extends JpaRepository<VehicleType, Long> {

}
