package com.bc123.transaction.request;

import com.bc123.transaction.enums.TransactionStatus;
import com.bc123.transaction.enums.TransactionType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class NewTransactionRequest {

  @Enumerated(EnumType.STRING)
  private TransactionStatus status;

  @DecimalMin("0.0")
  private Double quantity;

  @DecimalMin("0.0")
  private Double price;

  @NotBlank()
  private String description;

  private java.util.UUID cryptoId;

  private java.util.UUID userId;

  @Enumerated(EnumType.STRING)
  private TransactionType type;
}
