# Host: localhost  (Version: 5.7.26)
# Date: 2020-08-03 21:34:29
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'admin','whm2112017');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12319 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (3,2,'aaa','sss','dd',1595865600,1046),(4,3,'a','a','a',1596297600,2),(12313,6,'1123123123','### 啊  \n>aaasdadasdasf','### 啊  \n>aaasdadasdasf',1596470400,0),(12314,2,'123123','123','123',1596470400,0),(12315,2,'aaaa','sdasdad','fsaf',1596470400,0),(12316,6,'asdasd','asdasd','asdasd',1596384000,0),(12317,1,'asdasd','sadasd','asdasdad',1596384000,0),(12318,3,'jh','## 阅读须知  \n>此博客内容仅为本人自己复习而用，不具有指导意义\n>>asdadasdf\n>>>>ASdasdasd','## 阅读须知  \n>此博客内容仅为本人自己复习而用，不具有指导意义',1596384000,9);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL DEFAULT '',
  `orderNum` int(11) NOT NULL DEFAULT '0',
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'HTML',1,NULL),(2,'CSS',2,NULL),(3,'JS',3,NULL),(4,'React',4,NULL),(5,'HTTP',5,NULL),(6,'Other',6,NULL);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
