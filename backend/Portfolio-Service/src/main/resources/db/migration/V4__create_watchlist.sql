CREATE TABLE IF NOT EXISTS `minet`.`watchlist` (
  `id` binary(16)  NOT NULL,
  `crypto_id` binary(16)  NOT NULL,
  `user_id` binary(16)  NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watchlist_crypto_id_fkey` (`crypto_id`),
  KEY `watchlist_user_id_fkey` (`user_id`),
  CONSTRAINT `watchlist_crypto_id_fkey` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `watchlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ;