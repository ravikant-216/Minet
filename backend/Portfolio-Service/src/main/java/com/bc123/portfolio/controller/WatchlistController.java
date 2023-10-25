package com.bc123.portfolio.controller;

import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.exception.WatchlistException;
import com.bc123.portfolio.request.WatchlistRequest;
import com.bc123.portfolio.service.IWatchlistService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.bc123.portfolio.utils.Constant.ID;
import static com.bc123.portfolio.utils.Constant.WATCHLIST_BASE_URI;

@RestController
@Slf4j
@RequestMapping(WATCHLIST_BASE_URI)
public class WatchlistController {
    private final IWatchlistService watchlistService;

    @Autowired
    public WatchlistController(IWatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }

    @GetMapping(ID)
    public ResponseEntity<WatchlistDto> getById(@PathVariable UUID id){
        log.info("Get Watchlist By id: " + id);
        try {
            return ResponseEntity.ok(watchlistService.getById(id));
        }catch (Exception e){
            throw new WatchlistException(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<WatchlistDto>> getWatchlist(
            @RequestParam(name = "cryptoId", required = false) UUID cryptoId,
            @RequestParam(name = "userId", required = false) UUID userId
    ) {
        log.info("Get Watchlist with CryptoId: {} and UserId: {}", cryptoId, userId);
        try {
            return ResponseEntity.ok(watchlistService.getWatchlist(userId,cryptoId));
        } catch (Exception e) {
            throw new WatchlistException(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<WatchlistDto> add(@RequestBody WatchlistRequest watchlistRequest){
        log.info("Add Watchlist: " + watchlistRequest);
        try {
            return ResponseEntity.ok(watchlistService.add(watchlistRequest));
        }catch (Exception e){
            throw new WatchlistException(e.getMessage());
        }
    }
    @DeleteMapping(ID)
    public void deleteById(@PathVariable UUID id){
        log.info("Delete All Watchlist By Id: " + id);
        try {
            watchlistService.deleteById(id);
        }catch (Exception e){
            throw new WatchlistException(e.getMessage());
        }
    }
}
