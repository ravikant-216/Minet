package com.bc123.portfolio.controller;
import com.bc123.portfolio.controller.WatchlistController;
import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.exception.WatchlistException;
import com.bc123.portfolio.request.WatchlistRequest;
import com.bc123.portfolio.service.IWatchlistService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.UUID;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class WatchlistControllerTest {

    @Mock
    private IWatchlistService watchlistService;

    @InjectMocks
    private WatchlistController watchlistController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetWatchlistById() {
        UUID watchlistId = UUID.randomUUID();
        WatchlistDto watchlistDto = new WatchlistDto();
        watchlistDto.setId(watchlistId);

        when(watchlistService.getById(watchlistId)).thenReturn(watchlistDto);

        WatchlistDto response = watchlistController.getById(watchlistId).getBody();
        assertEquals(watchlistDto, response);
    }

//    @Test
//    void testGetWatchlistByCryptoId() {
//        UUID cryptoId = UUID.randomUUID();
//        WatchlistDto watchlistDto = new WatchlistDto();
//
//        when(watchlistService.getAllByCryptoId(cryptoId)).thenReturn(Collections.singletonList(watchlistDto));
//
//        List<WatchlistDto> response = watchlistController.getAllByCryptoId(cryptoId).getBody();
//        assertEquals(Collections.singletonList(watchlistDto), response);
//    }

//    @Test
//    void testGetWatchlistByUserId() {
//        UUID userId = UUID.randomUUID();
//        WatchlistDto watchlistDto = new WatchlistDto();
//
//        when(watchlistService.getAllByUserId(userId)).thenReturn(Collections.singletonList(watchlistDto));
//
//        List<WatchlistDto> response = watchlistController.getAllByUserId(userId).getBody();
//        assertEquals(Collections.singletonList(watchlistDto), response);
//    }

    @Test
    void testAddWatchlist() {
        WatchlistRequest request = new WatchlistRequest();
        WatchlistDto watchlistDto = new WatchlistDto();

        when(watchlistService.add(request)).thenReturn(watchlistDto);

        WatchlistDto response = watchlistController.add(request).getBody();
        assertEquals(watchlistDto, response);
    }

    @Test
    void testDeleteWatchlist() {
        UUID watchlistId = UUID.randomUUID();

        watchlistController.deleteById(watchlistId);

        verify(watchlistService, times(1)).deleteById(watchlistId);
    }

    @Test
    void testGetWatchlistByIdThrowsException() {
        UUID watchlistId = UUID.randomUUID();
        when(watchlistService.getById(watchlistId)).thenThrow(new WatchlistException("Test WatchlistException"));

        assertThrows(WatchlistException.class, () -> watchlistController.getById(watchlistId));
    }

//    @Test
//    void testGetWatchlistByCryptoIdThrowsException() {
//        UUID cryptoId = UUID.randomUUID();
//        when(watchlistService.getAllByCryptoId(cryptoId)).thenThrow(new WatchlistException("Test WatchlistException"));
//
//        assertThrows(WatchlistException.class, () -> watchlistController.getAllByCryptoId(cryptoId));
//    }
//
//    @Test
//    void testGetWatchlistByUserIdThrowsException() {
//        UUID userId = UUID.randomUUID();
//        when(watchlistService.getAllByUserId(userId)).thenThrow(new WatchlistException("Test WatchlistException"));
//
//        assertThrows(WatchlistException.class, () -> watchlistController.getAllByUserId(userId));
//    }

    @Test
    void testAddWatchlistThrowsException() {
        WatchlistRequest request = new WatchlistRequest();
        when(watchlistService.add(request)).thenThrow(new WatchlistException("Test WatchlistException"));

        assertThrows(WatchlistException.class, () -> watchlistController.add(request));
    }

    @Test
    void testDeleteWatchlistThrowsException() {
        UUID watchlistId = UUID.randomUUID();
        doThrow(new WatchlistException("Test WatchlistException")).when(watchlistService).deleteById(watchlistId);

        assertThrows(WatchlistException.class, () -> watchlistController.deleteById(watchlistId));
    }
}
