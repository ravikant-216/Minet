package com.bc123.transaction.entity;

import com.bc123.transaction.enums.TransactionStatus;
import com.bc123.transaction.enums.TransactionType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity()
@ToString
@Table(name = "transactions")
@Getter
@Setter
public class Transaction extends BaseEntity {

  @Column(name = "date", columnDefinition = "DATETIME")
  private LocalDateTime date;

  @Column(name = "status")
  @Enumerated(EnumType.STRING)
  private TransactionStatus status;

  @Column(name = "quantity")
  private Double quantity;

  @Column(name = "price")
  private Double price;

  @Column(name = "description")
  private String description;

  @JoinColumn(name = "crypto_id")
  @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private Crypto crypto;

  @JoinColumn(name = "user_id")
  @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private User user;

  @Column(name = "type")
  @Enumerated(EnumType.STRING)
  TransactionType type;
}
