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
    void testGetWalletByCryptoId() throws Exception {
        UUID cryptoId = UUID.randomUUID();
        WalletDto walletDto = new WalletDto();

        when(walletService.getAllByCryptoId(cryptoId)).thenReturn(Collections.singletonList(walletDto));

        List<WalletDto> response = walletController.getWallets(cryptoId,null).getBody();
        assertEquals(Collections.singletonList(walletDto), response);
    }
    @Test
    void testGetWalletByIdThrowsException() {
        UUID walletId = UUID.randomUUID();
        when(walletService.getById(walletId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getById(walletId));
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

        when(walletService.getAllByUserId(userId)).thenReturn(Collections.singletonList(walletDto));

        List<WalletDto> response = walletController.getWallets(null,userId).getBody();
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
    void testGetWalletsByCryptoIdThrowsException() {
        UUID cryptoId = UUID.randomUUID();
        when(walletService.getAllByCryptoId(cryptoId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getWallets(cryptoId, null));
    }

    @Test
    void testGetWalletsByUserIdAndCryptoId() throws Exception {
        UUID userId = UUID.randomUUID();
        UUID cryptoId = UUID.randomUUID();
        WalletDto walletDto = new WalletDto();

        when(walletService.getByUserIdAndCryptoId(userId, cryptoId)).thenReturn(Collections.singletonList(walletDto));

        List<WalletDto> response = walletController.getWallets(cryptoId, userId).getBody();
        assertEquals(Collections.singletonList(walletDto), response);
    }

    @Test
    void testGetWalletsByUserIdAndCryptoIdThrowsException() {
        UUID userId = UUID.randomUUID();
        UUID cryptoId = UUID.randomUUID();
        when(walletService.getByUserIdAndCryptoId(userId, cryptoId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletController.getWallets(cryptoId, userId));
    }
}
