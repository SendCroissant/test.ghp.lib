---
title: 'React Guide: Step 1'
layout: default
scripts: ['//fb.me/react-0.13.3.min.js']
---

# Шаг 1: Обработка отправки данных формы

Для того, чтобы реагировать на отправку данных формы, добавим обработчик события `onSubmit` формы:

{% highlight html %}
{% include_relative snippets/form-handle.jsx %}
{% endhighlight %}

Здесь метод `_handleLogin` останавливает стандартное поведение события `submit`, собирает данные формы и пока просто выводит их на экран с помощью функции `alert`. Метод `fetchData` так же прост:

{% highlight javascript %}
{% include_relative snippets/form-fetch.js %}
{% endhighlight %}

Он возвращает объект, содержащий свойства `login` и `password` из соответствующих полей ввода.

На данный момент наша форма выглядит следующим образом:

{% include guide-preview step=1 %}

[← Previous Step]({{ site.baseurl }}/guide/steps/0)

