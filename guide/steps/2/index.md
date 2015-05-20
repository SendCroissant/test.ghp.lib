---
title: 'React Guide: Step 2'
layout: default
scripts: ['//fb.me/react-0.13.3.min.js']
---

# Шаг 2: Модель данных формы

Для того, чтобы при отправке формы сделать нечто большее, чем отображение алерта, добавим простую модель, у которой есть методы `login` и `status` :

{% highlight javascript %}
{% include_relative snippets/model.js %}
{% endhighlight %}

Метод `status` возвращает состояние авторизации пользователя в виде его имени, если он авторизировался или `null` в противном случае.
Метод `login` проверяет правильность введенных данных и в случае неверных данных бросает исключение.
Правила валидации несложные: пароль должен быть равен имени пользователя в инвертированном виде и не менее 3 символов.
Для этой проверки была использована вспомогательная функция `revert`:

{% highlight javascript %}
{% include_relative snippets/model-revert.js %}
{% endhighlight %}

Далее передадим модель в форму:

{% highlight html %}
{% include_relative snippets/index.jsx %}
{% endhighlight %}

Теперь мы имеем доступ к модели внутри формы путем обращения к `this.props.model`.
Изменим код метода `_handleLogin`, чтоб он вместо отображения алерта обращался к модели:

{% highlight javascript %}
{% include_relative snippets/form-handle.js %}
{% endhighlight %}

Здесь можно заметить, что мы добавили новую переменную состояния формы - `error`.
Она является индикатором верности введенных данных и будет содержать текст ошибки в случае провала валидации.
Добавим метод `getInitialState`, в котором инициализируем переменную состояния `error`:

{% highlight javascript %}
{% include_relative snippets/form-state.js %}
{% endhighlight %}

Изменим метод `renderLoginForm` таким образом, чтобы показать пользователю, закончилась валидация успехом или нет:

{% highlight html %}
{% include_relative snippets/form-login.jsx %}
{% endhighlight %}

И наконец, добавим в метод `render` проверку состояния авторизации, изменим контент в зависимости от него, а также добавим подсказку, какими должны быть верные данные.

{% highlight html %}
{% include_relative snippets/form-render.jsx %}
{% endhighlight %}

Теперь наша форма выглядит так:

{% include guide-preview step=2 %}

[← Previous Step]({{ site.baseurl }}/guide/steps/1) \| [Next Step →]({{ site.baseurl }}/guide/steps/3)

