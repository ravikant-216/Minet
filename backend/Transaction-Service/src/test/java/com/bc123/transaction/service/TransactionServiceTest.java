package com.bc123.transaction.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.bc123.transaction.dto.TransactionDto;
import com.bc123.transaction.entity.Crypto;
import com.bc123.transaction.entity.Transaction;
import com.bc123.transaction.entity.User;
import com.bc123.transaction.enums.TransactionStatus;
import com.bc123.transaction.enums.TransactionType;
import com.bc123.transaction.exception.EntityNotFound;
import com.bc123.transaction.repositories.CryptoRepository;
import com.bc123.transaction.repositories.TransactionRepository;
import com.bc123.transaction.repositories.UserRepository;
import com.bc123.transaction.request.NewTransactionRequest;
import com.bc123.transaction.specification.TransactionSpecification;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.domain.Specification;

@SpringBootTest()
class TransactionServiceTest {

    @MockBean
    TransactionRepository transactionRepository;

    @MockBean
    ModelMapper modelMapper;

    @MockBean
    UserRepository userRepository;

    @Autowired
    TransactionSpecification transactionSpecification;

    @MockBean
    CryptoRepository cryptoRepository;

    @Autowired
    TransactionService transactionService;

    @Test
    void getAllTransactions() {
        Transaction transaction = new Transaction();
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);
        Map<String, String> queryParams = new HashMap<>();

        when(transactionRepository.findAll((Specification<Transaction>) any())).thenReturn(transactions);
        when(modelMapper.map(transaction, TransactionDto.class))
                .thenReturn(new TransactionDto());

        List<TransactionDto> result = transactionService.getAllTransactions(queryParams);
        verify(modelMapper).map(transaction, TransactionDto.class);

        assertEquals(1, result.size());
    }

    @Test
    void testCreateNewTransaction() {
        NewTransactionRequest newTransactionRequest = new NewTransactionRequest(
                TransactionStatus.cancel, 12.3, 34.3, "dsfsddf", UUID.randomUUID(),
                UUID.randomUUID(), TransactionType.buy);

        Crypto crypto = new Crypto();
        User user = new User();

        when(cryptoRepository.findById(any())).thenReturn(Optional.of(crypto));
        when(userRepository.findById(any())).thenReturn(Optional.of(user));
        when(modelMapper.map(newTransactionRequest, Transaction.class)).thenReturn(new Transaction());
        when(transactionRepository.save(any())).thenReturn(new Transaction());
        when(modelMapper.map(newTransactionRequest, TransactionDto.class)).thenReturn(new TransactionDto());

        transactionService.createNewTransaction(newTransactionRequest);
        verify(cryptoRepository).findById(any());
        verify(userRepository).findById(any());
    }

    @Test
    void ifCryptoNotFoundThenThrowError() {
        NewTransactionRequest newTransactionRequest = new NewTransactionRequest(
                TransactionStatus.cancel, 12.3, 34.3, "dsfsddf", UUID.randomUUID(),
                UUID.randomUUID(), TransactionType.buy);

        User user = new User();

        when(cryptoRepository.findById(any())).thenReturn(Optional.empty());
        when(userRepository.findById(any())).thenReturn(Optional.of(user));
        when(modelMapper.map(newTransactionRequest, Transaction.class)).thenReturn(new Transaction());
        when(transactionRepository.save(any())).thenReturn(new Transaction());
        when(modelMapper.map(newTransactionRequest, TransactionDto.class)).thenReturn(new TransactionDto());
        assertThrows(EntityNotFound.class, () -> transactionService.createNewTransaction(newTransactionRequest));
    }

    @Test
    void ifUserFoundThenThrowError() {
        NewTransactionRequest newTransactionRequest = new NewTransactionRequest(
                TransactionStatus.cancel, 12.3, 34.3, "dsfsddf", UUID.randomUUID(),
                UUID.randomUUID(), TransactionType.buy);

        when(cryptoRepository.findById(any())).thenReturn(Optional.of(new Crypto()));
        when(userRepository.findById(any())).thenReturn(Optional.empty());
        when(modelMapper.map(newTransactionRequest, Transaction.class)).thenReturn(new Transaction());
        when(transactionRepository.save(any())).thenReturn(new Transaction());
        when(modelMapper.map(newTransactionRequest, TransactionDto.class)).thenReturn(new TransactionDto());
        assertThrows(EntityNotFound.class, () -> transactionService.createNewTransaction(newTransactionRequest));
    }
}
