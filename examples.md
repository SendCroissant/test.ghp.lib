---
title: Code Examples
layout: default
---

HTML Example

{% highlight html %}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>addClass demo</title>
  <style>
  p {
    margin: 8px;
    font-size: 16px;
  }
  .selected {
    color: blue;
  }
  .highlight {
    background: yellow;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<p>Hello</p>
<p>and</p>
<p>Goodbye</p>
 
<script>
$( "p" ).last().addClass( "selected" );
</script>
 
</body>
</html>
{% endhighlight %}

Code on javascript

{% highlight javascript %}
$( "button" ).on( "click", function() {
  $( "p" ).append( "Started..." );
 
  $( "div" ).each(function( i ) {
    $( this ).fadeIn().fadeOut( 1000 * ( i + 1 ) );
  });
 
  $( "div" ).promise().done(function() {
    $( "p" ).append( " Finished! " );
  });
});
{% endhighlight %}

Code on java with numbers

{% highlight java linenos %}
public class StringExample
{ public static void main(String[] args)
  { String s1 = "Computer Science";
    int x = 307;
    String s2 = s1 + " " + x;
    String s3 = s2.substring(10,17);
    String s4 = "is fun";
    String s5 = s2 + s4;
    
    System.out.println("s1: " + s1);
    System.out.println("s2: " + s2);
    System.out.println("s3: " + s3);
    System.out.println("s4: " + s4);
    System.out.println("s5: " + s5);
    
    //showing effect of precedence
    
    x = 3;
    int y = 5;
    String s6 = x + y + "total";
    String s7 = "total " + x + y;
    String s8 = " " + x + y + "total";
    System.out.println("s6: " + s6);
    System.out.println("s7: " + s7);
    System.out.println("s8: " + s8);
  }
}
{% endhighlight %}
