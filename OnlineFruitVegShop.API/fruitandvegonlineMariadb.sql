﻿CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(95) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
);

CREATE TABLE `Carts` (
    `Id` int NOT NULL AUTO_INCREMENT,
    CONSTRAINT `PK_Carts` PRIMARY KEY (`Id`)
);

CREATE TABLE `Products` (
    `Id` int NOT NULL AUTO_INCREMENT,
    CONSTRAINT `PK_Products` PRIMARY KEY (`Id`)
);

CREATE TABLE `Users` (
    `UserId` int NOT NULL AUTO_INCREMENT,
    `emailAddress` longtext CHARACTER SET utf8mb4 NULL,
    `Username` longtext CHARACTER SET utf8mb4 NULL,
    `Firstname` longtext CHARACTER SET utf8mb4 NULL,
    `Lastname` longtext CHARACTER SET utf8mb4 NULL,
    CONSTRAINT `PK_Users` PRIMARY KEY (`UserId`)
);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200522163818_InitialCreate', '3.1.4');

DROP PROCEDURE IF EXISTS `POMELO_BEFORE_DROP_PRIMARY_KEY`;
DELIMITER //
CREATE PROCEDURE `POMELO_BEFORE_DROP_PRIMARY_KEY`(IN `SCHEMA_NAME_ARGUMENT` VARCHAR(255), IN `TABLE_NAME_ARGUMENT` VARCHAR(255))
BEGIN
	DECLARE HAS_AUTO_INCREMENT_ID TINYINT(1);
	DECLARE PRIMARY_KEY_COLUMN_NAME VARCHAR(255);
	DECLARE PRIMARY_KEY_TYPE VARCHAR(255);
	DECLARE SQL_EXP VARCHAR(1000);
	SELECT COUNT(*)
		INTO HAS_AUTO_INCREMENT_ID
		FROM `information_schema`.`COLUMNS`
		WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
			AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
			AND `Extra` = 'auto_increment'
			AND `COLUMN_KEY` = 'PRI'
			LIMIT 1;
	IF HAS_AUTO_INCREMENT_ID THEN
		SELECT `COLUMN_TYPE`
			INTO PRIMARY_KEY_TYPE
			FROM `information_schema`.`COLUMNS`
			WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
				AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
				AND `COLUMN_KEY` = 'PRI'
			LIMIT 1;
		SELECT `COLUMN_NAME`
			INTO PRIMARY_KEY_COLUMN_NAME
			FROM `information_schema`.`COLUMNS`
			WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
				AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
				AND `COLUMN_KEY` = 'PRI'
			LIMIT 1;
		SET SQL_EXP = CONCAT('ALTER TABLE `', (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA())), '`.`', TABLE_NAME_ARGUMENT, '` MODIFY COLUMN `', PRIMARY_KEY_COLUMN_NAME, '` ', PRIMARY_KEY_TYPE, ' NOT NULL;');
		SET @SQL_EXP = SQL_EXP;
		PREPARE SQL_EXP_EXECUTE FROM @SQL_EXP;
		EXECUTE SQL_EXP_EXECUTE;
		DEALLOCATE PREPARE SQL_EXP_EXECUTE;
	END IF;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS `POMELO_AFTER_ADD_PRIMARY_KEY`;
DELIMITER //
CREATE PROCEDURE `POMELO_AFTER_ADD_PRIMARY_KEY`(IN `SCHEMA_NAME_ARGUMENT` VARCHAR(255), IN `TABLE_NAME_ARGUMENT` VARCHAR(255), IN `COLUMN_NAME_ARGUMENT` VARCHAR(255))
BEGIN
	DECLARE HAS_AUTO_INCREMENT_ID INT(11);
	DECLARE PRIMARY_KEY_COLUMN_NAME VARCHAR(255);
	DECLARE PRIMARY_KEY_TYPE VARCHAR(255);
	DECLARE SQL_EXP VARCHAR(1000);
	SELECT COUNT(*)
		INTO HAS_AUTO_INCREMENT_ID
		FROM `information_schema`.`COLUMNS`
		WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
			AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
			AND `COLUMN_NAME` = COLUMN_NAME_ARGUMENT
			AND `COLUMN_TYPE` LIKE '%int%'
			AND `COLUMN_KEY` = 'PRI';
	IF HAS_AUTO_INCREMENT_ID THEN
		SELECT `COLUMN_TYPE`
			INTO PRIMARY_KEY_TYPE
			FROM `information_schema`.`COLUMNS`
			WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
				AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
				AND `COLUMN_NAME` = COLUMN_NAME_ARGUMENT
				AND `COLUMN_TYPE` LIKE '%int%'
				AND `COLUMN_KEY` = 'PRI';
		SELECT `COLUMN_NAME`
			INTO PRIMARY_KEY_COLUMN_NAME
			FROM `information_schema`.`COLUMNS`
			WHERE `TABLE_SCHEMA` = (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA()))
				AND `TABLE_NAME` = TABLE_NAME_ARGUMENT
				AND `COLUMN_NAME` = COLUMN_NAME_ARGUMENT
				AND `COLUMN_TYPE` LIKE '%int%'
				AND `COLUMN_KEY` = 'PRI';
		SET SQL_EXP = CONCAT('ALTER TABLE `', (SELECT IFNULL(SCHEMA_NAME_ARGUMENT, SCHEMA())), '`.`', TABLE_NAME_ARGUMENT, '` MODIFY COLUMN `', PRIMARY_KEY_COLUMN_NAME, '` ', PRIMARY_KEY_TYPE, ' NOT NULL AUTO_INCREMENT;');
		SET @SQL_EXP = SQL_EXP;
		PREPARE SQL_EXP_EXECUTE FROM @SQL_EXP;
		EXECUTE SQL_EXP_EXECUTE;
		DEALLOCATE PREPARE SQL_EXP_EXECUTE;
	END IF;
