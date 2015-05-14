---
title: Test GHP lib
layout: default
is_home: true
---

### Welcome to GitHub Pages.
This automatic page generator is the easiest way to create beautiful pages for all of your projects. Author your page content here using GitHub Flavored Markdown, select a template crafted by a designer, and publish. After your page is generated, you can check out the new branch:

{% highlight bash %}
$ cd your_repo_root/repo_name
$ git fetch origin
$ git checkout gh-pages
{% endhighlight %}

HTML

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

If you're using the GitHub for Mac, simply sync your repository and you'll see the new branch.

### Designer Templates
We've crafted some handsome templates for you to use. Go ahead and continue to layouts to browse through them. You can easily go back to edit your page before publishing. After publishing your page, you can revisit the page generator and switch to another theme. Your Page content will be preserved if it remained markdown format.

### Rather Drive Stick?
If you prefer to not use the automatic generator, push a branch named `gh-pages` to your repository to create a page manually. In addition to supporting regular HTML content, GitHub Pages support Jekyll, a simple, blog aware static site generator written by our own Tom Preston-Werner. Jekyll makes it easy to create site-wide headers and footers without having to copy them across every page. It also offers intelligent blog support and other advanced templating features.

### Authors and Contributors
You can @mention a GitHub username to generate a link to their profile. The resulting `<a>` element will link to the contributor's GitHub Profile. For example: In 2007, Chris Wanstrath (@defunkt), PJ Hyett (@pjhyett), and Tom Preston-Werner (@mojombo) founded GitHub.

### Support or Contact
Having trouble with Pages? Check out the documentation at https://help.github.com/pages or contact support@github.com and we’ll help you sort it out.
