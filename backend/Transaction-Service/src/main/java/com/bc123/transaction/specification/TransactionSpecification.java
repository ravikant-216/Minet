package com.bc123.transaction.specification;

import com.bc123.transaction.entity.Transaction;
import java.util.Map;
import org.springframework.data.jpa.domain.Specification;

public interface TransactionSpecification {
  Specification<Transaction> withQueryParams(Map<String, String> queryParams);
}
