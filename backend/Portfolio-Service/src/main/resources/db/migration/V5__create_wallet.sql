CREATE TABLE IF NOT EXISTS `minet`.`wallet` (
  `id` binary(16)  NOT NULL,
  `user_id` binary(16)  NOT NULL,
  `crypto_id` binary(16)  NOT NULL,
  `total_balance` decimal(65,3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wallet_user_id_fkey` (`user_id`),
  KEY `wallet_crypto_id_fkey` (`crypto_id`),
  CONSTRAINT `wallet_crypto_id_fkey` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wallet_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ;
