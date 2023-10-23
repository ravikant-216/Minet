package com.bc123.portfolio.repository;

import com.bc123.portfolio.entity.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist, UUID> {
    List<Watchlist> findAllByCryptoId(UUID cryptoId);
    List<Watchlist> findAllByUserId(UUID userId);
}
