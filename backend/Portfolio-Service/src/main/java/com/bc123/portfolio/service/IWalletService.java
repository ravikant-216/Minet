package com.bc123.portfolio.service;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.request.WalletRequest;

import java.util.List;
import java.util.UUID;

public interface IWalletService {
    WalletDto getById(UUID id);
    WalletDto add(WalletRequest walletRequest);
    WalletDto update(UUID id,WalletRequest walletRequest);
    List<WalletDto> getWallets(UUID cryptoId, UUID userId, String cryptoSymbol);
}
