package com.bc123.portfolio.repository;

import java.util.UUID;

import com.bc123.portfolio.entity.Crypto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CryptoRepository extends JpaRepository<Crypto, UUID> {
}
