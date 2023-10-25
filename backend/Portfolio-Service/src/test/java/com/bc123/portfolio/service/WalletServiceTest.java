package com.bc123.portfolio.service;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.entity.Crypto;
import com.bc123.portfolio.entity.User;
import com.bc123.portfolio.entity.Wallet;
import com.bc123.portfolio.exception.WalletException;
import com.bc123.portfolio.repository.CryptoRepository;
import com.bc123.portfolio.repository.UserRepository;
import com.bc123.portfolio.repository.WalletRepository;
import com.bc123.portfolio.request.WalletRequest;
import com.bc123.portfolio.service.impl.WalletServiceImpl;
import com.bc123.portfolio.utils.Converter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class WalletServiceTest {

    @InjectMocks
    private WalletServiceImpl walletService;

    @Mock
    private WalletRepository walletRepository;

    @Mock
    private Converter converter;

    @Mock
    private UserRepository userRepository;

    @Mock
    private CryptoRepository cryptoRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetById() {
        UUID walletId = UUID.randomUUID();
        Wallet wallet = new Wallet();
        WalletDto walletDto = new WalletDto();
        wallet.setId(walletId);
        walletDto.setId(walletId);
        when(walletRepository.findById(walletId)).thenReturn(Optional.of(wallet));
        when(converter.walletToDto(wallet)).thenReturn(walletDto);
        WalletDto result = walletService.getById(walletId);

        assertNotNull(result);
        assertEquals(walletId, result.getId());
    }

    @Test
    void testGetAllByCryptoId() {
        UUID cryptoId = UUID.randomUUID();
        List<Wallet> wallets = new ArrayList<>();
        when(walletRepository.findAllByCryptoId(cryptoId)).thenReturn(wallets);

        List<WalletDto> result = walletService.getWallets(cryptoId,null,null);

        assertNotNull(result);
    }
    @Test
    void testGetWalletsThrowsExceptionWithInvalidParameters() {
        UUID cryptoId = null;
        UUID userId = null;

        when(walletRepository.findAllByUserIdAndCryptoId(userId, cryptoId)).thenReturn(new ArrayList<>());
        when(walletRepository.findAllByCryptoId(cryptoId)).thenReturn(new ArrayList<>());
        when(walletRepository.findAllByUserId(userId)).thenReturn(new ArrayList<>());

        assertThrows(WalletException.class, () -> walletService.getWallets(cryptoId, userId,null));
    }

    @Test
    void testGetAllByUserId() {
        UUID userId = UUID.randomUUID();
        List<Wallet> wallets = new ArrayList<>();
        when(walletRepository.findAllByUserId(userId)).thenReturn(wallets);

        List<WalletDto> result = walletService.getWallets(null,userId,null);

        assertNotNull(result);
    }
    @Test
    void testGetByUserIdAndCryptoSymbol() {
        UUID userId = UUID.randomUUID();
        String cryptoSymbol = "USDC"; // Replace with the crypto symbol you want to test
        List<Wallet> wallets = new ArrayList<>();
        WalletDto walletDto = new WalletDto();

        when(walletRepository.findAllByUserIdAndCryptoSymbol(userId, cryptoSymbol)).thenReturn(wallets);
        when(converter.walletToDto(any())).thenReturn(walletDto);

        List<WalletDto> result = walletService.getWallets(null, userId, cryptoSymbol);

        assertNotNull(result);
        assertEquals(0, result.size());
    }

    @Test
    void testGetByUserIdAndCryptoSymbolThrowsException() {
        UUID userId = UUID.randomUUID();
        String cryptoSymbol = "USDC"; // Replace with the crypto symbol you want to test

        when(walletRepository.findAllByUserIdAndCryptoSymbol(userId, cryptoSymbol)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletService.getWallets(null, userId, cryptoSymbol));
    }

    @Test
    void testAdd() {
        UUID walletId = UUID.randomUUID();
        WalletRequest walletRequest = new WalletRequest();
        walletRequest.setId(walletId);
        User user = new User();
        Crypto crypto = new Crypto();
        Wallet wallet = new Wallet();
        wallet.setId(walletId);
        WalletDto walletDto = new WalletDto();
        walletDto.setId(walletId);

        when(userRepository.findById(walletRequest.getUserId())).thenReturn(Optional.of(user));
        when(cryptoRepository.findById(walletRequest.getCryptoId())).thenReturn(Optional.of(crypto));
        when(converter.walletRequestToEntity(walletRequest)).thenReturn(wallet);
        when(walletRepository.save(wallet)).thenReturn(wallet);
        when(converter.walletToDto(wallet)).thenReturn(walletDto);
        WalletDto result = walletService.add(walletRequest);

        assertNotNull(result);
    }

    @Test
    void testUpdate() {
        UUID walletId = UUID.randomUUID();
        WalletRequest walletRequest = new WalletRequest();
        User user = new User();
        Crypto crypto = new Crypto();
        Wallet wallet = new Wallet();

        when(walletRepository.findById(walletId)).thenReturn(Optional.of(wallet));
        when(userRepository.findById(walletRequest.getUserId())).thenReturn(Optional.of(user));
        when(cryptoRepository.findById(walletRequest.getCryptoId())).thenReturn(Optional.of(crypto));
        when(walletRepository.save(wallet)).thenReturn(wallet);
        when(converter.walletToDto(wallet)).thenReturn(new WalletDto());
        WalletDto result = walletService.update(walletId, walletRequest);

        assertNotNull(result);
    }
    @Test
    void testGetByIdThrowsException() {
        UUID walletId = UUID.randomUUID();
        when(walletRepository.findById(walletId)).thenReturn(null);

        assertThrows(WalletException.class, () -> walletService.getById(walletId));
    }

    @Test
    void testGetAllByCryptoIdThrowsException() {
        UUID cryptoId = UUID.randomUUID();
        when(walletRepository.findAllByCryptoId(cryptoId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletService.getWallets(cryptoId,null,null));
    }

    @Test
    void testGetAllByUserIdThrowsException() {
        UUID userId = UUID.randomUUID();
        when(walletRepository.findAllByUserId(userId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletService.getWallets(null,userId,null));
    }

    @Test
    void testAddThrowsException() {
        WalletRequest walletRequest = new WalletRequest();
        when(userRepository.findById(walletRequest.getUserId())).thenReturn(null);
        when(cryptoRepository.findById(walletRequest.getCryptoId())).thenReturn(null);

        assertThrows(WalletException.class, () -> walletService.add(walletRequest));
    }

    @Test
    void testUpdateThrowsException() {
        UUID walletId = UUID.randomUUID();
        WalletRequest walletRequest = new WalletRequest();
        when(walletRepository.findById(walletId)).thenReturn(null);
        when(userRepository.findById(walletRequest.getUserId())).thenReturn(null);
        when(cryptoRepository.findById(walletRequest.getCryptoId())).thenReturn(null);

        assertThrows(WalletException.class, () -> walletService.update(walletId, walletRequest));
    }
    @Test
    void testGetByUserIdAndCryptoId() {
        UUID userId = UUID.randomUUID();
        UUID cryptoId = UUID.randomUUID();
        List<Wallet> wallets = new ArrayList<>();
        WalletDto walletDto = new WalletDto();
        when(walletRepository.findAllByUserIdAndCryptoId(userId, cryptoId)).thenReturn(wallets);
        when(converter.walletToDto(any())).thenReturn(walletDto);

        List<WalletDto> result = walletService.getWallets(cryptoId, userId,null);

        assertNotNull(result);
        assertEquals(0, result.size());
    }
    @Test
    void testGetByUserIdAndCryptoIdThrowsException() {
        UUID userId = UUID.randomUUID();
        UUID cryptoId = UUID.randomUUID();
        when(walletRepository.findAllByUserIdAndCryptoId(userId, cryptoId)).thenThrow(new WalletException("Test WalletException"));

        assertThrows(WalletException.class, () -> walletService.getWallets(cryptoId, userId,null));
    }

}
