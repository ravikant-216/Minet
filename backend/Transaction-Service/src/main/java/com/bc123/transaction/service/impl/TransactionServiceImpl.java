package com.bc123.transaction.service.impl;

import com.bc123.transaction.dto.TransactionDto;
import com.bc123.transaction.entity.Crypto;
import com.bc123.transaction.entity.Transaction;
import com.bc123.transaction.entity.User;
import com.bc123.transaction.exception.EntityNotFound;
import com.bc123.transaction.repositories.CryptoRepository;
import com.bc123.transaction.repositories.TransactionRepository;
import com.bc123.transaction.repositories.UserRepository;
import com.bc123.transaction.request.NewTransactionRequest;
import com.bc123.transaction.service.TransactionService;
import com.bc123.transaction.specification.TransactionSpecification;
import jakarta.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
@Slf4j
public class TransactionServiceImpl implements TransactionService {

  @Autowired
  TransactionRepository transactionRepository;

  @Autowired
  private ModelMapper modelMapper;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  TransactionSpecification transactionSpecification;

  @Autowired
  private CryptoRepository cryptoRepository;

  @Override
  public List<TransactionDto> getAllTransactions(Map<String, String> queryParams) {
    List<Transaction> res = transactionRepository.findAll(
        transactionSpecification.withQueryParams(queryParams));
    log.info("res " + res);
    return res.stream()
        .map(transaction -> modelMapper.map(transaction, TransactionDto.class))
        .toList();
  }

  @Override
  public TransactionDto createNewTransaction(NewTransactionRequest transactionRequest) {
    var newTransaction = modelMapper.map(transactionRequest, Transaction.class);

    User user = userRepository.findById(transactionRequest.getUserId())
        .orElseThrow(() -> new EntityNotFound("User"));
    Crypto crypto = cryptoRepository.findById(transactionRequest.getCryptoId())
        .orElseThrow(() -> new EntityNotFound("Crypto"));

    newTransaction.setUser(user);
    newTransaction.setCrypto(crypto);
    newTransaction.setDate(LocalDateTime.now());
    transactionRepository.save(newTransaction);

    return modelMapper.map(newTransaction, TransactionDto.class);
  }
}
