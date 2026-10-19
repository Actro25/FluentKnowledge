# Using 10 .net sdk for building files.
FROM dhi.io/dotnet:10-sdk AS build
# Creat directory where will be building.
WORKDIR /src

# Copy .csproj file to download all dependencies.
COPY api.csproj .
RUN dotnet restore "api.csproj"

COPY . .
# Create release version of the app.
RUN dotnet publish "api.csproj" -c Release -o /app/publish

# Using asp.net core to launch the app.
FROM dhi.io/aspnetcore:10-debian-dev AS launch
# Taking all data from chached bulid block
COPY --from=build /app/publish .

# Launch the app by .dll file
ENTRYPOINT [ "dotnet", "api.dll" ]