CREATE TABLE IF NOT EXISTS `minet`.`crypto` (
  `id` binary(16) NOT NULL,
  `name` varchar(30)  NOT NULL,
  `symbol` varchar(10)  NOT NULL,
  `icon` longtext  NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `change` decimal(15,2) NOT NULL,
  `market_cap` decimal(30,2) NOT NULL,
  `volume` decimal(15,3) NOT NULL,
  `circulating_supply` decimal(30,3) NOT NULL,
  PRIMARY KEY (`id`)
);