package com.bc123.portfolio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Entity(name = "crypto")
@Getter
@Setter
public class Crypto {
  @Id
  @GeneratedValue(generator = "uuid-hibernate-generator")
  @GenericGenerator(name = "uuid-hibernate-generator", strategy = "org.hibernate.id.UUIDGenerator")
  private UUID id;

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
