
<?php 
	$host="localhost";
	$user="kplacken";
	$password="kplacken";
	$db="lg";


	/**
	 *    DB-Zugangsdaten
	 */
	$config['sql_hostname'] = 'localhost';    //MySQL-Server
	$config['sql_username'] = 'kplacken';        //Benutzername
	$config['sql_password'] = 'kplacken';        //Kennwort
	$config['sql_database'] = 'lg';        //Datenbank


	/**
	 *    Fehlerbehandlung
	 */
	error_reporting(E_ALL);
	ini_set('display_errors', false);


	/**
	 *    Verbindungsaufbau
	 */
	$SQL = new MySQLi($config['sql_hostname'], $config['sql_username'], $config['sql_password'], $config['sql_database']);

	if(mysqli_connect_errno() != 0 || !$SQL->set_charset('utf8'))
	{
		die('<strong>ERROR:</strong> Es konnte keine Verbindung mit dem Datenbank-Server hergestellt werden!');
	}


?>