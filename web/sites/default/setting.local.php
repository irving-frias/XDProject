<?php
$config_directories['sync'] = '../config/sync';
$settings['hash_salt'] = 'xdproject.loc';

$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.local.yml';
// Database.
$databases['default']['default'] = array(
  'database' => 'xdproject_loc',
  'username' => 'root',
  'password' => 'admin',
  'host' => 'localhost',
  'driver' => 'mysql',
  'port' => 3306,
  'prefix' => '',
);


