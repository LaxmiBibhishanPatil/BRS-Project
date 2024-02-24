package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Long> {

	Optional<AdminEntity> findByEmailAndPassword(String email, String password);
	Optional<AdminEntity> findByEmail(String email);

}
