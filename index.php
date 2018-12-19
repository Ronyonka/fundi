<?php
//Get username
$user = $_GET['u'];
?>
<html>
<head>
<title>Chat</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css" type="text/css">
<link rel=""
</head>
<body>
<div class="chatContainer">
  <div class="chatHeader">
    <h3>Welcome <?php echo ucwords($user); ?></h3>
  </div>
  <div class="chatMessages"></div>
  <div class="chatBottom">
    <form action="#" onSubmit="return false;" id="chatForm">
    <input type="hidden" id="name" value="<?php echo $user; ?>"/>
    <input type="text" name="text" id="text" value="<?php echo ucwords($user);" placeholder="type your chat message"/>
    <input type="submit" name="submit" value="post" />
  </form>
</div>
</div>
</body>
</html>
