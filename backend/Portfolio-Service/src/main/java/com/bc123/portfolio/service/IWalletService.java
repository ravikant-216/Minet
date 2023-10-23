package com.bc123.portfolio.service;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.request.WalletRequest;

import java.util.List;
import java.util.UUID;

public interface IWalletService {
    WalletDto getById(UUID id);
    List<WalletDto> getAllByCryptoId(UUID cryptoId);
    List<WalletDto> getAllByUserId(UUID userId);
    WalletDto add(WalletRequest walletRequest);
    WalletDto update(UUID id,WalletRequest walletRequest);
    List<WalletDto> getByUserIdAndCryptoId(UUID userId, UUID cryptoId);
}
