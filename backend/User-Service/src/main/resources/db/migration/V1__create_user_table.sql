CREATE TABLE IF NOT EXISTS `minet`.`user` (
  `id` binary(16)  NOT NULL,
  `name` varchar(100)  NOT NULL,
  `email` varchar(100)  NOT NULL,
  `password` varchar(100)  NOT NULL,
  PRIMARY KEY (`id`)
);