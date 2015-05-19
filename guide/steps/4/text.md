Шаг 4: добавим возможность запоминать пользователя.

Для этого добавим флаг "Remember me" в форму:

{% highlight html %}
{% include_relative steps/4/snippets/form.jsx %}
{% endhighlight %}

А также добавим поддержку работы с `localStorage`, если оно доступно:

{% highlight javascript %}
{% include_relative steps/4/snippets/model_storage.js %}
{% endhighlight %}

И расширим модель работой с хранилищем:

{% highlight javascript %}
{% include_relative steps/4/snippets/model_methods.js %}
{% endhighlight %}

Вот, что у нас получилось в итоге:

{% include guide-preview step=4 %}
