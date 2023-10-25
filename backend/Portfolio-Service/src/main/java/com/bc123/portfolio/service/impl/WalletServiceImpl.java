package com.bc123.portfolio.service.impl;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.entity.Crypto;
import com.bc123.portfolio.entity.User;
import com.bc123.portfolio.entity.Wallet;
import com.bc123.portfolio.exception.WalletException;
import com.bc123.portfolio.repository.CryptoRepository;
import com.bc123.portfolio.repository.UserRepository;
import com.bc123.portfolio.repository.WalletRepository;
import com.bc123.portfolio.request.WalletRequest;
import com.bc123.portfolio.service.IWalletService;
import com.bc123.portfolio.utils.Converter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static com.bc123.portfolio.utils.Constant.NOT_FOUND;

@Slf4j
@Service
public class WalletServiceImpl implements IWalletService {
    private final WalletRepository walletRepository;
    private final Converter converter;
    private final UserRepository userRepository;
    private final CryptoRepository cryptoRepository;

    @Autowired
    public WalletServiceImpl(WalletRepository walletRepository, Converter converter, CryptoRepository cryptoRepository,
            UserRepository userRepository) {
        this.walletRepository = walletRepository;
        this.converter = converter;
        this.userRepository = userRepository;
        this.cryptoRepository = cryptoRepository;
    }

    @Override
    public WalletDto getById(UUID id) {
        log.info("Get All wallet with ID: " + id);
        try {
            Wallet wallet = walletRepository.findById(id).orElseThrow(() -> new WalletException(id + NOT_FOUND));
            return converter.walletToDto(wallet);
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public List<WalletDto> getWallets(UUID cryptoId, UUID userId, String cryptoSymbol) {
        log.info("Get Wallets with CryptoId: {}, UserId: {}, CryptoSymbol: {}", cryptoId, userId, cryptoSymbol);
        try {
            if (cryptoId != null && userId != null) {
                List<Wallet> wallets = walletRepository.findAllByUserIdAndCryptoId(userId, cryptoId);
                return wallets.stream().map(converter::walletToDto).toList();
            } else if (userId != null && cryptoSymbol != null) {
                // Fetch wallets by userId and cryptoSymbol
                List<Wallet> wallets = walletRepository.findAllByUserIdAndCryptoSymbol(userId, cryptoSymbol);
                return wallets.stream().map(converter::walletToDto).toList();
            } else if (cryptoId != null) {
                List<Wallet> wallets = walletRepository.findAllByCryptoId(cryptoId);
                return wallets.stream().map(converter::walletToDto).toList();
            } else if (userId != null) {
                List<Wallet> wallets = walletRepository.findAllByUserId(userId);
                return wallets.stream().map(converter::walletToDto).toList();
            } else {
                throw new WalletException("Invalid parameters");
            }
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public WalletDto add(WalletRequest walletRequest) {
        log.info("Add wallet: " + walletRequest);
        try {
            User user = userRepository.findById(walletRequest.getUserId())
                    .orElseThrow(() -> new WalletException("User not found"));
            Crypto crypto = cryptoRepository.findById(walletRequest.getCryptoId())
                    .orElseThrow(() -> new WalletException("Crypto not found"));

            Wallet wallet = converter.walletRequestToEntity(walletRequest);
            wallet.setUser(user);
            wallet.setCrypto(crypto);
            wallet.setTotalBalance(walletRequest.getTotalBalance());
            Wallet saveWallet = walletRepository.save(wallet);
            return converter.walletToDto(saveWallet);
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public WalletDto update(UUID id, WalletRequest walletRequest) {
        log.info("Update wallet with ID: " + id + " and wallet: " + walletRequest);
        try {
            Wallet wallet = walletRepository.findById(id)
                    .orElseThrow(() -> new WalletException(id + " not found"));
            wallet.setTotalBalance(walletRequest.getTotalBalance());

            wallet = walletRepository.save(wallet);
            return converter.walletToDto(wallet);
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }
}
