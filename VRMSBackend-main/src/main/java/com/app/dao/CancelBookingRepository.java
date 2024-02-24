package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CancellationEntity;

public interface CancelBookingRepository extends JpaRepository<CancellationEntity, Long> {

}
