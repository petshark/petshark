<?php
class AdminerAutoLoginDeploy {
    // https://github.com/vrana/adminer/blob/4742bde873598e3017c566777b37e281996514b5/plugins/login-servers.php#L34
    function loginFormField($name, $heading, $value) {
        switch ($name) {
            case 'driver':
                $type = getenv('ADMINER_DB_DRIVER');
                if ($type == 'mysql') { $type = 'server'; }
                return $heading . "<select name='auth[driver]'>" . optionlist(array($type), $type) . "</select>\n";
            case 'server':
                $server = getenv('ADMINER_DB_SERVER');
                return $heading . "<input name='auth[server]' value='" . $server . "'/>\n";
            case 'username':
                $server = getenv('ADMINER_DB_USER');
                return $heading . "<input name='auth[username]' value='" . $server . "'/>\n";
            case 'db':
                $server = getenv('ADMINER_DB_NAME');
                return $heading . "<input name='auth[db]' value='" . $server . "'/>\n";
        }
    }
}
