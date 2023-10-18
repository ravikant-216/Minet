CREATE TABLE IF NOT EXISTS `minet`.`transactions` (
  `id` binary(16)  NOT NULL,
  `date` datetime NOT NULL,
  `status` enum('success','pending','cancel')  NOT NULL,
  `price` decimal(65,3) NOT NULL,
  `quantity` decimal(65,3) NOT NULL,
  `description` varchar(191)  NOT NULL,
  `user_id` binary(16)  NOT NULL,
  `crypto_id` binary(16)  NOT NULL,
  `type` enum('buy','sold')  NOT NULL,
  PRIMARY KEY (`id`),
  KEY `transactions_user_id_fkey` (`user_id`),
  KEY `transactions_crypto_id_fkey` (`crypto_id`),
  CONSTRAINT `transactions_crypto_id_fkey` FOREIGN KEY (`crypto_id`) REFERENCES `crypto` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ;