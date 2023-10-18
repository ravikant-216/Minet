package com.bc123.crypto.repository;

import com.bc123.crypto.entity.Crypto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CryptoRepository extends JpaRepository<Crypto, UUID> {
}
