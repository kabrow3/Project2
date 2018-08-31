DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

CREATE TABLE IF NOT EXISTS test_db.events
(
  event_ID INTEGER NOT NULL auto_increment, 
  event_Name VARCHAR(50),   
  event_Location VARCHAR(50),  
  event_Date DATETIME,
  PRIMARY KEY(event_ID)
);

