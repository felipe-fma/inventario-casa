# Use a imagem base do SDK do .NET Core
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS builder
WORKDIR /src

COPY . ./

RUN dotnet restore
RUN dotnet publish  -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=builder /app .

EXPOSE 80

RUN mkdir -p /app/db

ENTRYPOINT ["dotnet", "Service.dll"]