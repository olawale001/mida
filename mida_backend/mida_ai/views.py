from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .models import AIContent
from .serializers import AIContentSerializer
from modell.ai_servises import generate_summary, nlp_analysis
# from modell.image_generator import image_generate
# from modell.tts_services import text_to_speech

class SummaryAPIView(APIView):
    def post(self, request):
        text = request.data.get('input_text')
        output = generate_summary(text)
        AIContent.objects.create(
            title = "Summary", content_type="summary", input_text=text, output_text=output
        )
        return Response({"result": output})
    
# class ImageGeneratorAPIView(APIView):
#     def post(self, request):
#         prompt = request.data.get("prompt")
#         image_path = image_generate(prompt)
#         return Response({"image_url": request.build_absolute_uri('/' + image_path)})
    

# class TextToSpeechAPIView(APIView):
#     def post(self, request):
#         text = request.data.get('text')    
#         audio_path = text_to_speech(text)
#         return Response({"audio_url": request.build_absolute_uri('/' + audio_path)})
    


class NLPPipelineAPIView(APIView):
    def post(self, request):
        text = request.data.get('text')
        result = nlp_analysis(text)
        AIContent.objects.create(
            title = "NLP", content_type = "nlp", input_text = text, output_text = str(result)

        )
        return Response(result)





@api_view(['GET'])
@permission_classes([IsAuthenticated])
def history(request):
    paginator = PageNumberPagination()
    paginator.page_size = 5
    contents = AIContent.objects.filter(user=request.user).order_by('-created_at')
    result_page = paginator.paginate_queryset(contents, request)
    serializer = AIContentSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def clear_history(request):
    AIContent.objects.filter(user=request.user).delete()
    return Response({'message': 'History cleared successfully'})