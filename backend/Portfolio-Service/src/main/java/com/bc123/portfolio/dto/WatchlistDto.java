package com.bc123.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WatchlistDto {
    private UUID id;
    private CryptoDto crypto;
    private UserDto user;
}
