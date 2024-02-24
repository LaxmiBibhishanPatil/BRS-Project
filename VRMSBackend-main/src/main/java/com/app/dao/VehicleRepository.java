package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

}
