package com.bc123.crypto.service;

import com.bc123.crypto.dto.CryptoDto;
import com.bc123.crypto.entity.Crypto;
import com.bc123.crypto.mapper.CryptoMapper;
import com.bc123.crypto.service.implementation.CryptoServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import com.bc123.crypto.repository.CryptoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CryptoServiceImplTest {

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Mock
    private CryptoRepository cryptoRepository;

    @Mock
    private CryptoMapper cryptoMapper;

    @InjectMocks
    private CryptoServiceImpl cryptoService;

    @Test
    void getAllCrypto() {

        CryptoDto mockCryptoDto1 = new CryptoDto(UUID.randomUUID(), "Bitcoin", "BTC","icon",  50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);
        CryptoDto mockCryptoDto2 = new CryptoDto(UUID.randomUUID(), "Ethereum", "ETH","icon",  3000.0, 0.03, 500000000.0, 200000.0, 115000000.0);
        CryptoDto mockCryptoDto3 = new CryptoDto(UUID.randomUUID(), "Ripple", "XRP","icon",  1.0, 0.01, 10000000.0, 10000.0, 45000000000.0);
        UUID id1 = mockCryptoDto1.getId();
        UUID id2 = mockCryptoDto2.getId();
        UUID id3 = mockCryptoDto3.getId();
        Crypto mockCrypto1 = new Crypto(id1, "Bitcoin", "BTC", "icon", 50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);
        Crypto mockCrypto2 = new Crypto(id2, "Ethereum", "ETH", "icon", 3000.0, 0.03, 500000000.0, 200000.0, 115000000.0);
        Crypto mockCrypto3 = new Crypto(id3, "Ripple", "XRP", "icon", 1.0, 0.01, 10000000.0, 10000.0, 45000000000.0);
        List<Crypto> mockCryptoList = Arrays.asList(mockCrypto1, mockCrypto2, mockCrypto3);

        when(cryptoRepository.findAll()).thenReturn(mockCryptoList);
        when(cryptoMapper.convertToGetCrypto(mockCrypto1)).thenReturn(mockCryptoDto1);
        when(cryptoMapper.convertToGetCrypto(mockCrypto2)).thenReturn(mockCryptoDto2);
        when(cryptoMapper.convertToGetCrypto(mockCrypto3)).thenReturn(mockCryptoDto3);

        List<CryptoDto> response = cryptoService.getAllCrypto();

        Assertions.assertThat(response)
                .hasSize(3)
                .containsExactlyInAnyOrder(mockCryptoDto1, mockCryptoDto2, mockCryptoDto3);
    }


    @Test
    void getCryptoById() {

        CryptoDto mockCryptoDto = new CryptoDto(UUID.randomUUID(), "Bitcoin", "BTC","icon",  50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);
        UUID id = mockCryptoDto.getId();
        Crypto mockCrypto = new Crypto(id, "Bitcoin", "BTC", "icon", 50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);

        when(cryptoRepository.findById(id)).thenReturn(Optional.of(mockCrypto));
        when(cryptoMapper.convertToGetCrypto(mockCrypto)).thenReturn(mockCryptoDto);

        CryptoDto response = cryptoService.getCryptoById(id);

        assertEquals("Bitcoin", response.getName());
        assertEquals("BTC", response.getSymbol());
        assertEquals("icon", response.getIcon());
        assertEquals(50000.0, response.getPrice());
        assertEquals(response, mockCryptoDto);
    }

    @Test
    void getCryptoById_notFound() {

        UUID id = UUID.randomUUID();
        when(cryptoRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> cryptoService.getCryptoById(id));

        verify(cryptoRepository).findById(id);
    }


}
