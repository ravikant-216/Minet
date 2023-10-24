package com.bc123.apigateway.filter;

import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.http.server.reactive.ServerHttpRequest;


import java.util.List;
import java.util.function.Predicate;

@Component
@Slf4j
@NoArgsConstructor
public class RouteValidator {
    public static final List<String> openApiEndpoints = List.of(
            "/user"
    );

    public static final Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().equals(uri))
                    && !request.getQueryParams().containsKey("email");

}