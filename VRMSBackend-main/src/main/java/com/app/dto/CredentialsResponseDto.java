package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CredentialsResponseDto {
	private Long id;
	private String jwt;
	private String mesg;
	private Long userId;
	private String userName;
}
