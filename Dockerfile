FROM mcr.microsoft.com/dotnet/sdk:8.0 AS builder
WORKDIR /app

COPY ./Inventario.Persistence ./Inventario.Persistence
COPY ./Inventario.Service ./Inventario.Service

RUN dotnet restore ./Inventario.Persistence/Persistence.csproj
RUN dotnet build ./Inventario.Persistence/Persistence.csproj
RUN dotnet restore ./Inventario.Service/Service.csproj
RUN dotnet publish ./Inventario.Service/Service.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /runtime-app
COPY --from=builder /app/out .

#RUN set ASPNETCORE_URLS="http://localhost:5001"

EXPOSE 8080

ENTRYPOINT ["dotnet", "Service.dll"]