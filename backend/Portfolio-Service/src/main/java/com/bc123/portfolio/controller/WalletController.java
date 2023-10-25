package com.bc123.portfolio.controller;

import com.bc123.portfolio.dto.WalletDto;
import com.bc123.portfolio.exception.WalletException;
import com.bc123.portfolio.request.WalletRequest;
import com.bc123.portfolio.service.impl.WalletServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static com.bc123.portfolio.utils.Constant.ID;
import static com.bc123.portfolio.utils.Constant.WALLET_BASE_URI;

@RestController
@Slf4j
@RequestMapping(WALLET_BASE_URI)
public class WalletController {
    private final WalletServiceImpl walletService;

    @Autowired
    public WalletController(WalletServiceImpl walletService) {
        this.walletService = walletService;
    }
    @GetMapping(ID)
    public ResponseEntity<WalletDto> getById(@PathVariable UUID id) {
        log.info("Get Wallet By Id: " + id);
        try {
            return ResponseEntity.ok(walletService.getById(id));
        }catch (Exception e){
            throw new WalletException(e.getMessage());
        }
    }
    @GetMapping
    public ResponseEntity<List<WalletDto>> getWallets(
            @RequestParam(name = "cryptoId", required = false) UUID cryptoId,
            @RequestParam(name = "userId", required = false) UUID userId,
            @RequestParam(name = "cryptoSymbol", required = false) String cryptoSymbol
    ) {
        log.info("Get Wallets with CryptoId: {}, UserId: {}, CryptoSymbol: {}", cryptoId, userId, cryptoSymbol);
        try {
            return ResponseEntity.ok(walletService.getWallets(cryptoId, userId, cryptoSymbol));
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<WalletDto> add(@RequestBody WalletRequest walletRequest){
        log.info("Add Wallet: " + walletRequest);
        try {
            return ResponseEntity.ok(walletService.add(walletRequest));
        }catch (Exception e){
            throw new WalletException(e.getMessage());
        }
    }
    @PatchMapping
    public ResponseEntity<WalletDto> update(@RequestBody WalletRequest walletRequest) {
        UUID id = walletRequest.getId();
        log.info("Update Wallet with id: " + id + " and wallet: " + walletRequest);
        try {
            return ResponseEntity.ok(walletService.update(id, walletRequest));
        } catch (Exception e) {
            throw new WalletException(e.getMessage());
        }
    }
}
