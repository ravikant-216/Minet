package com.bc123.portfolio.utils;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.dto.WatchlistDto;
import com.bc123.portfolio.entity.Wallet;
import com.bc123.portfolio.entity.Watchlist;
import com.bc123.portfolio.request.WalletRequest;
import com.bc123.portfolio.request.WatchlistRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Converter {
    private final ModelMapper modelMapper;

    @Autowired
    public Converter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public WatchlistDto watchListToDto(Watchlist watchlist){
        return modelMapper.map(watchlist, WatchlistDto.class);
    }

    public Watchlist watchListRequestToEntity(WatchlistRequest watchlistRequest){
        return modelMapper.map(watchlistRequest, Watchlist.class);
    }

    public Wallet walletRequestToEntity(WalletRequest walletRequest){
        return modelMapper.map(walletRequest, Wallet.class);
    }
    public WalletDto walletToDto(Wallet wallet){
        return modelMapper.map(wallet, WalletDto.class);
    }
}
