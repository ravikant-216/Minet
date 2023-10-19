package com.bc123.transaction.repositories;

import com.bc123.transaction.entity.Transaction;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TransactionRepository
        extends JpaRepository<Transaction, UUID>,
        JpaSpecificationExecutor<Transaction> {
    List<Transaction> findAll(Specification<Transaction> specification);
}
