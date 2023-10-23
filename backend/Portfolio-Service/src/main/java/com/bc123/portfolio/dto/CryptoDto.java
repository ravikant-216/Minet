package com.bc123.portfolio.dto;

import java.util.UUID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CryptoDto {

  private UUID id;

  private String name;

  private Double change;

  private Double circulatingSupply;

  private String icon;

  private Double marketCap;

  private Double price;

  private String symbol;

  private Double volume;
}
