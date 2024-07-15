-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema readmovie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema readmovie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `readmovie` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `readmovie` ;

-- -----------------------------------------------------
-- Table `readmovie`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `readmovie`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `readmovie`.`movieinfo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `readmovie`.`movieinfo` (
  `idmovieinfo` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `rating` VARCHAR(45) NOT NULL,
  `director` VARCHAR(45) NOT NULL,
  `actors` VARCHAR(45) NOT NULL,
  `plot` LONGTEXT NOT NULL,
  `poster` VARCHAR(255) NOT NULL,
  `trailer` VARCHAR(255) NOT NULL,
  `runtime` INT NOT NULL,
  `awards` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `language` VARCHAR(45) NOT NULL,
  `boxOffice` VARCHAR(45) NOT NULL,
  `production` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idmovieinfo`),
  UNIQUE INDEX `id_UNIQUE` (`idmovieinfo` ASC) VISIBLE,
  INDEX `fk_movieinfo_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_movieinfo_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `readmovie`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
