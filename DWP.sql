-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2023 年 06 月 08 日 09:20
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `DWP`
--

-- --------------------------------------------------------

--
-- 資料表結構 `CART`
--

CREATE TABLE `CART` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `LIST`
--

CREATE TABLE `LIST` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `LIST`
--

INSERT INTO `LIST` (`name`, `description`, `image`, `price`) VALUES
('Fresh O2粉底液', '很Fresh歐', 'https://github.com/e14076423/src/blob/main/%E5%BA%951.jpg?raw=true', 399);

-- --------------------------------------------------------

--
-- 資料表結構 `PRODUCT`
--

CREATE TABLE `PRODUCT` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `PRODUCT`
--

INSERT INTO `PRODUCT` (`name`, `description`, `image`, `price`, `stock`, `class`) VALUES
('倩碧水磁場', '看起來不錯', 'https://github.com/e14076423/src/blob/main/%E4%BF%9D1.jpg?raw=true', 499, 60, 'maintainance'),
('蘭蔻小黑憑', '我覺得還行', 'https://github.com/e14076423/src/blob/main/%E4%BF%9D2.jpg?raw=true', 799, 20, 'maintainance'),
('專科面膜', '就敷啊', 'https://github.com/e14076423/src/blob/main/%E4%BF%9D3.jpg?raw=true', 222, 20, 'maintainance'),
('Dr.Wu面膜', '敷第二次', 'https://github.com/e14076423/src/blob/main/%E4%BF%9D4.jpg?raw=true', 699, 20, 'maintainance'),
('Fresh O2粉底液', '很Fresh歐', 'https://github.com/e14076423/src/blob/main/%E5%BA%951.jpg?raw=true', 399, 34, 'base'),
('LANCOME粉底液', 'come過來一下', 'https://github.com/e14076423/src/blob/main/%E5%BA%952.jpg?raw=true', 120, 20, 'base'),
('heme粉底液', 'he就是me的', 'https://github.com/e14076423/src/blob/main/%E5%BA%953.jpg?raw=true', 487, 21, 'base'),
('innisfree 粉底液', '超free', 'https://github.com/e14076423/src/blob/main/%E5%BA%954.jpg?raw=true', 350, 20, 'base'),
('Romand 霧面絕美唇釉', '羅曼蒂克', 'https://github.com/e14076423/src/blob/main/%E5%94%871.jpg?raw=true', 299, 34, 'lip'),
('AIRY MATIE唇釉', '有AIR的感覺', 'https://github.com/e14076423/src/blob/main/%E5%94%872.jpg?raw=true', 388, 20, 'lip'),
('BBIA 花曜薔薇絲柔粉霧唇釉', '薔薇是紫色還是紅色', 'https://github.com/e14076423/src/blob/main/%E5%94%873.jpg?raw=true', 250, 20, 'lip'),
('3CE 絲絨唇釉', '為什麼不是ACE', 'https://github.com/e14076423/src/blob/main/%E5%94%874.jpg?raw=true', 341, 20, 'lip'),
('CNP膠原玻尿酸彈力密度精華液', '沒可能是我大IU吧', 'https://github.com/e14076423/src/blob/main/%E4%BB%A31.jpg?raw=true', 520520, 16, 'celebrity'),
('colorgram 眼影', '你誰', 'https://github.com/e14076423/src/blob/main/%E4%BB%A32.jpg?raw=true', 555, 20, 'celebrity'),
('clio眼影', '我不認識', 'https://github.com/e14076423/src/blob/main/%E4%BB%A33.jpg?raw=true', 666, 20, 'celebrity'),
('ETUDE HOUSE 睫毛膏', '還是買IU的吧', 'https://github.com/e14076423/src/blob/main/%E4%BB%A34.jpg?raw=true', 777, 20, 'celebrity');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `LIST`
--
ALTER TABLE `LIST`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
