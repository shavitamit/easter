<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">

<title>Easter code</title>

<head profile="http://gmpg.org/xfn/11">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1" />


  <script type="text/javascript" src="jquery.js"></script>
  <script type="text/javascript" src="lettering.js"></script>
  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="form.js"></script>

<link href="reset.css" rel="stylesheet" type="text/css" />
<link href="style.css" rel="stylesheet" type="text/css" />

</head>


<body>
    
  <div id="pagewrap">

    <div id="form" class="clearfix">
      <h1>Easter riddle</h1>
      <form method="POST" action="form.php">
        <div>
          <input type="text" placeholder="Name or ID" name="name" id="name" />
          <label>This is printed on the top right corner of the page.</label>
        </div>

        <div class="clear"></div>

        <textarea placeholder="Enter your phrase here, then press enter or click submit." name="textarea-phrase" id="textarea-phrase" ></textarea>

        <div class="clear"></div>

        <input type="submit" value="submit" name="submit" id="submit" />
        <div id="load"></div>

      </form>
    </div>

    <div class="clear"></div>

    <div id="key-wrap">
      <img src="images/legend.png" alt="Key / Legend" id="key" />
      <div id="name_or_id"></div>
    </div>

    <div id="phrase">
      <p></p>
      <!--<p>THIS MIGHT BE THE QUESTION OF THE HOUR, CAN YOU FIND YOUR BASKET IN THE DOWNSTAIRS SHOWER?</p>-->
    </div>

  </div><!-- /.pagewrap -->

  </body>
</html>
