-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2018 at 03:33 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codegig`
--

-- --------------------------------------------------------

--
-- Table structure for table `gigs`
--

CREATE TABLE `gigs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `technologies` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `budget` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gigs`
--

INSERT INTO `gigs` (`id`, `title`, `technologies`, `description`, `budget`, `contact_email`, `createdAt`, `updatedAt`) VALUES
(1, 'tuhin', 'oy', 'iuy', 'utyuy', 'iuih', '2018-12-18 00:00:00', '2018-12-18 00:00:00'),
(2, 'dhur', 'dhur', 'dhur', 'dhur', 'dhur', '2018-12-18 00:00:00', '2018-12-19 00:00:00'),
(3, 'req.body.title', 'req.body.technologies', 'req.body.description', 'req.body.budget', 'req.body.contact_email', '2018-12-19 06:57:49', '2018-12-19 06:57:49'),
(4, 'req.body.title2', 'req.body.technologies2', 'req.body.description2', 'req.body.budget2', 'req.body.contact_email2', '2018-12-19 07:01:13', '2018-12-19 07:01:13'),
(5, 'dfsf', 'ieiie', 'sdfsf', 'eeee', 'tuhin2093@gmail.com', '2018-12-19 07:10:17', '2018-12-19 07:10:17'),
(6, 'dfsf', 'ieiie', 'sdfsf', 'eeee', 'tuhin2093@gmail.com', '2018-12-19 08:19:45', '2018-12-19 08:19:45'),
(7, 'Allah Humma', 'ieiie', 'sdfsf', 'tuhin@gmail.com', 'tuhin2093@gmail.com', '2018-12-19 08:21:30', '2018-12-19 09:46:16');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `technologies` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `budget` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `technologies`, `description`, `budget`, `contact_email`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Allah', 'ieiie', 'sdfsf', 'tuhin@gmail.com', 'fffff', '2018-12-19 00:00:00', '2018-12-19 10:52:41', '2018-12-19 04:47:48'),
(2, 'Allah Humma', 'ieiie', 'sdfsf', 'tuhin@gmail.com', 'fffff', '2018-12-19 10:45:28', '2018-12-19 10:47:48', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gigs`
--
ALTER TABLE `gigs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gigs`
--
ALTER TABLE `gigs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
