---
title: 'React Guide: Step 0'
layout: default
scripts: ['//fb.me/react-0.13.3.min.js']
---

# Шаг 0: Шаблон

Начнем с простого шаблона формы. На самом деле она ничего не делает. Пока...

В качестве инструмента прототипирования мы будем использовать [Bootstrap](http://getbootstrap.com/).

## HTML

Для начала возьмем немного измененный пример HTML-кода из руководства по React.js ["Getting Started"](https://facebook.github.io/react/docs/getting-started.html)

{% highlight html %}
{% include_relative snippets/index.html %}
{% endhighlight %}

## Форма

Форма является единственным компонентом, продемонстрированном в данном руководстве.
Она представляет из себя обычный `React`-компонент, который сначала содержит всего 2 метода: `render` и `renderLoginForm`.

{% highlight javascript %}
{% include_relative snippets/form.jsx %}
{% endhighlight %}

Метод `renderLoginForm` рендерит форму с двумя полям ввода для имени пользователя и пароля, а также кнопку отправки данных:

{% highlight html %}
{% include_relative snippets/form-render-login-form.jsx %}
{% endhighlight %}

Метод `render` является обязательным методом любого `React`-компонента и вся его работа заключается в том, чтобы вернуть результат работы метода `renderLoginForm`, предварительно обернув его в красивую `Bootstrap`-панельку:

{% highlight html %}
{% include_relative snippets/form-render.jsx %}
{% endhighlight %}

Мы могли бы объединить эти 2 метода в один, но далее вы увидите, что так удобнее.

## Точка входа

Точкой входа в нашем JS-приложении является файл `index.jsx`, который весьма прост:

{% highlight html %}
{% include_relative snippets/index.jsx %}
{% endhighlight %}

Здесь мы указываем, что нужно отрендерить наш компонент формы в целевой узел `<div id="example"></div>`.

Сейчас наша форма выглядит следующим образом:

{% include guide-preview step=0 %}
