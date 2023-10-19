package com.bc123.user.config;


import com.bc123.user.entity.User;
import com.bc123.user.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JwtService {
	@Value("${SECRET_ID}")
	private String SECRET;
	@Autowired
	private UserRepository userRepository;
	
	public String generateToken(String email, String password){
		try {
			User user = userRepository.findByEmail(email);
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			if (passwordEncoder.matches(password, user.getPassword())) {
				Map<String, Object> claims = new HashMap<>();
				return createToken(claims, email);
			}
			else {
				throw new RuntimeException("Password Doesn't match");
			}
		}catch (Exception e){
			throw new RuntimeException("Email Doesn't exist");
		}
	}
	
	private String createToken(Map<String, Object> claims, String userName) {
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(userName)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
				.signWith(getSignKey(), SignatureAlgorithm.HS256)
				.compact();
		
	}
	
	private Key getSignKey() {
		byte[] keyByte = Decoders.BASE64.decode(SECRET);
		return Keys.hmacShaKeyFor(keyByte);
	}
}
