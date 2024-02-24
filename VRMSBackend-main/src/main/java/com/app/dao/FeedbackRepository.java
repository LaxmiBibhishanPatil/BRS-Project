package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FeedbackEntity;


public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long> {

}
