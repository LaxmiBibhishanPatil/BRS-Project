package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FeedbackEntity extends BaseEntity {
  
	@Column(length=30)
	private String customerName;
	
	@Column(length=30)
	private String email;
	
	@Column(length=300)
	private String feedbackMsg;
}
