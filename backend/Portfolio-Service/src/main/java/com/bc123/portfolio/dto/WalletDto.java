package com.bc123.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WalletDto {
    private UUID id;
    private CryptoDto crypto;
    private UserDto user;
    private double totalBalance;
}
