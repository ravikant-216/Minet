package com.bc123.transaction.service;

import com.bc123.transaction.dto.TransactionDto;
import com.bc123.transaction.request.NewTransactionRequest;
import java.util.List;
import java.util.Map;

public interface TransactionService {
  public List<TransactionDto> getAllTransactions(Map<String, String> queryParams);

  public TransactionDto createNewTransaction(NewTransactionRequest transactionRequest);
}
