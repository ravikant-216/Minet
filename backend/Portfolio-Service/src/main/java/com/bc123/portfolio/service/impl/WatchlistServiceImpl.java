package com.bc123.portfolio.service.impl;

import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.entity.Crypto;
import com.bc123.portfolio.entity.User;
import com.bc123.portfolio.entity.Watchlist;
import com.bc123.portfolio.exception.ExceptionResponse;
import com.bc123.portfolio.exception.WatchlistException;
import com.bc123.portfolio.repository.CryptoRepository;
import com.bc123.portfolio.repository.UserRepository;
import com.bc123.portfolio.repository.WatchlistRepository;
import com.bc123.portfolio.request.WatchlistRequest;
import com.bc123.portfolio.service.IWatchlistService;
import com.bc123.portfolio.utils.Converter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static com.bc123.portfolio.utils.Constant.NOT_FOUND;

@Service
@Slf4j
public class WatchlistServiceImpl implements IWatchlistService {
    private final WatchlistRepository watchlistRepository;
    private final Converter converter;
    private final UserRepository userRepository;
    private final CryptoRepository cryptoRepository;
    @Autowired
    public WatchlistServiceImpl(WatchlistRepository watchlistRepository, UserRepository userRepository, CryptoRepository cryptoRepository, Converter converter){
        this.watchlistRepository = watchlistRepository;
        this.converter = converter;
        this.userRepository = userRepository;
        this.cryptoRepository = cryptoRepository;
    }

    @Override
    public WatchlistDto getById(UUID id) {
        log.info("Get All watchlist by ID: " + id);
        try {
            return converter.watchListToDto(watchlistRepository.findById(id).orElseThrow(() -> new WatchlistException(id + NOT_FOUND)));
        } catch (Exception e) {
            throw new WatchlistException(e.getMessage());
        }
    }

    @Override
    public List<WatchlistDto> getAllByCryptoId(UUID cryptoId) {
        log.info("Get All watchlist with crypto ID: " + cryptoId);
        try {
            List<Watchlist> watchlist = watchlistRepository.findAllByCryptoId(cryptoId);
            return watchlist.stream().map(converter::watchListToDto).toList();
        } catch (Exception e){
            throw new WatchlistException("Error getting Watchlist by CryptoId");
        }
    }

    @Override
    public List<WatchlistDto> getAllByUserId(UUID userId) {
        log.info("Get All watchlist with user ID: " + userId);
        try {
            List<Watchlist> watchlist = watchlistRepository.findAllByUserId(userId);
            return watchlist.stream().map(converter::watchListToDto).toList();
        } catch (Exception e){
            throw new WatchlistException("Error getting Watchlist by userId");
        }
    }

    @Override
    public WatchlistDto add(WatchlistRequest watchlistRequest) {
        log.info("Inside add() method in service layer of watchlist");
        log.info("Adding Watchlist: " + watchlistRequest);
        try {
            User user = userRepository
                    .findById(watchlistRequest.getUserId())
                    .orElseThrow(()->new WatchlistException("User Not Found"));
            Crypto crypto = cryptoRepository
                    .findById(watchlistRequest.getCryptoId())
                    .orElseThrow(()->new WatchlistException("Crypto not found"));
            Watchlist watchlist = converter.watchListRequestToEntity(watchlistRequest);
            watchlist.setCrypto(crypto);
            watchlist.setUser(user);
            Watchlist savedWatchlist = watchlistRepository.save(watchlist);
            return converter.watchListToDto(savedWatchlist);
        } catch (Exception e) {
            throw new WatchlistException("Error creating watchlist");
        }
    }

    @Override
    public void deleteById(UUID id) {
        log.info("Inside deleteById() method in service layer of watchlist");
        log.info("Deleting watchlist with ID: " + id);
        try {
            Optional<Watchlist> watchlist = watchlistRepository.findById(id);
            if(watchlist.isPresent()) {
                watchlistRepository.deleteById(id);
            } else {
                throw new WatchlistException(id + NOT_FOUND);
            }
        } catch (Exception e){
            throw new WatchlistException("Error deleting watchlist");
        }
    }
}
