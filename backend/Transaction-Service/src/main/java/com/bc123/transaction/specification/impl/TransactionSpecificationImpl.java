package com.bc123.transaction.specification.impl;

import com.bc123.transaction.entity.Transaction;
import com.bc123.transaction.specification.TransactionSpecification;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import java.util.Map;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class TransactionSpecificationImpl implements TransactionSpecification {
  public Specification<Transaction> withQueryParams(Map<String, String> queryParams) {
    return (Root<Transaction> root, CriteriaQuery<?> query,
        CriteriaBuilder criteriaBuilder) -> {
      Predicate predicate = criteriaBuilder.conjunction();

      String cryptoId = queryParams.getOrDefault("cryptoId", "");

      if (!cryptoId.isEmpty()) {
        predicate = criteriaBuilder.and(
            predicate, criteriaBuilder.equal(criteriaBuilder.function(
                "HEX", String.class,
                root.get("crypto").get("id")),
                cryptoId.replace("-", "")));
      }

      String userId = queryParams.getOrDefault("userId", "");

      if (!userId.isEmpty()) {
        predicate = criteriaBuilder.and(
            predicate, criteriaBuilder.equal(
                criteriaBuilder.function("HEX", String.class,
                    root.get("user").get("id")),
                userId.replace("-", "")));
      }

      String cryptoSign = queryParams.getOrDefault("cryptoSymbol", "");

      if (cryptoSign != null && !cryptoSign.isEmpty()) {
        predicate = criteriaBuilder.and(
            predicate, criteriaBuilder.equal(root.get("crypto").get("symbol"),
                cryptoSign));
      }
      return predicate;
    };
  }
}
