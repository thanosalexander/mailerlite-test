-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.22-0ubuntu0.20.04.2 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mailerlite
CREATE DATABASE IF NOT EXISTS `mailerlite` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mailerlite`;

-- Dumping structure for table mailerlite.fields
CREATE TABLE IF NOT EXISTS `fields` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mailerlite.fields: ~5 rows (approximately)
/*!40000 ALTER TABLE `fields` DISABLE KEYS */;
INSERT INTO `fields` (`id`, `title`, `type`, `alias`, `extra`) VALUES
	(1, 'Email', 'string', 'email', NULL),
	(2, 'Address', 'string', 'address', NULL),
	(3, 'Name', 'string', 'name', NULL),
	(4, 'State', 'array', 'state', '[{"key": "active", "value": "Active"}, {"key": "unsubscribed", "value": "Unsubscribed"}, {"key": "junk", "value": "Junk"}, {"key": "bounced", "value": "Bounced"}, {"key": "unconfirmed", "value": "Unconfirmed"}]'),
	(59, 'Is subscribed', 'boolean', 'is_subscribed', NULL);
/*!40000 ALTER TABLE `fields` ENABLE KEYS */;

-- Dumping structure for table mailerlite.subscribers
CREATE TABLE IF NOT EXISTS `subscribers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mailerlite.subscribers: ~1 rows (approximately)
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` (`id`) VALUES
	(18);
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;

-- Dumping structure for table mailerlite.subscriber_fields
CREATE TABLE IF NOT EXISTS `subscriber_fields` (
  `subscriber_id` bigint unsigned NOT NULL,
  `field_id` bigint unsigned NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mailerlite.subscriber_fields: ~5 rows (approximately)
/*!40000 ALTER TABLE `subscriber_fields` DISABLE KEYS */;
INSERT INTO `subscriber_fields` (`subscriber_id`, `field_id`, `value`, `id`) VALUES
	(18, 1, 'thanosalexander@gmail.com', 21),
	(18, 2, 'Zarmanis 9', 22),
	(18, 3, 'thanos alexandris', 23),
	(18, 4, 'active', 24),
	(18, 59, '1', 25);
/*!40000 ALTER TABLE `subscriber_fields` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
