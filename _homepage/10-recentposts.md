---
order: 10
section_title: "Recent writing"
status: live
---

{% assign recent_posts = site.data.ejnet.items | slice: 0, 3  %}
<div class="flex flex-col">
{% for post in recent_posts %}
<div class="py-3">
<a href="{{ post.url }}">
<img src="{{ post.image }}" alt="{{ post.title }}" class="w-full h-auto rounded-xl hover:blur-[1px] transition duration-300">
<div class="flex flex-col items-center">
    <h3 class="text-2xl font-bold">
        <a href="{{ post.url }}" class="hover:text-gray-700 hover:underline">{{ post.title }}</a>
    </h3>
    <p class="text-sm text-gray-600">{{ post.date_published | date: "%e %B %Y" }}</p>
    </div>
</a>
</div>
{% endfor %}

{% assign recent_posts = site.data.ejnet.items | slice: 4, 10 %}
<h3 class="text-xl italic">Also recently...</h3>
<ul class="leading-5">
{% for post in recent_posts %}
<li><a href="{{ post.url }}" class="font-bold uppercase text-blue-600 hover:text-blue-500 hover:underline">{{ post.title }}</a>
<span>{{ post.date_published | date: "%e %B %Y" }}</span>
</li>
{% endfor %}