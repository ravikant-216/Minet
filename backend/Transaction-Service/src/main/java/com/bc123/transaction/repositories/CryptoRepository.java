package com.bc123.transaction.repositories;

import com.bc123.transaction.entity.Crypto;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CryptoRepository extends JpaRepository<Crypto, UUID> {
}
