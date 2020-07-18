/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : egg_sql

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-07-18 09:49:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` text,
  `gender` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '张三', '123456', '138138313801', '123@qq.com', '20', '女', '2020-07-17 21:41:47', null);
INSERT INTO `users` VALUES ('14', '李四2', 'aa123456', '13813813801', 'AA@qq.com', '20', '2', '2020-07-15 21:41:57', null);
INSERT INTO `users` VALUES ('15', '王五', 'a12345', '13813813803', 'AA@qq.com', '20', '女', null, null);
INSERT INTO `users` VALUES ('16', 'aa123', 'aa123456', '13813813801', '', '', '男', '2020-07-17 21:57:51', null);
