package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse; 
import com.app.entities.FeedbackEntity;
 
public interface FeedbackService {
  
	public ApiResponse addFeedback(FeedbackEntity feedback);
	public List<FeedbackEntity> getAllFeedbacks();
}
