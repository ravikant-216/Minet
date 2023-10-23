package com.bc123.portfolio.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class WatchlistRequest {
  private UUID id;
  private UUID cryptoId;
  private UUID userId;
  
}
