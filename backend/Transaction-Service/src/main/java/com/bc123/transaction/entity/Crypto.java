package com.bc123.transaction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "crypto")
@Getter
@Setter
public class Crypto extends BaseEntity {

  @Column(name = "name")
  private String name;

  @Column(name = "change")
  private Double change;

  @Column(name = "circulating_supply")
  private Double circulatingSupply;

  @Column(name = "icon")
  private String icon;

  @Column(name = "market_cap")
  private Double marketCap;

  @Column(name = "price")
  private Double price;

  @Column(name = "symbol")
  private String symbol;

  @Column(name = "volume")
  private Double volume;
}
