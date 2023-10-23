package com.bc123.portfolio.service;

import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.entity.Crypto;
import com.bc123.portfolio.entity.User;
import com.bc123.portfolio.entity.Watchlist;
import com.bc123.portfolio.exception.WatchlistException;
import com.bc123.portfolio.repository.CryptoRepository;
import com.bc123.portfolio.repository.UserRepository;
import com.bc123.portfolio.repository.WatchlistRepository;
import com.bc123.portfolio.request.WatchlistRequest;
import com.bc123.portfolio.service.impl.WatchlistServiceImpl;
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
 class WatchlistServiceTest {

    @InjectMocks
    private WatchlistServiceImpl watchlistService;

    @Mock
    private WatchlistRepository watchlistRepository;

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
        UUID watchlistId = UUID.randomUUID();
        Watchlist watchlist = new Watchlist();
        when(watchlistRepository.findById(watchlistId)).thenReturn(Optional.of(watchlist));
        when(converter.watchListToDto(watchlist)).thenReturn(new WatchlistDto());
        WatchlistDto result = watchlistService.getById(watchlistId);

        assertNotNull(result);
    }

    @Test
    void testGetAllByCryptoId() {
        UUID cryptoId = UUID.randomUUID();
        List<Watchlist> watchlists = new ArrayList<>();
        when(watchlistRepository.findAllByCryptoId(cryptoId)).thenReturn(watchlists);

        List<WatchlistDto> result = watchlistService.getAllByCryptoId(cryptoId);

        assertNotNull(result);
    }

    @Test
    void testGetAllByUserId() {
        UUID userId = UUID.randomUUID();
        List<Watchlist> watchlists = new ArrayList<>();
        when(watchlistRepository.findAllByUserId(userId)).thenReturn(watchlists);

        List<WatchlistDto> result = watchlistService.getAllByUserId(userId);

        assertNotNull(result);
    }

    @Test
    void testAdd() {
        WatchlistRequest watchlistRequest = new WatchlistRequest();
        User user = new User();
        Crypto crypto = new Crypto();
        Watchlist watchlist = new Watchlist();

        when(userRepository.findById(watchlistRequest.getUserId())).thenReturn(Optional.of(user));
        when(cryptoRepository.findById(watchlistRequest.getCryptoId())).thenReturn(Optional.of(crypto));
        when(converter.watchListRequestToEntity(watchlistRequest)).thenReturn(watchlist);
        when(watchlistRepository.save(watchlist)).thenReturn(watchlist);
        when(converter.watchListToDto(watchlist)).thenReturn(new WatchlistDto());

        WatchlistDto result = watchlistService.add(watchlistRequest);

        assertNotNull(result);
    }

    @Test
    void testDeleteById() {
        UUID watchlistId = UUID.randomUUID();
        Watchlist watchlist = new Watchlist();

        when(watchlistRepository.findById(watchlistId)).thenReturn(Optional.of(watchlist));
        doNothing().when(watchlistRepository).deleteById(watchlistId);

        watchlistService.deleteById(watchlistId);

        verify(watchlistRepository, times(1)).deleteById(watchlistId);
    }
     @Test
     void testGetByIdThrowsException() {
         UUID watchlistId = UUID.randomUUID();
         when(watchlistRepository.findById(watchlistId)).thenReturn(null);

         assertThrows(WatchlistException.class, () -> watchlistService.getById(watchlistId));
     }

     @Test
     void testGetAllByCryptoIdThrowsException() {
         UUID cryptoId = UUID.randomUUID();
         when(watchlistRepository.findAllByCryptoId(cryptoId)).thenThrow(new WatchlistException("Test WatchlistException"));

         assertThrows(WatchlistException.class, () -> watchlistService.getAllByCryptoId(cryptoId));
     }

     @Test
     void testGetAllByUserIdThrowsException() {
         UUID userId = UUID.randomUUID();
         when(watchlistRepository.findAllByUserId(userId)).thenThrow(new WatchlistException("Test WatchlistException"));

         assertThrows(WatchlistException.class, () -> watchlistService.getAllByUserId(userId));
     }

     @Test
     void testAddThrowsException() {
         WatchlistRequest watchlistRequest = new WatchlistRequest();
         when(userRepository.findById(watchlistRequest.getUserId())).thenReturn(null);
         when(cryptoRepository.findById(watchlistRequest.getCryptoId())).thenReturn(null);

         assertThrows(WatchlistException.class, () -> watchlistService.add(watchlistRequest));
     }

     @Test
     void testDeleteByIdThrowsException() {
         UUID watchlistId = UUID.randomUUID();
         when(watchlistRepository.findById(watchlistId)).thenReturn(null);

         assertThrows(WatchlistException.class, () -> watchlistService.deleteById(watchlistId));
     }
}
