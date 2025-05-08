from django.urls import path
from .views import history, clear_history, pos_tag_view


urlpatterns = [
    # path('generate-text/', generate_text, name='generat-text'),
    path('generate-history/', history, name='generate-history'),
    path('clear-history/', clear_history, name='clear-history'),
    path('api/pos/', pos_tag_view, name='pos-tagging'),
]

