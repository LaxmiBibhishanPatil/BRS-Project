package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ServiceLocationEntity;


public interface ServiceLocationRepository extends JpaRepository<ServiceLocationEntity, Long> {

}
