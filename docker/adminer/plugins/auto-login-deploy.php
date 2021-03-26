<?php
function adminer_object() {
  include_once "../plugins/plugin.php";

  class AdminerAutoLoginDeploy extends AdminerPlugin {

  // https://github.com/vrana/adminer/blob/4742bde873598e3017c566777b37e281996514b5/editor/sqlite.php
  function loginFormField($name, $heading, $value) {
    $type = getenv('ADMINER_DB_DRIVER');
    if ($type == 'mysql') { $type = 'server'; }

      return parent::loginFormField($name, $heading, str_replace('value="server"', 'value="' . $type . '"', $value));
    }

    // https://github.com/vrana/adminer/blob/4742bde873598e3017c566777b37e281996514b5/editor/sqlite.php
    function database() {
      return getenv('ADMINER_DB_NAME');
    }

    function credentials() {
      $server = getenv('ADMINER_DB_SERVER');
      $user = getenv('ADMINER_DB_USER');

      return array($server, $user, get_password());
    }

  }

}
