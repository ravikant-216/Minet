package com.bc123.portfolio.controller;
import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.exception.WatchlistException;
import com.bc123.portfolio.request.WatchlistRequest;
import com.bc123.portfolio.service.IWatchlistService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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
    void testGetWatchlist() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();
        List<WatchlistDto> watchlistDtos = new ArrayList<>();
        WatchlistDto watchlistDto = new WatchlistDto();
        watchlistDtos.add(watchlistDto);

        when(watchlistService.getWatchlist(cryptoId, userId)).thenReturn(watchlistDtos);

        ResponseEntity<List<WatchlistDto>> response = watchlistController.getWatchlist(cryptoId, userId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(watchlistDtos, response.getBody());
    }

    @Test
    void testGetWatchlistException() {
        UUID cryptoId = UUID.randomUUID();
        UUID userId = UUID.randomUUID();

        when(watchlistService.getWatchlist(cryptoId, userId)).thenThrow(new WatchlistException("Test WatchlistException"));

        assertThrows(WatchlistException.class, () -> watchlistController.getWatchlist(cryptoId, userId));
    }

    @Test
    void testGetWatchlistWithNullParameters() {
        List<WatchlistDto> watchlistDtos = new ArrayList<>();

        when(watchlistService.getWatchlist(null, null)).thenReturn(watchlistDtos);

        ResponseEntity<List<WatchlistDto>> response = watchlistController.getWatchlist(null, null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(watchlistDtos, response.getBody());
    }
    @Test
    void testGetWatchlistByIdThrowsException() {
        UUID watchlistId = UUID.randomUUID();
        when(watchlistService.getById(watchlistId)).thenThrow(new WatchlistException("Test WatchlistException"));

        assertThrows(WatchlistException.class, () -> watchlistController.getById(watchlistId));
    }

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
