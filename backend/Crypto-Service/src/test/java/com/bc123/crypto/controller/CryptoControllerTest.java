package com.bc123.crypto.controller;

import com.bc123.crypto.dto.CryptoDto;
import com.bc123.crypto.service.ICryptoService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CryptoControllerTest {

    @Mock
    private ICryptoService cryptoService;

    @InjectMocks
    private CryptoController cryptoController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCrypto() {

        CryptoDto mockCrypto1 = new CryptoDto(UUID.randomUUID(), "Bitcoin", "BTC","icon",  50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);
        CryptoDto mockCrypto2 = new CryptoDto(UUID.randomUUID(), "Ethereum", "ETH","icon",  3000.0, 0.03, 500000000.0, 200000.0, 115000000.0);
        CryptoDto mockCrypto3 = new CryptoDto(UUID.randomUUID(), "Ripple", "XRP","icon",  1.0, 0.01, 10000000.0, 10000.0, 45000000000.0);
        List<CryptoDto> mockList = Arrays.asList(mockCrypto1, mockCrypto2, mockCrypto3);

        when(cryptoService.getAllCrypto()).thenReturn(mockList);

        ResponseEntity<List<CryptoDto>> response = cryptoController.getAllCrypto();

        Assertions.assertThat(response.getBody())
                .hasSize(3)
                .containsExactlyInAnyOrder(mockCrypto1, mockCrypto2, mockCrypto3);

        Assertions.assertThat(response.getBody().get(0))
                .hasFieldOrPropertyWithValue("id", mockCrypto1.getId())
                .hasFieldOrPropertyWithValue("name", "Bitcoin")
                .hasFieldOrPropertyWithValue("symbol", "BTC")
                .hasFieldOrPropertyWithValue("icon", "icon")
                .hasFieldOrPropertyWithValue("price", 50000.0)
                .hasFieldOrPropertyWithValue("change", 0.02)
                .hasFieldOrPropertyWithValue("marketCap", 1000000000.0)
                .hasFieldOrPropertyWithValue("volume", 500000.0)
                .hasFieldOrPropertyWithValue("circulatingSupply", 21000000.0);

        Assertions.assertThat(response.getBody().get(1))
                .hasFieldOrPropertyWithValue("id", mockCrypto2.getId())
                .hasFieldOrPropertyWithValue("name", "Ethereum")
                .hasFieldOrPropertyWithValue("symbol", "ETH")
                .hasFieldOrPropertyWithValue("icon", "icon")
                .hasFieldOrPropertyWithValue("price", 3000.0)
                .hasFieldOrPropertyWithValue("change", 0.03)
                .hasFieldOrPropertyWithValue("marketCap", 500000000.0)
                .hasFieldOrPropertyWithValue("volume", 200000.0)
                .hasFieldOrPropertyWithValue("circulatingSupply", 115000000.0);

        Assertions.assertThat(response.getBody().get(2))
                .hasFieldOrPropertyWithValue("id", mockCrypto3.getId())
                .hasFieldOrPropertyWithValue("name", "Ripple")
                .hasFieldOrPropertyWithValue("symbol", "XRP")
                .hasFieldOrPropertyWithValue("icon", "icon")
                .hasFieldOrPropertyWithValue("price", 1.0)
                .hasFieldOrPropertyWithValue("change", 0.01)
                .hasFieldOrPropertyWithValue("marketCap", 10000000.0)
                .hasFieldOrPropertyWithValue("volume", 10000.0)
                .hasFieldOrPropertyWithValue("circulatingSupply", 45000000000.0);
    }



    @Test
    void getCryptoById() {

        CryptoDto mockCrypto = new CryptoDto(UUID.randomUUID(), "Bitcoin", "BTC","icon",  50000.0, 0.02, 1000000000.0, 500000.0, 21000000.0);

        when(cryptoService.getCryptoById(mockCrypto.getId())).thenReturn(mockCrypto);

        ResponseEntity<CryptoDto> response = cryptoController.getCryptoById(mockCrypto.getId());

        assertEquals(response.getBody(), mockCrypto);
        assertEquals("Bitcoin", response.getBody().getName());
        assertEquals("BTC", response.getBody().getSymbol());
        assertEquals("icon", response.getBody().getIcon());
        assertEquals(50000.0, response.getBody().getPrice());
        assertEquals(0.02, response.getBody().getChange());
        assertEquals(1000000000.0, response.getBody().getMarketCap());
        assertEquals(500000.0, response.getBody().getVolume());
        assertEquals(21000000.0, response.getBody().getCirculatingSupply());

    }

}
