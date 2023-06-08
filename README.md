# Dynamic Web Programming Final Project

## Topic: Online Shopping Website - Buy some beauty

## System Structure

Frontend: HTML, CSS, JavaScript, AJAX, jQuery
Backend: PHP
Database: MySQL

## Folder Structure

- we will have 3 folders in this project - Jennifer, route, src
  - Jennifer: reference from other teammate
  - route: for php file
  - src: for image and other resource

## Modify Database

We have contained a DWP.sql file in this project, you can import it to your database.

- Open phpMyAdmin
  go to http://localhost/phpmyadmin/

- Create database
  CREATE DATABASE DWP;

- Select database
  USE DWP

- TABLE that we have
  PRODUCT - name(VARCHAR(255)), description(VARCHAR(255)), image(VARCHAR(255)), price(INT(11)), stock(INT(11)), class(VARCHAR(255))
  CART - name(VARCHAR(255)), description(VARCHAR(255)), image(VARCHAR(255)), price(INT(11)), number(INT(11))
  LIST - name(VARCHAR(255)), description(VARCHAR(255)), image(VARCHAR(255)), price(INT(11))

## GitHub

https://github.com/e14076423/beauty-website
