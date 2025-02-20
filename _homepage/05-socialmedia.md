---
order: 20
section_title: "Me, elsewhere online"
status: live
---

<div class="flex justify-center">
    <ul class="flex items-center justify-center space-x-8 text-5xl my-2">
        {% for i in site.data.weblinks %}
        <li>
            <a href="{{ i.url }}">
                <i class="bi bi-{{ i.icon }} text-blue-600 hover:text-blue-500"></i>
            </a>
        </li>
        {% endfor %}
    </ul>
</div>