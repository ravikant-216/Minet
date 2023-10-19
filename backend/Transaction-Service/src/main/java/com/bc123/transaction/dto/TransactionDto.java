package com.bc123.transaction.dto;

import com.bc123.transaction.enums.TransactionStatus;
import com.bc123.transaction.enums.TransactionType;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TransactionDto {

  private LocalDateTime date;

  private TransactionStatus status;

  private Double quantity;

  private Double price;

  private String description;

  private CryptoDto crypto;

  private UserDto user;

  TransactionType type;
}