END //
DELIMITER ;

CALL POMELO_BEFORE_DROP_PRIMARY_KEY(NULL, 'Users');
ALTER TABLE `Users` DROP PRIMARY KEY;

ALTER TABLE `Users` DROP COLUMN `UserId`;

ALTER TABLE `Users` DROP COLUMN `Firstname`;

ALTER TABLE `Users` DROP COLUMN `Lastname`;

ALTER TABLE `Users` ADD `Id` int NOT NULL DEFAULT 0;

ALTER TABLE `Users` ADD `PasswordHash` longblob NULL;

ALTER TABLE `Users` ADD `PasswordSalt` longblob NULL;

ALTER TABLE `Users` ADD CONSTRAINT `PK_Users` PRIMARY KEY (`Id`);
CALL POMELO_AFTER_ADD_PRIMARY_KEY(NULL, 'Users', 'Id');

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200523074331_UpdatedUserClass', '3.1.4');

DROP PROCEDURE `POMELO_BEFORE_DROP_PRIMARY_KEY`;

DROP PROCEDURE `POMELO_AFTER_ADD_PRIMARY_KEY`;

ALTER TABLE `Products` ADD `Description` longtext CHARACTER SET utf8mb4 NULL;

ALTER TABLE `Products` ADD `Name` longtext CHARACTER SET utf8mb4 NULL;

ALTER TABLE `Products` ADD `PhotoUrl` longtext CHARACTER SET utf8mb4 NULL;

ALTER TABLE `Products` ADD `Price` decimal(65,30) NOT NULL DEFAULT 0.0;

ALTER TABLE `Carts` ADD `UserId` int NOT NULL DEFAULT 0;

CREATE TABLE `Orders` (
    `OrderId` int NOT NULL AUTO_INCREMENT,
    `CartId` int NOT NULL,
    `Amount` decimal(65,30) NOT NULL,
    `OrderDate` datetime(6) NOT NULL,
    CONSTRAINT `PK_Orders` PRIMARY KEY (`OrderId`)
);

CREATE TABLE `BillingAddresses` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Firstname` longtext CHARACTER SET utf8mb4 NULL,
    `Lastname` longtext CHARACTER SET utf8mb4 NULL,
    `EmailAddress` longtext CHARACTER SET utf8mb4 NULL,
    `Address` longtext CHARACTER SET utf8mb4 NULL,
    `Address2` longtext CHARACTER SET utf8mb4 NULL,
    `Country` longtext CHARACTER SET utf8mb4 NULL,
    `State` longtext CHARACTER SET utf8mb4 NULL,
    `Zip` longtext CHARACTER SET utf8mb4 NULL,
    `OrderId` int NOT NULL,
    CONSTRAINT `PK_BillingAddresses` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_BillingAddresses_Orders_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`OrderId`) ON DELETE CASCADE
);

CREATE TABLE `CartItems` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `ProductId` int NOT NULL,
    `Total` decimal(65,30) NOT NULL,
    `Quantity` int NOT NULL,
    `CartId` int NOT NULL,
    `CheckedOut` tinyint(1) NOT NULL,
    `OrderId` int NOT NULL,
    CONSTRAINT `PK_CartItems` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_CartItems_Orders_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`OrderId`) ON DELETE CASCADE
);

CREATE INDEX `IX_Carts_UserId` ON `Carts` (`UserId`);

CREATE INDEX `IX_BillingAddresses_OrderId` ON `BillingAddresses` (`OrderId`);

CREATE INDEX `IX_CartItems_OrderId` ON `CartItems` (`OrderId`);

ALTER TABLE `Carts` ADD CONSTRAINT `FK_Carts_Users_UserId` FOREIGN KEY (`UserId`) REFERENCES `Users` (`Id`) ON DELETE CASCADE;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200525143333_UpdatedApiAndService', '3.1.4');

ALTER TABLE `Products` MODIFY COLUMN `Price` int NOT NULL;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200526061558_UpdatedKeys', '3.1.4');

ALTER TABLE `CartItems` DROP FOREIGN KEY `FK_CartItems_Orders_OrderId`;

ALTER TABLE `CartItems` MODIFY COLUMN `OrderId` int NULL;

CREATE INDEX `IX_CartItems_ProductId` ON `CartItems` (`ProductId`);

ALTER TABLE `CartItems` ADD CONSTRAINT `FK_CartItems_Orders_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`OrderId`) ON DELETE RESTRICT;

ALTER TABLE `CartItems` ADD CONSTRAINT `FK_CartItems_Products_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`Id`) ON DELETE CASCADE;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200526074128_UpdatedOrderClass', '3.1.4');

ALTER TABLE `CartItems` DROP FOREIGN KEY `FK_CartItems_Orders_OrderId`;

ALTER TABLE `CartItems` DROP INDEX `IX_CartItems_OrderId`;

ALTER TABLE `CartItems` DROP COLUMN `OrderId`;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200527071122_UpdateToCartItemnavigationProperties', '3.1.4');

ALTER TABLE `BillingAddresses` DROP FOREIGN KEY `FK_BillingAddresses_Orders_OrderId`;

ALTER TABLE `BillingAddresses` DROP INDEX `IX_BillingAddresses_OrderId`;

ALTER TABLE `BillingAddresses` DROP COLUMN `OrderId`;

ALTER TABLE `Orders` ADD `BillingAddressId` int NOT NULL DEFAULT 0;

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20200527072736_UpdateToBillingAddresClassProperties', '3.1.4');

