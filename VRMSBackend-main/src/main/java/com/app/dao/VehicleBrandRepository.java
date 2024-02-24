package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.VehicleBrand;

public interface VehicleBrandRepository extends JpaRepository<VehicleBrand, Long> {

}
