package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.entities.FeedbackEntity;
import com.app.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
   
	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping("/addFeedback")
	public ApiResponse addFeedback(@RequestBody @Valid FeedbackEntity feedback) { 
		
		return feedbackService.addFeedback(feedback); 
	}
	
	@GetMapping("/getAllFeedbacks")
	public List<FeedbackEntity> getallFeedbacks(){
		
		return feedbackService.getAllFeedbacks(); 
	}
}








