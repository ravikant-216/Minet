CREATE TABLE IF NOT EXISTS `minet`.`watchlist` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `crypto_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watchlist_crypto_id_fkey` (`crypto_id`),
  KEY `watchlist_user_id_fkey` (`user_id`),
  CONSTRAINT `watchlist_crypto_id_fkey` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`) ON DELETE CASCADE,
  CONSTRAINT `watchlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
