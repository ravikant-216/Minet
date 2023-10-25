package com.bc123.portfolio.repository;

import com.bc123.portfolio.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface WalletRepository extends JpaRepository<Wallet, UUID> {
    List<Wallet> findAllByCryptoId(UUID cryptoId);
    List<Wallet> findAllByUserId(UUID userId);
    List<Wallet> findAllByUserIdAndCryptoId(UUID userId, UUID cryptoId);

    List<Wallet> findAllByUserIdAndCryptoSymbol(UUID userId, String cryptoSymbol);
}
