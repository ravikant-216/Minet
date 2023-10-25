package com.bc123.portfolio.controller;
import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.exception.WalletException;
import com.bc123.portfolio.request.WalletRequest;
import com.bc123.portfolio.service.impl.WalletServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class WalletControllerTest {

    @Mock
    private WalletServiceImpl walletService;

    @InjectMocks
    private WalletController walletController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(walletController).build();
    }

    @Test
    void testGetWalletById() throws Exception {
        UUID walletId = UUID.randomUUID();
        WalletDto walletDto = new WalletDto();
        walletDto.setId(walletId);

        when(walletService.getById(walletId)).thenReturn(walletDto);

        WalletDto response = walletController.getById(walletId).getBody();
        assertEquals(walletDto, response);
    }
    @Test
    void testGetWalletByIdThrowsException() {
        UUID walletId = UUID.randomUUID();
        when(walletService.getById(walletId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getById(walletId));
    }

    @Test
    void testGetWallets() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();
        WalletDto walletDto = new WalletDto();

        when(walletService.getWallets(cryptoId, userId,null)).thenReturn(Collections.singletonList(walletDto));

        ResponseEntity<List<WalletDto>> response = walletController.getWallets(cryptoId, userId,null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(Collections.singletonList(walletDto), response.getBody());
    }

    @Test
    void testGetWalletsException() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();

        when(walletService.getWallets(cryptoId, userId,null)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getWallets(cryptoId, userId,null));
    }

    @Test
    void testGetWalletsWithNullParameters() {
        WalletDto walletDto = new WalletDto();

        when(walletService.getWallets(null, null,null)).thenReturn(Collections.singletonList(walletDto));

        ResponseEntity<List<WalletDto>> response = walletController.getWallets(null, null,null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(Collections.singletonList(walletDto), response.getBody());
    }

    @Test
    void testAddWalletThrowsException() {
        WalletRequest request = new WalletRequest();
        when(walletService.add(request)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.add(request));
    }

    @Test
    void testUpdateWalletThrowsException() {
        UUID walletId = UUID.randomUUID();
        WalletRequest request = new WalletRequest();
        request.setId(walletId);
        when(walletService.update(walletId, request)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.update(request));
    }

    @Test
    void testGetWalletByUserId() throws Exception {
        UUID userId = UUID.randomUUID();
        WalletDto walletDto = new WalletDto();

        when(walletService.getWallets(null,userId,null)).thenReturn(Collections.singletonList(walletDto));

        List<WalletDto> response = walletController.getWallets(null,userId,null).getBody();
        assertEquals(Collections.singletonList(walletDto), response);
    }

    @Test
    void testAddWallet() throws Exception {
        WalletRequest request = new WalletRequest();
        WalletDto walletDto = new WalletDto();

        when(walletService.add(request)).thenReturn(walletDto);

        WalletDto response = walletController.add(request).getBody();
        assertEquals(walletDto, response);
    }

    @Test
    void testUpdateWallet() throws Exception {
        UUID walletId = UUID.randomUUID();
        WalletRequest request = new WalletRequest();
        WalletDto walletDto = new WalletDto();
        walletDto.setId(walletId);
        request.setId(walletId);

        when(walletService.update(walletId, request)).thenReturn(walletDto);

        WalletDto response = walletController.update(request).getBody();
        assertEquals(walletDto, response);
    }
    @Test
    void testGetWallets_ByCryptoSymbol() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();
        String cryptoSymbol = "BTC"; // Replace with the crypto symbol you want to test
        WalletDto walletDto = new WalletDto();

        when(walletService.getWallets(cryptoId, userId, cryptoSymbol)).thenReturn(Collections.singletonList(walletDto));

        ResponseEntity<List<WalletDto>> response = walletController.getWallets(cryptoId, userId, cryptoSymbol);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(Collections.singletonList(walletDto), response.getBody());
    }

    @Test
    void testGetWalletsException_ByCryptoSymbol() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();
        String cryptoSymbol = "BTC"; // Replace with the crypto symbol you want to test

        when(walletService.getWallets(cryptoId, userId, cryptoSymbol)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getWallets(cryptoId, userId, cryptoSymbol));
    }

    @Test
    void testGetWalletsByCryptoIdThrowsException() {
        UUID cryptoId = UUID.randomUUID();
        when(walletService.getWallets(cryptoId,null,null)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getWallets(cryptoId, null,null));
    }

}
