-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for joseph
CREATE DATABASE IF NOT EXISTS `joseph` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `joseph`;

-- Dumping structure for table joseph.family_friends
CREATE TABLE IF NOT EXISTS `family_friends` (
  `id` int(10) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table joseph.family_friends: ~17 rows (approximately)
/*!40000 ALTER TABLE `family_friends` DISABLE KEYS */;
INSERT INTO `family_friends` (`id`, `first_name`, `last_name`) VALUES
	(1, 'Sam', 'Goldsmith'),
	(2, 'Tim', 'Banks'),
	(3, 'Zach', 'Lau'),
	(4, 'Henry', 'Xu'),
	(5, 'Alex', 'Kelly'),
	(6, 'Ciaran', 'Mckennel'),
	(7, 'Sebastian', 'Berry'),
	(8, 'Will', 'Flowers'),
	(9, 'Ethan', 'Lee'),
	(10, 'Rory', 'Smith'),
	(11, 'Kush', 'Gold'),
	(12, 'Jack', 'Goith'),
	(13, 'Harry', 'Patel'),
	(14, 'Charlie', 'Humphries'),
	(15, 'Ben', 'Green'),
	(16, 'Paul', 'Blake'),
	(17, 'Millie', 'James'),
	(18, 'Sam', 'Lam'),
	(19, 'Perry', 'Evens'),
	(20, 'Elyse', 'Rong');
/*!40000 ALTER TABLE `family_friends` ENABLE KEYS */;

-- Dumping structure for table joseph.family_friends_hobbies
CREATE TABLE IF NOT EXISTS `family_friends_hobbies` (
  `id_ff` int(11) NOT NULL,
  `id_h` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table joseph.family_friends_hobbies: ~0 rows (approximately)
/*!40000 ALTER TABLE `family_friends_hobbies` DISABLE KEYS */;
INSERT INTO `family_friends_hobbies` (`id_ff`, `id_h`) VALUES
	(1, 45),
	(2, 54),
	(1, 23),
	(1, 14),
	(2, 8),
	(2, 3),
	(2, 12),
	(3, 21),
	(4, 34);
/*!40000 ALTER TABLE `family_friends_hobbies` ENABLE KEYS */;

-- Dumping structure for table joseph.family_members
CREATE TABLE IF NOT EXISTS `family_members` (
  `id` int(11) NOT NULL,
  `last_name` text NOT NULL,
  `first_name` text NOT NULL,
  `family_friend_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table joseph.family_members: ~49 rows (approximately)
/*!40000 ALTER TABLE `family_members` DISABLE KEYS */;
INSERT INTO `family_members` (`id`, `last_name`, `first_name`, `family_friend_id`) VALUES
	(1, 'Jack', 'Goldsmith', 1),
	(2, 'Will', 'Goldsmith', 1),
	(3, 'Ruth', 'Goldsmith', 1),
	(4, 'Paul', 'Banks', 2),
	(5, 'Lisa', 'Banks', 2),
	(6, 'Jasper', 'Lau', 3),
	(7, 'Milo', 'Lau', 3),
	(8, 'Zoe', 'Lau', 3),
	(9, 'Bob', 'Xu', 4),
	(10, 'Jing', 'Xu', 4),
	(11, 'Derea', 'Kelly', 5),
	(12, 'Simon', 'Kelly', 5),
	(13, 'Lucy', 'Mckennel', 6),
	(14, 'Denise', 'Mckennel', 6),
	(15, 'Dave', 'Mckennel', 6),
	(16, 'Harry', 'Berry', 7),
	(17, 'Cathy', 'Berry', 7),
	(18, 'Danny', 'Flowers', 8),
	(19, 'Lucy', 'Flowers', 8),
	(20, 'Cara', 'Lee', 9),
	(21, 'Marie', 'Lee', 9),
	(22, 'James', 'Lee', 9),
	(23, 'Jamey', 'Smith', 10),
	(24, 'Mary', 'Smith', 10),
	(25, 'MInjay', 'Gold', 11),
	(26, 'Deena', 'Gold', 11),
	(27, 'Dave', 'Gold', 11),
	(28, 'Ava', 'Goith', 12),
	(29, 'Daniel', 'Goith', 12),
	(30, 'Dipesh', 'Patel', 13),
	(31, 'Daniel', 'Patel', 13),
	(32, 'Samantha', 'Patel', 13),
	(33, 'Elsa', 'Humphries', 14),
	(34, 'Amber', 'Humphries', 14),
	(35, 'Will', 'Humphries', 14),
	(36, 'Ron', 'Green', 15),
	(37, 'Holly', 'Green', 15),
	(38, 'James', 'Blake', 16),
	(39, 'Audie', 'Blake', 16),
	(40, 'Bridget', 'James', 17),
	(41, 'Barry', 'James', 17),
	(42, 'Linda', 'James', 17),
	(43, 'Carrie', 'Lam', 18),
	(44, 'David', 'Lam', 18),
	(45, 'Shela', 'Evens', 19),
	(46, 'Mandy', 'Evens', 19),
	(47, 'Albert', 'Evens', 19),
	(48, 'Lillian', 'Rong', 20),
	(49, 'Jullian', 'Rong', 20);
/*!40000 ALTER TABLE `family_members` ENABLE KEYS */;

-- Dumping structure for table joseph.family_members_hobbies
CREATE TABLE IF NOT EXISTS `family_members_hobbies` (
  `id_fm` int(11) DEFAULT NULL,
  `id_h` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table joseph.family_members_hobbies: ~0 rows (approximately)
/*!40000 ALTER TABLE `family_members_hobbies` DISABLE KEYS */;
/*!40000 ALTER TABLE `family_members_hobbies` ENABLE KEYS */;

-- Dumping structure for table joseph.hobbies
CREATE TABLE IF NOT EXISTS `hobbies` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table joseph.hobbies: ~52 rows (approximately)
/*!40000 ALTER TABLE `hobbies` DISABLE KEYS */;
INSERT INTO `hobbies` (`id`, `name`) VALUES
	(1, 'football'),
	(2, 'reading'),
	(3, 'drawing'),
	(4, 'guitar'),
	(5, 'running'),
	(6, 'Gaming'),
	(7, 'art'),
	(8, 'cooking'),
	(9, 'shopping'),
	(10, 'yoga'),
	(11, 'Chess'),
	(12, 'dogs'),
	(13, 'coding'),
	(14, 'basketball'),
	(15, 'swimming'),
	(16, 'netball'),
	(17, 'karate'),
	(18, 'judo'),
	(19, 'taekwondo'),
	(20, 'music'),
	(21, 'maths'),
	(22, 'cleaning'),
	(23, 'shopping'),
	(24, 'dancing'),
	(25, 'driving'),
	(26, 'writing'),
	(27, 'gardening'),
	(28, 'painting'),
	(29, 'magic'),
	(30, 'tennis'),
	(31, 'horse riding'),
	(32, 'singing'),
	(33, 'boxing'),
	(34, 'skydiving'),
	(35, 'knitting'),
	(36, 'dt'),
	(37, 'showering'),
	(38, 'golf'),
	(39, 'badminton'),
	(40, 'memes'),
	(41, 'surfing'),
	(42, 'cycling'),
	(43, 'genelogy'),
	(44, 'rugby'),
	(45, 'baking'),
	(46, 'blogging'),
	(47, 'piano'),
	(48, 'catering'),
	(49, 'refinishing furniture'),
	(50, 'public speaking'),
	(51, 'playing the stock market'),
	(52, 'sculpting'),
	(53, 'walking'),
	(54, 'cats'),
	(55, 'comics'),
	(56, 'naps'),
	(57, 'tv');
/*!40000 ALTER TABLE `hobbies` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
