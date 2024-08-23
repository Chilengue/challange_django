from app.views import TodoViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('', TodoViewSet),
router.register('', ProductViewSet)
urlpatterns = router.urls
