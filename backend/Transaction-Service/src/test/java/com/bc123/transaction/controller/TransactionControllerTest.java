package com.bc123.transaction.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.bc123.transaction.dto.TransactionDto;
import com.bc123.transaction.enums.TransactionStatus;
import com.bc123.transaction.enums.TransactionType;
import com.bc123.transaction.request.NewTransactionRequest;
import com.bc123.transaction.service.TransactionService;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@WebMvcTest(TransactionController.class)
@ExtendWith(MockitoExtension.class)
class TransactionControllerTest extends AbstractControllerTest {

  @Autowired
  TransactionController transactionController;

  @MockBean
  TransactionService transactionService;

  @BeforeEach
  void setUp() {
    mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();
  }

  @Test
  void testCreateNewTransactionInvalidBody() throws Exception {
    when(transactionService.createNewTransaction(any()))
        .thenReturn(new TransactionDto());
    MvcResult mvcResult =
        mockMvc
            .perform(MockMvcRequestBuilders.post("/transactions")
                         .content(mapToJson(new NewTransactionRequest()))
                         .contentType("application/json"))
            .andReturn();
    assertEquals(400, mvcResult.getResponse().getStatus());
  }

  @Test
  void testCreateNewTransactionValidRequestBody() throws Exception {
    when(transactionService.createNewTransaction(any()))
        .thenReturn(new TransactionDto());
    NewTransactionRequest newTransactionRequest = new NewTransactionRequest(
        TransactionStatus.cancel, 12.3, 34.3, "dsfsddf", UUID.randomUUID(),
        UUID.randomUUID(), TransactionType.buy);
    MvcResult mvcResult =
        mockMvc
            .perform(MockMvcRequestBuilders.post("/transactions")
                         .content(mapToJson(newTransactionRequest))
                         .contentType("application/json"))
            .andReturn();
    assertEquals(201, mvcResult.getResponse().getStatus());
  }

  @Test
  void testGetAllTransactions() throws Exception {
    when(transactionService.getAllTransactions(any()))
        .thenReturn(List.of(new TransactionDto()));
    MvcResult mvcResult =
        mockMvc.perform(MockMvcRequestBuilders.get("/transactions"))
            .andReturn();
    assertEquals(200, mvcResult.getResponse().getStatus());
  }
}
