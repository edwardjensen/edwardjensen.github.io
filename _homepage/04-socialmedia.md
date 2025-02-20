---
order: 4
section_title: "Me, elsewhere online"
status: live
---

<div class="flex justify-center">
    <ul class="flex items-center justify-center space-x-4 text-5xl my-1">
        {% for i in site.data.weblinks %}
        <li>
            <a href="{{ i.url }}">
                <i class="bi bi-{{ i.icon }}"></i>
            </a>
        </li>
        {% endfor %}
    </ul>
</div>