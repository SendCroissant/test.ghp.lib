---
title: 'React Guide: Step 3'
layout: default
scripts: ['//fb.me/react-0.13.3.min.js']
---

# Шаг 3: Выход из системы (Log out)

Для возможности выхода из системы изменим рендеринг формы таким образом, чтобы при наличии активного пользователя отображалось не только его имя, но и кнопка выхода:

{% highlight html %}
{% include_relative snippets/form-render.jsx %}
{% endhighlight %}

Также добавим обработчик нажатия на эту кнопку -  метод `_handleLogout`:

{% highlight javascript %}
{% include_relative snippets/form-handle.js %}
{% endhighlight %}

И последнее, что нам нужно сделать - добавить метод `logout` в модели:

{% highlight javascript %}
{% include_relative snippets/model.js %}
{% endhighlight %}

Сейчас наша форма выглядит следующим образом:

{% include guide-preview step=3 %}

[← Previous Step]({{ site.baseurl }}/guide/steps/2) \| [Next Step →]({{ site.baseurl }}/guide/steps/4)
