package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FeedbackRepository;
import com.app.dto.ApiResponse;
import com.app.entities.FeedbackEntity;

@Service
@Transactional 
public class feedbackServiceImpl implements FeedbackService {

	
	@Autowired
	private FeedbackRepository feedbackRepository; 
	
	@Override
	public ApiResponse addFeedback(FeedbackEntity feedback) {
		
		feedbackRepository.save(feedback);
		return new ApiResponse("Feedback Added");
	}

	@Override
	public List<FeedbackEntity> getAllFeedbacks() {
		 
		return feedbackRepository.findAll();
	}
  
	
}
