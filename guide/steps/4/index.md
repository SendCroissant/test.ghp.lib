---
title: 'React Guide: Step 4'
layout: default
scripts: ['//fb.me/react-0.13.3.min.js']
---

# Шаг 4: Возможность запоминать пользователя

Для этого добавим флаг "Remember me" в форму:

{% highlight html %}
{% include_relative snippets/form.jsx %}
{% endhighlight %}

А также добавим поддержку работы с `localStorage` (если оно доступно) в начале файла `model.js`:

{% highlight javascript %}
{% include_relative snippets/model_storage.js %}
{% endhighlight %}

И расширим модель работой с хранилищем:

{% highlight javascript %}
{% include_relative snippets/model_methods.js %}
{% endhighlight %}

Вот, что у нас получилось в итоге:

{% include guide-preview step=4 %}

[← Previous Step]({{ site.baseurl }}/guide/steps/3)
