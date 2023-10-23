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

import java.time.LocalDateTime;
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
    public WalletServiceImpl(WalletRepository walletRepository, Converter converter, CryptoRepository cryptoRepository, UserRepository userRepository) {
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
        } catch (Exception e){
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public List<WalletDto> getAllByCryptoId(UUID cryptoId) {
        log.info("Get All wallet with crypto ID: " + cryptoId);
        try {
            return walletRepository.findAllByCryptoId(cryptoId).stream().map(converter::walletToDto).toList();
        }catch (Exception exc){
            throw new WalletException(exc.getMessage());
        }
    }

    @Override
    public List<WalletDto> getAllByUserId(UUID userId) {
        log.info("Get All wallet with user ID: " + userId);
        try {
            return walletRepository.findAllByUserId(userId).stream().map(converter::walletToDto).toList();
        } catch (Exception e){
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
        }catch (Exception e){
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public WalletDto update(UUID id, WalletRequest walletRequest) {
        log.info("Update wallet with ID: " + id + " and wallet: "+walletRequest);
        try {
            Wallet wallet = walletRepository.findById(id)
                    .orElseThrow(() -> new WalletException(id + " not found"));

            User user = userRepository.findById(walletRequest.getUserId())
                    .orElseThrow(() -> new WalletException("User not found"));
            Crypto crypto = cryptoRepository.findById(walletRequest.getCryptoId())
                    .orElseThrow(() -> new WalletException("Crypto not found"));

            wallet.setUser(user);
            wallet.setCrypto(crypto);
            wallet.setTotalBalance(walletRequest.getTotalBalance());

            wallet = walletRepository.save(wallet);
            return converter.walletToDto(wallet);
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }

    @Override
    public List<WalletDto> getByUserIdAndCryptoId(UUID userId, UUID cryptoId) {
        try {
            log.info("Get Wallet by UserId: {} and CryptoId: {}", userId, cryptoId);
            return walletRepository.findAllByUserIdAndCryptoId(userId,cryptoId)
                    .stream().map(converter::walletToDto).toList();
        }catch (Exception e){
            throw new WalletException(e.getMessage());
        }
    }

}
