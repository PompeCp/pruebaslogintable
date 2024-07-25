/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - ventas
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ventas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `ventas`;

/*Table structure for table `categorias` */

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `categorias` */

insert  into `categorias`(`id_categorias`,`nombre`,`descripcion`,`estado`) values 
(1,'frutas','alimentos naturales',1),
(2,'limpieza','productos de limpieza del hogar',1),
(3,'ropa','productos de vestir',1);

/*Table structure for table `clientes` */

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(15) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `clientes` */

insert  into `clientes`(`id_cliente`,`rut`,`nombre`,`username`,`pass`,`direccion`,`estado`) values 
(1,'1003159459','alejandro','alejandroxx','$2b$08$uYlzCvQ/5bHBGCbwr8XWJ.Q75uS46.o5XpQ8hJwRbD7ZZZGnUtET2','calle 20 n2w 02',1),
(10,'123456','felipe','pom','$2b$08$BbLpZ3opfKIUn1ibCjmE1uWCglh954Aw3u7OZ20GnFLbo42TNnGn6','calle 70 bogota comuna 4',1),
(11,'123','felipomp','pim','$2b$08$n89WrRAXs2tuT2ud5k6eQu5E0Vqph4HUwJqWMpqX17o5rbFPOCz3u','calle 70 bogota comuna 4',1),
(13,'456123','juan pablo','jp','$2b$08$24RuRlp598NsRFsRqqVTIOpCP1atXpeP7BkMvispW1MLfaATpjhU2','clale 2810uhdsand',1),
(14,NULL,NULL,'alejandroxx','$2b$08$tHHVsYn1Td6tiF5mzK1TyecBcsDZX27KxgIY9PictjJFFmGf08C02',NULL,1);

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` decimal(65,0) DEFAULT NULL,
  `stock` decimal(65,0) DEFAULT NULL,
  `id_proveedores` int(11) DEFAULT NULL,
  `id_categorias` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `productos` */

insert  into `productos`(`id_productos`,`nombre`,`precio`,`stock`,`id_proveedores`,`id_categorias`,`estado`) values 
(1,'manzana',25,30,1,1,1),
(2,'camiseta basica roja',20000,25,3,3,1),
(3,'limpido',7000,50,2,2,1),
(4,'naranja',2500,50,1,1,1),
(5,'pera',3000,50,1,1,1),
(6,'piña',9000,40,1,1,1),
(10,'mandarina',3000,60,1,1,1),
(12,'mango',4000,40,1,1,1),
(13,'tenis',60000,30,3,3,0),
(14,'aguacate',4500,45,1,1,0),
(16,'manga',7000,40,1,1,1),
(17,'clorox',6000,60,2,2,1),
(18,'tomate',2000,62,1,1,0);

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id_proveedores` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(15) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` decimal(65,0) DEFAULT NULL,
  `page` varchar(200) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_proveedores`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id_proveedores`,`rut`,`nombre`,`direccion`,`telefono`,`page`,`estado`) values 
(1,'4100024','agrofruit','calle 70 n 3w 78-02',3202778423,'www.agrofuit.com',1),
(2,'5100654','distriquimicos','carrera 2 n 3 45-01',7877450,'www.dquimicos.com',1),
(3,'7895002','modaslindas','calle 22  n4  45-02 ',3162779562,'www.modaslindas.com',1);

/*Table structure for table `telefonos` */

DROP TABLE IF EXISTS `telefonos`;

CREATE TABLE `telefonos` (
  `id_telefonos` int(11) NOT NULL AUTO_INCREMENT,
  `id_clientes` int(11) DEFAULT NULL,
  `numero` decimal(65,0) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_telefonos`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `telefonos` */

insert  into `telefonos`(`id_telefonos`,`id_clientes`,`numero`,`estado`) values 
(1,1,3201669415,1),
(2,1,3202669415,1),
(15,10,3201645,1),
(16,10,789465,1),
(17,11,3201645,1),
(18,11,789465,1),
(22,13,123456879,1),
(23,13,321654,1);

/*Table structure for table `venta_producto` */

DROP TABLE IF EXISTS `venta_producto`;

CREATE TABLE `venta_producto` (
  `id_vp` int(11) NOT NULL AUTO_INCREMENT,
  `id_ventas` int(11) DEFAULT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `precio_venta` decimal(65,0) DEFAULT NULL,
  `cantidad` decimal(65,0) DEFAULT NULL,
  `total` decimal(65,0) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_vp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `venta_producto` */

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `descuento` varchar(100) DEFAULT NULL,
  `total` decimal(65,0) DEFAULT NULL,
  `id_vp` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `ventas` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
