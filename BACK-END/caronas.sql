-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 19-Dez-2022 às 21:19
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `caronas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `postcars`
--

DROP TABLE IF EXISTS `postcars`;
CREATE TABLE IF NOT EXISTS `postcars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `veiculo` varchar(255) DEFAULT NULL,
  `vagas` int(11) DEFAULT NULL,
  `estacionamento` varchar(255) DEFAULT NULL,
  `destino` varchar(255) DEFAULT NULL,
  `userpRa` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `flag` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `horario` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `postcars`
--

INSERT INTO `postcars` (`id`, `veiculo`, `vagas`, `estacionamento`, `destino`, `userpRa`, `createdAt`, `updatedAt`, `flag`, `UserId`, `horario`) VALUES
(3, 'carro', 0, 'A', 'centro', 0, '2022-10-15 02:55:41', '2022-11-14 15:26:16', 1, NULL, NULL),
(6, 'carro', 3, 'Em frente à E. E. Afonso Pena', 'Rio Vermelho', 0, '2022-11-14 16:38:08', '2022-11-14 16:40:36', 0, NULL, NULL),
(7, 'carro', 4, 'A', 'centro', NULL, '2022-11-21 21:30:11', '2022-11-21 21:30:11', 0, NULL, NULL),
(8, 'carro', 3, 'A', 'centro', NULL, '2022-11-21 21:36:41', '2022-11-21 21:42:56', 0, NULL, NULL),
(9, 'moto', 1, 'B', 'centro', NULL, '2022-11-21 21:42:09', '2022-11-21 21:42:09', 0, NULL, NULL),
(10, 'carro', 4, 'A', 'centro', NULL, '2022-11-22 00:30:33', '2022-11-22 00:30:33', 0, NULL, NULL),
(11, 'carro', 4, 'B', 'centro', NULL, '2022-11-22 00:33:21', '2022-11-22 00:33:21', 0, NULL, NULL),
(12, 'moto', 1, 'C', 'centro', NULL, '2022-11-22 00:36:07', '2022-11-22 00:36:07', 0, NULL, NULL),
(13, 'carro', 3, 'B', 'centro', NULL, '2022-11-22 00:49:58', '2022-11-22 00:49:58', 0, NULL, NULL),
(14, 'carro', 4, 'A', 'centro', NULL, '2022-11-22 13:16:49', '2022-11-22 13:16:49', 0, NULL, '10:00:00'),
(15, 'moto', 1, 'B', 'centro', NULL, '2022-11-22 13:18:04', '2022-11-22 13:18:04', 0, NULL, '15:30:00'),
(16, 'moto', 0, 'B', 'centro', NULL, '2022-11-22 13:18:49', '2022-12-08 00:57:34', 1, NULL, '15:30:00'),
(17, 'carro', 0, 'A', 'centro', NULL, '2022-12-07 22:22:02', '2022-12-08 00:57:17', 1, NULL, '23:40:00'),
(18, 'carro', 0, 'A', 'utf', NULL, '2022-12-08 01:38:13', '2022-12-08 01:38:48', 1, NULL, '10:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220911234155-create-user.js'),
('20221015004456-create-post-car.js'),
('20221115131200-create-veiculo.js'),
('20221115142742-create-token.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tokens`
--

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ra` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `rg` varchar(255) DEFAULT NULL,
  `classificacao` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imagem` varchar(200) NOT NULL,
  PRIMARY KEY (`ra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `veiculos`
--

DROP TABLE IF EXISTS `veiculos`;
CREATE TABLE IF NOT EXISTS `veiculos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userRa` int(11) DEFAULT NULL,
  `postId` int(11) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `placa` varchar(255) DEFAULT NULL,
  `cor` varchar(255) DEFAULT NULL,
  `imagemCar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_veiculo_post` (`postId`),
  KEY `fk_veiculo_user` (`userRa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `veiculos`
--
ALTER TABLE `veiculos`
  ADD CONSTRAINT `fk_veiculo_post` FOREIGN KEY (`postId`) REFERENCES `postcars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_veiculo_user` FOREIGN KEY (`userRa`) REFERENCES `users` (`ra`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
