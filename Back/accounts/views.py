from rest_framework.views import APIView, Request, Response, status

from accounts.models import Account
from accounts.serializers import AccontSerializer





class AccountView(APIView):
    def get (self, request:Request)-> Response:
        accounts = Account.objects.all()

        serializer = AccontSerializer(accounts, many=True)

        return Response(serializer.data, status.HTTP_200_OK)
    
    def post (self, request:Request)-> Response:
        serializer = AccontSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data, status.HTTP_201_CREATED)


