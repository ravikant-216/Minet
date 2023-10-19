package com.bc123.transaction.controller;

import com.bc123.transaction.dto.TransactionDto;
import com.bc123.transaction.request.NewTransactionRequest;
import com.bc123.transaction.service.TransactionService;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/transactions")
public class TransactionController {

  @Autowired
  TransactionService transactionService;

  @GetMapping()
  public ResponseEntity<List<TransactionDto>> getAllTransactions(@RequestParam Map<String, String> allParams) {
    List<TransactionDto> transactions = transactionService.getAllTransactions(allParams);
    log.info("Get all transactions " + transactions);
    return ResponseEntity.ok(transactions);
  }

  @PostMapping()
  public ResponseEntity<TransactionDto> createNewTransaction(
      @Valid @RequestBody NewTransactionRequest transactionRequest) {
    log.info("New Transaction RequestBody " + transactionRequest);
    TransactionDto newTransaction = transactionService.createNewTransaction(transactionRequest);
    return ResponseEntity.status(201).body(newTransaction);
  }
}
