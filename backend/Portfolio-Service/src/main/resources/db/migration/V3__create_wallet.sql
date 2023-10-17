CREATE TABLE IF NOT EXISTS `minet`.`wallet` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crypto_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_balance` decimal(65,30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wallet_user_id_fkey` (`user_id`),
  KEY `wallet_crypto_id_fkey` (`crypto_id`),
  CONSTRAINT `wallet_crypto_id_fkey` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wallet_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
