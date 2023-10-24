package com.bc123.portfolio.service;

import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.request.WatchlistRequest;

import java.util.List;
import java.util.UUID;

public interface IWatchlistService {
    WatchlistDto getById(UUID id);
    List<WatchlistDto> getWatchlist(UUID cryptoId,UUID userId);
    WatchlistDto add(WatchlistRequest watchlistRequest);
    void deleteById(UUID id);
}
