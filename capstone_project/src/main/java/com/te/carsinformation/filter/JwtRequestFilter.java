package com.te.carsinformation.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.te.carsinformation.util.JwtUtil;

@Component
public class JwtRequestFilter extends OncePerRequestFilter{

	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
	
		String token=null;
		String adminUsername=null;
		String jwtToken = request.getHeader("Authorization");
		if (jwtToken!=null && jwtToken.startsWith("Bearer ")){
			token = jwtToken.substring(7);
			adminUsername=jwtUtil.extractUsername(token);
		}
		
		if(adminUsername !=null && SecurityContextHolder.getContext().getAuthentication() ==null) {
			UserDetails adminDetails = userDetailsService.loadUserByUsername(adminUsername);
			if(jwtUtil.validateToken(token, adminDetails)) {
				UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(
						adminDetails.getUsername(),adminDetails.getPassword());
				
				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			}
			
		}
		 response.setHeader("Access-Control-Allow-Origin", "*");
	        response.setHeader("Access-Control-Allow-Credentials", "true");
	        response.setHeader("Access-Control-Allow-Methods",
	                "ACL, CANCELUPLOAD, CHECKIN, CHECKOUT, COPY, DELETE, GET, HEAD, LOCK, MKCALENDAR, MKCOL, MOVE, OPTIONS, POST, PROPFIND, PROPPATCH, PUT, REPORT, SEARCH, UNCHECKOUT, UNLOCK, UPDATE, VERSION-CONTROL");
	        response.setHeader("Access-Control-Max-Age", "3600");
	        response.setHeader("Access-Control-Allow-Headers",
	                "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization");

//		 response.setHeader("Access-Control-Allow-Origin", "*");
//		    response.setHeader("Access-Control-Allow-Credentials", "true");
//		    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//		    response.setHeader("Access-Control-Max-Age", "3600");
//		    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Auth-Token, Content-Type, Accept, X-Requested-With, remember-me");

	        filterChain.doFilter(request, response);
	}
	
		
	}

	

