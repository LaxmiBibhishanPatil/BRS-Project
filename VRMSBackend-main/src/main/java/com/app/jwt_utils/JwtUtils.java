package com.app.jwt_utils;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.app.dto.CredentialsRequestDto;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {

	@Value("${SECRET_KEY}")
	private String jwtSecret;

	@Value("${EXP_TIMEOUT}")
	private int jwtExpirationMs;
	
	
	private Key key;

	@PostConstruct
	public void init() {
		key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
	}

	// will be invoked by Authentication controller) , upon successful
	// authentication
	public String generateJwtToken(CredentialsRequestDto authDto) {
	
//JWT : userName,issued at ,exp date,digital signature(does not typically contain password , can contain authorities
		return Jwts.builder() // JWTs : a Factory class , used to create JWT tokens
				.setSubject((authDto.getEmail())) // setting subject part of the token(typically user
															// name/email)
				.setIssuedAt(new Date())// Sets the JWT Claims iat (issued at) value of current date
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))// Sets the JWT Claims exp
																					// (expiration) value.
				// setting a custom claim
				.signWith(key, SignatureAlgorithm.HS512) // Signs the constructed JWT using the specified
															// algorithm with the specified key, producing a
															// JWS(Json web signature=signed JWT)

				// Using token signing algo : HMAC using SHA-512
				.compact();// Actually builds the JWT and serializes it to a compact, URL-safe string
	}

	// this method will be invoked by our custom JWT filter
	// this method will be invoked by our custom filter
	
	// Accepts Collection<GrantedAuthority> n rets comma separated list of it's
	// string form


}


