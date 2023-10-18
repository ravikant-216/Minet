package com.bc123.crypto.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CryptoDto {

        private UUID id;
        private String name;
        private String symbol;
        private String icon;
        private double price;
        private double change;
        private double marketCap;
        private double volume;
        private double circulatingSupply;
}
