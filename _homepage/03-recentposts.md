---
order: 10
section_title: "Recent writing"
status: live
---

{% assign recent_posts = site.data.ejnet.items | slice: 0, 3  %}
<div class="flex flex-col">
{% for post in recent_posts %}
<div class="py-4">
<a href="{{ post.url }}">
<img src="{{ post.image }}" alt="{{ post.title }}" class="w-full h-auto rounded-xl">
<div class="flex flex-col items-center">
    <h3 class="text-2xl font-bold">
        <a href="{{ post.url }}">{{ post.title }}</a>
    </h3>
    <p class="text-sm text-gray-600">{{ post.date_published | date: "%d %B %Y" }}</p>
    </div>
</a>
</div>
{% endfor %}